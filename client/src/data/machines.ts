/**
 * Design context: Service Ledger uses operational machine tickets, not generic product cards.
 * [EDITABLE] Replace names, specifications, and available quantities with approved client data.
 */
export type Machine = {
  id: string;
  name: string;
  type: "B/W" | "Warna";
  ppm: number;
  recommended: string;
  visual: "bw" | "color" | "diagram";
  availability: "Siap dikirim" | "Terbatas";
};

export const machines: Machine[] = [
  {
    id: "SC-2625",
    name: "Canon iR 2625",
    type: "B/W",
    ppm: 25,
    recommended: "Kantor kecil · Administrasi",
    visual: "bw",
    availability: "Siap dikirim",
  },
  {
    id: "SC-S2320",
    name: "Xerox DocuCentre S2320",
    type: "B/W",
    ppm: 20,
    recommended: "Sekolah · Operasional harian",
    visual: "diagram",
    availability: "Siap dikirim",
  },
  {
    id: "SC-C2560",
    name: "Fuji Xerox ApeosPort C2560",
    type: "Warna",
    ppm: 25,
    recommended: "Marketing · Dokumen warna",
    visual: "color",
    availability: "Terbatas",
  },
  {
    id: "SC-3055",
    name: "Ricoh MP 3055",
    type: "B/W",
    ppm: 30,
    recommended: "Tim besar · Volume tinggi",
    visual: "diagram",
    availability: "Siap dikirim",
  },
];

export const plans = [
  {
    name: "Basic",
    label: "UNTUK KEBUTUHAN RUTIN",
    duration: "Kontrak mulai 1 bulan",
    items: ["1 unit B/W", "Kuota 3.000 lembar/bulan", "Maintenance terjadwal", "Respons teknisi sesuai area"],
    emphasis: false,
  },
  {
    name: "Business",
    label: "UNTUK TIM BERKEMBANG",
    duration: "Komitmen 6 bulan",
    items: ["2 unit: B/W + warna", "Kuota 10.000 lembar/bulan", "Toner untuk pemakaian wajar", "Prioritas penjadwalan servis"],
    emphasis: true,
  },
  {
    name: "Enterprise",
    label: "UNTUK OPERASIONAL SKALA BESAR",
    duration: "Kontrak tahunan",
    items: ["Konfigurasi unit sesuai kebutuhan", "Skema volume & toner khusus", "Jadwal teknisi terkoordinasi", "Paket layanan yang dapat disesuaikan"],
    emphasis: false,
  },
];
