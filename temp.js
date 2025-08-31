const SITE_CONFIG = {
  site: {
    name: "Kaan Koc Dev.",
    url: "https://www.kaankoc.dev",
    description: "Senior Frontend Developer",
    shortName: "KK"
  },
  mainNav: [
    { title: "Anasayfa", href: "#" },
    { title: "Hakkımda", href: "#hakkimda" },
    { title: "Sertifikalar", href: "#sertifikalar" },
    { title: "Projeler", href: "#projeler" },
    { title: "Referanslar", href: "#referanslar" },
    { title: "İletişim", href: "#iletisim" }
  ],
  personal: {
    name: "Kaan Koç",
    title: "Software Developer",
    bio: "Modern web teknolojileri ile yaratıcı ve kullanıcı dostu uygulamalar geliştiriyorum. Yenilikçi çözümler ve etkileyici kullanıcı deneyimleri sunmak için tutkuyla çalışıyorum.",
    longBio: "Merhaba! Ben Kaan Koç, Hacettepe Üniversitesi Nükleer Enerji Mühendisliği mezunu ve yazılım alanında uzmanlaşmış bir mühendisim. 2019 yılında Python ile başladığım yazılım yolculuğu, zamanla ileri düzey programlama becerileri ve genişleyen bir teknoloji yelpazesiyle şekillendi.\n\nPython’da sahip olduğum derin bilgi birikimiyle; otomasyon sistemleri, veri işleme ve masaüstü uygulamalar geliştiriyorum. Bunun yanında, mobil dünyaya da adım attım — Flutter ve Dart teknolojileriyle platformlar arası mobil uygulamalar geliştirerek, kullanıcı dostu ve performanslı çözümler üretiyorum.\n\nAynı zamanda modern web teknolojilerine yöneldim; React, Next.js ve Tailwind CSS gibi araçlarla hızlı, şık ve kullanıcı odaklı arayüzler geliştiriyorum. Teknik altyapımı kullanıcı deneyimiyle birleştirerek hem işlevsel hem estetik projelere imza atıyorum.\n\nMühendislik eğitimim sayesinde termodinamikten akışkanlar mekaniğine, nükleer yakıt çevriminden sistem analizine kadar geniş bir teknik perspektife sahibim. Bu yaklaşım, yazılım projelerinde analitik ve çözüm odaklı düşünmemi sağlıyor.\n\nBenim için yazılım, sadece kod yazmak değil; karmaşık problemleri anlamak, sadeleştirmek ve sürdürülebilir çözümler üretmektir. Temiz enerji, mobil teknoloji ve dijital dönüşüm gibi alanlarda katkı sunmaya hazırım.\n\nYeni iş birliklerine açığım. Gelin birlikte üretelim.",
    avatar: "/images/profile.jpg",
    titles: [
      'Software Developer',
      'Nuclear Engineer',
      'Frontend Expert',
      'Data Analyst',
      'UI/UX Designer'
    ],
    contacts: {
      email: "kaankocmail@gmail.com",
      phone: "+90 532 515 10 67",
      location: "Ankara, Türkiye"
    },
    stats: {
      experience: "7+",
      projects: "50+",
      clients: "20+"
    },
    education: [
      {
        degree: "Ümitköy Anadolu Lisesi",
        school: "",
        year: "2014 - 2018"
      },
      {
        degree: "Nükleer Enerji Mühendisliği",
        school: "Hacettepe Üniversitesi",
        year: "2019 - 2025"
      }
    ],
    certificates: [
      {
        name: "Telegram'da WEB3 Ekonomisi",
        issuer: "Web3 Teknolojileri Derneği",
        year: "Mart 2024",
        url: "https://web3teknolojileri.org/",
        logo: "/images/certificates/web3teknolojileridernegi.jpeg"
      },
      {
        name: "Operation Issues of the Turbine Island for NPP with VVER",
        issuer: "Technical Academy | Rosatom",
        year: "Aralık 2023",
        url: "https://rosatom.ru/en/",
        logo: "/images/certificates/rosatom.jpeg"
      },
      {
        name: "Advanced Python | Python 401",
        issuer: "Turkcell",
        year: "Nisan 2023",
        url: "https://www.turkcell.com.tr/kurumsal/akademi",
        logo: "/images/certificates/turkcell.jpeg"
      },
      {
        name: "Google Search Console",
        issuer: "Webtures",
        year: "Mart 2023",
        url: "https://www.webtures.com.tr/",
        logo: "/images/certificates/webtures.jpeg"
      },
      {
        name: "Local SEO Strategies Training",
        issuer: "Webtures",
        year: "Mart 2023",
        url: "https://www.webtures.com.tr/",
        logo: "/images/certificates/webtures.jpeg"
      },
      {
        name: "Web Development with HTML5",
        issuer: "BTK Akademi",
        year: "Temmuz 2021",
        url: "https://www.btkakademi.gov.tr/",
        logo: "/images/certificates/btk.jpeg"
      },
      {
        name: "Fundamentals of Digital Marketing",
        issuer: "Google",
        year: "Mart 2021",
        url: "https://learndigital.withgoogle.com/digitalgarage",
        logo: "/images/certificates/google.jpeg"
      },
      {
        name: "Android Mobile Application Development Training with Kotlin",
        issuer: "BTK Akademi",
        year: "Şubat 2021",
        url: "https://www.btkakademi.gov.tr/",
        logo: "/images/certificates/btk.jpeg"
      },
      {
        name: "IT Law",
        issuer: "BTK Akademi",
        year: "Ocak 2021",
        url: "https://www.btkakademi.gov.tr/",
        logo: "/images/certificates/btk.jpeg"
      },
      {
        name: "Introduction to Social Media Expertise",
        issuer: "BTK Akademi",
        year: "Ocak 2021",
        url: "https://www.btkakademi.gov.tr/",
        logo: "/images/certificates/btk.jpeg"
      },
      {
        name: "Learning Python",
        issuer: "LinkedIn",
        year: "Ocak 2021",
        url: "https://www.linkedin.com/learning/",
        logo: "/images/certificates/linkedin.jpeg"
      }
    ]
  },
  
  socials: [
    { icon: "FaGithub", url: "https://github.com/khankoc", label: "GitHub", color: "#ffffff" },
    { icon: "FaLinkedin", url: "https://linkedin.com/in/xkaankoc", label: "LinkedIn", color: "#0077b5" },
    { icon: "FaXTwitter", url: "https://x.com/kaankox", label: "X", color: "#000" },
    { icon: "FaInstagram", url: "https://instagram.com/kaankoc", label: "Instagram", color: "#e1306c" },
    { icon: "FaSteam", url: "https://steamcommunity.com/id/kaankoc", label: "Steam", color: "#171a21" },
    { icon: "FaDribbble", url: "https://dribbble.com/kaankoc", label: "Dribbble", color: "#ea4c89" }
  ],
  skills: [
    "React", "Next.js", "TypeScript", "JavaScript", 
    "Node.js", "Express", "TailwindCSS", "CSS3", 
    "HTML5", "Redux", "GraphQL", "REST API", 
    "MongoDB", "PostgreSQL", "Firebase", "AWS", 
    "Docker", "Git", "CI/CD", "Jest", 
    "React Testing Library", "Figma", "Responsive Design", "Performance Optimization"
  ],
  projects: [
    {
      name: "🚀 TEKNOFEST – BeCore: Kazaya Toleranslı Nükleer Yakıt Tasarımı",
      category: "Nükleer Enerji Teknolojileri",
      description: "TEKNOFEST 2025 kapsamında 'Nükleer Enerji Teknolojileri Tasarım Yarışması'na katılan BeCore takımı tarafından geliştirilmiştir. Projede, geleneksel UO₂ yakıtına alternatif olarak UBe₁₃ katkılı kazaya toleranslı (ATF) bir nükleer yakıt konsepti sunulmuştur. Yüksek termal iletkenlik, düşük nötron absorbsiyonu ve toksik riskin azaltılması hedeflenerek, hem güvenli hem de verimli bir reaktör işletimi sağlanmıştır. Geliştirilen yakıt konsepti, NuScale tipi küçük modüler reaktör (SMR) tasarımı üzerinde test edilmiş, nötronik, ısıl-hidrolik ve kaza senaryosu analizleri gerçekleştirilmiştir.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      technologies: ["SERPENT 2", "COBRA-IV", "COBRA-TF", "KORIGEN", "TRIPOLI-4", "JRODOS", "Monte Carlo", "SMR Tasarımı"],
      links: {
        github: "https://github.com/username/becore-teknofest",
        live: "https://becore-teknofest.com"
      },
      features: [
        "UBe₁₃ katkısıyla %5 daha fazla yanma oranı",
        "Daha düşük merkez sıcaklığı, daha az çatlak riski", 
        "Kuru depolamada HI-STORM 100 ile uyumlu",
        "Yerli mühendislik ile geliştirilen lisanslanabilir tasarım"
      ]
    },
        live: "https://ecommerce-demo.com"
      }
    },
    {
      name: "Sosyal Medya Uygulaması",
      category: "Web Uygulaması",
      description: "Kullanıcıların profil oluşturabileceği, gönderi paylaşabileceği ve diğer kullanıcılarla etkileşime girebileceği bir sosyal medya uygulaması.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      links: {
        github: "https://github.com/username/social-media",
        live: "https://social-media-demo.com"
      }
    },
    {
      name: "Proje Yönetim Aracı",
      category: "Web Uygulaması",
      description: "Ekiplerin projelerini yönetebileceği, görevleri atayabileceği ve ilerlemeyi takip edebileceği bir proje yönetim aracı.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
      technologies: ["React", "Redux", "Firebase", "Material UI"],
      links: {
        github: "https://github.com/username/project-management",
        live: "https://project-management-demo.com"
      }
    },
    {
      name: "Fitness Takip Uygulaması",
      category: "Mobil Uygulama",
      description: "Kullanıcıların egzersizlerini, beslenme alışkanlıklarını ve sağlık verilerini takip edebileceği bir fitness uygulaması.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["React Native", "Redux", "Firebase", "Chart.js"],
      links: {
        github: "https://github.com/username/fitness-tracker",
        live: "https://fitness-tracker-demo.com"
      }
    },
    {
      name: "🌍 Tüm Dillerde Transkripsiyon, Altyazı ve Çeviri Programı (GPU Destekli)",
      category: "Yapay Zeka ve Dil İşleme Teknolojileri",
      description: "Bu program, herhangi bir video veya ses dosyasını otomatik olarak yazıya döker, zaman kodlu SRT altyazı dosyası oluşturur ve ardından tüm dillere çeviri yapabilir. GPU hızlandırmalı transkripsiyon özelliği sayesinde büyük boyutlu dosyalar bile yüksek hızda işlenebilir. Program ayrıca transkriptleri GPT-4 API ile analiz ederek duygu tespiti, anahtar kelime çıkarımı ve özetleme işlemlerini gerçekleştirir. İçerik üreticileri, araştırmacılar ve çok dilli medya arşivine ihtiyaç duyan herkes için güçlü ve pratik bir çözümdür.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Python", "OpenAI Whisper", "CUDA", "NVIDIA GPU", "FFmpeg", "Google Translate API", "GPT-4 API"]
    }
  ],
  experiences: [
    {
      type: "work",
      title: "Senior Frontend Developer",
      company: "Tech Innovations",
      location: "İstanbul",
      date: "2020 - Günümüz",
      description: "Büyük ölçekli web uygulamaları geliştirme, performans optimizasyonu, kod kalitesini artırma ve junior geliştiricilere mentorluk yapma."
    },
    {
      type: "work",
      title: "Frontend Developer",
      company: "Digital Solutions",
      location: "İstanbul",
      date: "2017 - 2020",
      description: "Responsive web uygulamaları geliştirme, UI/UX tasarımlarını kodlama ve RESTful API'lar ile entegrasyon."
    },
    {
      type: "work",
      title: "Junior Web Developer",
      company: "WebCraft Agency",
      location: "Ankara",
      date: "2015 - 2017",
      description: "HTML, CSS ve JavaScript kullanarak web siteleri geliştirme, WordPress temaları özelleştirme."
    },
    {
      type: "education",
      title: "Bilgisayar Mühendisliği",
      company: "İstanbul Teknik Üniversitesi",
      location: "İstanbul",
      date: "2011 - 2015",
      description: "Bilgisayar Mühendisliği lisans derecesi. Veri yapıları, algoritmalar, web geliştirme ve yazılım mühendisliği üzerine eğitim."
    }
  ],
  testimonials: [
    {
      name: "Giray Cengiz",
      position: "Yönetici, DEHB",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      content: "Kaan, teknik becerileri ve problem çözme yeteneği ile ekibimizin vazgeçilmez bir üyesi. Karmaşık sorunları hızlı ve etkili bir şekilde çözebiliyor."
    },
    {
      name: "Mehmet Okkalı",
      position: "Kurucu, Bitirişi Kurye Hizmetleri",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      content: "Kaan ile çalışmak her zaman bir zevkti. Teknik bilgisi, yaratıcı çözümleri ve işbirlikçi yaklaşımı ile projelerimizi her zaman zamanında ve yüksek kalitede tamamladık."
    },
    {
      name: "Doç Dr. Şule Ergün",
      position: "Hacettepe Üniversitesi",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      content: "Kaan'ın kodlama standartları ve temiz kod yazma konusundaki titizliği, şirketimizin kod kalitesini önemli ölçüde artırdı. Onunla çalışmak gerçekten bir ayrıcalık."
    }
  ],
  metadata: {
    title: "Kaan Koç | Senior Frontend Developer",
    description: "Modern web teknolojileri ile yaratıcı ve kullanıcı dostu uygulamalar geliştiren Senior Frontend Developer.",
    ogImage: "/images/og-image.jpg",
    twitterHandle: "@kaankoc_dev"
  },
  theme: {
    colors: {
      primary: "#3b82f6", // Mavi
      secondary: "#1e40af", // Koyu Mavi
      accent: "#60a5fa", // Açık Mavi
      background: "#0f172a", // Koyu Lacivert-Gri
      foreground: "#e2e8f0", // Açık Gri
      card: "#1e293b", // Kart Rengi (Biraz daha açık lacivert)
      border: "#334155", // Kenarlık Rengi
    },
    fonts: {
      sans: "var(--font-inter)",
      mono: "var(--font-roboto-mono)"
    }
  }
};

module.exports = { SITE_CONFIG }; 
