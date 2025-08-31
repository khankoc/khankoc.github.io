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
    { title: "Değerlendirmeler", href: "#referanslar" },
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
        year: "2019 - 2025",
        gpa: "2.87"
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
    { icon: "FaXTwitter", url: "https://x.com/theKaanKoc", label: "X", color: "#000" }
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
      name: "⚛️ SERPENT Tabanlı Envanter Analizi ve JRodos ile Kaza Senaryosu Değerlendirmesi",
      category: "Nükleer Enerji Teknolojileri",
      description: "Hacettepe Üniversitesi Nükleer Enerji Mühendisliği Lisans Bitirme Projesi olarak hazırlanan bu çalışma, Mersin Akkuyu Nükleer Güç Santrali'nde kullanılacak VVER-1200 reaktörünün yakıt envanteri ve olası kaza senaryolarının etkilerini kapsamlı bir şekilde incelemektedir. Proje iki temel hedef doğrultusunda gerçekleştirilmiştir: Serpent Monte Carlo kodu kullanılarak VVER-1200 yakıt çubukları ve yakıt düzenlerinin modellenmesi, yanma hesaplamalarıyla farklı yakıt zenginleştirme oranları ve Gd₂O₃ katkılı yakıt çubukları analizi. İkinci hedef ise Serpent çıktılarından elde edilen izotop aktivitelerinin JRodos yazılımına aktarılarak gerçek meteorolojik verilerle atmosferik yayılım ve çevresel etki simülasyonlarının yapılmasıdır.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Serpent 2", "JRodos", "Monte Carlo", "VVER-1200", "Nötron Taşınım", "Yanma Hesaplamaları", "Atmosferik Yayılım", "Radyolojik Risk Analizi"],
      features: [
        "VVER-1200 reaktör çekirdeği envanter analizi",
        "Serpent Monte Carlo kodu ile yakıt modellemesi",
        "Çernobil ve Fukuşima kazalarıyla radyoizotop karşılaştırması",
        "JRodos ile atmosferik yayılım simülasyonu",
        "I-131, Xe-133, Cs-134, Cs-137 kritik izotop hesaplamaları",
        "Akkuyu sahası için kaza senaryosu değerlendirmesi",
        "Doğu Akdeniz bölgesi radyolojik risk haritası",
        "Acil durum önlemleri ve tahliye planları analizi"
      ]
    },
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

    {
      name: "🌍 Tüm Dillerde Transkripsiyon, Altyazı ve Çeviri Programı (GPU Destekli)",
      category: "Yapay Zeka ve Dil İşleme Teknolojileri",
      description: "Bu program, herhangi bir video veya ses dosyasını otomatik olarak yazıya döker, zaman kodlu SRT altyazı dosyası oluşturur ve ardından tüm dillere çeviri yapabilir. GPU hızlandırmalı transkripsiyon özelliği sayesinde büyük boyutlu dosyalar bile yüksek hızda işlenebilir. Program ayrıca transkriptleri GPT-4 API ile analiz ederek duygu tespiti, anahtar kelime çıkarımı ve özetleme işlemlerini gerçekleştirir. İçerik üreticileri, araştırmacılar ve çok dilli medya arşivine ihtiyaç duyan herkes için güçlü ve pratik bir çözümdür.",
      image: "/images/languageai.jpeg",
      technologies: ["Python", "OpenAI Whisper", "CUDA", "NVIDIA GPU", "FFmpeg", "Google Translate API", "GPT-4 API"]
    },
    {
      name: "📲 BlackBox – Otomatik Kısa Video Üretim ve Dönüştürme Sistemi",
      category: "Yapay Zeka ve İçerik Üretimi",
      description: "BlackBox, sosyal medya platformları için tasarlanmış, tamamen otomatik çalışan bir kısa video üretim ve içerik dönüştürme sistemidir. Reels, Shorts ve TikTok gibi hızlı tüketilen formatlara özel olarak geliştirdiğim bu altyapı; ister sosyal medya trendlerini analiz ederek, ister farklı içerik üreticilerinden alınan videoları dönüştürerek ya da hiçbir kaynak olmadan sıfırdan binlerce özgün video üretebiliyor. Her içerik için ayrı algoritmalar geliştiriyorum; böylece ortaya çıkan her video benzersiz bir kurgu, ses ve mesaj yapısına sahip oluyor. Çok dilli altyazı, seslendirme ve içerik çevirisiyle küresel erişime hazır hale getirilen bu videolar, izleyicinin dikkatini saniyeler içinde çekmek üzere tasarlanıyor. BlackBox tam olarak bu: ben üretiyorum, siz paylaşıyorsunuz.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      technologies: ["Python", "OpenAI", "FFmpeg", "Computer Vision", "NLP", "Video Processing", "AI/ML", "Social Media APIs"]
    }
  ],
  experiences: [
    {
      type: "work",
      title: "Stajyer",
      company: "Türkiye Enerji, Nükleer ve Maden Araştırma Kurumu",
      location: "Küçükçekmece, İstanbul, Türkiye",
      date: "Temmuz 2024 - Temmuz 2024",
      description: "Nükleer enerji araştırmaları ve geliştirme projelerinde stajyer olarak görev yaptım. Enerji teknolojileri alanında pratik deneyim kazandım."
    },
    {
      type: "work",
      title: "Stajyer",
      company: "EÜAŞ (Elektrik Üretim Anonim Şirketi)",
      location: "Türkiye",
      date: "Eylül 2021 - Eylül 2021",
      description: "Elektrik üretim tesislerinde stajyer olarak çalıştım. Enerji üretimi ve dağıtımı konularında deneyim kazandım."
    }
  ],
  testimonials: [
    {
      name: "Giray Cengiz",
      position: "GC Psikolojik Danışmanlık Merkezi",
      avatar: "/images/avatars/giray-cengiz.jpg",
      content: "Kaan, zor ve karmaşık görevleri tamamlama konusunda tam bir profesyonel olduğu kadar olaylara karşı geliştiği farklı çözüm stratejileri sayesinde sonuca ulaşma konusunda da vazgeçilmez."
    },
    {
      name: "Mehmet Okkalı",
      position: "Kurucu, Bitirişi Kurye Hizmetleri",
      avatar: "/images/avatars/mehmet-okkali.jpg.png",
      content:"Kaan, her koşulda sorumluluklarını en iyi şekilde yerine getiren, zor durumlarda dahi sakinliğini koruyarak doğru adımları atan güvenilir bir profesyoneldir. Problem çözme becerisi, güçlü iletişimi ve sonuç odaklı yaklaşımı sayesinde ekip çalışmasının vazgeçilmez bir parçası olmuştur." 
    },

  ],
  metadata: {
    title: "Kaan Koç | Nükleer Mühendis & Yazılım Geliştirici",
    description: "Modern web teknolojileri ile yaratıcı ve kullanıcı dostu uygulamalar geliştiren Senior Frontend Developer.",
    ogImage: "/images/og-image.jpg",
    twitterHandle: "@kaankoc_dev",
    logo: "KK"
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