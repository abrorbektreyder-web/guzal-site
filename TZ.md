# GUZAL Cosmetology — texnik topshiriq

## 1. Maqsad

- [x] GUZAL nomi bilan premium kosmetologiya landing-site yaratish.
- [x] Asosiy tilni o‘zbekcha qilish, ruscha tilga tayyor tuzilma qoldirish.
- [x] Asosiy CTA’ni Telegram va telefon orqali bog‘lash.
- [x] Sayt ichida to‘liq konsultatsiya/bron forma qo‘shish.

## 2. Manba va kontent

- [x] `REFERENCE` papkasidagi MotionSites reference’larini tahlil qilish.
- [x] `MANBA-ISHODNIK` papkasidagi 768×1344 PNG portretni hero asset sifatida tanlash.
- [x] `MANBA-ISHODNIK` papkasidagi 720×1280, 45.2 soniyalik MP4’ni jarayon/video section uchun ishlatish.
- [x] Kontakt raqamini qo‘shish: `+998 97 232 20 30`.
- [x] Xizmatlar ro‘yxatini qo‘shish: qovoq olish, chistka, botoks, lab to‘ldirish.

## 3. Visual direction

- [x] Premium ivory / blush / cocoa rang palitrasi.
- [x] Reference’dagi hero hierarchy, vertical category card va cinematic video yondashuvlarini birlashtirish.
- [x] CSS 3D orb, glass layer, parallax va soft grain effektlarini qo‘shish.
- [x] Serif display heading + clean sans-serif UI typography.
- [x] Emoji o‘rniga inline SVG ikonlardan foydalanish.

## 4. Sahifa tuzilmasi

- [x] Sticky navigation va Telegram CTA.
- [x] Hero section: portrait image, 3D orb, trust badge, primary CTA.
- [x] Services section: 4 ta xizmat card’i, hover/tilt motion.
- [x] Process/video section: manba MP4, muted loop, play affordance.
- [x] About/trust section: GUZAL positioning va konsultatsiya foydasi.
- [x] Full booking form: ism, telefon, xizmat, sana, vaqt, izoh, rozilik.
- [x] Footer: telefon, Telegram, xizmatlar, ish vaqti.

## 5. Engineering va UX

- [x] React + Vite loyiha strukturasi.
- [x] Mobile-first responsive layout: 375px, tablet, desktop.
- [x] IntersectionObserver reveal animation.
- [x] `prefers-reduced-motion` fallback.
- [x] Form validation va Telegram deep-link message.
- [x] UZ/RU til switcher va asosiy matnlar uchun ikki tilli copy.
- [x] Accessible labels, focus states, keyboard navigation, alt text.
- [x] Hero media uchun layout shift’ni oldini olish.
- [x] Production build va local preview test.

## 6. QA

- [x] `npm run build` muvaffaqiyatli o‘tishi.
- [x] `START-SITE.bat` orqali bir-click local preview launcher qo‘shish.
- [x] Hero portret crop’i yumshatildi: yuzning ko‘proq qismi ko‘rinadigan qilindi.
- [x] Hero rasm atrofidagi mayda dekorativ card, badge, orbit va nuqtalar olib tashlandi.
- [x] Yangi 5 ta reference video tahlili va cinematic/3D style guide yozildi.
- [x] Jarayon section’iga dark cinematic stage, perspective depth, grid va light-sweep animation qo‘shildi.
- [x] 4 ta kosmetologiya uchun stock-style visual asset qo‘shildi.
- [x] Xizmat card’lariga image crop, glass border, slow float, hover zoom va 3D tilt qo‘shildi.
- [x] PNG asset’lar WebP’ga optimizatsiya qilindi.
- [x] Hero layout qayta dizayn qilindi: cinematic dark stage, portret + kosmetolog video + 3D product orb.
- [x] Xizmat card’lari kattalashtirildi va full-bleed image mosaic ko‘rinishiga o‘tkazildi.
- [x] Professionalizmni ko‘rsatadigan expertise section, 3D orb va 3 ta credibility metric qo‘shildi.
- [ ] Desktop screenshot bilan vizual tekshiruv.
- [ ] Mobile screenshot bilan vizual tekshiruv.
- [x] Form field’lari, required consent va Telegram deep-link logic kod review orqali tekshirildi.
- [x] Git diff/status va branch holatini tekshirish.

> QA eslatma: local Vite build ishladi. Windows CUA browser preview’iga localhost ulanishi muhit cheklovi sababli amalga oshmadi; loyiha `npm run dev` bilan lokal preview uchun tayyor.

