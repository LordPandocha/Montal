import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const MARIA = "https://www.instagram.com/maria.manukyannn/";
const BRAND = "https://www.instagram.com/cleaning_white_glove/";
const DM = "https://ig.me/m/maria.manukyannn";

const routes = [
  { n: "01", title: "Начать с нуля", text: "Понять, как устроен клининг как бизнес, и собрать основу без прыжков в неизвестность.", tag: "ПЕРВЫЙ ШАГ" },
  { n: "02", title: "Выстроить систему", text: "Разложить по полкам процессы, задачи и решения, которые держат компанию каждый день.", tag: "СИСТЕМА" },
  { n: "03", title: "Усилить практику", text: "Побывать на реальном объекте с Марией и увидеть работу команды вблизи.", tag: "В ПОЛЕ" },
];

const programs = [
  { n: "01", title: "Групповой", duration: "1 месяц", intro: "Войти в тему в комфортном темпе.", bullets: ["Обучение онлайн", "Самостоятельный темп, без обратной связи", "Именная печать в подарок"], badge: "САМОСТОЯТЕЛЬНЫЙ СТАРТ" },
  { n: "02", title: "Индивидуальный", duration: "2 месяца", intro: "Разбирать свой путь с личной поддержкой.", bullets: ["Обучение онлайн", "Дополнительный месяц обратной связи", "Именная печать в подарок"], badge: "БОЛЬШЕ ВНИМАНИЯ", featured: true },
  { n: "03", title: "VIP", duration: "2 месяца", intro: "Соединить знания с настоящей практикой.", bullets: ["Онлайн или офлайн", "Практика на объекте рядом с Марией", "Подбор пылесоса и парогенератора"], badge: "ОТ ЗНАНИЙ К ДЕЛУ" },
];

const questions = [
  ["Можно прийти без опыта?", "Да. Обучение подходит тем, кто только присматривается к клинингу, и тем, кто уже развивает свою компанию."],
  ["В чём разница между программами?", "В количестве личного сопровождения: групповой формат — самостоятельный, индивидуальный включает обратную связь, а VIP добавляет практику на объекте."],
  ["Где узнать стоимость и даты?", "Напишите Марии в Instagram — она расскажет о содержании, ближайшем наборе и актуальных условиях."],
];

function Arrow({ up = false }) { return <span aria-hidden="true" className="arrow">{up ? "↗" : "→"}</span>; }

function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: reduced ? 0 : .5, delay, ease: [0.22, 1, .36, 1] }}>{children}</motion.div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  return <div className="site" id="top">
    <a className="skip-link" href="#main">К основному содержанию</a>
    <header className="header"><div className="header__inner">
      <a className="brand" href="#top" aria-label="WhiteGlow — главная"><span className="brand__glyph">W<span>✳</span></span><span className="brand__word">whiteglow<small>НАСТАВНИЧЕСТВО В КЛИНИНГЕ</small></span></a>
      <button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"} aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button>
      <nav id="navigation" className={`navigation ${menuOpen ? "is-open" : ""}`} aria-label="Главное меню"><a href="#what" onClick={close}>Чему научим</a><a href="#programs" onClick={close}>Программы</a><a href="#maria" onClick={close}>О наставнике</a><a href="#faq" onClick={close}>Вопросы</a></nav>
      <a className="header__link" href={DM}>Поговорить с Марией <Arrow up/></a>
    </div></header>

    <main id="main">
      <section className="hero"><div className="hero__inner">
        <div className="hero__eyebrow"><span/> WHITE GLOVE · ПРАКТИКА И НАСТАВНИЧЕСТВО <span>ЕКАТЕРИНБУРГ / ONLINE</span></div>
        <div className="hero__layout"><div className="hero__copy"><h1>Чистота<br/>— это <em>бизнес.</em></h1><p className="hero__lead">Научитесь строить дело в клининге на реальном опыте White Glove. От первых решений до работы на настоящем объекте.</p><div className="hero__actions"><a className="button button--cream" href="#programs">Выбрать программу <Arrow/></a><a className="hero__secondary" href={BRAND} target="_blank" rel="noreferrer">Смотреть работу White Glove <Arrow up/></a></div><div className="hero__note"><span className="hero__note-mark">✳</span><p><strong>Мария Манукян</strong><br/>Основатель White Glove и ваш наставник</p></div></div>
          <div className="hero__photo"><img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1500&q=88" alt="Специалист по уборке тщательно очищает стеклянную поверхность" fetchPriority="high"/><div className="hero__photo-shade"/><div className="hero__photo-top"><span>УМЕНИЕ · СИСТЕМА · РОСТ</span><span>01 / 03</span></div><div className="hero__photo-bottom"><span>ЧИСТАЯ РАБОТА</span><span>НАЧИНАЕТСЯ С ЗНАНИЯ</span></div><div className="hero__roundel"><span>ОБУЧЕНИЕ<br/>ИЗНУТРИ</span><b>✳</b></div></div>
        </div>
        <a className="hero__scroll" href="#what"><span>ЛИСТАЙТЕ К ВОЗМОЖНОСТЯМ</span><i>↓</i></a>
      </div></section>

      <section className="what" id="what"><div className="what__intro"><Reveal><p className="eyebrow"><span/> НЕ ТЕОРИЯ В ВАКУУМЕ</p><h2>Вот что можно<br/><em>уметь после.</em></h2></Reveal><Reveal className="what__aside"><span className="what__asterisk">✳</span><p>Показываем бизнес<br/>со всех рабочих сторон.</p><span>ПРОВЕДЁМ ОТ ИДЕИ К ПРАКТИКЕ</span></Reveal></div>
        <div className="route-list">{routes.map((route, i) => <Reveal className={`route route--${i + 1}`} delay={i * .06} key={route.n}><span className="route__number">{route.n}</span><div className="route__main"><span className="route__tag">{route.tag}</span><h3>{route.title}</h3></div><p>{route.text}</p><a href="#programs" aria-label={`Узнать о программе: ${route.title}`}><Arrow up/></a></Reveal>)}</div>
      </section>

      <section className="field"><div className="field__picture"><img src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1300&q=85" alt="Профессиональное оборудование для ухода за домом" loading="lazy"/><span>ОПЫТ WHITE GLOVE / НАСТОЯЩАЯ РАБОТА</span></div><Reveal className="field__copy"><p className="eyebrow eyebrow--light"><span/> УЧИМСЯ НА РЕАЛЬНОМ ОПЫТЕ</p><h2>Изнутри.<br/><em>По-настоящему.</em></h2><p>WhiteGlow — наставничество на основе опыта действующей клининговой компании White Glove. Здесь можно увидеть, как знания превращаются в действия: от устройства работы до практики на объекте.</p><a className="field__link" href={BRAND} target="_blank" rel="noreferrer">Заглянуть в White Glove <Arrow up/></a><span className="field__index">ПОДХОД<br/>WHITEGLOW <b>02—04</b></span></Reveal></section>

      <section className="programs" id="programs"><div className="programs__inner"><Reveal className="programs__head"><div><p className="eyebrow"><span/> НАШЕ НАСТАВНИЧЕСТВО</p><h2>Ваш темп.<br/><em>Ваш масштаб.</em></h2></div><p>Три уровня поддержки, одна основа — опыт команды. Подберите подходящий формат и обсудите детали лично.</p></Reveal><div className="programs__grid">{programs.map((program, i) => <Reveal delay={i * .07} key={program.n}><article className={`program ${program.featured ? "program--feature" : ""}`}><div className="program__top"><span>{program.n} <i> / </i> WHITEGLOW</span><span>{program.badge}</span></div><p className="program__duration">{program.duration} <span>ПРОГРАММА</span></p><h3>{program.title}</h3><p className="program__intro">{program.intro}</p><ul>{program.bullets.map(bullet => <li key={bullet}><span>✳</span>{bullet}</li>)}</ul><a href={DM} className="program__link"><span>Спросить об этом формате</span><Arrow up/></a></article></Reveal>)}</div><p className="programs__fine">Стоимость, даты, содержание и доступность практики уточняйте у Марии в Instagram.</p></div></section>

      <section className="mentor" id="maria"><div className="mentor__picture"><img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85" alt="Светлая кухня после профессионального ухода" loading="lazy"/><span className="mentor__seal">WG <i>✳</i></span><span className="mentor__credit">ПРАКТИКА КОМАНДЫ WHITE GLOVE</span></div><Reveal className="mentor__copy"><p className="eyebrow"><span/> НАСТАВНИК · ПРАКТИК</p><h2>Мария<br/><em>Манукян.</em></h2><p>Основатель клининговой компании White Glove. На обучении Мария делится практическим опытом и помогает выбрать следующий шаг под вашу цель.</p><p>Без обещаний лёгкого успеха. С честным разговором о работе, знаниях и вашем пути.</p><a className="button button--outline" href={MARIA} target="_blank" rel="noreferrer">Познакомиться в Instagram <Arrow up/></a></Reveal></section>

      <section className="faq" id="faq"><div className="faq__head"><p className="eyebrow"><span/> ПЕРЕД ТЕМ КАК НАЧАТЬ</p><h2>Спрашивать<br/><em>это нормально.</em></h2><p>Детали программы зависят от формата и ближайшего набора.</p><a href={DM}>Задать свой вопрос <Arrow up/></a></div><div className="faq__list">{questions.map(([question, answer], i) => <Reveal key={question} delay={i * .05}><details><summary><span>{question}</span><i aria-hidden="true">+</i></summary><p>{answer}</p></details></Reveal>)}</div></section>

      <section className="last"><div className="last__inner"><Reveal><p className="eyebrow eyebrow--light"><span/> НАЧНЁМ С ВАШЕЙ ЦЕЛИ</p><h2>Один разговор.<br/><em>Много ясности.</em></h2><p>Расскажите, где вы сейчас и чего хотите от клинингового дела. Мария поможет обсудить подходящий путь.</p><a className="button button--cream" href={DM}>Написать Марии <Arrow up/></a></Reveal><div className="last__seal" aria-hidden="true"><span>WHITE<br/>GLOVE</span><i>✳</i></div></div></section>
    </main>

    <footer className="footer"><a className="brand brand--footer" href="#top"><span className="brand__glyph">W<span>✳</span></span><span className="brand__word">whiteglow<small>НАСТАВНИЧЕСТВО В КЛИНИНГЕ</small></span></a><p>Практика команды White Glove</p><a href={MARIA} target="_blank" rel="noreferrer">Instagram Марии <Arrow up/></a><a href={BRAND} target="_blank" rel="noreferrer">Instagram White Glove <Arrow up/></a><span>© WhiteGlow</span></footer>
    <a className="mobile-cta" href={DM}>Написать Марии <Arrow up/></a>
  </div>;
}

export default App;

