/* ================= NETRA SHOWCASE — I18N (ID / EN) ================= */
const TRANSLATIONS = {
  id: {
    nav: { recon: 'Recon', control: 'Kontrol', defense: 'Proteksi', access: 'Akses', pricing: 'Harga', cta: 'Hubungi Kami' },
    hero: {
      kicker: 'Enterprise Network Security Toolkit',
      titlePre: 'Melihat setiap sudut jaringan Anda ',
      titleHighlight: 'sebelum orang lain melihatnya.',
      sub: 'Netra adalah rangkaian alat audit jaringan untuk tim keamanan profesional — dari pemetaan perangkat, kontrol akses, inspeksi trafik, hingga proteksi real-time. Satu Aplikasi, kendali penuh, dirancang untuk jaringan yang Anda berwenang mengamankannya.',
      ctaPrimary: 'Minta Demo →',
      ctaSecondary: 'Jelajahi Fitur',
      stat1: 'Modul keamanan aktif',
      stat2Value: 'Real-time',
      stat2: 'Deteksi & respons',
      stat3Value: 'Server-verified',
      stat3: 'Setiap aksi tervalidasi'
    },
    recon: {
      tag: 'Recon',
      heading: 'Petakan jaringan sebelum bertindak',
      desc: 'Ketahui persis siapa dan apa yang terhubung ke jaringan Anda — lengkap dengan permukaan serangan yang terbuka di setiap perangkat.',
      card1: { title: 'Deteksi Perangkat', desc: 'Pemetaan real-time seluruh perangkat aktif di jaringan lokal, lengkap dengan identitas dan riwayat kemunculannya.' },
      card2: { title: 'Pemindaian Port', desc: 'Sapuan menyeluruh terhadap port terbuka pada perangkat target, membantu menemukan celah sebelum pihak lain menemukannya.' },
      card3: { title: 'Penilaian Risiko', desc: 'Setiap temuan otomatis diberi label tingkat risiko yang mudah dibaca, membantu memprioritaskan tindak lanjut audit.' }
    },
    control: {
      tag: 'Kontrol',
      heading: 'Kendalikan siapa yang boleh terhubung',
      desc: 'Berikan tim keamanan Anda kendali penuh atas akses jaringan — dari pembatasan sementara hingga kebijakan otomatis yang berjalan sendiri.',
      card1: { title: 'Kontrol Akses &amp; Bandwidth', desc: 'Batasi atau putus akses perangkat tak sah secara instan, dengan kendali granular per perangkat.' },
      card2: { title: 'Penjadwalan Otomatis', desc: 'Atur kebijakan akses agar berjalan sendiri sesuai jadwal — tanpa perlu pemantauan manual sepanjang waktu.' },
      card3: { title: 'Kunci Jaringan', desc: 'Perangkat baru yang tidak dikenal otomatis ditahan begitu terdeteksi, menjaga jaringan tetap tertutup dari pihak luar.' },
      card4: { title: 'Inspeksi Trafik', desc: 'Analisis mendalam terhadap lalu lintas HTTP/HTTPS untuk kebutuhan audit dan investigasi keamanan jaringan.' }
    },
    defense: {
      tag: 'Proteksi',
      heading: 'Melindungi perangkat Anda sendiri',
      desc: 'Netra tidak hanya menemukan celah (Vulnerability / CVE) — ia juga menjaga perangkat yang menjalankannya tetap aman dari gangguan pihak luar.',
      card1: { title: 'Perisai Anti-Spoofing', desc: 'Deteksi dan penangkalan serangan pemalsuan alamat jaringan secara real-time, menjaga integritas koneksi gateway.' },
      card2: { title: 'Pemulihan Otomatis', desc: 'Mendeteksi gangguan konektivitas dan memulihkan koneksi secara mandiri tanpa campur tangan pengguna.' },
      card3: { title: 'Anti-Tamper', desc: 'Lapisan deteksi terhadap upaya debugging atau instrumentasi tak sah pada proses yang sedang berjalan.' }
    },
    access: {
      tag: 'Akses',
      heading: 'Akses langsung saat dibutuhkan',
      desc: 'Ketika audit membutuhkan akses lebih dalam, Netra menyediakan jalur masuk yang terkontrol dan tercatat.',
      card1: { title: 'Remote Shell', desc: 'Akses jarak jauh ke perangkat lain dalam jaringan yang berwenang diaudit, untuk verifikasi temuan secara langsung.' },
      card2: { title: 'Root Shell Lokal', desc: 'Akses langsung ke perangkat yang menjalankan Netra, untuk kebutuhan diagnosis dan konfigurasi lanjutan.' }
    },
    principles: {
      heading: 'Dibangun di atas satu prinsip: server selalu jadi sumber kebenaran.',
      sub: 'Setiap aksi Netra tervalidasi, bukan sekadar dijalankan. Ini yang membedakan alat audit profesional dari sekadar skrip jaringan.',
      item1: { title: 'Tervalidasi, bukan diasumsikan', desc: 'Setiap aksi jangka panjang tetap berjalan selama diizinkan — dan berhenti secara mekanis begitu izin dicabut.' },
      item2: { title: 'Aman secara default', desc: 'Di titik yang meragukan, sistem memilih menolak dibanding melanjutkan tanpa kepastian.' },
      item3: { title: 'Berbasis penemuan sendiri', desc: 'Target selalu berasal dari jaringan yang telah ditemukan dan berwenang untuk diaudit.' },
      item4: { title: 'Tanpa jejak tersisa', desc: 'Data sensitif disimpan di memori, bukan di penyimpanan permanen perangkat.' }
    },
    pricing: {
      tag: 'Harga',
      heading: 'Satu paket, semua modul aktif.',
      desc: 'Tanpa tingkatan rumit — akses penuh ke seluruh modul Recon, Kontrol, Proteksi, dan Akses sejak hari pertama.',
      badge: 'Paling populer',
      plan: 'Netra Pro',
      currency: 'Rp',
      value: '49.000',
      period: '/bulan',
      note: 'Harga diskon awal rilis — tarif akan menyesuaikan setelah periode promo.',
      altNote: 'Harga internasional: $14.99/bulan',
      feat1: 'Akses penuh ke modul Recon, Kontrol, Proteksi & Akses',
      feat2: 'Device discovery & port scan tanpa batas (jaringan sendiri)',
      feat3: 'Kontrol akses & penjadwalan otomatis per perangkat',
      feat4: 'Pembaruan modul & dukungan prioritas',
      cta: 'Mulai Sekarang →'
    },
    compare: {
      title: 'Gratis vs Premium',
      featureHeader: 'Fitur',
      freeHeader: 'Gratis',
      premiumHeader: 'Premium',
      row1: 'Pindai Jaringan',
      row2: 'Block Perangkat',
      row3: 'Penjadwalan',
      row4: 'Pindai Port',
      row5: 'Block Semua Perangkat',
      row6: 'Jadwal Semua Perangkat',
      row7: 'Perisai Anti-Spoofing',
      row8: 'Kunci Jaringan',
      row9: 'Pindai Port Semua Perangkat',
      row10: 'Remote Shell (ADB)',
      row11: 'Inspeksi Trafik',
      max1: 'Maks 1',
      max2: 'Maks 2',
      unlimited: 'Tanpa batas'
    },
    cta: {
      heading: 'Siap mengamankan jaringan Anda?',
      desc: 'Hubungi tim kami untuk demo langsung dan diskusi kebutuhan audit keamanan jaringan enterprise Anda.',
      btnPrimary: 'Minta Demo →',
      btnSecondary: 'Lihat Fitur Lagi'
    },
    footer: {
      note: 'Netra dirancang khusus untuk audit jaringan yang berwenang — bukan untuk pemindaian atau serangan terhadap jaringan pihak lain tanpa izin.',
      features: 'Fitur',
      contact: 'Kontak'
    }
  },
  en: {
    nav: { recon: 'Recon', control: 'Control', defense: 'Defense', access: 'Access', pricing: 'Pricing', cta: 'Contact Us' },
    hero: {
      kicker: 'Enterprise Network Security Toolkit',
      titlePre: 'See every corner of your network ',
      titleHighlight: 'before anyone else does.',
      sub: 'Netra is a network audit toolkit built for professional security teams — device mapping, access control, traffic inspection, and real-time protection in one place. One app, full control, built for networks you\u2019re authorized to secure.',
      ctaPrimary: 'Request a Demo →',
      ctaSecondary: 'Explore Features',
      stat1: 'Active security modules',
      stat2Value: 'Real-time',
      stat2: 'Detection & response',
      stat3Value: 'Server-verified',
      stat3: 'Every action validated'
    },
    recon: {
      tag: 'Recon',
      heading: 'Map the network before you act',
      desc: 'Know exactly who and what is connected to your network — along with the attack surface exposed on every device.',
      card1: { title: 'Device Discovery', desc: 'Real-time mapping of every active device on the local network, with identity and appearance history.' },
      card2: { title: 'Port Scanning', desc: 'A thorough sweep of open ports on target devices, helping you find gaps before anyone else does.' },
      card3: { title: 'Risk Scoring', desc: 'Every finding is automatically labeled with an easy-to-read risk level, helping you prioritize follow-up.' }
    },
    control: {
      tag: 'Control',
      heading: 'Decide who gets to connect',
      desc: 'Give your security team full control over network access — from temporary restrictions to policies that run on their own.',
      card1: { title: 'Access &amp; Bandwidth Control', desc: 'Instantly throttle or cut off unauthorized devices, with granular control per device.' },
      card2: { title: 'Automated Scheduling', desc: 'Set access policies to run on their own on a schedule — no need for round-the-clock manual monitoring.' },
      card3: { title: 'Network Lock', desc: 'Unknown new devices are automatically held back the moment they\u2019re detected, keeping your network closed to outsiders.' },
      card4: { title: 'Traffic Inspection', desc: 'In-depth analysis of HTTP/HTTPS traffic for network security audits and investigations.' }
    },
    defense: {
      tag: 'Defense',
      heading: 'Protecting your own device',
      desc: 'Netra doesn\u2019t just find vulnerabilities (CVEs) — it also keeps the device running it safe from outside interference.',
      card1: { title: 'Anti-Spoofing Shield', desc: 'Real-time detection and mitigation of address-spoofing attacks, preserving the integrity of your gateway connection.' },
      card2: { title: 'Self-Healing', desc: 'Detects connectivity disruptions and restores the connection on its own, without user intervention.' },
      card3: { title: 'Anti-Tamper', desc: 'A detection layer against unauthorized debugging or instrumentation attempts on the running process.' }
    },
    access: {
      tag: 'Access',
      heading: 'Direct access when you need it',
      desc: 'When an audit calls for deeper access, Netra provides an entry path that\u2019s controlled and logged.',
      card1: { title: 'Remote Shell', desc: 'Remote access to other devices on a network you\u2019re authorized to audit, for direct verification of findings.' },
      card2: { title: 'Local Root Shell', desc: 'Direct access to the device running Netra, for diagnostics and advanced configuration.' }
    },
    principles: {
      heading: 'Built on one principle: the server is always the source of truth.',
      sub: 'Every Netra action is validated, not just executed. That\u2019s what separates a professional audit tool from a plain network script.',
      item1: { title: 'Validated, not assumed', desc: 'Long-running actions keep running only as long as they\u2019re authorized — and stop mechanically the moment that authorization is revoked.' },
      item2: { title: 'Secure by default', desc: 'At any ambiguous point, the system chooses to deny rather than proceed without certainty.' },
      item3: { title: 'Self-discovery based', desc: 'Targets always come from a network that has been discovered and is authorized to be audited.' },
      item4: { title: 'Leaves no trace', desc: 'Sensitive data is kept in memory, never written to the device\u2019s permanent storage.' }
    },
    pricing: {
      tag: 'Pricing',
      heading: 'One plan, every module included.',
      desc: 'No complicated tiers — full access to every Recon, Control, Defense, and Access module from day one.',
      badge: 'Most popular',
      plan: 'Netra Pro',
      currency: '$',
      value: '14.99',
      period: '/month',
      note: 'Early-release launch pricing — rates will adjust once the promo period ends.',
      altNote: 'Indonesia pricing: Rp49.000/bulan',
      feat1: 'Full access to Recon, Control, Defense &amp; Access modules',
      feat2: 'Unlimited device discovery &amp; port scanning (your own network)',
      feat3: 'Access control &amp; automated scheduling per device',
      feat4: 'Module updates &amp; priority support',
      cta: 'Get Started →'
    },
    compare: {
      title: 'Free vs Premium',
      featureHeader: 'Feature',
      freeHeader: 'Free',
      premiumHeader: 'Premium',
      row1: 'Network Scan',
      row2: 'Block Device',
      row3: 'Scheduling',
      row4: 'Port Scan',
      row5: 'Block All Devices',
      row6: 'Schedule All Devices',
      row7: 'Anti-Spoofing Shield',
      row8: 'Network Lock',
      row9: 'Port Scan All Devices',
      row10: 'Remote Shell (ADB)',
      row11: 'Traffic Inspection',
      max1: 'Max 1',
      max2: 'Max 2',
      unlimited: 'Unlimited'
    },
    cta: {
      heading: 'Ready to secure your network?',
      desc: 'Contact our team for a live demo and to discuss your enterprise network security audit needs.',
      btnPrimary: 'Request a Demo →',
      btnSecondary: 'See Features Again'
    },
    footer: {
      note: 'Netra is built specifically for authorized network audits — not for scanning or attacking networks you don\u2019t own or have permission to test.',
      features: 'Features',
      contact: 'Contact'
    }
  }
};

(function () {
  const STORAGE_KEY = 'netra-lang';

  function getNested(obj, path) {
    return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
  }

  function applyLang(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.id;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = getNested(dict, el.dataset.i18n);
      if (value !== null) el.innerHTML = value;
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    // card text length can change with language, so re-layout the connecting SVG lines
    requestAnimationFrame(() => window.dispatchEvent(new Event('resize')));
  }

  function initLang() {
    let saved = 'id';
    try { saved = localStorage.getItem(STORAGE_KEY) || 'id'; } catch (e) {}
    applyLang(saved);
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLang);
  } else {
    initLang();
  }
})();