import { useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

const MARIA = "https://www.instagram.com/maria.manukyannn/";
const BRAND = "https://www.instagram.com/cleaning_white_glove/";
const DM = "https://ig.me/m/maria.manukyannn";

const photos = [
  { src: "/WhiteGlow/instagram/kitchen.jpg", label: "Чистая кухня — кадр из White Glove", kind: "ДОМАШНИЕ ПРОСТРАНСТВА", shape: "photo--wide", href: "https://www.instagram.com/cleaning_white_glove/reel/DUXnpP0joV1/" },
  { src: "/WhiteGlow/instagram/commercial.jpg", label: "Работа на коммерческом объекте White Glove", kind: "КОММЕРЧЕСКИЕ ОБЪЕКТЫ", shape: "photo--tall", href: "https://www.instagram.com/maria.manukyannn/reel/DLD2cqAoR26/" },
  { src: "/WhiteGlow/instagram/interior.jpg", label: "Интерьер с мягкой зелёной мебелью из профиля White Glove", kind: "ПРОСТРАНСТВО ПОСЛЕ РАБОТЫ", shape: "", href: BRAND },
  { src: "/WhiteGlow/instagram/succulent.jpg", label: "Зелёная деталь интерьера из профиля White Glove", kind: "ВНИМАНИЕ К ДЕТАЛЯМ", shape: "", href: BRAND },
  { src: "/WhiteGlow/instagram/linen.jpg", label: "Льняные ткани и цветы из публикации White Glove", kind: "БЕРЕЖНЫЙ УХОД", shape: "photo--wide", href: BRAND },
  { src: "/WhiteGlow/instagram/leaf.jpg", label: "Зелёные листья из профиля White Glove", kind: "АККУРАТНОСТЬ В МЕЛОЧАХ", shape: "", href: BRAND },
];

const paths = [
  { n: "01", title: "С чистого листа", text: "Разобраться в клининге, выбрать направление и увидеть первые понятные шаги." },
  { n: "02", title: "Собрать систему", text: "Понять, как устроены клиенты, услуги, команда и работа на объекте." },
  { n: "03", title: "Выйти в практику", text: "Увидеть настоящую работу компании и обсудить свои решения с Марией." },
];

const courses = [
  { id: "01", name: "Групповой", length: "1 месяц", tagline: "Разобраться в основе", text: "Онлайн-обучение в самостоятельном темпе. Без обратной связи; именная печать — в подарок." },
  { id: "02", name: "Индивидуальный", length: "2 месяца", tagline: "Рядом на каждом шаге", text: "Обучение онлайн и дополнительный месяц личной обратной связи. Именная печать — в подарок.", featured: true },
  { id: "03", name: "VIP", length: "2 месяца", tagline: "Знания в настоящем деле", text: "Онлайн или офлайн, практика на объекте с Марией и помощь в подборе оборудования." },
];

const faq = [
  ["Нужен ли опыт в клининге?", "Нет. Можно прийти с нуля: программа поможет понять устройство клининга и наметить свой следующий шаг."],
  ["Чем отличаются форматы?", "Темпом и личным сопровождением: от самостоятельного онлайн-обучения до практики на объекте с Марией."],
  ["Сколько стоит обучение?", "Актуальную стоимость, даты ближайшего старта и подробности форматов уточняйте у Марии напрямую."],
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 34, filter: "blur(8px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: reduced ? 0 : 0.82, delay, ease: [0.18, 0.82, 0.22, 1] }}>{children}</motion.div>;
}

function Star({ className = "" }) { return <span aria-hidden="true" className={`star ${className}`}>✳</span>; }
function Arrow({ up = false }) { return <span className="arrow" aria-hidden="true">{up ? "↗" : "↗"}</span>; }

function HeroArt() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const rawY = useTransform(scrollYProgress, [0, 0.27], [0, 100]);
  const y = useSpring(rawY, { stiffness: 65, damping: 20, mass: 0.6 });
  return <div className="hero-art">
    <motion.div className="hero-art__main" style={reduced ? {} : { y }}>
      <img src="/WhiteGlow/instagram/plant.jpg" alt="Растение в интерьере из официальной публикации White Glove" fetchPriority="high" />
      <div className="hero-art__stamp"><span>ОПЫТ<br/>КОМАНДЫ</span><Star/></div>
    </motion.div>
    <motion.a className="hero-art__tile hero-art__tile--one" href={BRAND} target="_blank" rel="noreferrer" initial={reduced ? false : { opacity: 0, y: 40, rotate: 5 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ delay: .65, duration: .8, ease: [.2,.8,.2,1] }}><img src="/WhiteGlow/instagram/linen.jpg" alt="Ткань и детали в фирменных оттенках из Instagram White Glove" /></motion.a>
    <motion.a className="hero-art__tile hero-art__tile--two" href="https://www.instagram.com/cleaning_white_glove/reel/DUXnpP0joV1/" target="_blank" rel="noreferrer" initial={reduced ? false : { opacity: 0, x: 30, rotate: -8 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ delay: .88, duration: .8, ease: [.2,.8,.2,1] }}><img src="/WhiteGlow/instagram/interior.jpg" alt="Интерьер и мягкие фактуры с Instagram White Glove" /></motion.a>
    <motion.div className="hero-art__note" initial={reduced ? false : { opacity: 0, scale: .7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1, type: "spring", stiffness: 150, damping: 14 }}><Star/><span>Не картинки.<br/>Настоящая работа.</span></motion.div>
    <span className="hero-art__caption">ЧИТА · WHITE GLOVE · 2026</span>
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  return <div className="site" id="top">
    <a className="skip-link" href="#main">К основному содержанию</a>
    <header className="header"><div className="header__inner">
      <a className="brand" href="#top" aria-label="WhiteGlow — главная"><span className="brand__glyph">w</span><span className="brand__word">whiteglow<span>НАСТАВНИЧЕСТВО В КЛИНИНГЕ</span></span></a>
      <button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"} aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button>
      <nav id="navigation" className={`navigation ${menuOpen ? "is-open" : ""}`} aria-label="Главное меню"><a href="#possibilities" onClick={close}>Возможности</a><a href="#work" onClick={close}>Работы</a><a href="#programs" onClick={close}>Обучение</a><a href="#maria" onClick={close}>Мария</a></nav>
      <a className="header__cta" href={DM}>Написать Марии <Arrow/></a>
    </div></header>

    <main id="main">
      <section className="hero"><div className="hero__inner">
        <div className="hero__meta"><span><i/> WHITE GLOVE · КЛИНИНГ · НАСТАВНИЧЕСТВО</span><span>ОПЫТ В ДЕЛЕ&nbsp; ↗&nbsp; ЧИТА / ONLINE</span></div>
        <div className="hero__grid">
          <div className="hero__copy"><motion.p className="hero__kicker" initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:.15}}>ТВОЯ ТОЧКА ОТСЧЁТА&nbsp; № 01</motion.p>
            <h1><motion.span initial={{y:"110%"}} animate={{y:0}} transition={{duration:.85,ease:[.2,.8,.2,1]}}>Чистота.</motion.span><motion.span className="hero__hollow" initial={{y:"115%"}} animate={{y:0}} transition={{duration:.9,delay:.13,ease:[.2,.8,.2,1]}}>Характер.</motion.span><motion.span className="hero__serif" initial={{y:"125%",rotate:3}} animate={{y:0,rotate:0}} transition={{duration:.95,delay:.26,ease:[.2,.8,.2,1]}}>Своё дело.</motion.span></h1>
            <motion.p className="hero__lead" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.62,duration:.75}}>Посмотри, как работает клининговая команда изнутри, и преврати свой интерес в уверенный план.</motion.p>
            <motion.div className="hero__actions" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.78,duration:.7}}><motion.a className="button button--dark" href="#possibilities" whileHover={{scale:1.045,y:-3}} whileTap={{scale:.98}}>Увидеть возможности <Arrow/></motion.a><a className="hero__secondary" href={BRAND} target="_blank" rel="noreferrer">Смотреть Instagram <Arrow/></a></motion.div>
            <div className="hero__signature"><span className="hero__avatar">М</span><span><strong>Мария Манукян</strong><small>Основатель White Glove · ваш наставник</small></span><Star className="hero__signature-star"/></div>
          </div>
          <HeroArt/>
        </div>
        <div className="hero__bottom"><span>ОТ ПЕРВОГО ШАГА — К НАСТОЯЩЕЙ ПРАКТИКЕ</span><a href="#possibilities">ЛИСТАЙ ВНИЗ <span>↓</span></a><span>01 — 05</span></div>
      </div></section>

      <div className="marquee" aria-label="Обучение клинингу, практика и развитие своего дела"><div className="marquee__track" aria-hidden="true">{Array.from({length:4},(_,i)=><span key={i}>КЛИНИНГ КАК ДЕЛО <Star/> ОПЫТ В РАБОТЕ <Star/> СИСТЕМА И РОСТ <Star/></span>)}</div></div>

      <section className="possibilities section-pad" id="possibilities"><Reveal className="section-heading"><div><p className="eyebrow"><Star/> ЧЕМУ МОЖНО НАУЧИТЬСЯ</p><h2>Уверенность<br/>начинается <em>с дела.</em></h2></div><p className="section-heading__aside">Показываем не абстрактную теорию, а настоящую работу клининговой компании.</p></Reveal>
        <div className="path-grid">{paths.map((item,i)=><Reveal key={item.n} delay={i*.1}><motion.article className={`path-card path-card--${i+1}`} whileHover={{y:-9,rotate:i===1?1:-1}} transition={{type:"spring",stiffness:230,damping:17}}><div className="path-card__top"><span>{item.n} / ТВОЙ МАРШРУТ</span><Star/></div><h3>{item.title}</h3><p>{item.text}</p><a href="#programs" aria-label={`Посмотреть обучение: ${item.title}`}>НАЙТИ СВОЙ ФОРМАТ <Arrow/></a><span className="path-card__orb" aria-hidden="true"/></motion.article></Reveal>)}</div>
      </section>

      <section className="work section-pad" id="work"><Reveal className="work__heading"><div><p className="eyebrow"><Star/> РАБОТА ИЗНУТРИ, НЕ ИЗ СЛОВ</p><h2>Вот как это<br/><em>выглядит вживую.</em></h2></div><a href={BRAND} target="_blank" rel="noreferrer">ЕЩЁ БОЛЬШЕ В INSTAGRAM <Arrow/></a></Reveal>
        <div className="work__grid">{photos.map((photo,i)=><Reveal className={`work__item ${photo.shape}`} key={photo.src} delay={i*.045}><motion.a className="work__photo" href={photo.href} target="_blank" rel="noreferrer" whileHover={{scale:1.025}} transition={{duration:.35,ease:"easeOut"}}><img src={photo.src} alt={photo.label} loading="lazy"/><span className="work__overlay"><span>{photo.kind}</span><b><Arrow/></b></span></motion.a></Reveal>)}</div>
        <div className="work__foot"><span>ЛИСТАЙ — ВДОХНОВЛЯЙСЯ — ПРИМЕНЯЙ</span><span>ФОТО ИЗ INSTAGRAM WHITE GLOVE <Star/></span></div>
      </section>

      <section className="manifesto"><div className="manifesto__inner"><Reveal className="manifesto__text"><p className="eyebrow"><Star/> СИЛЬНОЕ ДЕЛО — НАСТОЯЩИЕ РУКИ</p><h2>За каждым чистым<br/>пространством —<br/><em>люди и система.</em></h2><p>Клиенты, задачи, оборудование, команда и забота о деталях — Мария показывает, как всё это работает вместе, на примере White Glove.</p><a href={DM} className="manifesto__link">Обсудить свой путь <Arrow/></a></Reveal><motion.div className="manifesto__visual" initial={{opacity:0,scale:.92,rotate:2}} whileInView={{opacity:1,scale:1,rotate:0}} viewport={{once:true,amount:.25}} transition={{duration:.8,ease:[.2,.8,.2,1]}}><img src="/WhiteGlow/instagram/commercial.jpg" alt="Реальный коммерческий объект из Instagram White Glove" loading="lazy"/><div className="manifesto__label"><span>ОТ ПЕРВОГО ЗНАКОМСТВА</span><Star/><span>ДО ПРАКТИКИ НА ОБЪЕКТЕ</span></div></motion.div></div></section>

      <section className="programs section-pad" id="programs"><Reveal className="programs__head"><div><p className="eyebrow"><Star/> МАРШРУТЫ НАСТАВНИЧЕСТВА</p><h2>Выбирай свой<br/><em>темп.</em></h2></div><p>Три формата — одна цель: помочь увидеть своё следующее действие.</p></Reveal><div className="programs__grid">{courses.map((c,i)=><Reveal delay={i*.09} key={c.id}><motion.article className={`program ${c.featured?"program--featured":""}`} whileHover={{y:-8}} transition={{type:"spring",stiffness:210,damping:18}}><div className="program__top"><span>{c.id} / WHITEGLOW</span><span>{c.length}</span></div><p className="program__tag">{c.tagline}</p><h3>{c.name}<span>.</span></h3><p className="program__description">{c.text}</p><a href={DM} className="program__link"><span>Уточнить детали</span><Arrow/></a></motion.article></Reveal>)}</div><p className="programs__fine">Актуальные условия, расписание и подробное наполнение уточняйте у Марии в Instagram.</p></section>

      <section className="mentor section-pad" id="maria"><div className="mentor__portrait"><div className="mentor__frame"><img src="/WhiteGlow/instagram/maria.jpg" alt="Мария Манукян — фото из её Instagram" loading="lazy"/></div><motion.span className="mentor__sticker" animate={{rotate:360}} transition={{duration:28,repeat:Infinity,ease:"linear"}}><span>ОПЫТ · ЧЕСТНО · ПО ДЕЛУ · </span><i>✳</i></motion.span><span className="mentor__credit">МАРИЯ МАНУКЯН · INSTAGRAM</span></div><Reveal className="mentor__copy"><p className="eyebrow"><Star/> НАСТАВНИК И ОСНОВАТЕЛЬ WHITE GLOVE</p><h2>Мария.<br/><em>Без лишних слов.</em></h2><p>Мария создала клининговую компанию и знает, сколько живой работы стоит за красивым результатом. С ней ты разберёшься в процессе и выберешь направление, которое подходит именно тебе.</p><p>Вместо обещаний лёгкого успеха — конкретный опыт, честные ответы и внимание к твоей цели.</p><a className="button button--outline" href={MARIA} target="_blank" rel="noreferrer">Познакомиться в Instagram <Arrow/></a></Reveal></section>

      <section className="faq section-pad" id="faq"><Reveal className="faq__head"><p className="eyebrow"><Star/> МОЖНО ПРОСТО СПРОСИТЬ</p><h2>Всё обсудим<br/><em>по-человечески.</em></h2><p>Никаких обязательств — начнём с твоих вопросов.</p><a href={DM}>Написать Марии <Arrow/></a></Reveal><div className="faq__list">{faq.map(([q,a],i)=><Reveal key={q} delay={i*.06}><details><summary><span>{q}</span><i>+</i></summary><p>{a}</p></details></Reveal>)}</div></section>

      <section className="last"><div className="last__inner"><Reveal><p className="eyebrow eyebrow--light"><Star/> ПЕРВЫЙ ШАГ — ЭТО РАЗГОВОР</p><h2>Хочешь увидеть,<br/><em>что по силам тебе?</em></h2><p>Напиши Марии: спокойно обсудите, где ты сейчас и к чему хочешь прийти.</p><motion.a className="button button--cream" href={DM} whileHover={{scale:1.035,y:-3}} whileTap={{scale:.98}}>Обсудить свой путь <Arrow/></motion.a></Reveal><div className="last__orb" aria-hidden="true"><Star/></div></div></section>
    </main>

    <footer className="footer"><a className="brand" href="#top"><span className="brand__glyph">w</span><span className="brand__word">whiteglow<span>НАСТАВНИЧЕСТВО В КЛИНИНГЕ</span></span></a><p>Опыт White Glove · Чита / online</p><a href={MARIA} target="_blank" rel="noreferrer">Instagram Марии <Arrow/></a><a href={BRAND} target="_blank" rel="noreferrer">Instagram White Glove <Arrow/></a><span>© WhiteGlow</span></footer>
    <a className="mobile-cta" href={DM}>Написать Марии <Arrow/></a>
  </div>;
}

export default App;
