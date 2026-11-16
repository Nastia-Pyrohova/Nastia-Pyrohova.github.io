(() => {
  'use strict';
  const cfg = window.SITE_CONFIG || {};
  const projects = Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [];
  const uk = {
    brandSubtitle: 'Розробниця · Дизайнерка · Засновниця стартапу',
    navWork: 'Проєкти', navServices: 'Послуги', navAbout: 'Про мене', navTeam: 'Команда', navWins: 'Досягнення', navContact: 'Контакти', navHire: 'Зв’язатися ↗',
    availability: 'Відкрита до фриланс-проєктів і співпраці',
    heroOverline: 'ІНЖЕНЕРІЯ · СТАРТАП · ЦИФРОВІ ПРОДУКТИ',
    heroTitle1: 'Перетворюю ідеї на',heroTitle2:'цифрові рішення.',
    heroLead: 'Привіт, я Анастасія — розробниця програмного забезпечення та засновниця Aligna. Створюю сайти, інтернет-магазини, вебзастосунки, Python-ботів і AI-рішення — самостійно або з перевіреними партнерами.',
    heroCta: 'Створімо щось разом',heroSecondary: 'Переглянути проєкти',
    heroMetric1: 'роки комерційної розробки',heroMetric2: 'роки викладання технологій',heroMetric3: 'цікавість до нових продуктів',
    heroSticker: 'Засновниця Aligna · EdTech-стартап', photoCaption:'АНАСТАСІЯ ПИРОГОВА / SOFTWARE ENGINEER',stackLabel:'ТЕХНОЛОГІЇ',
    servicesIndex:'01 / МОЇ ПОСЛУГИ',servicesTitle:'Ваша ідея. Мої навички.<br><em>Чудовий результат.</em>',
    servicesLead:'Дизайн і розробка для стартапів, малого бізнесу, авторів і команд, що зростають.',
    s1Title:'Сайти та лендінги',s1Desc:'Сайти для бізнесу, портфоліо та лендінги: від дизайну до адаптивної верстки й запуску.',
    s2Title:'Інтернет-магазини',s2Desc:'Каталоги товарів, дизайн магазинів, оптимізація оформлення замовлень, WooCommerce та інтеграції.',
    s3Title:'UI/UX та дизайн продуктів',s3Desc:'Шляхи користувача, вайрфрейми, дизайн інтерфейсів, інтерактивні прототипи та реалізація дизайну в коді.',
    s4Title:'Python-боти й автоматизація',s4Desc:'Telegram-боти, сповіщення, автоматичні перевірки, вебавтоматизація та скрипти для повторюваних завдань.',
    s5Title:'AI-функції та інтеграції',s5Desc:'AI-асистенти, інтеграції API, текстові та голосові функції, інструменти зі штучним інтелектом.',
    s6Title:'Вебзастосунки й API',s6Desc:'Дашборди, MVP, інтерфейси React, серверна логіка, бази даних та інтеграції.',
    s7Title:'WordPress & WooCommerce',s7Desc:'Теми, кастомні блоки, ACF, Gutenberg, інтеграції, доопрацювання функціональності.',
    s8Title:'Технічне SEO та покращення сайтів',s8Desc:'Редиректи, canonical, hreflang, міграції, структуровані дані, Cloudflare, Nginx та виправлення помилок.',
    workIndex:'02 / МОЇ ПРОЄКТИ',workTitle:'Проєкти та<br><em>кейси.</em>',
    workLead:'Тут зʼявлятимуться мої роботи: сайти, дизайн, магазини, Python-боти, AI і вебзастосунки. Нові кейси додаватиму поступово.',
    filterAll:'Усі',filterWeb:'Сайти та застосунки',filterStores:'Магазини',filterDesign:'Дизайн',filterBots:'Боти та AI',
    workFootnote:'Нові кейси готуються до публікації. Напишіть мені, якщо хочете обговорити приклади релевантних робіт.',
    aboutIndex:'03 / ПРО МЕНЕ',aboutTitle:'Інженерний підхід.<br><em>Продуктове мислення.</em>',
    aboutLead:'Я Анастасія Пирогова — інженерка програмного забезпечення, розробниця цифрових продуктів і засновниця Aligna — EdTech-стартапу на ранньому етапі.',
    aboutText:'З 2024 року працюю з комерційними сайтами, кастомним функціоналом, інтеграціями та технічним SEO. Мій досвід також охоплює фронтенд, застосунки на React і TypeScript, Python-ботів, системи з API, дизайн продуктів і AI-прототипи. Поєдную розробку з дослідженнями користувачів, плануванням продукту та увагою до зручності.',
    aboutText2:'Як засновниця стартапу та викладачка програмування, вмію брати відповідальність за результат, координувати роботу й спілкуватися з технічними та творчими командами. Моє завдання — створювати корисні, надійні й масштабовані цифрові рішення.',
    aboutLinkedIn:'Профіль LinkedIn ↗',aboutGithub:'Мій GitHub ↗',
    experienceTitle:'ДОСВІД І ОСВІТА',
    timeline1Title:'WordPress Developer · Already Media',timeline1Text:'Комерційні сайти, frontend-функціонал та технічне SEO.',
    timeline2Title:'Full-stack стажування · Kharkiv IT Cluster',timeline2Text:'API, дашборд і база даних для GovTech-проєкту.',
    timeline3Title:'Менторка й викладачка програмування',timeline3Text:'Допомагаю дітям і підліткам опановувати програмування.',
    timeline4Title:'Комп’ютерні науки · СумДУ',timeline4Text:'Навчаюся на бакалавраті за спеціальністю «Компʼютерні науки».',aboutToolkit:'ІНСТРУМЕНТИ Й ТЕХНОЛОГІЇ',
    teamIndex:'04 / СТАРТАП І СПІВПРАЦЯ',teamTitle:'Працюю самостійно.<br><em>Зростаю з командою.</em>',
    teamLead:'Я заснувала Aligna — EdTech-стартап на ранньому етапі, який досліджує, як штучний інтелект може зробити вивчення мов цікавішим і доступнішим.',
    teamBody:'Окрім власної розробки, я співпрацюю з перевіреним колом друзів і спеціалістів. Разом ми маємо досвід у дизайні, маркетингу, дослідженнях продукту, експериментах з AI та програмуванні. Для більших проєктів можемо об’єднувати експертизу, зберігаючи пряме й особисте спілкування.',
    teamCta:'Обговорімо ваш проєкт',teamNote:'Один контакт. Гнучка експертиза.',
    founderLabel:'ЗАСНОВНИЦЯ СТАРТАПУ',founderDesc:'CEO та розробниця · AI-навчання мов · Рання стадія',teamCapabilities:'НАША СПІЛЬНА ЕКСПЕРТИЗА',
    cap1:'Розробка програмного забезпечення',cap2:'UI/UX та візуальний дизайн',cap3:'Маркетинг і просування',cap4:'Продуктові дослідження',cap5:'AI та автоматизація',cap6:'Брендинг і контент',
    teamDisclosure:'Беру індивідуальні проєкти й невеликі командні замовлення; ролі та обсяг роботи узгоджуємо перед стартом.',
    winsIndex:'05 / ДОСЯГНЕННЯ',winsTitle:'Результати, за якими<br><em>стоїть робота.</em>',winsLead:'Кілька важливих етапів у розробці, конкурсах та розвитку продуктів.',
    win1Title:'Фіналістка Boot Camp',win1Desc:'Kharkiv IT Cluster — фіналістка Full-stack / GovTech Boot Camp 2026.',
    win2Title:'15-те місце з 558',win2Desc:'Proggy-Buggy Towel Contest 2026, аматорська категорія.',
    win3Title:'Засновниця та CEO Aligna',win3Desc:'Розвиваю EdTech-стартап як CEO та розробниця; учасниця Student Startup Fund 2026.',
    win4Title:'Диплом із відзнакою',win4Desc:'Фахова передвища освіта за спеціальністю «Комп’ютерна інженерія», Глухівський агротехнічний фаховий коледж.',
    contactEyebrow:'ВІДКРИТА ДО НОВИХ ПРОЄКТІВ',contactTitle:'Маєте ідею<br><em>для проєкту?</em>',
    contactText:'Потрібен сайт, магазин, дизайн, Python-бот, AI-функція або повноцінний цифровий продукт? Працюю самостійно або залучаю перевірених партнерів, якщо потрібна додаткова експертиза.',
    contactLinkedIn:'Написати в LinkedIn',contactUpwork:'Замовити на Upwork',contactFind:'МІЙ ПРОФІЛЬ ОНЛАЙН',
    contactSideNote:'Хороші ідеї заслуговують<br>на якісну реалізацію.',
    formLabel:'ШВИДКА ЗАЯВКА',formName:'Ваше ім’я',formEmail:'Електронна пошта',formService:'Яка послуга потрібна?',formChoose:'Оберіть послугу',
    formS1:'Сайт / лендінг',formS2:'Інтернет-магазин',formS3:'UI/UX дизайн',formS4:'Python-бот / автоматизація',formS5:'Інтеграція AI',formS6:'Вебзастосунок / API',formS7:'WordPress / технічне SEO',formOther:'Інше',
    formMessage:'Коротко про ваш проєкт',formSubmit:'Підготувати лист',
    formNote:'Відкриє поштовий застосунок із готовим листом. На сайті нічого не зберігається.',
    footerText:'· Розроблено з увагою до деталей.',footerBack:'Нагору ↑'
  };
  const en = Object.fromEntries([...document.querySelectorAll('[data-i18n]')].map(el => [el.dataset.i18n,el.innerHTML]));
  let lang = 'en';
  let filter = 'all';
  const allowedLangs=['en','uk'];
  const categoryLabels = {
    en:{web:'Web / App',commerce:'E-commerce',design:'Design',automation:'Automation / AI'},
    uk:{web:'Сайт / Застосунок',commerce:'Інтернет-магазин',design:'Дизайн',automation:'Автоматизація / AI'}
  };
  const $=sel=>document.querySelector(sel);
  const safeUrl=url => {
    try { const u=new URL(url,location.href); return ['https:','http:'].includes(u.protocol)?u.href:''; }
    catch {return ''}
  };
  function setLang(next){
    lang=allowedLangs.includes(next)?next:'en';
    document.documentElement.lang=lang==='uk'?'uk':'en';
    document.title=lang==='uk'?'Анастасія Пирогова — розробниця, дизайнерка та засновниця стартапу':'Anastasiia Pyrohova — Developer, Designer & Startup Founder';
    document.querySelector('meta[name="description"]').setAttribute('content',lang==='uk'?'Анастасія Пирогова — сайти, магазини, UI/UX дизайн, Python-боти, AI та вебзастосунки. Індивідуальна робота та співпраця з командою.':'Anastasiia Pyrohova builds websites, online stores, UI/UX designs, Python bots, AI features, and web apps. Independent freelancer and founder of Aligna.');
    for(const el of document.querySelectorAll('[data-i18n]')){
      const key=el.dataset.i18n;
      el.innerHTML=lang==='uk'?(uk[key]??en[key]??el.innerHTML):(en[key]??el.innerHTML);
    }
    $('#lang-toggle').innerHTML=lang==='uk'?'EN <span>⌄</span>':'UA <span>⌄</span>';
    $('#lang-toggle').setAttribute('aria-label',lang==='uk'?'Switch to English':'Перемкнути українською');
    try{localStorage.setItem('portfolio_lang',lang)}catch{}
    renderProjects();
  }
  function create(tag, className, text){
    const el=document.createElement(tag);
    if(className)el.className=className;
    if(text!==undefined)el.textContent=text;
    return el;
  }
  function renderProjects(){
    const root=$('#projects-grid');root.replaceChildren();
    const showDrafts = cfg.showDraftProjects !== false;
    const filtered=projects.filter(p=>(showDrafts||p.published) && (filter==='all'||p.category===filter));
    for(const [index,p] of filtered.entries()){
      const card=create('article','project-card '+(p.published?'is-published':'is-draft'));
      const media=create('div','project-media');
      media.append(create('span','project-media-num',String(index+1).padStart(2,'0')));
      if(p.published && p.image && typeof p.image==='string'){
        const img=create('img','project-image');
        const filename=p.image.replace(/^assets\/projects\//,'');
        // Images stay in a local folder; no user-supplied HTML or script URLs.
        if(/^[\w.-]+\.(?:webp|png|jpe?g|avif)$/i.test(filename)){
          img.src='assets/projects/'+filename; img.loading='lazy';img.alt=(p.title?.[lang]||p.title?.en||'')+' project image';
          media.append(img);
        }
      }
      if(!media.querySelector('img')){
        const holder=create('div','project-empty-box');
        holder.append(create('div','project-empty-icon','▧'));
        holder.append(create('div','project-empty-label',lang==='uk'?'Скріншот проєкту незабаром':'Project image coming soon'));
        media.append(holder);
      }
      const body=create('div','project-body');
      const top=create('div','project-top');
      top.append(create('span','project-category',categoryLabels[lang][p.category]||'Project'));
      top.append(create('span','project-state',p.published?(lang==='uk'?'КЕЙС':'CASE STUDY'):(lang==='uk'?'СКОРО':'COMING SOON')));
      body.append(top);
      body.append(create('h3','',p.title?.[lang]||p.title?.en||'Project'));
      body.append(create('p','',p.description?.[lang]||p.description?.en||''));
      const tags=create('div','project-tags');
      for(const tag of (Array.isArray(p.tech)?p.tech:[]).slice(0,5)) tags.append(create('span','',String(tag)));
      body.append(tags);
      const link=safeUrl(p.link||'');
      if(p.published && link){
        const a=create('a','project-view',lang==='uk'?'Переглянути проєкт ↗':'View project ↗');
        a.href=link;a.target='_blank';a.rel='noopener noreferrer';body.append(a);
      }
      card.append(media,body); root.append(card);
    }
    if(!filtered.length){root.append(create('p','empty-projects',lang==='uk'?'У цій категорії поки немає опублікованих проєктів.':'No published projects in this category yet.'))}
  }
  function applyLinks(){
    if(safeUrl(cfg.linkedin)){
      document.querySelectorAll('a.linkedin-link,#about-linkedin,#contact-linkedin').forEach(a=>a.href=safeUrl(cfg.linkedin));
    }
    if(safeUrl(cfg.github)){
      document.querySelectorAll('a.github-link').forEach(a=>a.href=safeUrl(cfg.github));
    }
    if(safeUrl(cfg.upwork)){
      $('#contact-upwork').hidden=false;$('#contact-upwork').href=safeUrl(cfg.upwork);
    }
    if(typeof cfg.email==='string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cfg.email)){
      $('#contact-email-link').hidden=false;
      $('#contact-email-link').href='mailto:'+cfg.email;
      $('#contact-form-card').hidden=false;
      $('#contact-side-note').hidden=true;
      $('#contact-form').addEventListener('submit',event=>{
        event.preventDefault();
        const f=event.currentTarget;
        if(!f.reportValidity())return;
        const title='Portfolio inquiry — '+f.elements.service.value;
        const message='Name: '+f.elements.name.value+'\nEmail: '+f.elements.email.value+'\nService: '+f.elements.service.value+'\n\n'+f.elements.message.value;
        window.location.href='mailto:'+cfg.email+'?subject='+encodeURIComponent(title)+'&body='+encodeURIComponent(message);
      });
    }
  }
  function init(){
    applyLinks();
    const menu=$('#mobile-nav');
    $('#menu-toggle').addEventListener('click',()=>{
      const expanded=$('#menu-toggle').getAttribute('aria-expanded')==='true';
      $('#menu-toggle').setAttribute('aria-expanded',String(!expanded));
      menu.hidden=expanded;
    });
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.hidden=true;$('#menu-toggle').setAttribute('aria-expanded','false')}));
    $('#lang-toggle').addEventListener('click',()=>setLang(lang==='en'?'uk':'en'));
    document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
      filter=btn.dataset.filter;
      document.querySelectorAll('[data-filter]').forEach(b=>{
        const active=b===btn;
        b.classList.toggle('is-active',active);
        b.setAttribute('aria-pressed',String(active));
      });
      renderProjects();
    }));
    $('#copyright-year').textContent=new Date().getFullYear();
    let stored='en';try{stored=localStorage.getItem('portfolio_lang')||'en'}catch{}
    setLang(stored);
  }
  init();
})();
