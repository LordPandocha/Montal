import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const MESSAGE_URL = "https://ig.me/m/maria.manukyannn";
const PROFILE_URL = "https://www.instagram.com/cleaning_white_glove/";

function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: reduced ? 0 : 0.48, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="WhiteGlow — на главную">
      <span className="brand__word">WhiteGlow</span>
      <span className="brand__dot" aria-hidden="true" />
    </a>
  );
}

const directions = [
  {
    number: "01",
    tag: "СТАРТ С НУЛЯ",
    title: "Есть идея. Нужен маршрут.",
    text: "Разберём первые решения: с чего начать, что подготовить до запуска и как превратить идею в последовательность понятных шагов.",
    className: "direction-card--start",
    linkText: "Обсудить запуск",  },
  {
    number: "02",
    tag: "ДЕЙСТВУЮЩИЙ БИЗНЕС",
    title: "Пора перейти на следующий этап.",
    text: "Посмотрим, что сейчас тормозит развитие, какие процессы стоит пересобрать и на чём сосредоточиться в первую очередь.",
    className: "direction-card--growth",
    linkText: "Обсудить развитие",  }
];

const courses = [
  {
    number: "01",
    name: "Групповой",
    tag: "БАЗОВЫЙ ФОРМАТ",
    format: "ONLINE",
    duration: "1 месяц наставничества",
    details: ["Без обратной связи", "Именная печать в подарок"],
    featured: false
  },
  {
    number: "02",
    name: "Индивидуальный",
    tag: "БОЛЬШЕ ПОДДЕРЖКИ",
    format: "ONLINE",
    duration: "2 месяца наставничества",
    details: ["Дополнительно 1 месяц с обратной связью", "Именная печать в подарок"],
    featured: true
  },
  {
    number: "03",
    name: "VIP",
    tag: "МАКСИМУМ ВНИМАНИЯ",
    format: "ONLINE / OFFLINE",
    duration: "2 месяца наставничества",
    details: ["Практика на объекте с личным сопровождением", "Закупка пылесоса и парогенератора"],
    featured: false
  }
];

const steps = [
  {
    number: "01",
    title: "Рассказываете о задаче",
    text: "Пишете, на каком вы этапе, что уже пробовали и что хотите изменить."
  },
  {
    number: "02",
    title: "Разбираем точку А",
    text: "Уточняем контекст, ограничения и вопросы, которые действительно важны сейчас."
  },
  {
    number: "03",
    title: "Определяем следующие шаги",
    text: "Собираем понятный план действий с приоритетами именно для вашей ситуации."
  }
];

const faqs = [
  {
    question: "Можно обратиться, если я ещё не открыл бизнес?",
    answer: "Да. Наставничество подходит и для старта с нуля. В первом сообщении расскажите об идее и о том, что уже успели подготовить."
  },
  {
    question: "А если у меня уже есть клининговая компания?",
    answer: "Тоже можно. Опишите, как сейчас устроена работа и какой вопрос мешает двигаться дальше. Так будет проще определить тему разбора."
  },
  {
    question: "Что написать Марии в первый раз?",
    answer: "Достаточно сказать, какой формат заинтересовал и что вы хотите уточнить. Подробную историю можно не готовить заранее."
  },
  {
    question: "Где узнать стоимость обучения?",
    answer: "Напишите Марии в Instagram — она расскажет об актуальной стоимости и условиях выбранного формата."
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="top" className="site">
      <a className="skip-link" href="#main">К основному содержанию</a>

      <header className="header">
        <div className="header__inner">
          <Brand />
          <button
            className={"menu-toggle" + (menuOpen ? " menu-toggle--open" : "")}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <span /><span />
          </button>
          <nav id="site-navigation" className={"navigation" + (menuOpen ? " navigation--open" : "")} aria-label="Главное меню">
            <a href="#courses" onClick={closeMenu}>Форматы обучения</a>
            <a href="#directions" onClick={closeMenu}>Ваш этап</a>
            <a href="#process" onClick={closeMenu}>Как проходит</a>
            <a href="#about" onClick={closeMenu}>О наставничестве</a>
            <a className="navigation__mobile-cta" href={MESSAGE_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>Написать Марии <span aria-hidden="true">↗</span></a>
          </nav>
          <a className="button button--nav" href={MESSAGE_URL} target="_blank" rel="noreferrer">
            Выбрать формат <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero section-wrap">
          <div className="hero__copy">
            <Reveal>
              <p className="eyebrow"><span className="eyebrow__dot" /> Наставничество в клининговом бизнесе</p>
            </Reveal>
            <Reveal delay={0.04}>
              <h1>Меньше хаоса.<br /><em>Больше ясности</em><span className="hero__period">.</span></h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="hero__description">
                Обучение у Марии Манукян в трёх форматах — от группового участия до VIP-сопровождения. Выберите подходящий уровень поддержки и уточните условия напрямую.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="hero__actions">
                <a className="button button--primary" href="#courses">
                  Сравнить форматы <span aria-hidden="true">↓</span>
                </a>
                <a className="text-link" href={MESSAGE_URL} target="_blank" rel="noreferrer">Задать вопрос Марии <span aria-hidden="true">↗</span></a>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="hero__footnote">
                <span className="hero__footnote-mark" aria-hidden="true">W.</span>
                <p>Сначала определяем главное.<br />Затем собираем план действий.</p>
              </div>
            </Reveal>
          </div>

          <Reveal className="hero__visual" delay={0.1}>
            <div className="hero-photo hero-photo--brand" role="img" aria-label="Фирменная графика WhiteGlow">
              <div className="hero-art__grid" aria-hidden="true" />
              <div className="hero-art__orb hero-art__orb--large" aria-hidden="true" />
              <div className="hero-art__orb hero-art__orb--small" aria-hidden="true" />
              <div className="hero-photo__topline">
                <span>01 / WHITEGLOW</span>
                <span>ОБУЧЕНИЕ · 3 ФОРМАТА</span>
              </div>
              <div className="hero-art__monogram" aria-hidden="true">W<span>.</span></div>
              <div className="hero-photo__caption">
                <span className="hero-photo__caption-label">ВАШ СЛЕДУЮЩИЙ ШАГ</span>
                <strong>Выберите<br />свой формат.</strong>
              </div>
              <div className="hero-art__side-label" aria-hidden="true">ЯСНОСТЬ · ФОКУС · ДЕЙСТВИЕ</div>
            </div>
            <div className="hero-stamp" aria-label="Индивидуальный разбор и план действий">
              <span className="hero-stamp__ring">WHITEGLOW · WHITEGLOW ·</span>
              <span className="hero-stamp__center">W<span>.</span></span>
            </div>
            <div className="hero__visual-note">
              <span className="hero__visual-line" />
              <span>Клининговый бизнес — по шагам</span>
            </div>
          </Reveal>
        </section>

        <section className="signal-strip" aria-label="Формат наставничества">
          <div className="signal-strip__inner">
            <div className="signal"><span className="signal__mark">01</span><span>Групповой формат</span></div>
            <span className="signal-strip__divider" aria-hidden="true" />
            <div className="signal"><span className="signal__mark">02</span><span>Индивидуальный формат</span></div>
            <span className="signal-strip__divider" aria-hidden="true" />
            <div className="signal"><span className="signal__mark">03</span><span>VIP-сопровождение</span></div>
          </div>
        </section>

        <section className="directions section-wrap" id="directions">
          <Reveal className="section-intro">
            <p className="eyebrow"><span className="eyebrow__dot" /> Начнём с вашей точки А</p>
            <h2>На каком этапе<br />вы <em>сейчас?</em></h2>
            <p>Выберите то, что ближе к вашей ситуации. Это поможет начать разговор с самого важного.</p>
          </Reveal>
          <div className="direction-grid">
            {directions.map((item, index) => (
              <Reveal className={"direction-card " + item.className} key={item.number} delay={index * 0.06}>
                <div className="direction-card__top">
                  <span className="direction-card__number">{item.number}</span>
                  <span className="direction-card__tag">{item.tag}</span>
                </div>
                <div className="direction-card__art" aria-hidden="true">
                  <span className="art-ring art-ring--one" />
                  <span className="art-ring art-ring--two" />
                  <span className="art-core">{item.number}</span>
                  <span className="art-line art-line--one" />
                  <span className="art-line art-line--two" />
                </div>
                <div className="direction-card__body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a className="card-link" href={MESSAGE_URL} target="_blank" rel="noreferrer"
                    aria-label={item.linkText}
                    >
                    {item.linkText} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="courses section-wrap" id="courses">
          <Reveal className="section-intro">
            <p className="eyebrow"><span className="eyebrow__dot" /> Три формата участия</p>
            <h2>Выберите уровень<br /><em>поддержки.</em></h2>
            <p>Форматы отличаются сроком наставничества, обратной связью и степенью личного сопровождения.</p>
          </Reveal>
          <div className="course-grid">
            {courses.map((course, index) => (
              <Reveal key={course.number} delay={index * 0.06}>
                <article className={"course-card" + (course.featured ? " course-card--featured" : "")}>
                  <div className="course-card__top">
                    <span className="course-card__number">{course.number}</span>
                    <span className="course-card__tag">{course.tag}</span>
                  </div>
                  <div className="course-card__symbol" aria-hidden="true">
                    <span className="course-card__orbit course-card__orbit--one" />
                    <span className="course-card__orbit course-card__orbit--two" />
                    <span className="course-card__symbol-mark">{course.number === "03" ? "V" : course.number === "02" ? "M" : "G"}<i>.</i></span>
                  </div>
                  <p className="course-card__format">{course.format}</p>
                  <h3>{course.name}</h3>
                  <p className="course-card__duration">{course.duration}</p>
                  <ul>
                    {course.details.map((detail) => (
                      <li key={detail}><span aria-hidden="true">＋</span>{detail}</li>
                    ))}
                  </ul>
                  <a className="button course-card__cta" href={MESSAGE_URL} target="_blank" rel="noreferrer">
                    Уточнить стоимость <span aria-hidden="true">↗</span>
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="courses__note">Актуальную стоимость и условия участия можно уточнить у Марии напрямую.</p>
        </section>

        <section className="process section-wrap" id="process">
          <Reveal className="process__heading">
            <p className="eyebrow"><span className="eyebrow__dot" /> Понятный процесс</p>
            <h2>От вопроса —<br /><em>к следующему шагу.</em></h2>
            <p>Разбор начинается не с готового шаблона, а с контекста вашего бизнеса.</p>
          </Reveal>
          <div className="step-grid">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.06}>
                <article className="step-card">
                  <div className="step-card__top">
                    <span>{step.number}</span>
                    <span className="step-card__symbol" aria-hidden="true">{index === 0 ? "↗" : index === 1 ? "＋" : "→"}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="about">
          <div className="about__inner section-wrap">
            <Reveal className="about__identity">
              <div className="about__monogram" aria-hidden="true"><span>W</span><i /></div>
              <div className="about__identity-caption">
                <span>НАСТАВНИЧЕСТВО</span>
                <span>КЛИНИНГОВЫЙ БИЗНЕС</span>
              </div>
            </Reveal>
            <div className="about__content" id="about">
              <Reveal>
                <p className="eyebrow"><span className="eyebrow__dot" /> О подходе</p>
                <h2>Не готовый рецепт.<br /><em>Ваш план действий.</em></h2>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="about__lead">Мария Манукян помогает тем, кто хочет открыть клининговый бизнес или развить существующую компанию.</p>
                <p className="about__body">Вместо попытки охватить всё сразу вы разбираете текущую ситуацию, выделяете приоритеты и определяете, что делать дальше.</p>
                <a className="button button--primary" href={MESSAGE_URL} target="_blank" rel="noreferrer">Познакомиться и обсудить <span aria-hidden="true">↗</span></a>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="faq section-wrap" id="questions">
          <Reveal className="faq__intro">
            <p className="eyebrow"><span className="eyebrow__dot" /> Перед первым сообщением</p>
            <h2>Частые <em>вопросы.</em></h2>
          </Reveal>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.04}>
                <details className="faq-item">
                  <summary><span>{faq.question}</span><span className="faq-item__toggle" aria-hidden="true" /></summary>
                  <p>{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="contact">
          <div className="contact__texture" aria-hidden="true" />
          <div className="contact__inner section-wrap">
            <Reveal>
              <p className="eyebrow eyebrow--light"><span className="eyebrow__dot" /> Первый шаг — разговор</p>
              <h2>Давайте проясним,<br /><em>что делать дальше.</em></h2>
              <p>Напишите, на каком вы этапе и какой вопрос хотите решить. Начнём с этого.</p>
              <a className="button button--lime button--large" href={MESSAGE_URL} target="_blank" rel="noreferrer">
                Написать Марии в Instagram <span aria-hidden="true">↗</span>
              </a>
            </Reveal>
            <div className="contact__aside">
              <span className="contact__aside-number">W.</span>
              <span>ЯСНОСТЬ ВМЕСТО ХАОСА</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner section-wrap">
          <Brand />
          <p>Мария Манукян <span>·</span> Наставничество в клининговом бизнесе</p>
          <a className="footer__instagram" href={PROFILE_URL} target="_blank" rel="noreferrer" aria-label="Профиль Cleaning White Glove в Instagram">Профиль в Instagram <span aria-hidden="true">↗</span></a>
          <span className="footer__copyright">© WhiteGlow</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
