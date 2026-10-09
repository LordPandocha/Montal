import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const INSTAGRAM = "https://www.instagram.com/maria.manukyannn/";
const appear = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

function Reveal({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} variants={appear} initial={reduce ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.14 }} transition={{ delay }}>{children}</motion.div>;
}
function Arrow({ diagonal = false }) { return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>; }
function Wordmark({ dark = false }) {
  return <a className={"wordmark" + (dark ? " wordmark--dark" : "")} href="#top" aria-label="MONTAL — наверх">MONTAL<span>.</span></a>;
}
function PhotoPlaceholder({ kind = "portrait", label = "Портрет Марии", className = "" }) {
  return (
    <div className={"photo-slot photo-slot--" + kind + " " + className} role="img" aria-label={label}>
      <div className="photo-slot__grain" /><div className="photo-slot__sun" />
      <div className="photo-slot__shape photo-slot__shape--one" /><div className="photo-slot__shape photo-slot__shape--two" /><div className="photo-slot__shape photo-slot__shape--three" />
      <div className="photo-slot__frame"><span className="photo-slot__index">M / 01</span><span className="photo-slot__monogram">ММ</span><span className="photo-slot__label">{label}</span></div>
      <span className="photo-slot__note">МЕСТО ДЛЯ ФОТО</span><span className="photo-slot__corner photo-slot__corner--tl" /><span className="photo-slot__corner photo-slot__corner--br" />
    </div>
  );
}
const questions = [
  { q: "Можно обратиться, если бизнес ещё не открыт?", a: "Да. Можно начать с идеи и разобрать, какие решения важно принять до запуска, что проверить в первую очередь и как определить следующий шаг." },
  { q: "Подойдёт ли наставничество действующей компании?", a: "Да. Начнём с текущей картины: что уже работает, где возникают сложности и какие вопросы требуют внимания. Дальнейший план зависит от вашей ситуации." },
  { q: "Что происходит на первой встрече?", a: "Обсуждаем вашу точку старта, задачу и ограничения. Затем формируем индивидуальный план дальнейших действий — без универсального рецепта для всех." },
  { q: "Нужно ли заранее готовить документы и расчёты?", a: "Специальная подготовка не обязательна. Достаточно сформулировать, что вы хотите изменить или к чему прийти. Если для разбора понадобятся конкретные данные, это можно обсудить отдельно." },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(-1);
  const reduce = useReducedMotion();
  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell" id="top">
    <div className="topline"><span>МАРИЯ МАНУКЯН</span><span>НАСТАВНИЧЕСТВО В КЛИНИНГОВОМ БИЗНЕСЕ</span><span className="topline__status"><i /> ЛИЧНАЯ РАБОТА</span></div>
    <header className="site-header">
      <Wordmark />
      <nav className={"main-nav" + (menuOpen ? " main-nav--open" : "")} aria-label="Основная навигация">
        <a href="#approach" onClick={closeMenu}>Подход</a><a href="#paths" onClick={closeMenu}>Два пути</a><a href="#process" onClick={closeMenu}>Как работаем</a><a href="#about" onClick={closeMenu}>О Марии</a>
        <a className="mobile-nav-contact" href={INSTAGRAM} target="_blank" rel="noreferrer" onClick={closeMenu}>Написать Марии <Arrow diagonal /></a>
      </nav>
      <a className="header-contact" href={INSTAGRAM} target="_blank" rel="noreferrer">Написать Марии <Arrow diagonal /></a>
      <button className={"menu-toggle" + (menuOpen ? " menu-toggle--open" : "")} type="button" aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
    </header>

    <main>
      <section className="hero section-pad" aria-labelledby="hero-title">
        <div className="hero__copy">
          <Reveal><div className="eyebrow"><span className="eyebrow__line" /> ДЛЯ СТАРТА И РАЗВИТИЯ</div></Reveal>
          <Reveal delay={0.08}><h1 id="hero-title">Клининговый бизнес — <em>от первого решения</em> до работающей системы.</h1></Reveal>
          <Reveal delay={0.15}><p className="hero__lead">Индивидуально разбираем вашу ситуацию и собираем план действий — для запуска с нуля или развития действующей компании.</p></Reveal>
          <Reveal delay={0.22}><div className="hero__actions"><a className="button button--accent" href={INSTAGRAM} target="_blank" rel="noreferrer">Обсудить мою задачу <Arrow diagonal /></a><a className="text-link" href="#paths">Выбрать свой путь <span>↓</span></a></div></Reveal>
          <div className="hero__foot"><span>01 / ИНДИВИДУАЛЬНЫЙ РАЗБОР</span><span>ОТ ВАШЕЙ ТОЧКИ СТАРТА</span></div>
        </div>
        <Reveal className="hero__visual" delay={0.12}>
          <div className="hero__visual-kicker"><span>МАРИЯ МАНУКЯН</span><span>01 — 04</span></div>
          <PhotoPlaceholder kind="portrait" label="Портрет Марии" className="hero-photo" />
          <motion.div className="floating-note floating-note--top" animate={reduce ? {} : { y: [0, -7, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}><span className="floating-note__number">01</span><span>Разобрать<br />ситуацию</span></motion.div>
          <motion.div className="floating-note floating-note--bottom" animate={reduce ? {} : { y: [0, 6, 0] }} transition={{ duration: 6.6, repeat: Infinity, ease: "easeInOut" }}><span className="floating-note__plus">+</span><span>Собрать<br />план действий</span></motion.div>
          <span className="hero__visual-caption">НЕ ГОТОВЫЙ ШАБЛОН. ВАША РЕАЛЬНАЯ СИТУАЦИЯ.</span>
        </Reveal>
        <a className="hero__scroll" href="#approach" aria-label="Прокрутить к подходу"><span /> ЛИСТАЙТЕ НИЖЕ</a>
      </section>

      <section className="manifesto section-pad" id="approach">
        <Reveal className="manifesto__label"><span className="section-number">01</span><span className="eyebrow">ПОДХОД</span></Reveal>
        <div className="manifesto__main">
          <Reveal><h2>Не универсальный рецепт.<br /><em>Понятный следующий шаг.</em></h2></Reveal>
          <Reveal delay={0.1}><div className="manifesto__bottom"><p>У каждого бизнеса своя отправная точка. Поэтому сначала важно разобраться, что происходит именно у вас, а уже после — выбирать решения и расставлять приоритеты.</p><a className="round-link" href="#process" aria-label="Как проходит работа"><Arrow /></a></div></Reveal>
        </div>
        <div className="manifesto__graphic" aria-hidden="true"><div className="graphic-ring graphic-ring--one" /><div className="graphic-ring graphic-ring--two" /><div className="graphic-ring graphic-ring--three" /><span className="graphic-cross graphic-cross--one">+</span><span className="graphic-cross graphic-cross--two">+</span></div>
      </section>

      <section className="paths section-pad" id="paths">
        <div className="section-heading"><Reveal><div className="eyebrow"><span className="eyebrow__line" /> НАЧНИТЕ СО СВОЕЙ ТОЧКИ</div><h2>Два этапа бизнеса.<br /><em>Один внимательный разбор.</em></h2></Reveal><Reveal delay={0.1}><p>Не нужно подстраивать свою задачу под чужую программу. Выбираем направление от того, где вы сейчас.</p></Reveal></div>
        <div className="path-grid">
          <Reveal className="path-card path-card--first"><div className="path-card__top"><span>01 / ЗАПУСК</span><span className="path-card__symbol">↗</span></div><PhotoPlaceholder kind="startup" label="Подготовка к запуску" className="path-card__photo" /><div className="path-card__body"><h3>Хочу открыть<br /><em>с нуля.</em></h3><p>Разложить идею на конкретные шаги: с чего начинать, какие решения принять до старта и на что обратить внимание в первую очередь.</p><a className="path-card__link" href={INSTAGRAM} target="_blank" rel="noreferrer">Обсудить запуск <Arrow diagonal /></a></div></Reveal>
          <Reveal className="path-card path-card--second" delay={0.12}><div className="path-card__top"><span>02 / РАЗВИТИЕ</span><span className="path-card__symbol">↗</span></div><PhotoPlaceholder kind="growth" label="Работа над бизнесом" className="path-card__photo" /><div className="path-card__body"><h3>Хочу развить<br /><em>компанию.</em></h3><p>Разобрать текущую модель, найти вопросы, которые требуют внимания, и определить, что менять дальше — без попытки переделать всё сразу.</p><a className="path-card__link" href={INSTAGRAM} target="_blank" rel="noreferrer">Обсудить развитие <Arrow diagonal /></a></div></Reveal>
        </div>
      </section>

      <section className="focus section-pad">
        <div className="focus__side"><Reveal><div className="eyebrow"><span className="eyebrow__line" /> ЧТО РАЗБИРАЕМ</div><h2>Смотрим на бизнес <em>целиком.</em></h2><p>В центре внимания — не отдельный совет, а связь между решениями, людьми и ежедневной работой.</p><a className="text-link text-link--light" href={INSTAGRAM} target="_blank" rel="noreferrer">Обсудить свою задачу <Arrow diagonal /></a></Reveal></div>
        <div className="focus__list">{[
          ["01", "Идея и точка старта", "Что важно определить до запуска и какие вопросы решить вначале."],
          ["02", "Клиенты и продажи", "Как устроен поиск клиентов сейчас и что стоит пересмотреть."],
          ["03", "Экономика и стоимость услуг", "Какие цифры нужны, чтобы принимать решения не наугад."],
          ["04", "Команда и организация работы", "Какие процессы стоит выстроить и где находится главный узкий участок."],
        ].map((item, index) => <Reveal key={item[0]} delay={index * 0.05}><article className="focus-row"><span className="focus-row__number">{item[0]}</span><div className="focus-row__content"><h3>{item[1]}</h3><p>{item[2]}</p></div><span className="focus-row__arrow">↗</span></article></Reveal>)}</div>
      </section>

      <section className="process section-pad" id="process">
        <div className="process__intro"><Reveal><div className="eyebrow"><span className="eyebrow__line" /> КАК МЫ РАБОТАЕМ</div><h2>От вопросов<br />к <em>плану действий.</em></h2></Reveal><Reveal delay={0.1}><p>Сначала проясняем ситуацию. Затем превращаем её в последовательность шагов, с которой можно работать.</p></Reveal></div>
        <div className="process__steps">{[
          ["01", "Знакомимся с контекстом", "Обсуждаем вашу цель, текущую ситуацию и то, что мешает двигаться дальше."],
          ["02", "Разбираем главное", "Отделяем ключевые вопросы от второстепенных и уточняем, что требует решения в первую очередь."],
          ["03", "Собираем личный план", "Формируем последовательность действий с учётом вашей точки старта и конкретной задачи."],
          ["04", "Определяем следующий шаг", "Вы понимаете, на чём сосредоточиться дальше и какие вопросы ещё нужно прояснить."],
        ].map((step, index) => <Reveal key={step[0]} delay={index * 0.07}><article className="process-step"><div className="process-step__number">{step[0]}<span> / 04</span></div><div className="process-step__body"><h3>{step[1]}</h3><p>{step[2]}</p></div><span className="process-step__mark">+</span></article></Reveal>)}</div>
      </section>

      <section className="about section-pad" id="about">
        <Reveal className="about__visual"><PhotoPlaceholder kind="about" label="Мария за работой" className="about-photo" /><div className="about__visual-caption"><span>МАРИЯ МАНУКЯН</span><span>НАСТАВНИЧЕСТВО</span></div></Reveal>
        <div className="about__copy"><Reveal><div className="eyebrow"><span className="eyebrow__line" /> О МАРИИ</div><h2>Практический взгляд.<br /><em>Внимание к деталям.</em></h2></Reveal><Reveal delay={0.1}><p className="about__lead">Мой подход опирается на собственный опыт в клининговом бизнесе и на разбор реальной ситуации — без готовых ответов на все случаи.</p><p>На встрече мы отталкиваемся от вашего этапа, ресурсов и цели. Задача — не выдать красивую схему, а помочь увидеть ситуацию яснее и определить, что делать дальше.</p><a className="button button--outline" href={INSTAGRAM} target="_blank" rel="noreferrer">Познакомиться и обсудить задачу <Arrow diagonal /></a></Reveal><div className="about__signature">Мария Манукян<span>МАРИЯ МАНУКЯН / MONTAL</span></div></div>
      </section>

      <section className="questions section-pad" id="questions">
        <div className="questions__intro"><Reveal><div className="eyebrow"><span className="eyebrow__line" /> ПЕРЕД ОБРАЩЕНИЕМ</div><h2>Что важно<br /><em>знать заранее.</em></h2></Reveal><Reveal delay={0.1}><p>Если остался вопрос, который не нашли на странице, его можно задать Марии напрямую.</p><a className="text-link" href={INSTAGRAM} target="_blank" rel="noreferrer">Спросить Марию <Arrow diagonal /></a></Reveal></div>
        <div className="accordion">{questions.map((item, index) => { const isOpen = openQuestion === index; return <div className={"accordion-item" + (isOpen ? " accordion-item--open" : "")} key={item.q}><button type="button" className="accordion-trigger" aria-expanded={isOpen} onClick={() => setOpenQuestion(isOpen ? -1 : index)}><span className="accordion-trigger__number">0{index + 1}</span><span className="accordion-trigger__question">{item.q}</span><span className="accordion-trigger__icon">{isOpen ? "−" : "+"}</span></button><motion.div className="accordion-panel" initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: reduce ? 0 : 0.3, ease: "easeInOut" }}><div className="accordion-panel__inner">{item.a}</div></motion.div></div>; })}</div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact__top"><Reveal><div className="eyebrow"><span className="eyebrow__line" /> СЛЕДУЮЩИЙ ШАГ</div><h2>Начнём с вашей<br /><em>ситуации.</em></h2></Reveal><Reveal delay={0.1}><p>Напишите, на каком этапе вы сейчас и что хотите изменить. Обсудим задачу и поймём, с чего разумнее начать.</p><a className="button button--accent button--large" href={INSTAGRAM} target="_blank" rel="noreferrer">Написать Марии в Instagram <Arrow diagonal /></a></Reveal></div>
        <div className="contact__bottom"><span>ИНДИВИДУАЛЬНОЕ НАСТАВНИЧЕСТВО</span><span>ДЛЯ ЗАПУСКА И РАЗВИТИЯ КЛИНИНГОВОГО БИЗНЕСА</span><a href="#top">НАВЕРХ ↑</a></div>
      </section>
    </main>
    <footer className="site-footer"><Wordmark dark /><span>МАРИЯ МАНУКЯН · НАСТАВНИЧЕСТВО</span><a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram <Arrow diagonal /></a><span>© MONTAL 2026</span></footer>
  </div>;
}
export default App;