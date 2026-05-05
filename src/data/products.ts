export interface Product {
  id: number;
  name: string;
  description: string;
  packaging: string;
  purity?: string;
  category: 'acid' | 'humectant' | 'protein' | 'extract' | 'other';
  form: string;
  gradient: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Gliceryna 99,8% roślinna",
    description: "Uniwersalny nawilżacz i rozpuszczalnik stosowany w kremach, balsamach, mydłach oraz produktach farmaceutycznych. Pochodzenie roślinne, najwyższa czystość.",
    packaging: "25 kg / 1.000 kg",
    purity: "99,8%",
    category: "humectant",
    form: "Bezbarwna ciecz",
    gradient: "from-blue-900/40 to-cyan-900/20"
  },
  {
    id: 2,
    name: "Kwas mlekowy",
    description: "Regulator pH i składnik aktywny w kosmetykach pielęgnacyjnych. Stosowany do złuszczania, nawilżania i kontroli kwasowości formulacji.",
    packaging: "25 kg / 200 kg",
    category: "acid",
    form: "Bezbarwna ciecz",
    gradient: "from-emerald-900/40 to-teal-900/20"
  },
  {
    id: 3,
    name: "Kwas askorbinowy (Witamina C)",
    description: "Silny przeciwutleniacz i rozjaśniacz skóry. Niezbędny składnik serum anti-aging, kremów i maseczek o działaniu antyoksydacyjnym.",
    packaging: "25 kg / Big-bag",
    category: "acid",
    form: "Biały proszek",
    gradient: "from-orange-900/40 to-yellow-900/20"
  },
  {
    id: 4,
    name: "Kwas cytrynowy jednowodny",
    description: "Regulator pH, konserwant i chelator. Jeden z najczęściej stosowanych surowców w kosmetyce, środkach czyszczących i przemyśle spożywczym.",
    packaging: "25 kg / Big-bag",
    category: "acid",
    form: "Białe kryształy",
    gradient: "from-lime-900/40 to-green-900/20"
  },
  {
    id: 5,
    name: "Kwas cytrynowy bezwodny",
    description: "Wersja bezwodna kwasu cytrynowego o wyższym stężeniu substancji czynnej. Idealny do formulacji wymagających precyzyjnej kontroli wilgotności.",
    packaging: "25 kg / Big-bag",
    category: "acid",
    form: "Biały proszek granulowany",
    gradient: "from-lime-900/30 to-emerald-900/20"
  },
  {
    id: 6,
    name: "Glicyna",
    description: "Aminokwas o działaniu nawilżającym i łagodzącym. Stosowany w formulacjach kosmetycznych, suplementach diety oraz produktach anti-aging.",
    packaging: "25 kg / Big-bag",
    category: "other",
    form: "Biały krystaliczny proszek",
    gradient: "from-violet-900/40 to-purple-900/20"
  },
  {
    id: 7,
    name: "Hialuronian sodu",
    description: "Kluczowy składnik nawilżający premium. Wiąże wodę w skórze, wygładzając zmarszczki. Stosowany w serach, kremach i zabiegach medycyny estetycznej.",
    packaging: "1 kg / 5 kg",
    category: "humectant",
    form: "Biały proszek",
    gradient: "from-sky-900/40 to-blue-900/20"
  },
  {
    id: 8,
    name: "Mocznik",
    description: "Składnik keratolityczny i nawilżający. Stosowany w kremach do stóp, preparatach dermatologicznych i kosmetykach do skóry suchej i zrogowaciałej.",
    packaging: "25 kg / Big-bag",
    category: "humectant",
    form: "Białe granulki",
    gradient: "from-slate-800/40 to-gray-900/20"
  },
  {
    id: 9,
    name: "Kwas jabłkowy",
    description: "Naturalny kwas owocowy o działaniu złuszczającym i rozjaśniającym. Stosowany w peelingach chemicznych, tonikach i kremach AHA.",
    packaging: "25 kg / Big-bag",
    category: "acid",
    form: "Biały krystaliczny proszek",
    gradient: "from-green-900/40 to-lime-900/20"
  },
  {
    id: 10,
    name: "Ekstrakt z rozmarynu 20%",
    description: "Naturalny przeciwutleniacz o wysokiej zawartości kwasu karnozowego. Stosowany jako konserwant naturalny i składnik aktywny w kosmetyce.",
    packaging: "1 kg / 5 kg",
    purity: "20%",
    category: "extract",
    form: "Brązowo-zielony proszek",
    gradient: "from-emerald-900/50 to-green-900/30"
  },
  {
    id: 11,
    name: "Kwas winowy",
    description: "Naturalny kwas AHA pozyskiwany z winogron. Złuszcza, rozjaśnia i wyrównuje koloryt skóry. Stosowany w profesjonalnych peelingach.",
    packaging: "25 kg / Big-bag",
    category: "acid",
    form: "Biały krystaliczny proszek",
    gradient: "from-purple-900/40 to-fuchsia-900/20"
  },
  {
    id: 12,
    name: "Kwas alfa-liponowy",
    description: "Silny przeciwutleniacz o działaniu anti-aging. Stosowany w zaawansowanych formulacjach kosmetycznych i suplementach diety premium.",
    packaging: "1 kg / 5 kg",
    category: "acid",
    form: "Żółty proszek",
    gradient: "from-yellow-900/50 to-orange-900/30"
  },
  {
    id: 13,
    name: "L-teanina 98%",
    description: "Aminokwas z zielonej herbaty o działaniu relaksującym i ochronnym. Stosowany w suplementach, kosmetykach i produktach wellness.",
    packaging: "1 kg / 5 kg",
    purity: "98%",
    category: "extract",
    form: "Biały proszek",
    gradient: "from-green-900/50 to-emerald-900/30"
  }
];
