export interface FabricItem {
  name: string;
  category: "kaos" | "polo" | "kemeja" | "jaket";
  composition: string;
  grammage: string;
  handfeel: string;
  breathability: string; // e.g. "Sangat Tinggi", "Tinggi", "Sedang"
  durability: string;
  recommendedUse: string;
  pros: string[];
  cons: string[];
}

export interface SizeChartRow {
  size: string;
  chestWidth: number; // Lebar dada (cm)
  bodyLength: number; // Panjang badan (cm)
  sleeveLength?: number; // Panjang lengan (cm)
  shoulderWidth?: number; // Lebar bahu (cm)
}

export interface SizeChartGroup {
  id: string;
  title: string;
  description: string;
  tolerance: string;
  columns: { key: string; label: string; unit: string }[];
  rows: SizeChartRow[];
}

export const fabrics: FabricItem[] = [
  // KAOS
  {
    name: "Cotton Combed 30s",
    category: "kaos",
    composition: "100% Serat Kapas Murni (Reaktif)",
    grammage: "140 - 150 gsm",
    handfeel: "Sangat lembut, halus, dan ringan",
    breathability: "Sangat Tinggi (Menyerap Keringat Cepat)",
    durability: "Tinggi (Tahan cuci berulang)",
    recommendedUse: "Kaos distro premium, kaos event komunitas, merchandise clothing line",
    pros: ["Adem maksimal di cuaca terik", "Kain lemas jatuh pas di badan", "Warna pekat tidak luntur"],
    cons: ["Lebih tipis dibanding combed 24s sehingga kurang cocok untuk area dingin"],
  },
  {
    name: "Cotton Combed 24s",
    category: "kaos",
    composition: "100% Serat Kapas Alami",
    grammage: "175 - 185 gsm",
    handfeel: "Lembut dengan ketebalan sedang (medium-weight)",
    breathability: "Tinggi",
    durability: "Sangat Tinggi",
    recommendedUse: "Kaos seragam perusahaan, kaos gathering keluarga besar, kaos kerja semi-kasual",
    pros: ["Keseimbangan ideal antara adem dan tidak terawang", "Struktur rajutan lebih padat", "Lebih awet untuk aktivitas outdoor"],
    cons: ["Sedikit lebih berat daripada versi 30s"],
  },
  {
    name: "Cotton Bamboo (Katun Bambu)",
    category: "kaos",
    composition: "70% Serat Bambu Alami + 30% Katun Murni",
    grammage: "150 - 160 gsm",
    handfeel: "Ekstra halus selembut sutra dengan kilau alami",
    breathability: "Sangat Tinggi (Alami Antibakteri & Anti-Bau)",
    durability: "Tinggi",
    recommendedUse: "Kaos VIP eksklusif, kaos olahraga ringan, penderita kulit sensitif",
    pros: ["Mengandung agen Penny Quinone alami pencegah bakteri", "Sensasi dingin saat menyentuh kulit", "Perlindungan alami dari sinar UV"],
    cons: ["Harga bahan relatif lebih tinggi"],
  },
  {
    name: "Polyester PE Double Knit",
    category: "kaos",
    composition: "100% Serat Sintetis Poliester",
    grammage: "160 - 180 gsm",
    handfeel: "Agak kaku namun kokoh dan tebal",
    breathability: "Sedang",
    durability: "Sangat Tinggi (Anti kusut & cepat kering)",
    recommendedUse: "Kaos promosi massal (kampanye/jalan sehat beranggaran hemat)",
    pros: ["Biaya sangat ekonomis untuk volume ribuan pcs", "Tidak mudah melar atau susut", "Warna sangat cerah"],
    cons: ["Kurang menyerap keringat dibanding katun murni"],
  },

  // POLO
  {
    name: "Lacoste CVC (Chief Value Cotton)",
    category: "polo",
    composition: "60% Katun Alami + 40% Poliester",
    grammage: "210 - 230 gsm",
    handfeel: "Bertekstur piku (honeycomb), empuk, dan kokoh",
    breathability: "Tinggi",
    durability: "Sangat Tinggi (Tidak mudah susut)",
    recommendedUse: "Seragam polo kantor B2B, seragam sales toko, seragam event eksekutif",
    pros: ["Bahan polo paling direkomendasikan karena awet & adem", "Pori-pori rapi tahan dicuci berulang", "Tingkat susut sangat minim"],
    cons: ["Harga di atas Lacoste PE biasa"],
  },
  {
    name: "Lacoste Pique Cotton 100%",
    category: "polo",
    composition: "100% Cotton Murni",
    grammage: "220 - 240 gsm",
    handfeel: "Sangat adem, empuk, dan alami menyerap keringat",
    breathability: "Sangat Tinggi",
    durability: "Tinggi",
    recommendedUse: "Polo shirt premium brand internasional, seragam manajemen kantor",
    pros: ["Kenyamanan nomor satu untuk cuaca tropis", "Kesan mewah dan ramah lingkungan", "Tekstur rajut elegan"],
    cons: ["Membutuhkan perawatan setrika yang tepat"],
  },
  {
    name: "Lacoste PE (Poliester)",
    category: "polo",
    composition: "100% Poliester Pique",
    grammage: "200 - 220 gsm",
    handfeel: "Cenderung kaku dengan pori-pori besar",
    breathability: "Sedang",
    durability: "Sangat Tinggi",
    recommendedUse: "Polo gathering massal, seragam event promosi outdoor sekali pakai/beranggaran ketat",
    pros: ["Pilihan paling ekonomis", "Cepat kering saat dijemur", "Warna tidak pudar"],
    cons: ["Kurang nyaman untuk pemakaian seharian di ruang non-AC"],
  },

  // KEMEJA & WEARPACK
  {
    name: "Nagata Drill 1919 (Original)",
    category: "kemeja",
    composition: "Kandungan Katun Dominan + Poliester Grade A",
    grammage: "240 - 250 gsm",
    handfeel: "Tebal namun lembut dan jatuh lemas di badan",
    breathability: "Tinggi (Adem dipakai seharian)",
    durability: "Sangat Tinggi (Anti robek)",
    recommendedUse: "Kemeja PDH instansi, seragam BUMN, kemeja kampus, wearpack supervisor",
    pros: ["Serat pintalan diagonal rapat dan rapi", "Warna awet bertahun-tahun", "Kain terpopuler nomor satu di Indonesia untuk PDH"],
    cons: ["Banyak beredar produk tiruan non-original di pasaran luar"],
  },
  {
    name: "American Drill 1919",
    category: "kemeja",
    composition: "Campuran Katun dan Poliester Seimbang",
    grammage: "210 - 230 gsm",
    handfeel: "Sedikit lebih kaku dibanding Nagata, bertekstur tegas",
    breathability: "Sedang - Tinggi",
    durability: "Sangat Tinggi",
    recommendedUse: "Kemeja PDL lapangan, seragam teknisi, rompi kerja, celana kargo",
    pros: ["Harga ekonomis dengan ketahanan fisik luar biasa", "Mudah dibordir dan dijahit presisi", "Tidak mudah kusut"],
    cons: ["Kerapatan katun sedikit di bawah Nagata Drill"],
  },
  {
    name: "Taipan Tropical Original",
    category: "kemeja",
    composition: "Campuran Katun dan Poliester Halus",
    grammage: "190 - 210 gsm",
    handfeel: "Sangat halus, ringan, dan adem",
    breathability: "Sangat Tinggi",
    durability: "Tinggi",
    recommendedUse: "Kemeja eksekutif formal, seragam dokter/klinik, seragam kantor ruang ber-AC",
    pros: ["Tampilan kain mewah tanpa tekstur serat diagonal mencolok", "Sangat adem dan tidak panas", "Warna elegan"],
    cons: ["Harga kelas premium"],
  },
  {
    name: "Ripstop Grade A",
    category: "kemeja",
    composition: "Katun Sintetis dengan Rajutan Motif Kotak Penguat",
    grammage: "230 - 250 gsm",
    handfeel: "Kuat, kaku bertekstur jaring kotak anti-sobek",
    breathability: "Sedang",
    durability: "Maksimal (Heavy-Duty Extreme)",
    recommendedUse: "Kemeja PDL taktikal outdoor, wearpack K3, rompi SAR, celana gunung",
    pros: ["Jika tertusuk paku/ranting, robekan tidak akan melebar", "Tahan gesekan dan medan berbatu", "Tampilan militer modern"],
    cons: ["Agak kaku saat pertama kali digunakan sebelum dicuci"],
  },

  // JAKET
  {
    name: "Cotton Fleece Premium",
    category: "jaket",
    composition: "80% Katun + 20% Poliester",
    grammage: "280 - 320 gsm",
    handfeel: "Luar halus, bagian dalam berbulu lembut dan hangat",
    breathability: "Tinggi (Hangat namun tidak pengap)",
    durability: "Tinggi",
    recommendedUse: "Hoodie jumper, zipper hoodie, jaket varsity, jaket angkatan",
    pros: ["Sangat nyaman di kulit", "Menahan dingin udara pegunungan/AC", "Menyerap keringat"],
    cons: ["Butuh waktu jemur lebih lama jika tebal"],
  },
  {
    name: "Taslan Milky / Taslan ZN",
    category: "jaket",
    composition: "100% Nilon Poliester dengan Lapisan Karet Milky",
    grammage: "160 - 180 gsm",
    handfeel: "Ringan, licin, bertekstur rapat eksklusif",
    breathability: "Sedang (Windproof & Water-repellent)",
    durability: "Sangat Tinggi",
    recommendedUse: "Jaket bomber, jaket riding motor, jaket outdoor lapangan, jaket parka",
    pros: ["Menahan angin kencang 100%", "Efek daun talas menolak cipratan air hujan ringan", "Tampilan modern & sporty"],
    cons: ["Memerlukan furing dalam berbahan jaring atau katun agar tidak gerah"],
  },
  {
    name: "Baby Terry 100% Katun",
    category: "jaket",
    composition: "100% Katun dengan Rajutan Loop Handuk di Bagian Dalam",
    grammage: "220 - 240 gsm",
    handfeel: "Empuk, lembut, tidak tebal berlebih",
    breathability: "Sangat Tinggi",
    durability: "Tinggi",
    recommendedUse: "Sweater kasual kota, jaket olahraga santai, hoodie tropis siang hari",
    pros: ["Tidak gerah dipakai di siang hari", "Struktur rajut loop menyerap keringat seketika", "Tekstur sangat lembut"],
    cons: ["Kurang tahan untuk menahan angin malam kencang"],
  },
];

export const sizeCharts: SizeChartGroup[] = [
  {
    id: "kaos-polo",
    title: "Size Chart Kaos Oblong & Kaos Polo",
    description: "Ukuran standar reguler pria/unisex Indonesia (toleransi ukuran jahit ±1-2 cm).",
    tolerance: "± 1 - 2 cm",
    columns: [
      { key: "size", label: "Ukuran", unit: "" },
      { key: "chestWidth", label: "Lebar Dada", unit: "cm" },
      { key: "bodyLength", label: "Panjang Badan", unit: "cm" },
      { key: "sleeveLength", label: "Panjang Lengan (Polo/Kaos)", unit: "cm" },
    ],
    rows: [
      { size: "S", chestWidth: 47, bodyLength: 67, sleeveLength: 21 },
      { size: "M", chestWidth: 50, bodyLength: 70, sleeveLength: 22 },
      { size: "L", chestWidth: 53, bodyLength: 72, sleeveLength: 23 },
      { size: "XL", chestWidth: 56, bodyLength: 74, sleeveLength: 24 },
      { size: "XXL", chestWidth: 59, bodyLength: 76, sleeveLength: 25 },
      { size: "3XL", chestWidth: 62, bodyLength: 79, sleeveLength: 26 },
    ],
  },
  {
    id: "kemeja-pdh",
    title: "Size Chart Kemeja PDH / PDL & Seragam Kantor",
    description: "Pola ergonomis dengan ruang gerak leluasa di ketiak dan punggung.",
    tolerance: "± 1 - 2 cm",
    columns: [
      { key: "size", label: "Ukuran", unit: "" },
      { key: "chestWidth", label: "Lebar Dada", unit: "cm" },
      { key: "bodyLength", label: "Panjang Kemeja", unit: "cm" },
      { key: "shoulderWidth", label: "Lebar Bahu", unit: "cm" },
      { key: "sleeveLength", label: "Lengan Panjang", unit: "cm" },
    ],
    rows: [
      { size: "S", chestWidth: 51, bodyLength: 68, shoulderWidth: 44, sleeveLength: 57 },
      { size: "M", chestWidth: 54, bodyLength: 70, shoulderWidth: 46, sleeveLength: 59 },
      { size: "L", chestWidth: 57, bodyLength: 73, shoulderWidth: 48, sleeveLength: 61 },
      { size: "XL", chestWidth: 60, bodyLength: 75, shoulderWidth: 50, sleeveLength: 62 },
      { size: "XXL", chestWidth: 63, bodyLength: 77, shoulderWidth: 52, sleeveLength: 63 },
      { size: "3XL", chestWidth: 66, bodyLength: 80, shoulderWidth: 54, sleeveLength: 64 },
    ],
  },
  {
    id: "jaket-outerwear",
    title: "Size Chart Jaket, Bomber & Hoodie",
    description: "Pola dirancang dengan kelonggaran ekstra untuk pemakaian di atas kaos/kemeja.",
    tolerance: "± 1 - 2 cm",
    columns: [
      { key: "size", label: "Ukuran", unit: "" },
      { key: "chestWidth", label: "Lebar Dada", unit: "cm" },
      { key: "bodyLength", label: "Panjang Jaket", unit: "cm" },
      { key: "shoulderWidth", label: "Lebar Bahu", unit: "cm" },
      { key: "sleeveLength", label: "Panjang Lengan", unit: "cm" },
    ],
    rows: [
      { size: "S", chestWidth: 52, bodyLength: 65, shoulderWidth: 45, sleeveLength: 59 },
      { size: "M", chestWidth: 55, bodyLength: 68, shoulderWidth: 47, sleeveLength: 61 },
      { size: "L", chestWidth: 58, bodyLength: 71, shoulderWidth: 49, sleeveLength: 63 },
      { size: "XL", chestWidth: 61, bodyLength: 73, shoulderWidth: 51, sleeveLength: 64 },
      { size: "XXL", chestWidth: 64, bodyLength: 76, shoulderWidth: 53, sleeveLength: 65 },
      { size: "3XL", chestWidth: 67, bodyLength: 78, shoulderWidth: 55, sleeveLength: 66 },
    ],
  },
];
