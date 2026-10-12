import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const MARIA = "https://www.instagram.com/maria.manukyannn/";
const BRAND = "https://www.instagram.com/cleaning_white_glove/";
const contact = (topic = "") => `${MARIA}?igsh=whiteglow${topic ? `&topic=${encodeURIComponent(topic)}` : ""}`;

const learning = [
  { n: "01", title: "Увидеть возможности", text: "Разобраться, с чего начать в клининге и как превратить идею в работающий план.", icon: "◌" },
  { n: "02", title: "Собрать систему", text: "Понять, какие решения нужны, чтобы уверенно выстроить собственное дело.", icon: "⌘" },
  { n: "03", title: "Расти осознанно", text: "Найти следующий шаг для действующего бизнеса — с учётом вашей ситуации.", icon: "↗" },
];

const formats = [
  { n: "01", name: "Групповой", label: "САМОСТОЯТЕЛЬНЫЙ ТЕМП", term: "1 месяц", text: "Войти в тему и разобраться в основах в своём ритме.", points: ["Обучение онлайн", "Без обратной связи", "Именная печать в подарок"], theme: "light" },
  { n: "02", name: "Индивидуальный", label: "БОЛЬШЕ ЛИЧНОГО ВНИМАНИЯ", term: "2 месяца", text: "Проходить обучение с дополнительной поддержкой и обратной связью.", points: ["Обучение онлайн", "Дополнительный месяц с обратной связью", "Именная печать в подарок"], theme: "featured" },
  { n: "03", name: "VIP", label: "МАКСИМУМ СОПРОВОЖДЕНИЯ", term: "2 месяца", text: "Получить опыт на объекте рядом с Марией и перейти к практике.", points: ["Онлайн или офлайн", "Практика на объекте с личным сопровождением", "Закупка пылесоса и парогенератора"], theme: "light" },
];

const faqs = [
  ["Я пока только думаю о клининговом бизнесе. Мне подойдёт?", "Да. Обучение подходит тем, кто хочет начать с нуля, и владельцам действующего клинингового бизнеса."],
  ["Чем отличаются форматы?", "Участием и поддержкой: от самостоятельного группового обучения до индивидуальной обратной связи и VIP-практики на объекте."],
  ["Сколько стоит обучение?", "Актуальную стоимость, даты и условия Мария сообщит лично в Instagram."],
];

function Arrow({ diagonal = false }) { return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>; }

function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: reduced ? 0 : 0.55, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  return <div className="site" id="top">
    <a className="skip-link" href="#main">К основному содержанию</a>
    <header className="header"><div className="header__inner">
      <a className="brand" href="#top" aria-label="WhiteGlow — на главную"><span className="brand__mark">W<span>.</span></span><span className="brand__name">WhiteGlow<small>ШКОЛА КЛИНИНГОВОГО БИЗНЕСА</small></span></a>
      <button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"} aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button>
      <nav id="navigation" className={`navigation ${menuOpen ? "is-open" : ""}`} aria-label="Главное меню"><a href="#result" onClick={close}>Чему научитесь</a><a href="#formats" onClick={close}>Форматы</a><a href="#maria" onClick={close}>О Марии</a><a href="#questions" onClick={close}>Вопросы</a></nav>
      <a className="button button--small header__cta" href={contact("форматы")}>Обсудить обучение <Arrow diagonal/></a>
    </div></header>

    <main id="main">
      <section className="hero">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow"><span className="eyebrow__dot"/> ОТ ПЕРВОГО ШАГА ДО СВОЕГО ДЕЛА</p>
            <h1>В клининге<br/>можно <em>больше.</em></h1>
            <p className="hero__lead">Покажем, как построить клининговый бизнес — от идеи до уверенной практики. Знания Марии, личный опыт и формат поддержки, который подходит именно вам.</p>
            <div className="hero__actions"><a className="button button--dark" href="#formats">Найти свой формат <Arrow/></a><a className="text-link" href={BRAND} target="_blank" rel="noreferrer">Посмотреть клининг White Glove <Arrow diagonal/></a></div>
            <div className="hero__proof"><div className="proof-avatars" aria-hidden="true"><span>W</span><span>M</span><span>+</span></div><p><strong>Реальный опыт — в основу обучения</strong><br/>Практика клининговой компании White Glove</p></div>
          </div>
          <div className="hero__visual"><img className="hero__image" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=85" alt="Светлый, ухоженный интерьер дома" fetchPriority="high"/><div className="hero__image-wash"/><div className="hero__floating"><span className="floating__spark">✳</span><span>ИЗ ОПЫТА<br/><strong>WHITE GLOVE</strong></span></div><div className="hero__caption"><span>НЕ ПРОСТО УБОРКА.</span><span>ДЕЛО, КОТОРОЕ МОЖНО ПОСТРОИТЬ.</span></div><span className="hero__vertical">WHITEGLOW · ОБУЧЕНИЕ И НАСТАВНИЧЕСТВО</span></div>
        </div>
        <div className="hero__bottom"><span>01 — 03</span><span>ПРОЛИСТАЙТЕ, ЧТОБЫ НАЙТИ СВОЙ СЛЕДУЮЩИЙ ШАГ</span><a href="#result" aria-label="Перейти к разделу Чему вы научитесь">↓</a></div>
      </section>

      <section className="result section-wrap" id="result"><Reveal className="section-heading"><p className="eyebrow"><span className="eyebrow__dot"/> ЧТО ВЫ ЗАБЕРЁТЕ С СОБОЙ</p><h2>Не просто посмотреть.<br/><em>Понять, что делать.</em></h2><p className="section-heading__lead">Путь в клининговом бизнесе у каждого свой. Обучение помогает увидеть варианты, разложить их по шагам и выбрать направление с опорой на опыт.</p></Reveal>
        <div className="learning-grid">{learning.map((item, i) => <Reveal className="learning-card" delay={i * .07} key={item.n}><div className="learning-card__top"><span>{item.n}</span><span aria-hidden="true">{item.icon}</span></div><h3>{item.title}</h3><p>{item.text}</p></Reveal>)}</div>
        <Reveal className="manifesto"><div className="manifesto__orb" aria-hidden="true">W</div><div><p className="eyebrow">ОПОРА НА ПРАКТИКУ</p><p className="manifesto__text">Делимся тем, что прошли сами.<br/><em>Помогаем построить ваш путь.</em></p></div><a href={BRAND} target="_blank" rel="noreferrer" aria-label="Открыть Instagram White Glove"><Arrow diagonal/></a></Reveal>
      </section>

      <section className="formats" id="formats"><div className="section-wrap"><Reveal className="formats__intro"><div><p className="eyebrow"><span className="eyebrow__dot"/> ТРИ ФОРМАТА. ОДНА ЦЕЛЬ.</p><h2>Выберите свою<br/><em>степень участия.</em></h2></div><p>Начните с того объёма поддержки, который подходит вам сейчас. Стоимость и ближайший набор уточняйте у Марии.</p></Reveal>
        <div className="format-grid">{formats.map((item, i) => <Reveal key={item.n} delay={i * .08}><article className={`format-card format-card--${item.theme}`}><div className="format-card__top"><span>{item.n} / WHITEGLOW</span><span className="format-card__glyph" aria-hidden="true">{["◌", "✳", "✦"][i]}</span></div><p className="format-card__label">{item.label}</p><h3>{item.name}</h3><p className="format-card__term">{item.term} <span>НАСТАВНИЧЕСТВА</span></p><p className="format-card__description">{item.text}</p><ul>{item.points.map(point => <li key={point}><span aria-hidden="true">✓</span>{point}</li>)}</ul><a className="format-card__link" href={contact(item.name)}><span>Узнать про формат</span><Arrow diagonal/></a></article></Reveal>)}</div>
        <p className="formats__note">Содержание и условия программ уточняются перед записью. Мы поможем понять, какой формат подходит вашему этапу.</p>
      </div></section>

      <section className="about" id="maria"><div className="section-wrap about__grid"><Reveal className="about__visual"><img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85" loading="lazy" alt="Детали светлого интерьера после заботливого ухода"/><div className="about__seal"><span>WG</span><small>ОПЫТ<br/>В ДЕЛЕ</small></div><span className="about__caption">@CLEANING_WHITE_GLOVE · INSTAGRAM</span></Reveal><Reveal className="about__copy"><p className="eyebrow"><span className="eyebrow__dot"/> МАРИЯ МАНУКЯН · WHITE GLOVE</p><h2>Я знаю этот путь<br/><em>изнутри.</em></h2><p>WhiteGlow вырос из практического опыта клининговой компании White Glove. Мария Манукян делится знаниями и помогает тем, кто хочет начать своё дело или вывести существующий бизнес на новый уровень.</p><p>Без универсальных обещаний: сначала ваша ситуация, потом — формат и следующие шаги.</p><a className="button button--outline" href={BRAND} target="_blank" rel="noreferrer">Профиль White Glove <Arrow diagonal/></a></Reveal></div></section>

      <section className="steps section-wrap"><Reveal><p className="eyebrow"><span className="eyebrow__dot"/> НАЧАТЬ ПРОСТО</p><h2>Сначала — <em>разговор.</em></h2></Reveal><div className="steps-grid">{[["01","Напишите Марии","Расскажите, на каком вы этапе и что хотите узнать."],["02","Сверим ожидания","Обсудим цель, содержание и доступные форматы."],["03","Выберите свой путь","Решите, какой уровень поддержки подходит вам сейчас."]].map(([n,title,text],i)=><Reveal className="step" delay={i*.07} key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></section>

      <section className="faq section-wrap" id="questions"><Reveal className="faq__intro"><p className="eyebrow"><span className="eyebrow__dot"/> ХОРОШИЕ ВОПРОСЫ</p><h2>До старта<br/><em>можно спросить.</em></h2><p>Не уверены, какой формат выбрать? Напишите — поможем сориентироваться.</p><a className="text-link" href={contact("вопросы")}>Спросить Марию <Arrow diagonal/></a></Reveal><div className="faq-list">{faqs.map(([question,answer],i)=><Reveal delay={i*.06} key={question}><details className="faq-item"><summary><span>{question}</span><span className="faq-toggle" aria-hidden="true"/></summary><p>{answer}</p></details></Reveal>)}</div></section>

      <section className="contact"><div className="contact__inner section-wrap"><Reveal><p className="eyebrow eyebrow--light"><span className="eyebrow__dot"/> ВАШ СЛЕДУЮЩИЙ ШАГ</p><h2>Большие дела<br/>начинаются <em>с ясности.</em></h2><p>Расскажите Марии, что хотите изменить. Вместе подберёте формат и обсудите, что входит в обучение.</p><a className="button button--lime" href={contact("первый шаг")}>Обсудить обучение в Instagram <Arrow diagonal/></a></Reveal><div className="contact__stamp" aria-hidden="true"><span>WHITE<br/>GLOVE</span><i>✳</i></div></div></section>
    </main>
    <footer className="footer"><div className="footer__inner section-wrap"><a className="brand brand--footer" href="#top"><span className="brand__mark">W<span>.</span></span><span className="brand__name">WhiteGlow<small>ШКОЛА КЛИНИНГОВОГО БИЗНЕСА</small></span></a><p>Мария Манукян · Наставничество в клининговом бизнесе</p><a href={MARIA} target="_blank" rel="noreferrer">Instagram Марии <Arrow diagonal/></a><a href={BRAND} target="_blank" rel="noreferrer">White Glove <Arrow diagonal/></a><span>© WhiteGlow</span></div></footer>
    <a className="mobile-cta" href={contact("обучение")}>Обсудить обучение <Arrow diagonal/></a>
  </div>;
}

export default App;

