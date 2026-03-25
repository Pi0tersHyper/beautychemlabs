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
    name: "Gliceryna 99,8% ro\u015Blinna",
    description: "Uniwersalny nawil\u017Cacz i rozpuszczalnik stosowany w kremach, balsamach, myd\u0142ach oraz produktach farmaceutycznych. Pochodzenie ro\u015Blinne, najwy\u017Csza czysto\u015B\u0107.",
    packaging: "25 kg / 1.000 kg",
    purity: "99,8%",
    category: "humectant",
    form: "Bezbarwna ciecz",
    gradient: "from-blue-900/40 to-cyan-900/20"
  },
  {
    id: 2,
    name: "Kwas mlekowy",
    description: "Regulator pH i sk\u0142adnik aktywny w kosmetykach piel\u0119gnacyjnych. Stosowany do z\u0142uszczania, nawil\u017Cania i kontroli kwasowo\u015Bci formulacji.",
    packaging: "25 kg / 200 kg",
    category: "acid",
    form: "Bezbarwna ciecz",
    gradient: "from-emerald-900/40 to-teal-900/20"
  },
  {
    id: 3,
    name: "Kwas askorbinowy (Witamina C)",
    description: "Silny przeciwutleniacz i rozja\u015Bniacz sk\u00F3ry. Niezb\u0119dny sk\u0142adnik serum anti-aging, krem\u00F3w i maseczek o dzia\u0142aniu antyoksydacyjnym.",
    packaging: "25 kg / Big-bag",
    category: "acid",
    form: "Bia\u0142y proszek",
    gradient: "from-orange-900/40 to-yellow-900/20"
  },
  {
    id: 4,
    name: "Kwas cytrynowy jednowodny",
    description: "Regulator pH, konserwant i chelator. Jeden z najcz\u0119\u015Bciej stosowanych surowc\u00F3w w kosmetyce, \u015Brodkach czyszcz\u0105cych i przemy\u015Ble spo\u017Cywczym.",
    packaging: "25 kg / Big-bag",
    category: "acid",
    form: "Bia\u0142e kryszta\u0142y",
    gradient: "from-lime-900/40 to-green-900/20"
  },
  {
    id: 5,
    name: "Kwas cytrynowy bezwodny",
    description: "Wersja bezwodna kwasu cytrynowego o wy\u017Cszym st\u0119\u017Ceniu substancji czynnej. Idealny do formulacji wymagaj\u0105cych precyzyjnej kontroli wilgotno\u015Bci.",
    packaging: "25 kg / Big-bag",
    category: "acid",
    form: "Bia\u0142y proszek granulowany",
    gradient: "from-lime-900/30 to-emerald-900/20"
  },
  {
    id: 6,
    name: "Glicyna",
    description: "Aminokwas o dzia\u0142aniu nawil\u017Caj\u0105cym i \u0142agodz\u0105cym. Stosowany w formulacjach kosmetycznych, suplementach diety oraz produktach anti-aging.",
    packaging: "25 kg / Big-bag",
    category: "other",
    form: "Bia\u0142y krystaliczny proszek",
    gradient: "from-violet-900/40 to-purple-900/20"
  },
  {
    id: 7,
    name: "Hialuronian sodu",
    description: "Kluczowy sk\u0142adnik nawil\u017Caj\u0105cy premium. Wi\u0105\u017Ce wod\u0119 w sk\u00F3rze, wyg\u0142adzaj\u0105c zmarszczki. Stosowany w serach, kremach i zabiegach medycyny estetycznej.",
    packaging: "1 kg / 5 kg",
    category: "humectant",
    form: "Bia\u0142y proszek",
    gradient: "from-sky-900/40 to-blue-900/20"
  },
  {
    id: 8,
    name: "Mocznik",
    description: "Sk\u0142adnik keratolityczny i nawil\u017Caj\u0105cy. Stosowany w kremach do st\u00F3p, preparatach dermatologicznych i kosmetykach do sk\u00F3ry suchej i zrogowacia\u0142ej.",
    packaging: "25 kg / Big-bag",
    category: "humectant",
    form: "Bia\u0142e granulki",
    gradient: "from-slate-800/40 to-gray-900/20"
  },
  {
    id: 9,
    name: "Kolagen rybi",
    description: "Hydrolizowany kolagen pochodzenia morskiego o wysokiej biodost\u0119pno\u015Bci. Stosowany w suplementach, kosmetykach anti-aging i produktach wellness.",
    packaging: "5 kg / 25 kg",
    category: "protein",
    form: "Bia\u0142y proszek",
    gradient: "from-cyan-900/40 to-blue-900/20"
  },
  {
    id: 10,
    name: "Kolagen wo\u0142owy",
    description: "Kolagen typu I i III z tkanki bydl\u0119cej. Szeroko stosowany w suplementach diety, kosmetyce i produktach dla aktywnych fizycznie.",
    packaging: "5 kg / 25 kg",
    category: "protein",
    form: "Bia\u0142y / kremowy proszek",
    gradient: "from-amber-900/40 to-orange-900/20"
  },
  {
    id: 11,
    name: "\u017Belatyna wo\u0142owa",
    description: "Wielofunkcyjny surowiec do kapsu\u0142kowania, maseczek \u017Celatynowych i produkt\u00F3w od\u017Cywczych. Wysoka czysto\u015B\u0107 i powtarzalno\u015B\u0107 parametr\u00F3w.",
    packaging: "25 kg / Big-bag",
    category: "protein",
    form: "\u017B\u00F3\u0142te / bursztynowe granulki",
    gradient: "from-yellow-900/40 to-amber-900/20"
  },
  {
    id: 12,
    name: "Kwas fosforowy",
    description: "Regulator kwasowo\u015Bci stosowany w przemy\u015Ble kosmetycznym, spo\u017Cywczym i chemicznym. Surowiec techniczny o szerokim zastosowaniu.",
    packaging: "25 kg / 200 kg",
    purity: "85%",
    category: "acid",
    form: "Bezbarwna g\u0119sta ciecz",
    gradient: "from-red-900/40 to-rose-900/20"
  },
  {
    id: 13,
    name: "Kwas jab\u0142kowy",
    description: "Naturalny kwas owocowy o dzia\u0142aniu z\u0142uszczaj\u0105cym i rozja\u015Bniaj\u0105cym. Stosowany w peelingach chemicznych, tonikach i kremach AHA.",
    packaging: "25 kg / Big-bag",
    category: "acid",
    form: "Bia\u0142y krystaliczny proszek",
    gradient: "from-green-900/40 to-lime-900/20"
  },
  {
    id: 14,
    name: "Ekstrakt z rozmarynu 20%",
    description: "Naturalny przeciwutleniacz o wysokiej zawarto\u015Bci kwasu karnozowego. Stosowany jako konserwant naturalny i sk\u0142adnik aktywny w kosmetyce.",
    packaging: "1 kg / 5 kg",
    purity: "20%",
    category: "extract",
    form: "Br\u0105zowo-zielony proszek",
    gradient: "from-emerald-900/50 to-green-900/30"
  },
  {
    id: 15,
    name: "Kolagen wieprzowy",
    description: "Hydrolizowany kolagen \u015Bwi\u0144skiego pochodzenia. Ekonomiczna alternatywa w suplementach i produktach kosmetycznych o dzia\u0142aniu regeneruj\u0105cym.",
    packaging: "5 kg / 25 kg",
    category: "protein",
    form: "Bia\u0142y proszek",
    gradient: "from-rose-900/40 to-pink-900/20"
  },
  {
    id: 16,
    name: "Kwas octowy 80%",
    description: "Surowiec techniczny i kosmetyczny o szerokim zastosowaniu. Stosowany jako regulator pH, sk\u0142adnik peeling\u00F3w i \u015Brodk\u00F3w czyszcz\u0105cych.",
    packaging: "25 kg / 200 kg",
    purity: "80%",
    category: "acid",
    form: "Bezbarwna ciecz",
    gradient: "from-teal-900/40 to-cyan-900/20"
  },
  {
    id: 17,
    name: "Kwas winowy",
    description: "Naturalny kwas AHA pozyskiwany z winogron. Z\u0142uszcza, rozja\u015Bnia i wyr\u00F3wnuje koloryt sk\u00F3ry. Stosowany w profesjonalnych peelingach.",
    packaging: "25 kg / Big-bag",
    category: "acid",
    form: "Bia\u0142y krystaliczny proszek",
    gradient: "from-purple-900/40 to-fuchsia-900/20"
  },
  {
    id: 18,
    name: "Kwas alfa-liponowy",
    description: "Silny przeciwutleniacz o dzia\u0142aniu anti-aging. Stosowany w zaawansowanych formulacjach kosmetycznych i suplementach diety premium.",
    packaging: "1 kg / 5 kg",
    category: "acid",
    form: "\u017B\u00F3\u0142ty proszek",
    gradient: "from-yellow-900/50 to-orange-900/30"
  },
  {
    id: 19,
    name: "L-teanina 98%",
    description: "Aminokwas z zielonej herbaty o dzia\u0142aniu relaksuj\u0105cym i ochronnym. Stosowany w suplementach, kosmetykach i produktach wellness.",
    packaging: "1 kg / 5 kg",
    purity: "98%",
    category: "extract",
    form: "Bia\u0142y proszek",
    gradient: "from-green-900/50 to-emerald-900/30"
  },
  {
    id: 20,
    name: "Colostrum liofilizowane",
    description: "Liofilizowana siara bydl\u0119ca bogata w immunoglobuliny i czynniki wzrostu. Sk\u0142adnik premium w suplementach i zaawansowanej kosmetyce.",
    packaging: "1 kg / 5 kg",
    category: "protein",
    form: "Kremowy proszek",
    gradient: "from-amber-900/50 to-yellow-900/30"
  }
];
