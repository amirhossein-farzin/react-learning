const articles = [
  {
    id: 1,
    title: "۵ روش حرفه‌ای برای بهبود عملکرد برنامه‌نویسی شما",
    cover: "/images/blog/git.jpg",
    author: {
      name: "علی رضایی",
      avatar: "/images/teachers/men.jpg",
    },
    date: "۱۴۰۴/۰۴/۱۰",
    dateISO: "2025-07-01",
    category: "برنامه‌نویسی",
    introduction: "۵ روش حرفه‌ای برای بهبود عملکرد برنامه‌نویسی شما ",
    content: `
اگر برنامه‌نویس هستید و می‌خواهید سرعت کدنویسی و کیفیت کارتان را ارتقا دهید، این مقاله برای شماست.
در این مطلب، به معرفی ۵ راهکار کاربردی و حرفه‌ای برای افزایش عملکرد برنامه‌نویسان پرداخته‌ایم.

۱. استفاده از میانبرهای کیبورد  
۲. مدیریت زمان با تکنیک پومودورو  
۳. یادگیری ابزارهای توسعه مثل Git, Docker  
۴. کدنویسی تمیز با اصول SOLID  
۵. تمرین منظم با پروژه‌های واقعی  
    `,
    tags: ["بهره‌وری", "کدنویسی", "SOLID", "برنامه‌نویسی"],
    related: [
      {
        id: 2,
        title: "چگونه با پروژه واقعی یادگیری را عمیق‌تر کنیم؟",
        cover: "/images/blog/react.webp",
        slug: "deep-learning-projects",
      },
      {
        id: 3,
        title: "راهنمای کامل استفاده از Git در تیم‌های حرفه‌ای",
        cover: "/images/blog/js.png",
        slug: "git-guide",
      },
    ],
  },
  {
    id: 2,
    title: "چگونه با پروژه واقعی یادگیری را عمیق‌تر کنیم؟",
    cover: "/images/blog/react.webp",
    author: {
      name: "زهرا کریمی",
      avatar: "/images/teachers/woman1.jpg",
    },
    date: "۱۴۰۴/۰۳/۲۵",
    dateISO: "2025-06-15",
    introduction: "۵ روش حرفه‌ای برای بهبود عملکرد برنامه‌نویسی شما ",

    category: "آموزش",
    content: `
یادگیری برنامه‌نویسی تنها با خواندن کتاب‌ها و مقالات ممکن است کافی نباشد.
در این مقاله به اهمیت کار روی پروژه‌های واقعی و کاربردی اشاره شده است.

مزایا:  
- تقویت مهارت حل مسئله  
- درک بهتر مفاهیم  
- ایجاد نمونه‌کار قوی برای رزومه  
- افزایش اعتماد به نفس  
    `,
    tags: ["پروژه", "آموزش", "یادگیری"],
    related: [
      {
        id: 1,
        title: "۵ روش حرفه‌ای برای بهبود عملکرد برنامه‌نویسی شما",
        cover: "/images/blog/git.jpg",
        slug: "programming-performance",
      },
      {
        id: 3,
        title: "راهنمای کامل استفاده از Git در تیم‌های حرفه‌ای",
        cover: "/images/blog/js.png",
        slug: "git-guide",
      },
    ],
  },
  {
    id: 3,
    title: "راهنمای کامل استفاده از Git در تیم‌های حرفه‌ای",
    cover: "/images/blog/js.png",
    author: {
      name: "حسن موسوی",
      avatar: "/images/teachers/men2.jpg",
    },
    date: "۱۴۰۴/۰۲/۱۵",
    dateISO: "2025-05-05",
    introduction: "۵ روش حرفه‌ای برای بهبود عملکرد برنامه‌نویسی شما ",
    category: "ابزار توسعه",
    content: `
Git یکی از مهم‌ترین ابزارهای کنترل نسخه است که در تیم‌های حرفه‌ای برای مدیریت کد استفاده می‌شود.
در این مقاله به مفاهیم پایه و نکات کلیدی در استفاده از Git پرداخته‌ایم.

موارد مهم:  
- ایجاد شاخه (Branch)  
- ادغام شاخه‌ها (Merge)  
- مدیریت تعارض‌ها (Conflicts)  
- استفاده از Git Flow  
    `,
    tags: ["Git", "کنترل نسخه", "ابزار توسعه"],
    related: [
      {
        id: 1,
        title: "۵ روش حرفه‌ای برای بهبود عملکرد برنامه‌نویسی شما",
        cover: "/images/blog/git.jpg",
        slug: "programming-performance",
      },
      {
        id: 2,
        title: "چگونه با پروژه واقعی یادگیری را عمیق‌تر کنیم؟",
        cover: "/images/blog/react.webp",
        slug: "deep-learning-projects",
      },
    ],
  },
];

export default articles;
