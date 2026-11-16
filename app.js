(() => {
  'use strict';
  const translations = {
    en: {
      pageTitle: 'Anastasiia Pyrohova — WordPress & Full-Stack Developer',
      pageDescription: 'Anastasiia Pyrohova is a WordPress and Full-Stack Developer helping businesses build responsive websites, solve technical SEO problems, and launch digital products.',
      announcement: 'Available for freelance projects & collaborations',
      announcementCta: 'Let\'s connect <span aria-hidden="true">↗</span>',
      navWork:'Work',navServices:'Services',navAbout:'About',navContact:'Contact',navHire:'Hire me',
      heroEyebrow:'DEVELOPER WITH A PRODUCT MINDSET',
      heroTitle1:'Beautiful on screen.',heroTitle2:'Solid under the hood.',
      heroIntroLead:'Hi, I’m Anastasiia.',
      heroIntro:'I build and improve WordPress websites, modern frontends, and API-powered products — turning complicated technical problems into clean, practical solutions.',
      heroPrimary:'Let\'s build something',heroSecondary:'Explore my work',
      proof1:'years in commercial web development',proof2:'years of building & teaching code',proof3:'remote-friendly collaboration',
      artKicker:'CURRENTLY CREATING',artTitle:'Ideas into<br/><em>real products.</em>',artBlurb:'From first wireframe to working experience.',artStack:'TOOLS I WORK WITH',
      floatTop:'Product thinking',floatTopSub:'Built around your goals',floatBottom:'Clean delivery',floatBottomSub:'Details matter',scroll:'SCROLL TO EXPLORE',skillsLabel:'TECH I USE',
      workKicker:'SELECTED WORK',workTitle:'Projects with purpose<span class="accent-period">.</span>',
      workDescription:'A mix of professional experience, independent builds, and products in progress. Every project is labeled honestly.',
      filterAll:'All projects <span>06</span>',filterWordPress:'WordPress',filterApps:'Apps & products',
      project1Type:'PROFESSIONAL WORK',project1Title:'WordPress development & technical SEO',project1Desc:'Production website improvements: custom WordPress features, SEO-friendly URL structures, redirects, canonical and hreflang setup, and performance-focused fixes. Client details kept private.',
      project2Type:'STARTUP · PROTOTYPE',project2Title:'Aligna — AI-powered learning companion',project2Desc:'Co-building an early-stage EdTech product: a screen-free conversational toy for language practice with a voice module, backend prototype, and parent-facing web application.',project2Art:'AI + LANGUAGE LEARNING',
      project3Type:'PERSONAL PROJECT',project3Title:'FinTrack — personal finance app',project3Desc:'A finance-tracking interface built to practice typed React architecture, styling, and backend-connected workflows.',
      project4Type:'ENGINEERING INTERNSHIP',project4Title:'CPI API & dashboard',project4Desc:'Full-stack internship work involving an API and dashboard with structured data, frontend views, and a PostgreSQL-backed service.',
      project5Type:'PROFESSIONAL WORK',project5Title:'Complex website migrations & SEO fixes',project5Desc:'Practical engineering for live sites: redirects, multilingual technical SEO, indexing logic, Cloudflare and Nginx configuration.',
      project6Type:'PERSONAL PROJECT',project6Title:'Habit Tracker — JavaScript app',project6Desc:'A browser-based habit tracker built with vanilla JavaScript, object-oriented patterns, and local storage.',
      workNote:'Visuals are illustrative mockups; project descriptions reflect actual roles and development stages.',
      servicesKicker:'WHAT I CAN DO FOR YOU',servicesTitle:'The right skills for your next step<span class="accent-period">.</span>',servicesDescription:'Whether you need a quick fix or a new build, I focus on what will help your business move forward.',
      service1Title:'WordPress & WooCommerce',service1Desc:'Custom themes, ACF, Gutenberg, responsive layouts, WooCommerce functionality, and ongoing website improvements.',
      service2Title:'Website fixes & technical SEO',service2Desc:'Redirects, canonical and hreflang tags, site migrations, schema markup, performance investigation, and bug fixing.',
      service3Title:'Frontend development',service3Desc:'Fast, responsive interfaces and UI implementation with semantic HTML, CSS, JavaScript, React, and TypeScript.',
      service4Title:'MVPs, APIs & dashboards',service4Desc:'Early product prototypes, API integrations, backend-connected dashboards, and practical AI-powered web experiences.',
      aboutKicker:'A LITTLE ABOUT ME',aboutTitle:'More than just writing code<span class="accent-period">.</span>',aboutLead:'I’m Anastasiia Pyrohova, a Ukrainian software developer with hands-on commercial WordPress experience and a growing focus on full-stack products.',
      aboutBody:'I work at the intersection of engineering and product thinking. Alongside client-facing website work, I build independent applications, contribute to an early-stage EdTech startup, mentor young programmers, and study Computer Science at Sumy State University.',
      aboutArtTop:'CURIOSITY + CRAFT',aboutArtBottom:'Every detail has a purpose.',
      timeline1Title:'WordPress Developer',timeline1Sub:'Commercial websites & technical SEO',timeline2Title:'Full-Stack Engineering Internship',timeline2Sub:'NestJS, Next.js & PostgreSQL',timeline3Title:'BSc in Computer Science',timeline3Sub:'Sumy State University · in progress',aboutCta:'Let\'s discuss your idea',
      processKicker:'HOW WE WORK',processTitle:'Simple process. Clear progress<span class="accent-period">.</span>',processDescription:'No unnecessary complexity — just a collaborative path from problem to a finished solution.',
      process1Title:'Understand',process1Desc:'We clarify the goal, audience, scope, budget, and what success looks like.',process2Title:'Build',process2Desc:'I implement the solution, communicate updates, and refine the important details.',process3Title:'Launch',process3Desc:'We review the result, fix remaining issues, and prepare a smooth handoff.',
      contactKicker:'LET\'S TALK',contactTitle1:'Have something',contactTitle2:'in mind?',contactDescription:'Tell me about your website, idea, or problem. I’d love to hear what you\'re working on and see how I can help.',emailLink:'Email me',
      formHeading:'NEW PROJECT INQUIRY',formName:'Your name',formEmail:'Email address',formService:'What do you need?',formSelect:'Choose a service',formOption1:'WordPress / WooCommerce',formOption2:'Website fixes / SEO',formOption3:'Frontend development',formOption4:'MVP / API / dashboard',formOption5:'Something else',formMessage:'Tell me a little about your project',formSubmit:'Send project inquiry',formDisclaimer:'This form delivers messages when the site is deployed on Netlify. No tracking scripts or analytics are included.',footerMade:'Built with care and curiosity.',backTop:'Back to top'
    },
    uk: {
      pageTitle:'Анастасія Пирогова — WordPress та Full-Stack розробниця',
      pageDescription:'Анастасія Пирогова — WordPress та Full-Stack розробниця. Створення сайтів, технічне SEO, інтерфейси та вебзастосунки.',
      announcement:'Відкрита до фриланс-проєктів і співпраці',announcementCta:'Зв’язатися <span aria-hidden="true">↗</span>',
      navWork:'Проєкти',navServices:'Послуги',navAbout:'Про мене',navContact:'Контакти',navHire:'Замовити проєкт',
      heroEyebrow:'РОЗРОБНИЦЯ З ПРОДУКТОВИМ МИСЛЕННЯМ',heroTitle1:'Красиво зовні.',heroTitle2:'Надійно всередині.',
      heroIntroLead:'Привіт, я Анастасія.',heroIntro:'Створюю й покращую сайти на WordPress, сучасні інтерфейси та продукти з API — перетворюю складні технічні завдання на зрозумілі рішення.',
      heroPrimary:'Обговорімо ваш проєкт',heroSecondary:'Переглянути роботи',proof1:'роки комерційної веброзробки',proof2:'роки розробки та викладання',proof3:'віддалений формат співпраці',
      artKicker:'ЗАРАЗ СТВОРЮЮ',artTitle:'Від ідеї до<br/><em>дієвого продукту.</em>',artBlurb:'Від першого прототипу до готового рішення.',artStack:'ТЕХНОЛОГІЇ',floatTop:'Продуктове мислення',floatTopSub:'Фокус на ваших цілях',floatBottom:'Якісна реалізація',floatBottomSub:'Увага до деталей',scroll:'ГОРТАЙТЕ ДАЛІ',skillsLabel:'МІЙ СТЕК',
      workKicker:'ВИБРАНІ РОБОТИ',workTitle:'Проєкти зі змістом<span class="accent-period">.</span>',workDescription:'Комерційні завдання, власні розробки та продукти в процесі створення. Для кожного проєкту чесно вказана моя роль.',
      filterAll:'Усі проєкти <span>06</span>',filterWordPress:'WordPress',filterApps:'Застосунки й продукти',
      project1Type:'КОМЕРЦІЙНИЙ ДОСВІД',project1Title:'WordPress-розробка й технічне SEO',project1Desc:'Удосконалення робочих сайтів: функціональність WordPress, SEO-дружні URL, редиректи, canonical та hreflang, виправлення проблем продуктивності. Дані клієнтів не розголошую.',
      project2Type:'СТАРТАП · ПРОТОТИП',project2Title:'Aligna — AI-помічник для вивчення мов',project2Desc:'Співрозробляю EdTech-продукт на ранній стадії: іграшку для розмовної практики без екрана з голосовим модулем, серверним прототипом і батьківським вебзастосунком.',project2Art:'AI + ВИВЧЕННЯ МОВ',
      project3Type:'ВЛАСНИЙ ПРОЄКТ',project3Title:'FinTrack — застосунок для фінансів',project3Desc:'Інтерфейс обліку фінансів для практики архітектури React із TypeScript, стилізації та роботи із серверними сервісами.',
      project4Type:'ІНЖЕНЕРНЕ СТАЖУВАННЯ',project4Title:'CPI API і дашборд',project4Desc:'Full-stack проєкт під час стажування: API, аналітичний інтерфейс, структуровані дані та сервіс із PostgreSQL.',
      project5Type:'КОМЕРЦІЙНИЙ ДОСВІД',project5Title:'Міграції сайтів і виправлення SEO',project5Desc:'Технічні завдання на робочих сайтах: редиректи, багатомовне SEO, логіка індексації, налаштування Cloudflare та Nginx.',
      project6Type:'ВЛАСНИЙ ПРОЄКТ',project6Title:'Habit Tracker — JavaScript-застосунок',project6Desc:'Трекер звичок у браузері з чистим JavaScript, об’єктно-орієнтованим підходом та LocalStorage.',
      workNote:'Зображення проєктів — ілюстративні макети. Опис ролей і стадій розробки відповідає фактичному досвіду.',
      servicesKicker:'ЧИМ МОЖУ ДОПОМОГТИ',servicesTitle:'Рішення для ваших задач<span class="accent-period">.</span>',servicesDescription:'Від невеликого виправлення до нового продукту — зосереджуюся на тому, що справді допомагає бізнесу.',
      service1Title:'WordPress і WooCommerce',service1Desc:'Власні теми, ACF, Gutenberg, адаптивна верстка, функції WooCommerce та підтримка сайтів.',
      service2Title:'Виправлення сайтів і технічне SEO',service2Desc:'Редиректи, canonical і hreflang, міграції, структуровані дані, дослідження швидкодії та виправлення помилок.',
      service3Title:'Frontend-розробка',service3Desc:'Швидкі адаптивні інтерфейси на семантичному HTML, CSS, JavaScript, React та TypeScript.',
      service4Title:'MVP, API та дашборди',service4Desc:'Ранні прототипи продуктів, інтеграції API, дашборди із серверною частиною та практичні AI-функції для вебу.',
      aboutKicker:'ТРОХИ ПРО МЕНЕ',aboutTitle:'Більше, ніж просто код<span class="accent-period">.</span>',aboutLead:'Я Анастасія Пирогова, українська розробниця з комерційним досвідом роботи з WordPress та інтересом до full-stack продуктів.',
      aboutBody:'Поєдную інженерний підхід і продуктове мислення. Окрім роботи над сайтами, створюю власні застосунки, розвиваю EdTech-стартап на ранній стадії, викладаю програмування дітям і навчаюся на спеціальності «Комп’ютерні науки» в СумДУ.',
      aboutArtTop:'ДОПИТЛИВІСТЬ + МАЙСТЕРНІСТЬ',aboutArtBottom:'Кожна деталь має значення.',
      timeline1Title:'WordPress-розробниця',timeline1Sub:'Комерційні сайти й технічне SEO',timeline2Title:'Full-Stack стажування',timeline2Sub:'NestJS, Next.js та PostgreSQL',timeline3Title:'Бакалаврат із комп’ютерних наук',timeline3Sub:'Сумський державний університет · навчаюся',aboutCta:'Обговорімо вашу ідею',
      processKicker:'ЯК ВІДБУВАЄТЬСЯ РОБОТА',processTitle:'Простий процес. Зрозумілий прогрес<span class="accent-period">.</span>',processDescription:'Без зайвої складності — спільний шлях від проблеми до готового рішення.',
      process1Title:'Зрозуміти',process1Desc:'З’ясовуємо мету, аудиторію, обсяг, бюджет та критерії успіху.',process2Title:'Реалізувати',process2Desc:'Розробляю рішення, повідомляю про хід роботи та вдосконалюю деталі.',process3Title:'Запустити',process3Desc:'Перевіряємо результат, усуваємо недоліки та готуємо передачу проєкту.',
      contactKicker:'НА ЗВ’ЯЗКУ',contactTitle1:'Маєте ідею',contactTitle2:'для проєкту?',contactDescription:'Розкажіть про ваш сайт, ідею чи проблему. Буду рада дізнатися про завдання та обговорити, як можу допомогти.',emailLink:'Написати на пошту',
      formHeading:'НОВА ЗАЯВКА',formName:'Ваше ім’я',formEmail:'Електронна пошта',formService:'Що вам потрібно?',formSelect:'Оберіть послугу',formOption1:'WordPress / WooCommerce',formOption2:'Виправлення сайту / SEO',formOption3:'Frontend-розробка',formOption4:'MVP / API / дашборд',formOption5:'Інше',formMessage:'Коротко опишіть проєкт',formSubmit:'Надіслати заявку',formDisclaimer:'Форма надсилає повідомлення після публікації сайту на Netlify. Сторонніх трекерів або аналітики немає.',footerMade:'Створено з турботою до деталей.',backTop:'На початок'
    }
  };

  const safeStoredLanguage = () => {
    try { return localStorage.getItem('portfolio-language'); } catch { return null; }
  };
  let currentLanguage = safeStoredLanguage() === 'uk' ? 'uk' : 'en';
  const langSwitch = document.getElementById('language-switch');
  const langLabel = document.getElementById('language-label');
  const switchLanguage = (lang) => {
    currentLanguage = lang;
    const dictionary = translations[lang];
    document.documentElement.lang = lang;
    document.title = dictionary.pageTitle;
    document.querySelector('meta[name="description"]').setAttribute('content',dictionary.pageDescription);
    document.querySelector('meta[property="og:title"]').setAttribute('content',dictionary.pageTitle);
    document.querySelector('meta[property="og:description"]').setAttribute('content',dictionary.pageDescription);
    for (const el of document.querySelectorAll('[data-i18n]')) {
      const key = el.getAttribute('data-i18n');
      if (Object.hasOwn(dictionary, key)) el.innerHTML = dictionary[key];
    }
    langLabel.textContent = lang === 'en' ? 'UA' : 'EN';
    langSwitch.setAttribute('aria-label',lang === 'en' ? 'Switch language to Ukrainian' : 'Switch language to English');
    const name = document.getElementById('client-name');
    const email = document.getElementById('client-email');
    const message = document.getElementById('client-message');
    name.placeholder = lang === 'en' ? 'Jane Smith' : 'Ваше ім’я';
    email.placeholder = 'you@company.com';
    message.placeholder = lang === 'en' ? 'A short description, deadline, and budget if you have one...' : 'Опишіть завдання, термін і бюджет, якщо вже знаєте...';
    try { localStorage.setItem('portfolio-language',lang); } catch { /* storage blocked */ }
  };
  langSwitch.addEventListener('click',() => switchLanguage(currentLanguage === 'en' ? 'uk' : 'en'));
  switchLanguage(currentLanguage);

  const menuButton = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const setMenuOpen = (open) => {
    menuButton.setAttribute('aria-expanded',String(open));
    menuButton.setAttribute('aria-label',open ? 'Close menu' : 'Open menu');
    mobileNav.hidden = !open;
  };
  menuButton.addEventListener('click',() => setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true'));
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click',() => setMenuOpen(false)));
  document.addEventListener('keydown',(event) => { if(event.key === 'Escape') setMenuOpen(false); });
  window.addEventListener('resize',() => { if (window.innerWidth > 800) setMenuOpen(false); });

  document.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', () => {
      const value = button.dataset.filter;
      for (const filter of document.querySelectorAll('[data-filter]')) {
        const active = filter === button;
        filter.classList.toggle('active',active);
        filter.setAttribute('aria-pressed',String(active));
      }
      for (const card of document.querySelectorAll('.project-card')) {
        card.hidden = value !== 'all' && card.dataset.category !== value;
      }
    });
  });

  const config = window.PORTFOLIO_CONFIG || {};
  const validHttps = (value) => {
    if (typeof value !== 'string' || !value.trim()) return null;
    try {
      const url = new URL(value.trim());
      return url.protocol === 'https:' ? url.toString() : null;
    } catch { return null; }
  };
  for (const platform of ['upwork','linkedin','github']) {
    const element = document.querySelector(`[data-profile="${platform}"]`);
    const url = validHttps(config[platform]);
    if (url) { element.href = url; element.hidden = false; }
  }
  const email = typeof config.email === 'string' ? config.email.trim() : '';
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    const element = document.querySelector('[data-profile="email"]');
    element.href = `mailto:${email}`;
    element.hidden = false;
  }

  document.getElementById('year').textContent = new Date().getFullYear();
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }, { threshold:.08, rootMargin:'0px 0px 60px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }
})();
