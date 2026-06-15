// 1. Starfield Background Simulator
const canvas = document.getElementById('starsCanvas');
if (!canvas) console.warn('starsCanvas not found');
const ctx = canvas ? canvas.getContext('2d') : null;
let stars = [];
const numStars = 120;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Star {
    constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.size = Math.random() * 1.5 + 0.5;
        this.speed = Math.random() * 0.4 + 0.1;
        this.opacity = Math.random() * 0.5 + 0.3;
    }
    update() {
        this.y += this.speed;
        if (this.y > canvas.height) this.reset();
    }
    draw() {
        ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

for (let i = 0; i < numStars; i++) stars.push(new Star());

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        star.update();
        star.draw();
    });
    requestAnimationFrame(animateStars);
}
animateStars();

// 2. Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
} else {
    console.debug('mobileMenuBtn or navLinks not found; skipping mobile menu wiring');
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a, .nav-links button').forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
        if (navLinks) navLinks.classList.remove('active');
    });
});

// 3. Localization Dictionaries (English / Arabic Data Matrix)
const i18n = {
    en: {
        langText: "العربية",
        dir: "ltr",
        align: "text-left",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        badge: "Ready to build massive ideas",
        title: 'Hi, I am <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-yellow-600">Rasool Hussein Salman</span>',
        desc: "A Computer Science graduate specializing in full-stack web architecture and high-performance database optimization. I have a deep passion for building polished, interactive frontends and secure, scalable backend solutions.",
        btnText: "Explore Projects",
        skillsTitle: "Technical Core",
        skillsDesc: "The modern stack and tools I leverage to engineer robust, full-scale digital architectures.",
        skCard1: "Frontend Architecture",
        skCard2: "Backend & Big Data",
        skCard3: "Networks & Cyber Security",
        projTitle: "Featured Projects",
        projDesc: "A curated showcase of production-ready systems, highlighting data optimization and full-stack capabilities.",
        exploreRepo: "EXPLORE REPOSITORY",
        viewMore: "View More Projects",
        ctTitle: "Have a project in mind? Let's connect.",
        ctDesc: "I'm currently open to software engineering roles and building advanced systems requiring optimized architectures. Reach out directly!",
        ctMail: "Drop an Email",
        whatsapp: "WhatsApp",
        projectsData: [
            {
                title: "High-Performance Flight Data Dashboard (30M+ Records)",
                tech: "React.js • DuckDB • Parquet Files • Analytics",
                        desc: "Engineered an analytical system integrating DuckDB and columnar Parquet files to query and aggregate over 30 million flight records with sub-second performance.",
                        repo: "https://github.com/ro505m/flight-insights"
            },
            {
                title: "Student Attendance Tracking System via QR Code",
                tech: "React.js • Express.js • Shadcn UI • MongoDB",
                        desc: "Architected a full-stack tracking system featuring dynamic, time-sensitive QR codes and robust backend cross-validation to completely eliminate proxy attendance.",
                        repo: "https://github.com/ro505m/Smart-Attendance-Management-System-using-QR-Code"
            },
            {
                title: "Smart Reforestation Campaign Platform (Reforest Iraq)",
                tech: "React.js • Tailwind CSS • Mapping APIs",
                        desc: "Designed an environmental sustainability dashboard visualizing automated drone flight paths and pinpointing optimal target zones for tree planting.",
                        repo: "https://github.com/ro505m/terra-drone"
            },
            {
                title: "Municipal Complaints & Citizen Services Portal",
                tech: "Vanilla JavaScript • HTML5/CSS3 • Express.js",
                        desc: "Built a lightweight citizen service platform utilizing a zero-dependency frontend paired with an Express.js backend for fast, clean processing.",
                        repo: "https://github.com/ro505m/Municipal-Complaints-Citizen-Services-Portal"
            }
        ]
    },
    ar: {
        langText: "English",
        dir: "rtl",
        align: "text-right",
        about: "من أنا",
        skills: "المهارات",
        projects: "المشاريع",
        contact: "تواصل معي",
        badge: "جاهز لبناء الأفكار العظيمة",
        title: 'أهلاً، أنا <br><span class="text-transparent bg-clip-text bg-gradient-to-l from-gold-400 via-gold-500 to-yellow-600">رسول حسين سلمان</span>',
        desc: "خريج علوم حاسوب متخصص في هندسة البرمجيات المتكاملة وتحسين قواعد البيانات الضخمة. أمتلك شغفاً كبيراً ببناء واجهات مستخدم تفاعلية فخمة وحلول خلفية آمنة ومستقرة.",
        btnText: "تصفح مشاريعي",
        skillsTitle: "ترسانتي التقنية",
        skillsDesc: "التقنيات والأدوات التي أستخدمها لتحويل الأفكار المعقدة إلى منتجات رقمية حقيقية.",
        skCard1: "الواجهات الأمامية",
        skCard2: "الخوادم والبيانات الضخمة",
        skCard3: "الشبكات والأمن السيبراني",
        projTitle: "المشاريع البارزة",
        projDesc: "مجموعة من أهم أعمالي التي تجمع بين معالجة البيانات الضخمة، حلول الويب، والابتكار الهيكلي.",
        exploreRepo: "استكشف المستودع",
        viewMore: "عرض المزيد من المشاريع",
        ctTitle: "هل لديك مشروع مميز لنعمل عليه؟",
        ctDesc: "أنا متاح دائماً للفرص الوظيفية المتميزة، أو لبناء ميزات معقدة تتطلب كفاءة برمجية عالية. تواصل معي مباشرة!",
        ctMail: "راسلني عبر البريد",
        whatsapp: "واتساب",
        projectsData: [
            {
                title: "لوحة بيانات رحلات الطيران (30M+ Records)",
                tech: "React.js • DuckDB • Parquet Files • Analytics",
                desc: "نظام تحليلي متقدم يعالج ويحلل ويستعلم عن أكثر من 30 مليون سجل طيران بكفاءة مذهلة وسرعة استجابة لا تتعدى أجزاء من الثانية بفضل دمج معالجة قواعد البيانات العمودية.",
                repo: "https://github.com/ro505m/flight-insights"
            },
            {
                title: "نظام تسجيل حضور الطلاب الذكي عبر الـ QR Code",
                tech: "React.js • Express.js • Shadcn UI • MongoDB",
                desc: "تطبيق ويب متكامل يعتمد على الرموز التفاعلية المتغيرة زمنياً لتسجيل الحضور، مع آليات برمجية خلفية صارمة لمنع تسجيل الحضور الوهمي أو الحضور بالنيابة.",
                repo: "https://github.com/ro505m/Smart-Attendance-Management-System-using-QR-Code"
            },
            {
                title: "منصة حملة إعادة التشجير الذكية (Reforest Iraq)",
                tech: "React.js • Tailwind CSS • Mapping APIs",
                desc: "واجهة عرض وتفاعل سينمائية تتيح للمستخدمين استكشاف مسارات طيران الدرونات الآلية وتحديد وتصنيف الأماكن الجغرافية الأكثر ملاءمة لزراعة الأشجار.",
                repo: "https://github.com/ro505m/terra-drone"
            },
            {
                title: "بوابة البلاغات والخدمات البلدية للمواطنين",
                tech: "Vanilla JavaScript • HTML5/CSS3 • Express.js",
                desc: "نظام خدمي لتقديم الشكاوى ومتابعتها، صمم بواجهة أمامية خفيفة جداً وخالية تماماً من المكتبات الخارجية لضمان أعلى سرعة تحميل وأداء على الأجهزة الضعيفة.",
                repo: "https://github.com/ro505m/Municipal-Complaints-Citizen-Services-Portal"
            }
        ]
    }
};

let currentLang = 'en';

// 4. Render Dashboard Framework UI Content
function updateLocalization(lang) {
    const data = i18n[lang];
    
    // Layout Structure Modifications
    document.documentElement.lang = data.dir === 'rtl' ? 'ar' : 'en';
    document.documentElement.dir = data.dir;
    
    // Text Alignment Fixes
    const heroText = document.getElementById('hero-text-container');
    const heroBtnIcon = document.getElementById('hero-btn-icon');
    if (heroText) {
        if(data.dir === 'rtl') {
            heroText.classList.remove('text-left');
            heroText.classList.add('text-right');
        } else {
            heroText.classList.remove('text-right');
            heroText.classList.add('text-left');
        }
    }
    if (heroBtnIcon) {
        heroBtnIcon.className = data.dir === 'rtl' ? 'fa-solid fa-arrow-left text-xs' : 'fa-solid fa-arrow-right text-xs';
    }

    // Navbar Translation
    const navAbout = document.getElementById('nav-about'); if (navAbout) navAbout.innerText = data.about;
    const navSkills = document.getElementById('nav-skills'); if (navSkills) navSkills.innerText = data.skills;
    const navProjects = document.getElementById('nav-projects'); if (navProjects) navProjects.innerText = data.projects;
    const navContact = document.getElementById('nav-contact'); if (navContact) navContact.innerText = data.contact;
    const langTextEl = document.getElementById('langText'); if (langTextEl) langTextEl.innerText = data.langText;

    // Hero Translation
    const heroBadge = document.getElementById('hero-badge'); if (heroBadge) heroBadge.innerText = data.badge;
    const heroTitle = document.getElementById('hero-title'); if (heroTitle) heroTitle.innerHTML = data.title;
    const heroDesc = document.getElementById('hero-desc'); if (heroDesc) heroDesc.innerText = data.desc;
    const heroBtnSpan = document.querySelector('#hero-btn span'); if (heroBtnSpan) heroBtnSpan.innerText = data.btnText;

    // Skills Translation
    const skillsTitle = document.getElementById('skills-title'); if (skillsTitle) skillsTitle.innerText = data.skillsTitle;
    const skillsDesc = document.getElementById('skills-desc'); if (skillsDesc) skillsDesc.innerText = data.skillsDesc;
    const sk1 = document.getElementById('skill-card-1'); if (sk1) sk1.innerText = data.skCard1;
    const sk2 = document.getElementById('skill-card-2'); if (sk2) sk2.innerText = data.skCard2;
    const sk3 = document.getElementById('skill-card-3'); if (sk3) sk3.innerText = data.skCard3;

    // Projects Header Translation
    const projTitle = document.getElementById('projects-title'); if (projTitle) projTitle.innerText = data.projTitle;
    const projDesc = document.getElementById('projects-desc'); if (projDesc) projDesc.innerText = data.projDesc;

    // View More Button Translation
    const viewMoreTextEl = document.getElementById('viewMoreText'); if (viewMoreTextEl) viewMoreTextEl.innerText = data.viewMore;
    const viewMoreIcon = document.querySelector('#viewMoreBtn i');
    if (viewMoreIcon) {
        viewMoreIcon.className = data.dir === 'rtl' ? 'fa-solid fa-arrow-left text-sm' : 'fa-solid fa-arrow-right text-sm';
    }

    // Contact Frame Translation
    const ctTitle = document.getElementById('ct-title'); if (ctTitle) ctTitle.innerText = data.ctTitle;
    const ctDesc = document.getElementById('ct-desc'); if (ctDesc) ctDesc.innerText = data.ctDesc;
    const ctBtnMail = document.getElementById('ct-btn-mail'); if (ctBtnMail) ctBtnMail.innerText = data.ctMail;

    // WhatsApp button translation
    const whatsappTextEl = document.getElementById('whatsappText'); if (whatsappTextEl) whatsappTextEl.innerText = data.whatsapp;

    // Render Dynamic Project Grid Cards
    const container = document.getElementById('projectsContainer');
    container.innerHTML = ''; // Wipe older language buffer
    
    data.projectsData.forEach(proj => {
        const card = document.createElement('div');
        card.className = `relative group overflow-hidden rounded-2xl border border-gray-800 bg-black/40 backdrop-blur-md p-6 transition-all duration-300 hover:border-gold-500/30 hover:shadow-[0_0_25px_rgba(212,175,55,0.08)] ${data.align}`;
        card.innerHTML = `
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-gold-500 transition-colors">${proj.title}</h3>
            <p class="text-xs font-mono text-gold-500/80 mb-4 tracking-wider">${proj.tech}</p>
            <p class="text-gray-400 text-sm leading-relaxed mb-6">${proj.desc}</p>
                <a href="${proj.repo || 'https://github.com/ro505m'}" target="_blank" class="inline-flex items-center gap-1 text-xs font-mono font-bold text-gold-500 hover:text-white transition-colors">
                        ${data.exploreRepo} <i class="fa-solid ${data.dir === 'rtl' ? 'fa-arrow-left' : 'fa-arrow-right'} text-[10px] ${data.dir === 'rtl' ? 'mr-1' : 'ml-1'}"></i>
                    </a>
        `;
        // Make the whole card clickable (opens repo in new tab), but ignore clicks on internal links/buttons
        card.tabIndex = 0;
        card.classList.add('cursor-pointer');
        card.addEventListener('click', (e) => {
            if (e.target.closest('a') || e.target.closest('button')) return;
            const url = proj.repo || 'https://github.com/ro505m';
            window.open(url, '_blank');
        });
        // keyboard accessibility: Enter / Space opens the link
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const url = proj.repo || 'https://github.com/ro505m';
                window.open(url, '_blank');
            }
        });

        container.appendChild(card);
    });
}

// Initialize App State
updateLocalization(currentLang);

// Language Trigger Event Listener
document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateLocalization(currentLang);
});
