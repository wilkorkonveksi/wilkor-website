export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  siteUrl: string;
  whatsapp: {
    number: string; // e.g. "6281234567890" for wa.me link
    display: string; // e.g. "+62 812-3456-7890"
    defaultMessage: string;
  };
  email: string;
  address: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
    mapsUrl: string;
  };
  businessHours: {
    workdays: string;
    weekend: string;
  };
  social: {
    instagram: string;
    linkedin: string;
    tiktok: string;
  };
  stats: Array<{
    value: string;
    label: string;
    description: string;
  }>;
  guarantees: Array<{
    title: string;
    desc: string;
    icon: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "Wilcore",
  legalName: "PT Wilcore Manufaktur Garment Indonesia",
  tagline: "Jasa Konveksi & Vendor Seragam Terpercaya Kualitas Garment",
  description:
    "Wilcore adalah pabrik konveksi dan vendor seragam B2B terkemuka yang memproduksi kemeja PDH/PDL, polo shirt, kaos event, jaket, dan wearpack safety dengan standar mutu garment ekspor, kapasitas besar, dan jaminan tepat waktu.",
  siteUrl: "https://wilcore.com",
  whatsapp: {
    number: "6281234567890",
    display: "+62 812-3456-7890",
    defaultMessage:
      "Halo Tim Wilcore, saya tertarik untuk konsultasi dan request penawaran harga pembuatan seragam kustom.",
  },
  email: "halo@wilcore.com",
  address: {
    street: "Kawasan Industri Manufaktur & Tekstil Blok C4 No. 12",
    city: "Bandung",
    province: "Jawa Barat",
    postalCode: "40287",
    country: "Indonesia",
    mapsUrl: "https://maps.google.com/?q=Bandung+Tekstil+Industri",
  },
  businessHours: {
    workdays: "Senin – Jumat: 08.00 – 17.00 WIB",
    weekend: "Sabtu: 08.30 – 14.00 WIB (Minggu & Libur Nasional: Konsultasi Online)",
  },
  social: {
    instagram: "https://instagram.com/wilcore.id",
    linkedin: "https://linkedin.com/company/wilcore-garment",
    tiktok: "https://tiktok.com/@wilcore.garment",
  },
  stats: [
    {
      value: "150.000+",
      label: "Kapasitas / Bulan",
      description: "Pcs pakaian diproduksi tiap bulan dengan mesin modern",
    },
    {
      value: "99.4%",
      label: "Ketepatan Waktu",
      description: "Komitmen delivery on-time dengan sistem tracking terpadu",
    },
    {
      value: "650+",
      label: "Klien Korporat & B2B",
      description: "Perusahaan nasional, instansi pemerintah, BUMN & startup",
    },
    {
      value: "100%",
      label: "Garansi Kualitas",
      description: "Garansi perbaikan/ganti baru bila ada cacat produksi",
    },
  ],
  guarantees: [
    {
      title: "Quality Control 3 Tahap",
      desc: "Setiap helai pakaian melewati inspeksi bahan mentah, presisi pola jahit, hingga finishing & steam pressing.",
      icon: "check-badge",
    },
    {
      title: "Jaminan On-Time Delivery",
      desc: "SLA produksi tertulis dengan kompensasi keterlambatan. Pengiriman terjamin ke seluruh wilayah Indonesia.",
      icon: "clock",
    },
    {
      title: "Bahan 100% Original & Teruji",
      desc: "Bermitra resmi dengan pabrik tekstil terverifikasi (Sritex, Unione, Tokusen) untuk memastikan keaslian kain.",
      icon: "shield-check",
    },
    {
      title: "Free Desain & Sampel Proofing",
      desc: "Layanan mockup 3D gratis dan pembuatan sample fisik sebelum proses produksi massal dijalankan (S&K berlaku).",
      icon: "sparkles",
    },
  ],
};
