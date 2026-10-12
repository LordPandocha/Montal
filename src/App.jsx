import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const MESSAGE_URL = "https://ig.me/m/maria.manukyannn";

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
    <a className="brand" href="#top" aria-label="MONTAL — на главную">
      <span className="brand__word">MONTAL</span>
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
    linkText: "Обсудить запуск",
    message: "Здравствуйте, Мария! Хочу открыть клининговый бизнес. Можно обсудить с чего начать?"
  },
  {
    number: "02",
    tag: "ДЕЙСТВУЮЩИЙ БИЗНЕС",
    title: "Пора перейти на следующий этап.",
    text: "Посмотрим, что сейчас тормозит развитие, какие процессы стоит пересобрать и на чём сосредоточиться в первую очередь.",
    className: "direction-card--growth",
    linkText: "Обсудить развитие",
    message: "Здравствуйте, Мария! У меня уже есть клининговый бизнес. Хочу обсудить развитие компании."
  }
];

const topics = [
  {
    number: "01",
    title: "Запуск и первые решения",
    text: "Как подойти к старту, определить приоритеты и не распыляться на всё сразу."
  },
  {
    number: "02",
    title: "Клиенты и стоимость услуг",
    text: "Поиск клиентов, подход к цене и расходы, которые важно учитывать."
  },
  {
    number: "03",
    title: "Команда и организация работы",
    text: "Распределение задач, ежедневные процессы и точки, где нужны изменения."
  },
  {
    number: "04",
    title: "План развития",
    text: "Как выделить главное и выстроить следующие шаги под свою ситуацию."
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
    answer: "Достаточно двух вещей: на каком вы этапе и что хотите решить. Подробную историю можно не готовить заранее."
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
            <a href="#directions" onClick={closeMenu}>Ваш этап</a>
            <a href="#topics" onClick={closeMenu}>С чем работаем</a>
            <a href="#process" onClick={closeMenu}>Как проходит</a>
            <a href="#about" onClick={closeMenu}>О наставничестве</a>
            <a className="navigation__mobile-cta" href={MESSAGE_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>Написать Марии <span aria-hidden="true">↗</span></a>
          </nav>
          <a className="button button--nav" href={MESSAGE_URL} target="_blank" rel="noreferrer">
            Обсудить задачу <span aria-hidden="true">↗</span>
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
                Разберите свой бизнес с Марией Манукян — от первых шагов до развития уже работающей компании. Без универсальных схем: с фокусом на вашу ситуацию и ближайшие решения.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="hero__actions">
                <a className="button button--primary" href={MESSAGE_URL} target="_blank" rel="noreferrer">
                  Разобрать мою ситуацию <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#directions">Найти свой этап <span aria-hidden="true">↓</span></a>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="hero__footnote">
                <span className="hero__footnote-mark" aria-hidden="true">M.</span>
                <p>Сначала определяем главное.<br />Затем собираем план действий.</p>
              </div>
            </Reveal>
          </div>

          <Reveal className="hero__visual" delay={0.1}>
            <div className="hero-photo">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1500&q=85"
                alt="Рабочий процесс профессиональной уборки в светлом интерьере"
                fetchPriority="high"
                decoding="async"
              />
              <div className="hero-photo__veil" />
              <div className="hero-photo__topline">
                <span>01 / MONTAL</span>
                <span>START WITH CLARITY</span>
              </div>
              <div className="hero-photo__caption">
                <span className="hero-photo__caption-label">ВАШ СЛЕДУЮЩИЙ ШАГ</span>
                <strong>Из идеи —<br />в систему.</strong>
              </div>
            </div>
            <div className="hero-stamp" aria-label="Индивидуальный разбор и план действий">
              <span className="hero-stamp__ring">MONTAL · MONTAL · MONTAL ·</span>
              <span className="hero-stamp__center">M<span>.</span></span>
            </div>
            <div className="hero__visual-note">
              <span className="hero__visual-line" />
              <span>Клининговый бизнес — по шагам</span>
            </div>
          </Reveal>
        </section>

        <section className="signal-strip" aria-label="Формат наставничества">
          <div className="signal-strip__inner">
            <div className="signal"><span className="signal__mark">01</span><span>Старт с нуля</span></div>
            <span className="signal-strip__divider" aria-hidden="true" />
            <div className="signal"><span className="signal__mark">02</span><span>Развитие компании</span></div>
            <span className="signal-strip__divider" aria-hidden="true" />
            <div className="signal"><span className="signal__mark">03</span><span>План под вашу ситуацию</span></div>
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
                    onClick={() => {}}>
                    {item.linkText} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="topics" id="topics">
          <div className="topics__inner section-wrap">
            <Reveal className="topics__intro">
              <p className="eyebrow eyebrow--light"><span className="eyebrow__dot" /> Главные точки опоры</p>
              <h2>Разложим по<br /><em>полкам.</em></h2>
              <p>Не нужно решать всё сразу. Вместе определим, какой вопрос важнее всего именно сейчас, и начнём с него.</p>
              <a className="text-link text-link--light" href={MESSAGE_URL} target="_blank" rel="noreferrer">Рассказать о задаче <span aria-hidden="true">↗</span></a>
              <div className="topics__seal" aria-hidden="true">
                <span>ЯСНОСТЬ</span><i /> <span>ФОКУС</span><i /> <span>ДЕЙСТВИЕ</span>
              </div>
            </Reveal>
            <div className="topic-list">
              {topics.map((topic, index) => (
                <Reveal key={topic.number} delay={index * 0.045}>
                  <article className="topic-item">
                    <span className="topic-item__number">{topic.number}</span>
                    <div className="topic-item__content">
                      <h3>{topic.title}</h3>
                      <p>{topic.text}</p>
                    </div>
                    <span className="topic-item__arrow" aria-hidden="true">↗</span>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
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
              <div className="about__monogram" aria-hidden="true"><span>M</span><i /></div>
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
              <span className="contact__aside-number">M.</span>
              <span>ЯСНОСТЬ ВМЕСТО ХАОСА</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner section-wrap">
          <Brand />
          <p>Мария Манукян <span>·</span> Наставничество в клининговом бизнесе</p>
          <a className="footer__instagram" href={MESSAGE_URL} target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
          <span className="footer__copyright">© MONTAL</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
