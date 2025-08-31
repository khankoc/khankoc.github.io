# Kaan Koç - Portfolio Website

Bu proje, Kaan Koç'un kişisel portfolio websitesidir. Next.js, React, TypeScript ve TailwindCSS kullanılarak geliştirilmiştir.

## 🚀 Teknolojiler

- **Next.js 14** - React framework
- **TypeScript** - Tip güvenliği
- **TailwindCSS** - CSS framework
- **Framer Motion** - Animasyonlar
- **GSAP** - Gelişmiş animasyonlar
- **React Three Fiber** - 3D grafikler
- **Next Themes** - Tema yönetimi

## 🛠️ Geliştirme

### Gereksinimler

- Node.js 18+
- npm veya yarn

### Kurulum

```bash
# Repository'yi klonlayın
git clone https://github.com/khankoc/kaankoc-website.git
cd kaankoc-website

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açarak sonucu görebilirsiniz.

## 📦 Build ve Deployment

### Production Build

```bash
# Production build
npm run build:static
```

### GitHub Pages Deployment

Bu proje GitHub Pages üzerinde otomatik olarak deploy edilir. Her `main` branch'e push yapıldığında GitHub Actions workflow'u çalışır ve siteyi günceller.

**Deployment URL:** https://khankoc.github.io/kaankoc-website

### Manuel Deployment

Eğer manuel deployment yapmak isterseniz:

```bash
# Static export
npm run build:static

# out/ klasörünü GitHub Pages'e yükleyin
```

## 🎨 Özellikler

- ✨ Modern ve responsive tasarım
- 🌙 Dark/Light tema desteği
- 🎭 Smooth animasyonlar
- 📱 Mobil uyumlu
- ⚡ Hızlı yükleme
- 🔍 SEO optimizasyonu
- 🎯 Erişilebilirlik standartları

## 📁 Proje Yapısı

```
src/
├── app/                 # Next.js App Router
├── components/          # React bileşenleri
├── config/             # Konfigürasyon dosyaları
├── lib/                # Utility fonksiyonları
├── styles/             # CSS dosyaları
└── types/              # TypeScript tip tanımları
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- **Website:** https://khankoc.github.io/kaankoc-website
- **GitHub:** [@khankoc](https://github.com/khankoc)
- **LinkedIn:** [Kaan Koç](https://linkedin.com/in/kaankoc)
