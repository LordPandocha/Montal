$ErrorActionPreference = "Stop"

if (-not (Get-Command claude -ErrorAction SilentlyContinue)) {
  Write-Error "Claude Code CLI не найден. Установи Claude Code и повтори запуск в PowerShell."
  exit 1
}

$plugins = @(
  @{ Repository = "affaan-m/ECC"; Plugin = "ecc@ecc"; Label = "ECC" },
  @{ Repository = "DietrichGebert/ponytail"; Plugin = "ponytail@ponytail"; Label = "Ponytail" },
  @{ Repository = "nextlevelbuilder/ui-ux-pro-max-skill"; Plugin = "ui-ux-pro-max@ui-ux-pro-max-skill"; Label = "UI UX Pro Max" },
  @{ Repository = "21st-dev/magic-mcp"; Plugin = "21st@21st-dev"; Label = "21st / Magic MCP" },
  @{ Repository = "JuliusBrussee/caveman"; Plugin = "caveman@caveman"; Label = "Caveman" }
)

$failed = @()

foreach ($item in $plugins) {
  Write-Host "`n=== $($item.Label) ===" -ForegroundColor Cyan

  & claude plugin marketplace add $item.Repository
  if ($LASTEXITCODE -ne 0) {
    Write-Host "Marketplace add returned a non-zero exit code; it may already be registered. Trying plugin install." -ForegroundColor Yellow
  }

  & claude plugin install $item.Plugin
  if ($LASTEXITCODE -ne 0) {
    $failed += "$($item.Label): claude plugin install $($item.Plugin)"
    Write-Warning "Не удалось установить $($item.Label). Продолжу остальные установки."
  }
}

Write-Host "`n=== Codebase Memory MCP ===" -ForegroundColor Cyan
$installerPath = Join-Path $PWD "install-codebase-memory.ps1"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/DeusData/codebase-memory-mcp/main/install.ps1" -OutFile $installerPath

Write-Host "Открываю официальный установщик для проверки перед запуском: $installerPath" -ForegroundColor Yellow
Start-Process -FilePath "notepad.exe" -ArgumentList "`"$installerPath`"" -Wait
$approval = Read-Host "Если проверил файл и хочешь запустить его, введи RUN (иначе Enter для пропуска)"
if ($approval -ceq "RUN") {
  Unblock-File $installerPath
  & powershell.exe -NoProfile -ExecutionPolicy Bypass -File $installerPath
  if ($LASTEXITCODE -ne 0) {
    $failed += "Codebase Memory MCP: install.ps1 завершился с ошибкой"
  }
} else {
  Write-Host "Codebase Memory MCP пропущен; скачанный файл оставлен для последующей проверки." -ForegroundColor Yellow
}

Write-Host "`n=== Завершение ===" -ForegroundColor Cyan
Write-Host "Перезапусти Claude Code после установки."
Write-Host "Для облачных функций 21st/Magic MCP нужен собственный API-ключ: https://21st.dev/mcp"
if ($failed.Count -gt 0) {
  Write-Host "Не завершены некоторые шаги:" -ForegroundColor Yellow
  $failed | ForEach-Object { Write-Host " - $_" -ForegroundColor Yellow }
} else {
  Write-Host "Команды установки плагинов завершились без зарегистрированных ошибок."
}
