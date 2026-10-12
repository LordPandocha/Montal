# WhiteGlow

Landing page для наставничества Марии Манукян в клининговом бизнесе. Рассказывает о ценности обучения, трёх форматах участия и ведёт к прямому диалогу в Instagram.

## Локальный запуск

Требуется Node.js 20 или новее.

```bash
npm install
npm run dev
```

Для production-сборки: `npm run build`. Сборка появится в `dist`.

## Публикация

Push в `main` запускает GitHub Actions, собирает сайт и синхронизирует готовую версию для GitHub Pages.

## Структура

- `src/App.jsx` — блоки страницы, мобильное меню, ссылки связи и FAQ.
- `src/index.css` — оформление, адаптивная сетка, состояния фокуса и анимации.
- `src/index.template.html` — заголовки и метаданные страницы.
- `src/main.jsx` — вход приложения.
- `vite.config.js` — сборка и базовый путь GitHub Pages.
- `.github/workflows/deploy-pages.yml` — сборка и публикация.

