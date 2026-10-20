export interface ServiceItem {
  id: string;
  name: string;
  badge: string;
  shortDescription: string;
  fullDescription: string;
  moq: number; // Minimum Order Quantity in pcs
  leadTime: string;
  recommendedMaterials: string[];
  finishingOptions: string[];
  features: string[];
  popularFor: string[];
  image: string;
  whatsappMessage: string;
}

export const services: ServiceItem[] = [
  {
    id: "kemeja-pdh-pdl",
    name: "Kemeja PDH / PDL & Seragam Kantor",
    badge: "Best Seller B2B",
    shortDescription:
      "Kemeja kerja dinas harian (PDH) dan lapangan (PDL) dengan pola ergonomis, jahitan stik ganda rapi, serta bordir komputer presisi tinggi.",
    fullDescription:
      "Produksi kemeja seragam kerja kantor, PDH, PDL, dan kemeja korporat formal maupun kasual. Menggunakan kain drill dan tropical berserat rapat yang adem, tidak mudah kusut, dan tahan luntur saat dicuci berkali-kali. Dilengkapi bordir komputer Barudan berkerapatan benang optimal sehingga logo perusahaan tampil tajam dan profesional.",
    moq: 24,
    leadTime: "10 - 14 Hari Kerja",
    recommendedMaterials: [
      "Nagata Drill 1919 Original",
      "American Drill 1919",
      "Japan Drill Verlando",
      "Taipan Tropical",
      "Oxford Super Soft",
    ],
    finishingOptions: [
      "Bordir Komputer Tajam 12 Jarum",
      "Kancing Logo Emboss Kustom",
      "Ventilasi Punggung Air-Flow",
      "Skoder Bahu & Kantong Pulpen",
    ],
    features: [
      "Jahitan stik ganda (double stitch) anti-jebol",
      "Pola regular & slim-fit terstandarisasi",
      "Kancing cadangan di bagian dalam",
      "Steam pressing uap panas sebelum dipacking",
    ],
    popularFor: [
      "Seragam Kerja BUMN & Korporat",
      "Seragam Dinas Instansi Pemerintah",
      "Kemeja Lapangan Proyek Pertambangan",
      "Seragam Komunitas & BEM Universitas",
    ],
    image: "/images/products/kemeja-pdh.svg",
    whatsappMessage:
      "Halo Tim Wilcore, saya ingin konsultasi dan penawaran harga pembuatan Kemeja PDH/PDL Seragam Kerja.",
  },
  {
    id: "kaos-polo-bordir",
    name: "Kaos Polo Bordir (Wangki / Lacoste)",
    badge: "Favorit Event & Casual",
    shortDescription:
      "Kaos polo wangki berkerah rajut presisi dengan bahan Lacoste CVC & Pique Cotton berpori halus yang menyerap keringat maksimal.",
    fullDescription:
      "Pilihan seragam semi-formal terfavorit untuk staf kantor, sales retail, kegiatan gathering, maupun seragam operasional harian. Kerah rajut khusus yang kokoh tidak mudah melengkung setelah pencucian. Didukung bordir logo dada atau lengan dengan kerapatan benang rapat yang tidak mengkerutkan kain.",
    moq: 24,
    leadTime: "7 - 12 Hari Kerja",
    recommendedMaterials: [
      "Lacoste CVC 24s (Paling Adem & Awet)",
      "Lacoste Pique Cotton 20s/24s",
      "Lacoste Katun Bamboo",
      "Lacoste PE Double Knit (Budget Friendly)",
    ],
    finishingOptions: [
      "Bordir Komputer Logo Dada & Lengan",
      "Kerah Rajut Kustom Lis Warna",
      "Manset Lengan Rajut Elastis",
      "Placket Kancing Tersembunyi (Hidden Button)",
    ],
    features: [
      "Bahan berpori sarang lebah (honeycomb) sirkulasi udara baik",
      "Kerah flat knit tebal tidak bergelombang",
      "Belahan samping bawah (side slit) rapi dengan bartack",
      "Warna kain awet tidak mudah pudar",
    ],
    popularFor: [
      "Seragam Kasual Kantor & Start-up",
      "Polo Gathering & Outbound Perusahaan",
      "Seragam Tim Lapangan & Toko Retail",
      "Merchandise Eksklusif Acara",
    ],
    image: "/images/products/polo-shirt.svg",
    whatsappMessage:
      "Halo Tim Wilcore, saya berminat membuat Kaos Polo Bordir untuk seragam instansi/event kami.",
  },
  {
    id: "kaos-sablon-event",
    name: "Kaos Sablon & Kaos Event Gathering",
    badge: "Kapasitas Besar",
    shortDescription:
      "Kaos oblong kustom 100% Cotton Combed reaktif bertekstur lembut, adem, dan sablon awet (Plastisol, DTF, Discharge).",
    fullDescription:
      "Spesialis produksi kaos oblong (T-shirt) untuk kebutuhan seragam event, family gathering, merchandise perusahaan, maupun brand clothing distro. Menggunakan 100% serat kapas murni Cotton Combed (24s, 30s) reaktif bersertifikasi OEKO-TEX yang tidak memicu alergi dan nyaman seharian di iklim tropis.",
    moq: 36,
    leadTime: "7 - 10 Hari Kerja",
    recommendedMaterials: [
      "Cotton Combed 30s Reaktif (Soft & Adem)",
      "Cotton Combed 24s (Ketebalan Sedang)",
      "Cotton Bamboo Antibakteri 30s",
      "Cotton Modal Premium 30s",
    ],
    finishingOptions: [
      "Sablon Plastisol Doff/Glossy",
      "Direct Transfer Film (DTF) Full Color Presisi",
      "Sablon Discharge (Cabut Warna)",
      "Sablon High Density (Efek Timbul)",
    ],
    features: [
      "Jahitan rantai standar distro pada pundak & leher",
      "Rib leher spandex tebal tidak mudah melar",
      "Kain reaktif tidak luntur dan siap dicuci mesin",
      "Kapasitas output hingga 5.000 pcs per minggu",
    ],
    popularFor: [
      "Family Gathering Perusahaan",
      "Kaos Merchandise & Konser",
      "Kaos Komunitas Hobi & Motor",
      "Kaos Promosi Brand & Kampanye",
    ],
    image: "/images/products/kaos-event.svg",
    whatsappMessage:
      "Halo Tim Wilcore, saya ingin tanya harga dan estimasi produksi Kaos Sablon Event/Gathering.",
  },
  {
    id: "jaket-hoodie-bomber",
    name: "Jaket, Bomber, Hoodie & Parka",
    badge: "Outerwear Premium",
    shortDescription:
      "Outerwear korporat dan komunitas: bomber jacket, hoodie zipper, coach jacket, hingga jaket lapangan waterproof taslan.",
    fullDescription:
      "Manufaktur aneka ragam jaket perusahaan berdesain stylish dan fungsional. Mulai dari Bomber Jacket semi-formal kantor, Parka lapangan tahan angin (windproof), Coach Jacket kasual, hingga Hoodie Fleece hangat berserat halus. Menggunakan ritsleting premium original YKK dan furing adem berkualitas.",
    moq: 24,
    leadTime: "12 - 16 Hari Kerja",
    recommendedMaterials: [
      "Taslan Milky / Taslan ZN (Water-repellent)",
      "Mayer Poliester Halus & Windproof",
      "Cotton Fleece Tebal Gramasi 280-300",
      "Baby Terry 100% Katun Lembut",
      "Kanvas Marsoto & Baby Canvas",
    ],
    finishingOptions: [
      "Resleting Besi / Vislon Original YKK",
      "Furing Dormeuil England / Despo / Jaring Adem",
      "Bordir Komputer Punggung & Dada",
      "Rib Katun Tebal pada Pergelangan & Pinggang",
    ],
    features: [
      "Lapisan furing rapi tanpa benang sisa",
      "Saku dalam (inner pocket) untuk smartphone & dompet",
      "Tahan terpaan angin dan gerimis ringan",
      "Pola ergonomis yang nyaman bergerak",
    ],
    popularFor: [
      "Jaket Angkatan Kampus & Komunitas",
      "Jaket Touring & Outdoor",
      "Bomber Jacket Eksekutif Kantor",
      "Hoodie Merchandise Startup",
    ],
    image: "/images/products/jaket-bomber.svg",
    whatsappMessage:
      "Halo Tim Wilcore, saya ingin memesan Jaket / Hoodie / Bomber untuk seragam tim kami.",
  },
  {
    id: "wearpack-safety-k3",
    name: "Wearpack Safety & Coverall K3",
    badge: "Standar Keselamatan Kerja",
    shortDescription:
      "Wearpack stelan dan coverall one-piece tahan gesek, dilengkapi scotchlite reflective bersertifikasi untuk proyek dan pabrik.",
    fullDescription:
      "Pakaian keselamatan kerja lapangan (K3) untuk sektor pertambangan, konstruksi, manufaktur pabrik, perkapalan, dan teknisi. Dirancang dengan kain drill tebal atau ripstop anti-sobek serta pita scotchlite pemantul cahaya 3M / standar EN471 yang menyala terang saat terkena sorot lampu malam hari.",
    moq: 24,
    leadTime: "12 - 16 Hari Kerja",
    recommendedMaterials: [
      "American Drill 1919 (Kuat & Awet)",
      "Nagata Drill 1919 Heavy Duty",
      "Ripstop Serat Kotak Anti-Sobek",
      "Kain Tahan Api (Flame Retardant) Opsional",
    ],
    finishingOptions: [
      "Scotchlite Reflective 3M / Grade A 5cm",
      "Resleting Besi YKK 2 Arah (Two-Way Zipper)",
      "Kantong Kargo Multifungsi + Gantungan HT",
      "Bordir Logo K3 (Safety First) & Bendera Merah Putih",
    ],
    features: [
      "Bartack penguat pada semua sudut kantong & selangkangan",
      "Pita scotchlite tahan cuci tidak mudah pecah",
      "Sirkulasi udara tambahan pada ketiak & punggung",
      "Tahan percikan oli dan gesekan medan berat",
    ],
    popularFor: [
      "Pekerja Proyek Konstruksi & Infrastruktur",
      "Teknisi Pabrik & Manufaktur Otomotif",
      "Kru Tambang & Migas (Oil & Gas)",
      "Bengkel Resmi & Laboratorium Riset",
    ],
    image: "/images/products/wearpack-safety.svg",
    whatsappMessage:
      "Halo Tim Wilcore, saya ingin penawaran spesifikasi dan harga Wearpack Safety / Coverall K3.",
  },
  {
    id: "jas-almamater-rompi",
    name: "Jas Almamater, Rompi & Blazer",
    badge: "Akademik & Instansi",
    shortDescription:
      "Jas almamater kampus/sekolah, blazer resmi, dan rompi lapangan multifungsi dengan konstruksi interlining kokoh.",
    fullDescription:
      "Pembuatan jas almamater untuk universitas, pondok pesantren, sekolah dinas, serta rompi (vest) kepanitiaan dan jurnalis. Dibuat dengan konstruksi pad bahu berkualitas dan lapisan interlining (kain keras) yang membuat jas berdiri tegap, tidak letoy, dan nyaman dikenakan sepanjang acara seremonial.",
    moq: 36,
    leadTime: "14 - 20 Hari Kerja",
    recommendedMaterials: [
      "Hisofy Drill (Sangat Halus & Jatuh)",
      "Nagata Drill & American Drill",
      "Kain Twist Semi-Wool (Look Formal Mewah)",
      "Ripstop / Parasut Taslan (Khusus Rompi Lapangan)",
    ],
    finishingOptions: [
      "Bordir Komputer Emblem / Monogram Dada",
      "Kancing Logam Kuningan Berlogo Timbul",
      "Bantalan Bahu (Shoulder Pad) Khusus Jas",
      "Lapisan Furing Satin Penuh (Full Furing)",
    ],
    features: [
      "Konstruksi lapel kerah presisi dan simetris",
      "Kancing kuningan eksklusif anti karat",
      "Pola ukuran reguler unisex untuk mahasiswa",
      "Kapasitas pesanan skala ribuan pcs per angkatan",
    ],
    popularFor: [
      "Jas Almamater Mahasiswa Baru",
      "Jas Angkatan Pesantren & SMA",
      "Rompi Relawan & Jurnalis",
      "Blazer Panitia Acara Kenegaraan",
    ],
    image: "/images/products/jas-almamater.svg",
    whatsappMessage:
      "Halo Tim Wilcore, kami membutuhkan penawaran pengadaan Jas Almamater / Rompi Instansi.",
  },
];
