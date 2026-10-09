import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const MESSAGE_URL = "https://ig.me/m/maria.manukyannn";

function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: reduced ? 0 : 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Brand() {
  return <a className="brand" href="#top" aria-label="MONTAL — наверх">MONTAL<span>.</span></a>;
}

function PhotoPlaceholder({ label, variant = "portrait", className = "" }) {
  return (
    <div className={"photo-placeholder photo-placeholder--" + variant + " " + className} role="img" aria-label={label}>
      <div className="photo-placeholder__light" />
      <div className="photo-placeholder__plane photo-placeholder__plane--back" />
      <div className="photo-placeholder__plane photo-placeholder__plane--front" />
      <span className="photo-placeholder__label">{label}</span>
    </div>
  );
}

const paths = [
  {
    number: "01",
    title: "Хочу открыть бизнес",
    subtitle: "Старт с нуля",
    text: "Разберём, с чего начать, какие решения принять до запуска и как выстроить первые шаги без хаоса.",
    imageLabel: "Иллюстрация запуска бизнеса",
    variant: "launch",
    message: "Здравствуйте, Мария! Хочу открыть клининговый бизнес. Можно обсудить мой запуск?"
  },
  {
    number: "02",
    title: "Хочу развить компанию",
    subtitle: "Действующий бизнес",
    text: "Посмотрим, что мешает росту сейчас, какие процессы требуют внимания и на чём сосредоточиться в первую очередь.",
    imageLabel: "Иллюстрация развития бизнеса",
    variant: "growth",
    message: "Здравствуйте, Мария! У меня уже есть клининговый бизнес. Хочу обсудить развитие компании."
  }
];

const topics = [
  ["Запуск бизнеса", "С чего начать, какие решения принять до первых заказов и как составить план запуска."],
  ["Клиенты и стоимость услуг", "Как подойти к поиску клиентов и какие расходы учитывать при расчёте цены."],
  ["Команда и организация работы", "Как распределять задачи, выстраивать процессы и видеть, что требует улучшения."],
];

const steps = [
  ["Рассказываете задачу", "Пишете, на каком вы этапе и что хотите изменить."],
  ["Разбираем ситуацию", "Определяем главные вопросы, ограничения и приоритеты."],
  ["Получаете план", "Формируем последовательность действий под вашу ситуацию."],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="top" className="site">
      <header className="header">
        <Brand />
        <button
          className={"menu-toggle" + (menuOpen ? " menu-toggle--open" : "")}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          <span /><span />
        </button>
        <nav className={"navigation" + (menuOpen ? " navigation--open" : "")} aria-label="Главное меню">
          <a href="#directions" onClick={closeMenu}>Кому подойдёт</a>
          <a href="#topics" onClick={closeMenu}>С чем помогу</a>
          <a href="#process" onClick={closeMenu}>Как проходит разбор</a>
          <a href="#about" onClick={closeMenu}>О Марии</a>
          <a className="navigation__mobile-contact" href={MESSAGE_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>Написать Марии ↗</a>
        </nav>
        <a className="button button--small header__cta" href={MESSAGE_URL} target="_blank" rel="noreferrer">Написать Марии <span>↗</span></a>
      </header>

      <main>
        <section className="hero wrap">
          <div className="hero__copy">
            <Reveal><p className="eyebrow">НАСТАВНИЧЕСТВО В КЛИНИНГОВОМ БИЗНЕСЕ</p></Reveal>
            <Reveal delay={0.06}>
              <h1>Откройте или развивайте <em>клининговый бизнес</em> с понятным планом.</h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="hero__description">Мария Манукян поможет разобрать вашу ситуацию, определить главное и понять, что делать дальше — на старте или при развитии уже работающей компании.</p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="hero__actions">
                <a className="button button--primary" href={MESSAGE_URL} target="_blank" rel="noreferrer">Обсудить мою задачу <span>↗</span></a>
                <a className="link-arrow" href="#directions">Выбрать направление <span>↓</span></a>
              </div>
            </Reveal>
            <p className="hero__note">Индивидуальный разбор вашей ситуации и план действий</p>
          </div>
          <Reveal className="hero__media" delay={0.12}>
            <PhotoPlaceholder label="Фото Марии" variant="portrait" className="hero__photo" />
            <div className="media-caption"><span>МАРИЯ МАНУКЯН</span><span>НАСТАВНИЧЕСТВО</span></div>
          </Reveal>
        </section>

        <section className="directions section section--white" id="directions">
          <div className="wrap">
            <Reveal className="section-heading">
              <p className="eyebrow">ДВА ВАРИАНТА</p>
              <h2>Где вы сейчас?</h2>
              <p>Выберите свой этап — так проще начать разговор о конкретной задаче.</p>
            </Reveal>
            <div className="direction-grid">
              {paths.map((path, index) => (
                <Reveal className="direction-card" delay={index * 0.08} key={path.number}>
                  <PhotoPlaceholder label={path.imageLabel} variant={path.variant} className="direction-card__image" />
                  <div className="direction-card__content">
                    <p className="card-overline">{path.number} / {path.subtitle}</p>
                    <h3>{path.title}</h3>
                    <p className="direction-card__text">{path.text}</p>
                    <a className="button button--dark" href={MESSAGE_URL} target="_blank" rel="noreferrer" onClick={() => {}}>
                      Обсудить со мной <span>↗</span>
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="topics section wrap" id="topics">
          <Reveal className="topics__intro">
            <p className="eyebrow">ЧЕМ МОГУ ПОМОЧЬ</p>
            <h2>Разберём то, что важно <em>вашему бизнесу.</em></h2>
            <p>Не нужно пытаться решить всё сразу. Сначала определим главную задачу, затем составим план действий.</p>
            <a className="link-arrow" href={MESSAGE_URL} target="_blank" rel="noreferrer">Рассказать о своей задаче <span>↗</span></a>
          </Reveal>
          <div className="topic-list">
            {topics.map((topic, index) => (
              <Reveal key={topic[0]} delay={index * 0.06}>
                <article className="topic-item">
                  <span className="topic-item__number">0{index + 1}</span>
                  <div><h3>{topic[0]}</h3><p>{topic[1]}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="process section section--green" id="process">
          <div className="wrap process__layout">
            <Reveal className="process__intro">
              <p className="eyebrow">КАК ПРОХОДИТ РАБОТА</p>
              <h2>От вопроса — <em>к плану.</em></h2>
              <p>Начинаем с вашей ситуации, а не с готовой схемы для всех.</p>
              <a className="button button--light" href={MESSAGE_URL} target="_blank" rel="noreferrer">Начать разговор <span>↗</span></a>
            </Reveal>
            <div className="step-list">
              {steps.map((step, index) => (
                <Reveal key={step[0]} delay={index * 0.08}>
                  <article className="step">
                    <span className="step__number">0{index + 1}</span>
                    <div><h3>{step[0]}</h3><p>{step[1]}</p></div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="about section section--white" id="about">
          <div className="wrap about__layout">
            <Reveal className="about__media">
              <PhotoPlaceholder label="Фото Марии за работой" variant="about" className="about__photo" />
            </Reveal>
            <div className="about__content">
              <Reveal>
                <p className="eyebrow">О МАРИИ</p>
                <h2>Опыт в клининговом бизнесе — <em>в основе разбора.</em></h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p>Мария Манукян помогает тем, кто хочет открыть клининговый бизнес или развить существующую компанию.</p>
                <p>На встрече вы вместе разбираете текущую ситуацию, определяете приоритеты и составляете индивидуальный план следующих шагов.</p>
                <a className="button button--primary" href={MESSAGE_URL} target="_blank" rel="noreferrer">Написать Марии <span>↗</span></a>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="contact section">
          <div className="wrap contact__inner">
            <Reveal>
              <p className="eyebrow">СЛЕДУЮЩИЙ ШАГ</p>
              <h2>Расскажите, что хотите <em>изменить.</em></h2>
              <p>Напишите, начинаете ли вы с нуля или уже ведёте бизнес, и какой вопрос хотите решить.</p>
              <a className="button button--primary button--large" href={MESSAGE_URL} target="_blank" rel="noreferrer">Написать Марии в Instagram <span>↗</span></a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer__inner">
          <Brand />
          <span>Мария Манукян · Наставничество в клининговом бизнесе</span>
          <a href={MESSAGE_URL} target="_blank" rel="noreferrer">Instagram ↗</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
