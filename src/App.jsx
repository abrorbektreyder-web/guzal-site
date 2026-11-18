import { useEffect, useMemo, useRef, useState } from 'react';

const heroImage = '/assets/guzal-hero-cutout.png';
const storyPoster = '/assets/guzal-hero-v2.png';
const storyVideo = '/assets/guzal-story.mp4';
const telegramPhone = '+998972322030';

const services = [
  {
    number: '01',
    title: 'Qovoq olish',
    ruTitle: 'Лифтинг век',
    ru: 'Лифтинг век',
    description: 'Nigohni ochib, yuz ifodasini yengil va tabiiy ko‘rsatadigan individual parvarish.',
    ruDescription: 'Индивидуальный уход, который открывает взгляд и сохраняет естественность мимики.',
    image: '/assets/service-qovoq.png',
    accent: 'rose',
  },
  {
    number: '02',
    title: 'Chistka',
    ruTitle: 'Чистка лица',
    ru: 'Чистка лица',
    description: 'Teri turiga mos yumshoq tozalash, yangilash va sog‘lom yorqinlikni qaytarish.',
    ruDescription: 'Мягкое очищение и обновление кожи с учётом её особенностей.',
    image: '/assets/service-chistka.png',
    accent: 'sage',
  },
  {
    number: '03',
    title: 'Botoks',
    ruTitle: 'Ботокс',
    ru: 'Ботокс',
    description: 'Mimikani asrab, mayda chiziqlarni yumshatishga yo‘naltirilgan ehtiyotkor yondashuv.',
    ruDescription: 'Деликатный подход для смягчения мимических линий без потери естественности.',
    image: '/assets/service-botoks.png',
    accent: 'gold',
  },
  {
    number: '04',
    title: 'Lab to‘ldirish',
    ruTitle: 'Увеличение губ',
    ru: 'Увеличение губ',
    description: 'Proportsiyani saqlagan holda yumshoq kontur va tabiiy hajm uchun konsultatsiya.',
    ruDescription: 'Консультация для мягкого контура и естественного объёма с сохранением пропорций.',
    image: '/assets/service-lab.png',
    accent: 'plum',
  },
];

const navItems = {
  uz: [{ label: 'Xizmatlar', href: '#services' }, { label: 'Jarayon', href: '#story' }, { label: 'Aloqa', href: '#booking' }],
  ru: [{ label: 'Услуги', href: '#services' }, { label: 'Процесс', href: '#story' }, { label: 'Контакты', href: '#booking' }],
};

const copy = {
  uz: {
    eyebrow: 'Kosmetologiya studiyasi · Ташкент',
    heroTitle: <><span>Tabiiy</span><em>go‘zallik</em><span>sizdan boshlanadi.</span></>,
    heroDescription: 'Yuzingizdagi o‘ziga xoslikni saqlagan holda, professional parvarish va nozik estetikaga asoslangan xizmatlar.',
    bookingCta: 'Konsultatsiyaga yozilish',
    servicesLink: 'Xizmatlarni ko‘rish',
    proof: 'ayollar ishonchi bilan',
    servicesEyebrow: 'Xizmatlar',
    servicesTitle: <>Har bir detalda<br /><em>muloyim aniqlik.</em></>,
    servicesIntro: 'Sizga mos yechim, ochiq konsultatsiya va tabiiy natijaga yo‘naltirilgan parvarish.',
    expertiseEyebrow: 'Professionalizm',
    expertiseTitle: <>Yuzingiz —<br /><em>bizning mas’uliyat.</em></>,
    expertiseText: 'GUZAL’da protsedura emas, sizning individual natijangiz markazda turadi. Har bir qadam — konsultatsiyadan parvarishgacha — tushunarli va ehtiyotkorlik bilan bajariladi.',
    expertiseQuote: 'Nozik yondashuv. Ko‘rinadigan natija.',
    statOne: 'Individual konsultatsiya', statTwo: 'Premium parvarish', statThree: 'Tabiiy estetik yondashuv',
    approachEyebrow: 'Bizning yondashuv',
    approachTitle: <>Go‘zallik —<br /><em>o‘zingizga qaytish.</em></>,
    approachText: 'GUZAL’da har bir tashrif tinglashdan boshlanadi. Biz sizga mos parvarish rejasini tanlaymiz, jarayonni tushuntiramiz va natijani shoshmasdan quramiz.',
    planTitle: 'Individual reja', planText: 'Teringiz va maqsadingizga mos.',
    resultTitle: 'Tabiiy natija', resultText: 'Yuzingiz sizligicha qoladi.',
    approachCta: 'Konsultatsiya olish',
    bookingEyebrow: 'Yozilish',
    bookingTitle: <>Keyingi qadam<br /><em>sizniki.</em></>,
    bookingText: 'Formani to‘ldiring — siz bilan bog‘lanib, qulay vaqt va xizmatni birga aniqlaymiz.',
    phoneLabel: 'Telefon', telegramLabel: 'Telegram',
    quickReply: 'Tezkor javob', name: 'Ismingiz', phone: 'Telefon raqamingiz', service: 'Xizmatni tanlang', date: 'Qulay sana', time: 'Qulay vaqt', note: 'Izohingiz', consent: 'Ma’lumotlarim bilan bog‘lanishga roziman.', submit: 'Telegram orqali yuborish', formNote: 'Yuborish tugmasi Telegram’da tayyorlangan xabarni ochadi.',
    success: 'So‘rov tayyorlandi. Telegram oynasi ochildi.',
  },
  ru: {
    eyebrow: 'Косметологическая студия · Ташкент',
    heroTitle: <><span>Естественная</span><em>красота</em><span>начинается с вас.</span></>,
    heroDescription: 'Профессиональный уход и деликатная эстетика, которые подчёркивают вашу индивидуальность.',
    bookingCta: 'Записаться на консультацию',
    servicesLink: 'Смотреть услуги',
    proof: 'выбор наших клиентов',
    servicesEyebrow: 'Услуги',
    servicesTitle: <>Точность<br /><em>в каждой детали.</em></>,
    servicesIntro: 'Персональный план, честная консультация и естественный результат.',
    expertiseEyebrow: 'Профессионализм',
    expertiseTitle: <>Ваше лицо —<br /><em>наша ответственность.</em></>,
    expertiseText: 'В GUZAL в центре стоит не процедура, а ваш индивидуальный результат. Каждый шаг — от консультации до ухода — понятный и деликатный.',
    expertiseQuote: 'Деликатный подход. Видимый результат.',
    statOne: 'Персональная консультация', statTwo: 'Премиальный уход', statThree: 'Естественная эстетика',
    approachEyebrow: 'Наш подход',
    approachTitle: <>Красота —<br /><em>это возвращение к себе.</em></>,
    approachText: 'В GUZAL каждый визит начинается с диалога. Мы подбираем уход под ваши цели, объясняем каждый шаг и бережно создаём результат.',
    planTitle: 'Персональный план', planText: 'Под особенности вашей кожи.',
    resultTitle: 'Естественный результат', resultText: 'Вы остаетесь собой.',
    approachCta: 'Получить консультацию',
    bookingEyebrow: 'Запись',
    bookingTitle: <>Следующий шаг<br /><em>за вами.</em></>,
    bookingText: 'Заполните форму — мы свяжемся с вами и вместе подберём удобное время и услугу.',
    phoneLabel: 'Телефон', telegramLabel: 'Telegram',
    quickReply: 'Быстрый ответ', name: 'Ваше имя', phone: 'Номер телефона', service: 'Выберите услугу', date: 'Удобная дата', time: 'Удобное время', note: 'Комментарий', consent: 'Я согласен(на) на связь со мной.', submit: 'Отправить через Telegram', formNote: 'Кнопка откроет подготовленное сообщение в Telegram.',
    success: 'Заявка подготовлена. Окно Telegram открыто.',
  },
};

function Icon({ name, size = 20 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  if (name === 'arrow') return <svg {...common}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>;
  if (name === 'spark') return <svg {...common}><path d="m12 3 1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8L12 3Z" /><path d="m19 3 .5 1.5L21 5l-1.5.5L19 7l-.5-1.5L17 5l1.5-.5L19 3Z" /></svg>;
  if (name === 'menu') return <svg {...common}><path d="M4 7h16M4 12h16M4 17h10" /></svg>;
  if (name === 'play') return <svg {...common}><path d="m9 6 9 6-9 6V6Z" /></svg>;
  if (name === 'check') return <svg {...common}><path d="m5 12 4.2 4L19 6" /></svg>;
  if (name === 'send') return <svg {...common}><path d="m21 3-8.5 18-3.1-7.4L2 10.5 21 3Z" /><path d="m9.4 13.6 4.2-4.2" /></svg>;
  if (name === 'phone') return <svg {...common}><path d="M6.6 3.5 9 3l2 4.5-1.6 1.6a15 15 0 0 0 5.5 5.5l1.6-1.6 4.5 2-.5 2.4c-.2 1-1.1 1.7-2.2 1.6C10.5 18.3 5.7 13.5 5 5.7c-.1-1.1.6-2 1.6-2.2Z" /></svg>;
  return null;
}

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(node);
      }
    }, { threshold: 0.14 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, className = '', delay = 0 }) {
  const [ref, visible] = useReveal();
  return <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>{children}</div>;
}

function ServiceCard({ service, index, language }) {
  const cardRef = useRef(null);
  const frameRef = useRef(0);
  const tiltRef = useRef({ currentX: 0, currentY: 0, targetX: 0, targetY: 0 });

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  const animateTilt = () => {
    const card = cardRef.current;
    const tilt = tiltRef.current;
    if (!card) return;

    tilt.currentX += (tilt.targetX - tilt.currentX) * 0.16;
    tilt.currentY += (tilt.targetY - tilt.currentY) * 0.16;
    card.style.setProperty('--rotate-x', `${tilt.currentX.toFixed(3)}deg`);
    card.style.setProperty('--rotate-y', `${tilt.currentY.toFixed(3)}deg`);

    const isSettled = Math.abs(tilt.targetX - tilt.currentX) < 0.01 && Math.abs(tilt.targetY - tilt.currentY) < 0.01;
    if (isSettled) {
      tilt.currentX = tilt.targetX;
      tilt.currentY = tilt.targetY;
      card.style.setProperty('--rotate-x', `${tilt.currentX}deg`);
      card.style.setProperty('--rotate-y', `${tilt.currentY}deg`);
      frameRef.current = 0;
      return;
    }

    frameRef.current = requestAnimationFrame(animateTilt);
  };

  const requestTiltFrame = () => {
    if (!frameRef.current) frameRef.current = requestAnimationFrame(animateTilt);
  };

  const handleMove = (event) => {
    const card = cardRef.current;
    if (!card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    tiltRef.current.targetX = y * -3;
    tiltRef.current.targetY = x * 4;
    requestTiltFrame();
  };
  const handleLeave = () => {
    tiltRef.current.targetX = 0;
    tiltRef.current.targetY = 0;
    requestTiltFrame();
  };

  return (
    <Reveal delay={index * 90} className="service-reveal">
      <article ref={cardRef} className={`service-card service-card--${service.accent}`} style={{ '--float-delay': `${index * 0.7}s` }} onPointerMove={handleMove} onPointerLeave={handleLeave}>
        <div className="service-card__top">
          <span className="service-number">{service.number}</span>
          <span className="service-status"><span className="status-dot" /> Individual</span>
        </div>
        <div className="service-card__body">
          <p className="service-ru">{language === 'uz' ? service.ru : service.title}</p>
          <h3>{language === 'uz' ? service.title : service.ruTitle}</h3>
          <p>{language === 'uz' ? service.description : service.ruDescription}</p>
        </div>
        <a className="service-link" href="#booking" aria-label={`${service.title} uchun konsultatsiya olish`}>
          {language === 'uz' ? 'Konsultatsiya' : 'Консультация'} <Icon name="arrow" size={18} />
        </a>
        <div className="service-visual" aria-hidden="true"><img src={service.image} alt="" loading="lazy" width="720" height="900" /></div>
      </article>
    </Reveal>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('uz');
  const [formState, setFormState] = useState({ name: '', phone: '', service: 'Xizmatni tanlang', date: '', time: '', message: '', consent: false });
  const [submitted, setSubmitted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const formattedPhone = useMemo(() => '+998 97 232 20 30', []);
  const t = copy[language];

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;
    setFormState((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formState.consent) return;
    const message = [
      'GUZAL — yangi konsultatsiya so‘rovi',
      `Ism: ${formState.name}`,
      `Telefon: ${formState.phone}`,
      `Xizmat: ${formState.service}`,
      `Sana: ${formState.date || 'Kelishiladi'}`,
      `Vaqt: ${formState.time || 'Kelishiladi'}`,
      `Izoh: ${formState.message || 'Yo‘q'}`,
    ].join('\n');
    setSubmitted(true);
    window.open(`https://t.me/${telegramPhone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const scrollToBooking = () => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="site-shell">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="GUZAL bosh sahifa">
          <span className="brand-mark"><span /><span /><span /></span>
          <span className="brand-word">guzal<span>.</span></span>
        </a>
        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Asosiy navigatsiya">
          {navItems[language].map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          <a className="nav-phone" href={`tel:${telegramPhone}`}><Icon name="phone" size={16} /> {formattedPhone}</a>
        </nav>
        <div className="header-actions">
          <button className="language-switch" type="button" onClick={() => setLanguage(language === 'uz' ? 'ru' : 'uz')} aria-label="Tilni almashtirish">{language === 'uz' ? 'UZ / RU' : 'RU / UZ'}</button>
          <a className="header-telegram" href={`https://t.me/${telegramPhone}`} target="_blank" rel="noreferrer">Telegram <Icon name="arrow" size={16} /></a>
          <button className="menu-button" type="button" aria-label="Menyuni ochish" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name="menu" size={22} /></button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-copy">
            <Reveal><p className="eyebrow"><span className="eyebrow-line" /> {t.eyebrow}</p></Reveal>
            <Reveal delay={80}><h1>{t.heroTitle}</h1></Reveal>
            <Reveal delay={150}><p className="hero-description">{t.heroDescription}</p></Reveal>
            <Reveal delay={230} className="hero-actions">
              <button type="button" className="button button--dark" onClick={scrollToBooking}>{t.bookingCta} <Icon name="arrow" size={18} /></button>
              <a className="text-link" href="#services">{t.servicesLink} <Icon name="arrow" size={17} /></a>
            </Reveal>
            <Reveal delay={300} className="hero-proof">
              <span className="hero-proof-score">5.0</span>
              <span className="hero-proof-rule" aria-hidden="true" />
              <span>{t.proof}</span>
            </Reveal>
          </div>

          <div className="hero-visual" aria-label="GUZAL kosmetologiya portreti">
            <div className="hero-glow" aria-hidden="true" />
            <div className="hero-image-frame">
              <img src={heroImage} alt="GUZAL kosmetologiya studiyasi uchun portret" width="768" height="1344" fetchPriority="high" />
              <div className="image-shine" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="marquee-band" aria-label="GUZAL xizmatlari">
          <div className="marquee-track"><span>care that feels like you</span><span className="marquee-dot">✦</span><span>естественная красота</span><span className="marquee-dot">✦</span><span>care that feels like you</span><span className="marquee-dot">✦</span><span>естественная красота</span></div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading">
            <Reveal><p className="eyebrow"><span className="eyebrow-line" /> {t.servicesEyebrow}</p></Reveal>
            <Reveal delay={80}><h2>{t.servicesTitle}</h2></Reveal>
            <Reveal delay={140}><p className="section-intro">{t.servicesIntro}</p></Reveal>
          </div>
          <div className="service-grid">{services.map((service, index) => <ServiceCard key={service.number} service={service} index={index} language={language} />)}</div>
        </section>

        <section className="expertise-section">
          <div className="expertise-copy">
            <Reveal><p className="eyebrow eyebrow--light"><span className="eyebrow-line" /> {t.expertiseEyebrow}</p></Reveal>
            <Reveal delay={80}><h2>{t.expertiseTitle}</h2></Reveal>
            <Reveal delay={150}><p>{t.expertiseText}</p></Reveal>
            <Reveal delay={220}><span className="expertise-quote">“{t.expertiseQuote}”</span></Reveal>
          </div>
          <Reveal delay={120} className="expertise-stage">
            <div className="expertise-ring expertise-ring--one" aria-hidden="true" />
            <div className="expertise-ring expertise-ring--two" aria-hidden="true" />
            <div className="expertise-orb"><img src="/assets/gel-sphere.webp" alt="" loading="lazy" width="900" height="1120" /></div>
            <span className="expertise-stage-label">skin / science / art</span>
          </Reveal>
          <div className="expertise-metrics">
            <div><strong>01</strong><span>{t.statOne}</span></div>
            <div><strong>02</strong><span>{t.statTwo}</span></div>
            <div><strong>03</strong><span>{t.statThree}</span></div>
          </div>
        </section>

        <section className="story-section" id="story">
          <div className="story-media">
              <video src={storyVideo} autoPlay muted loop playsInline preload="metadata" poster={storyPoster} aria-label="GUZAL kosmetologi ish jarayoni videosi" />
            <div className="story-overlay" />
            <div className="story-play"><Icon name="play" size={18} /><span>real process / 00:45</span></div>
            <span className="story-caption">beauty, without<br /><em>overdoing it.</em></span>
          </div>
          <div className="story-copy">
            <Reveal><p className="eyebrow eyebrow--light"><span className="eyebrow-line" /> {t.approachEyebrow}</p></Reveal>
            <Reveal delay={90}><h2>{t.approachTitle}</h2></Reveal>
            <Reveal delay={160}><p>{t.approachText}</p></Reveal>
            <Reveal delay={230} className="story-points">
              <div><span><Icon name="check" size={16} /></span><p><strong>{t.planTitle}</strong><br />{t.planText}</p></div>
              <div><span><Icon name="check" size={16} /></span><p><strong>{t.resultTitle}</strong><br />{t.resultText}</p></div>
            </Reveal>
            <Reveal delay={290}><a className="button button--light" href="#booking">{t.approachCta} <Icon name="arrow" size={18} /></a></Reveal>
          </div>
        </section>

        <section className="section booking-section" id="booking">
          <div className="booking-intro">
            <Reveal><p className="eyebrow"><span className="eyebrow-line" /> {t.bookingEyebrow}</p></Reveal>
            <Reveal delay={80}><h2>{t.bookingTitle}</h2></Reveal>
            <Reveal delay={140}><p>{t.bookingText}</p></Reveal>
            <Reveal delay={200} className="contact-stack">
              <a href={`tel:${telegramPhone}`}><span className="contact-icon"><Icon name="phone" size={18} /></span><span><small>{t.phoneLabel}</small><strong>{formattedPhone}</strong></span></a>
              <a href={`https://t.me/${telegramPhone}`} target="_blank" rel="noreferrer"><span className="contact-icon"><Icon name="send" size={18} /></span><span><small>{t.telegramLabel}</small><strong>{language === 'uz' ? 'Telegram orqali yozish' : 'Написать в Telegram'}</strong></span></a>
            </Reveal>
          </div>
          <Reveal delay={100} className="form-reveal">
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-header"><span>01 — 05</span><span>{t.quickReply}</span></div>
              <div className="form-grid">
                <label>{t.name}<input name="name" value={formState.name} onChange={updateField} placeholder={language === 'uz' ? 'Ism va familiya' : 'Имя и фамилия'} required /></label>
                <label>{t.phone}<input name="phone" type="tel" value={formState.phone} onChange={updateField} placeholder="+998 90 000 00 00" required /></label>
                <label>{t.service}<select name="service" value={formState.service} onChange={updateField}><option>{t.service}</option>{services.map((service) => <option key={service.number}>{language === 'uz' ? service.title : service.ruTitle}</option>)}</select></label>
                <label>{t.date}<input name="date" type="date" value={formState.date} onChange={updateField} /></label>
                <label>{t.time}<select name="time" value={formState.time} onChange={updateField}><option value="">{language === 'uz' ? 'Tanlang' : 'Выберите'}</option><option>09:00 — 12:00</option><option>12:00 — 15:00</option><option>15:00 — 19:00</option></select></label>
                <label className="form-wide">{t.note}<textarea name="message" value={formState.message} onChange={updateField} placeholder={language === 'uz' ? 'Savolingiz yoki qo‘shimcha ma’lumot...' : 'Ваш вопрос или дополнительная информация...'} rows="3" /></label>
              </div>
              <label className="consent"><input name="consent" type="checkbox" checked={formState.consent} onChange={updateField} required /><span className="checkmark"><Icon name="check" size={13} /></span><span>{t.consent}</span></label>
              <button className="button button--dark form-submit" type="submit">{t.submit} <Icon name="send" size={17} /></button>
              {submitted && <p className="form-success" role="status"><Icon name="check" size={17} /> {t.success}</p>}
              <p className="form-note">{t.formNote}</p>
            </form>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <div><a className="brand brand--footer" href="#top"><span className="brand-mark"><span /><span /><span /></span><span className="brand-word">guzal<span>.</span></span></a><p>Yuzingizdagi o‘ziga xoslikni<br />avaylab parvarish qilamiz.</p></div>
          <div className="footer-cta"><span>Ready when you are</span><a href="#booking">Yozilish <Icon name="arrow" size={18} /></a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} GUZAL. All rights reserved.</span><span>O‘zbekcha · Русский</span><span><a href={`tel:${telegramPhone}`}>{formattedPhone}</a> · <a href={`https://t.me/${telegramPhone}`}>Telegram</a></span></div>
      </footer>
    </div>
  );
}

export default App;
