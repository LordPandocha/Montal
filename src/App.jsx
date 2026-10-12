import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { motionTokens, springs } from "./motion-tokens.js";

const MARIA = "https://www.instagram.com/maria.manukyannn/";
const BRAND = "https://www.instagram.com/cleaning_white_glove/";
const DM = "https://ig.me/m/maria.manukyannn";
const SCHOOL_CASE = "https://www.instagram.com/cleaning_white_glove/reel/DLD2cqAoR26/";
const COMMERCIAL_STORIES = "https://www.instagram.com/stories/highlights/17972375399492660/";
const TRAINING_STORIES = "https://www.instagram.com/stories/highlights/18080438572420641/";
const MARIA_REVIEWS = "https://www.instagram.com/stories/highlights/18038107966927348/";
const COURSE_REVIEWS = "https://www.instagram.com/stories/highlights/17926029174029965/";

const photos = [
  { src: "/WhiteGlow/instagram/commercial.jpg", label: "Кадр из кейса White Glove: школа, окна и ангар", kind: "ШКОЛА · АНГАР · ФАСАДЫ", shape: "photo--wide", href: SCHOOL_CASE },
  { src: "/WhiteGlow/instagram/interior.jpg", label: "Фирменный интерьерный кадр из Instagram White Glove", kind: "АТМОСФЕРА WHITE GLOVE", shape: "photo--tall", href: BRAND },
  { src: "/WhiteGlow/instagram/linen.jpg", label: "Льняная ткань и цветы — фирменная палитра White Glove", kind: "ФИРМЕННЫЕ ДЕТАЛИ", shape: "", href: BRAND },
  { src: "/WhiteGlow/instagram/succulent.jpg", label: "Суккулент в фирменной палитре White Glove", kind: "ВИЗУАЛЬНЫЙ СТИЛЬ", shape: "", href: BRAND },
  { src: "/WhiteGlow/instagram/leaf.jpg", label: "Зелёные детали из Instagram White Glove", kind: "ЦВЕТА БРЕНДА", shape: "", href: BRAND },
  { src: "/WhiteGlow/instagram/gift.jpg", label: "Фирменная зелёная деталь из ленты White Glove", kind: "НАСТРОЕНИЕ БРЕНДА", shape: "", href: BRAND },
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
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: motionTokens.distance.large, scale: 0.975, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: reduced ? motionTokens.duration.fast : motionTokens.duration.slow, delay, ease: motionTokens.easing.smooth }}>{children}</motion.div>;
}

function usePageVisibility() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const sync = () => setVisible(document.visibilityState === "visible");
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);
  return visible;
}

function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, springs.snappy);
  return <motion.div className="page-progress" aria-hidden="true" style={{ scaleX: reduced ? scrollYProgress : smoothProgress }} />;
}

function Star({ className = "" }) { return <span aria-hidden="true" className={`star ${className}`}>✳</span>; }
function Arrow({ up = false }) { return <span className="arrow" aria-hidden="true">{up ? "↗" : "↗"}</span>; }

function HeroArt({ isPageVisible }) {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const rawY = useTransform(scrollYProgress, [0, motionTokens.scrollRange], [0, motionTokens.distance.parallax]);
  const y = useSpring(rawY, springs.gentle);
  const motionEnabled = !reduced && isPageVisible;
  return <div className="hero-art">
    <motion.div className="hero-art__main" style={motionEnabled ? { y } : {}}>
      <img src="/WhiteGlow/instagram/plant.jpg" alt="Растение в интерьере из официальной публикации White Glove" fetchPriority="high" />
      <div className="hero-art__stamp"><span>WHITE<br/>GLOVE</span><Star/></div>
    </motion.div>
    <motion.a className="hero-art__tile hero-art__tile--one" href={BRAND} target="_blank" rel="noreferrer" initial={reduced ? false : { opacity: 0, y: motionTokens.distance.large, rotate: 8, scale: 0.88 }} animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }} transition={{ ...springs.gentle, delay: motionTokens.duration.fast }} whileHover={motionEnabled ? { y: -8, rotate: -3, scale: 1.045 } : undefined}><img src="/WhiteGlow/instagram/linen.jpg" alt="Ткань и детали в фирменных оттенках из Instagram White Glove" /></motion.a>
    <motion.a className="hero-art__tile hero-art__tile--two" href={SCHOOL_CASE} target="_blank" rel="noreferrer" initial={reduced ? false : { opacity: 0, x: motionTokens.distance.large, rotate: -9, scale: 0.88 }} animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }} transition={{ ...springs.gentle, delay: motionTokens.duration.normal }} whileHover={motionEnabled ? { y: -8, rotate: 2, scale: 1.045 } : undefined}><img src="/WhiteGlow/instagram/commercial.jpg" alt="Кадр реального коммерческого кейса из Instagram White Glove" /></motion.a>
    <motion.div className="hero-art__note" initial={reduced ? false : { opacity: 0, scale: 0.55, rotate: -22 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ ...springs.playful, delay: motionTokens.duration.slow }}><Star/><span>Фирменный стиль.<br/>Реальная практика.</span></motion.div>
    <span className="hero-art__caption">ЧИТА · WHITE GLOVE · 2026</span>
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isPageVisible = usePageVisibility();
  const reduced = useReducedMotion();
  const close = () => setMenuOpen(false);
  const heroTransition = reduced
    ? { duration: motionTokens.duration.fast }
    : { duration: motionTokens.duration.entrance, ease: motionTokens.easing.smooth };
  return <div className={`site ${isPageVisible ? "" : "site--hidden"}`} id="top">
    <ScrollProgress />
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
          <div className="hero__copy"><motion.p className="hero__kicker" initial={reduced ? false : {opacity:0,y:motionTokens.distance.small}} animate={{opacity:1,y:0}} transition={{...heroTransition,delay:motionTokens.duration.fast}}>ТВОЯ ТОЧКА ОТСЧЁТА&nbsp; № 01</motion.p>
            <h1><motion.span initial={reduced ? false : {y:"110%"}} animate={{y:0}} transition={{...heroTransition,delay:motionTokens.duration.fast}}>Чистота.</motion.span><motion.span className="hero__hollow" initial={reduced ? false : {y:"115%"}} animate={{y:0}} transition={{...heroTransition,delay:motionTokens.duration.normal}}>Характер.</motion.span><motion.span className="hero__serif" initial={reduced ? false : {y:"125%",rotate:3}} animate={{y:0,rotate:0}} transition={{...heroTransition,delay:motionTokens.duration.slow}}>Своё дело.</motion.span></h1>
            <motion.p className="hero__lead" initial={reduced ? false : {opacity:0,y:motionTokens.distance.small}} animate={{opacity:1,y:0}} transition={{...heroTransition,delay:motionTokens.duration.entrance}}>Посмотри, как работает клининговая команда изнутри, и преврати свой интерес в уверенный план.</motion.p>
            <motion.div className="hero__actions" initial={reduced ? false : {opacity:0,y:motionTokens.distance.medium}} animate={{opacity:1,y:0}} transition={{...springs.gentle,delay:motionTokens.duration.entrance+motionTokens.duration.fast}}><motion.a className="button button--dark" href="#possibilities" whileHover={reduced ? undefined : {scale:motionTokens.scale.hover,y:-3}} whileTap={reduced ? undefined : {scale:motionTokens.scale.press}} transition={springs.snappy}>Увидеть возможности <Arrow/></motion.a><a className="hero__secondary" href={BRAND} target="_blank" rel="noreferrer">Смотреть Instagram <Arrow/></a></motion.div>
            <div className="hero__signature"><span className="hero__avatar">М</span><span><strong>Мария Манукян</strong><small>Основатель White Glove · ваш наставник</small></span><Star className="hero__signature-star"/></div>
          </div>
          <HeroArt isPageVisible={isPageVisible}/>
        </div>
        <div className="hero__bottom"><span>ОТ ПЕРВОГО ШАГА — К НАСТОЯЩЕЙ ПРАКТИКЕ</span><a href="#possibilities">ЛИСТАЙ ВНИЗ <span>↓</span></a><span>01 — 05</span></div>
      </div></section>

      <div className="marquee" aria-label="Обучение клинингу, практика и развитие своего дела"><div className="marquee__track" aria-hidden="true">{Array.from({length:4},(_,i)=><span key={i}>КЛИНИНГ КАК ДЕЛО <Star/> ОПЫТ В РАБОТЕ <Star/> СИСТЕМА И РОСТ <Star/></span>)}</div></div>

      <section className="possibilities section-pad" id="possibilities"><Reveal className="section-heading"><div><p className="eyebrow"><Star/> ЧЕМУ МОЖНО НАУЧИТЬСЯ</p><h2>Уверенность<br/>начинается <em>с дела.</em></h2></div><p className="section-heading__aside">Показываем не абстрактную теорию, а настоящую работу клининговой компании.</p></Reveal>
        <div className="path-grid">{paths.map((item,i)=><Reveal key={item.n} delay={i*motionTokens.duration.fast*.42}><motion.article className={`path-card path-card--${i+1}`} whileHover={reduced?undefined:{y:-9,rotate:i===1?1:-1}} transition={springs.playful}><div className="path-card__top"><span>{item.n} / ТВОЙ МАРШРУТ</span><Star/></div><h3>{item.title}</h3><p>{item.text}</p><a href="#programs" aria-label={`Посмотреть обучение: ${item.title}`}>НАЙТИ СВОЙ ФОРМАТ <Arrow/></a><span className="path-card__orb" aria-hidden="true"/></motion.article></Reveal>)}</div>
      </section>

      <section className="work section-pad" id="work"><Reveal className="work__heading"><div><p className="eyebrow"><Star/> КЕЙСЫ И ФИРМЕННЫЙ СТИЛЬ</p><h2>Опыт команды.<br/><em>Эстетика бренда.</em></h2></div><a href={BRAND} target="_blank" rel="noreferrer">ОТКРЫТЬ INSTAGRAM <Arrow/></a></Reveal>
        <div className="work__grid">{photos.map((photo,i)=><Reveal className={`work__item ${photo.shape}`} key={photo.src} delay={i*motionTokens.duration.fast*.25}><motion.a className="work__photo" href={photo.href} target="_blank" rel="noreferrer" whileHover={reduced?undefined:{scale:motionTokens.scale.hover}} transition={springs.gentle}><img src={photo.src} alt={photo.label} loading="lazy"/><span className="work__overlay"><span>{photo.kind}</span><b><Arrow/></b></span></motion.a></Reveal>)}</div>
        <div className="work__foot"><span>КЕЙСЫ — ПРАКТИКА — СВОЁ ДЕЛО</span><span>КЕЙС — ИЗ REELS · ДЕТАЛИ — ИЗ ЛЕНТЫ WHITE GLOVE <Star/></span></div>
      </section>

      <section className="manifesto"><div className="manifesto__inner"><Reveal className="manifesto__text"><p className="eyebrow"><Star/> РЕАЛЬНЫЕ ОБЪЕКТЫ WHITE GLOVE</p><h2>Сложная задача.<br/><em>Сильная команда.</em></h2><p>В Reels White Glove — уборка двухэтажной школы, окон, ангара для поездов и фасадов. В коммерческом Highlight команда рассказывает о проекте площадью около 10&nbsp;000 м² и окнах высотой до 10–11 метров.</p><a href={COMMERCIAL_STORIES} target="_blank" rel="noreferrer" className="manifesto__link">Смотреть коммерческий кейс <Arrow/></a></Reveal><motion.div className="manifesto__visual" initial={{opacity:0,scale:.92,rotate:2}} whileInView={{opacity:1,scale:1,rotate:0}} viewport={{once:true,amount:.25}} transition={{duration:.8,ease:[.2,.8,.2,1]}}><a href={SCHOOL_CASE} target="_blank" rel="noreferrer"><img src="/WhiteGlow/instagram/commercial.jpg" alt="Кадр из Reels о кейсе White Glove: школа, окна и ангар" loading="lazy"/><div className="manifesto__label"><span>ШКОЛА · ОКНА · АНГАР · ФАСАДЫ</span><Star/><span>СМОТРЕТЬ REELS</span></div></a></motion.div></div></section>

      <section className="programs section-pad" id="programs"><Reveal className="programs__head"><div><p className="eyebrow"><Star/> МАРШРУТЫ НАСТАВНИЧЕСТВА</p><h2>Выбирай свой<br/><em>темп.</em></h2></div><p>Три формата — одна цель: помочь увидеть своё следующее действие.</p></Reveal><div className="programs__grid">{courses.map((c,i)=><Reveal delay={i*motionTokens.duration.fast*.42} key={c.id}><motion.article className={`program ${c.featured?"program--featured":""}`} whileHover={reduced?undefined:{y:-8,rotate:i===1?0.5:-0.5}} transition={springs.playful}><div className="program__top"><span>{c.id} / WHITEGLOW</span><span>{c.length}</span></div><p className="program__tag">{c.tagline}</p><h3>{c.name}<span>.</span></h3><p className="program__description">{c.text}</p><a href={DM} className="program__link"><span>Уточнить детали</span><Arrow/></a></motion.article></Reveal>)}</div><p className="programs__fine">Актуальные условия, расписание и подробное наполнение уточняйте у Марии в Instagram.</p><div className="programs__proof">{[[TRAINING_STORIES,"Посмотреть, как проходит обучение"],[MARIA_REVIEWS,"Отзывы выпускниц White Glove"],[COURSE_REVIEWS,"Отзывы учеников Марии"]].map(([href,label],i)=><Reveal delay={i*motionTokens.duration.fast*.35} key={href}><motion.a href={href} target="_blank" rel="noreferrer" whileHover={reduced?undefined:{y:-3,scale:1.02}} transition={springs.snappy}><span>{label}</span><Arrow/></motion.a></Reveal>)}</div></section>

      <section className="learning-proof section-pad" aria-labelledby="learning-proof-title">
        <Reveal className="learning-proof__intro">
          <p className="eyebrow"><Star/> ОТЗЫВ ИЗ INSTAGRAM · 27.03.2025</p>
          <h2 id="learning-proof-title">Опыт, который<br/><em>можно применить.</em></h2>
          <p>В ролике об обучении ученица рассказывает о трёх днях в компании: разбирала технологию уборки, документы и подбор персонала — и стала увереннее в запуске своего дела.</p>
          <a href={TRAINING_STORIES} target="_blank" rel="noreferrer" className="learning-proof__source">Открыть историю White Glove <Arrow/></a>
        </Reveal>
        <div className="learning-proof__panel">
          <motion.blockquote className="learning-proof__quote" initial={reduced?false:{opacity:0,scale:.94,y:motionTokens.distance.medium}} whileInView={{opacity:1,scale:1,y:0}} viewport={{once:true,amount:.35}} transition={springs.gentle}>
            <span className="learning-proof__quote-mark" aria-hidden="true">“</span>
            <p>Всё очень подробно, лаконично и понятным языком.</p>
            <footer>Участница VIP-наставничества · отзыв из актуального White Glove</footer>
          </motion.blockquote>
          <div className="learning-proof__topics">
            {[["01","Технология уборки"],["02","Документы и процессы"],["03","Подбор команды и первые шаги"]].map(([n,label],i)=><Reveal key={n} delay={i*motionTokens.duration.fast*.35}><motion.div className="learning-proof__topic" whileHover={reduced?undefined:{x:8}} transition={springs.snappy}><span>{n}</span><strong>{label}</strong><span aria-hidden="true">↗</span></motion.div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="mentor section-pad" id="maria"><div className="mentor__portrait"><div className="mentor__frame"><img src="/WhiteGlow/instagram/maria.jpg" alt="Мария Манукян — фото из её Instagram" loading="lazy"/></div><motion.span className="mentor__sticker" initial={reduced?false:{opacity:0,scale:.72,rotate:-18}} whileInView={{opacity:1,scale:1,rotate:0}} viewport={{once:true,amount:.35}} transition={springs.playful}><span>ОПЫТ · ЧЕСТНО · ПО ДЕЛУ · </span><i>✳</i></motion.span><span className="mentor__credit">МАРИЯ МАНУКЯН · INSTAGRAM</span></div><Reveal className="mentor__copy"><p className="eyebrow"><Star/> НАСТАВНИК И ОСНОВАТЕЛЬ WHITE GLOVE</p><h2>Мария.<br/><em>Без лишних слов.</em></h2><p>Мария создала клининговую компанию и знает, сколько живой работы стоит за красивым результатом. С ней ты разберёшься в процессе и выберешь направление, которое подходит именно тебе.</p><p>Вместо обещаний лёгкого успеха — конкретный опыт, честные ответы и внимание к твоей цели.</p><a className="button button--outline" href={MARIA} target="_blank" rel="noreferrer">Познакомиться в Instagram <Arrow/></a></Reveal></section>

      <section className="faq section-pad" id="faq"><Reveal className="faq__head"><p className="eyebrow"><Star/> МОЖНО ПРОСТО СПРОСИТЬ</p><h2>Всё обсудим<br/><em>по-человечески.</em></h2><p>Никаких обязательств — начнём с твоих вопросов.</p><a href={DM}>Написать Марии <Arrow/></a></Reveal><div className="faq__list">{faq.map(([q,a],i)=><Reveal key={q} delay={i*.06}><details><summary><span>{q}</span><i>+</i></summary><p>{a}</p></details></Reveal>)}</div></section>

      <section className="last"><div className="last__inner"><Reveal><p className="eyebrow eyebrow--light"><Star/> ПЕРВЫЙ ШАГ — ЭТО РАЗГОВОР</p><h2>Хочешь увидеть,<br/><em>что по силам тебе?</em></h2><p>Напиши Марии: спокойно обсудите, где ты сейчас и к чему хочешь прийти.</p><motion.a className="button button--cream" href={DM} whileHover={{scale:1.035,y:-3}} whileTap={{scale:.98}}>Обсудить свой путь <Arrow/></motion.a></Reveal><div className="last__orb" aria-hidden="true"><Star/></div></div></section>
    </main>

    <footer className="footer"><a className="brand" href="#top"><span className="brand__glyph">w</span><span className="brand__word">whiteglow<span>НАСТАВНИЧЕСТВО В КЛИНИНГЕ</span></span></a><p>Опыт White Glove · Чита / online</p><a href={MARIA} target="_blank" rel="noreferrer">Instagram Марии <Arrow/></a><a href={BRAND} target="_blank" rel="noreferrer">Instagram White Glove <Arrow/></a><span>© WhiteGlow</span></footer>
    <a className="mobile-cta" href={DM}>Написать Марии <Arrow/></a>
  </div>;
}

export default App;
