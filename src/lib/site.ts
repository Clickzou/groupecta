/**
 * Configuration centrale du site Groupe CTA.
 * Toutes les données métier (coordonnées, entités, liens) sont regroupées ici
 * pour faciliter la mise à jour sans toucher aux composants.
 */

export const site = {
  name: "Groupe CTA",
  legalName: "Groupe CTA",
  description:
    "Le Groupe CTA réunit des experts du voyage d'affaires, de l'événementiel professionnel et du tourisme à Toulouse. Découvrez nos entités SOP Events et CTA.",
  url: "https://groupe-cta.com",
  // Adresse du siège (cahier des charges + fiche Google Business Profile)
  address: {
    street: "99 rue de Fenouillet",
    postalCode: "31200",
    city: "Toulouse",
    country: "France",
  },
  email: "contact@sop-events.fr", // adresse active du groupe (l'ancienne contact@groupe-cta.com n'est pas active)
  // Coordonnées GPS approximatives du quartier de Fenouillet (à affiner pour Google Maps)
  geo: { lat: 43.6435, lng: 1.4256 },
  social: {
    linkedin: "", // TODO: renseigner si disponible
    facebook: "",
    instagram: "",
  },
} as const;

export type Entity = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  phone?: string; // vide si l'entité n'a pas de standard téléphonique
  hours: string;
  url: string; // site web de l'entité (plateforme de redirection)
  logo: string; // logo officiel dans /public/logos
  cover: string; // image d'en-tête de la carte (dans /public/hero)
  brand: "cta" | "sop";
  accent: "red" | "blue" | "magenta";
  linkedin?: string; // page LinkedIn de la société (laisser vide si non disponible)
  hover: string; // arrière-plan (CSS) appliqué au survol de la carte société
  bar: string; // couleur du trait sous le titre de la carte
  contactForm?: string; // formulaire de contact de l'entité (vide si site en cours)
  noSite?: boolean; // true si le site de l'entité n'est pas encore en ligne
};

/**
 * Les 4 sociétés du groupe. `url` = cible de redirection pour accroître
 * le trafic vers chaque site. À confirmer / mettre à jour avec les vraies URLs.
 */
export const entities: Entity[] = [
  {
    slug: "cta-business-travel",
    name: "CTA Business Travel",
    tagline: "Voyages d'affaires",
    description:
      "Depuis plus de 25 ans, nous accompagnons les voyageurs d'affaires avec des services sur-mesure et des tarifs négociés.",
    phone: "05 34 39 13 96",
    hours: "Lun–Ven : 9h–12h / 14h–17h",
    url: "https://ctabusinesstravel.com/",
    logo: "/logos/cta-business-travel.png",
    cover: "/hero/agence-voyage-affaire.jpg",
    brand: "cta",
    accent: "blue",
    linkedin: "https://www.linkedin.com/company/cta-business-travel",
    hover: "#0277BD",
    bar: "#0277BD",
    contactForm: "https://ctabusinesstravel.com/contact",
  },
  {
    slug: "cta-meeting-events",
    name: "CTA Meeting & Events",
    tagline: "Congrès & événements professionnels",
    description:
      "Conférences, congrès et cérémonies professionnelles de 100 à plus de 5 000 personnes, organisés de A à Z.",
    // Pas de standard téléphonique pour le congrès.
    hours: "Sur rendez-vous",
    url: "https://ctameetingevents.fr/",
    logo: "/logos/cta-meeting-events.png",
    cover: "/hero/agence-evenementielle.jpg",
    brand: "cta",
    accent: "blue",
    linkedin: "https://www.linkedin.com/company/cta-meeting-events",
    hover: "#1C244B",
    bar: "#1C244B",
    contactForm: "https://ctameetingevents.fr/contact/",
  },
  {
    slug: "cta-voyages",
    name: "CTA Voyages",
    tagline: "Agence de voyages sur-mesure",
    description:
      "Agence de voyages créée il y a plus de 30 ans, proposant des voyages sur-mesure et les séjours des plus grands voyagistes. Intégrée au 1er réseau européen de voyages via TourCom.",
    phone: "05 34 39 13 91",
    hours: "Lun–Ven : 10h–13h, sur rendez-vous",
    url: "https://cta-voyages.com/",
    logo: "/logos/cta-voyages.png",
    cover: "/hero/agence-voyage-individuel.jpg",
    brand: "cta",
    accent: "blue",
    linkedin: "https://www.linkedin.com/company/cta-voyages",
    hover: "linear-gradient(135deg,#004191 0%,#2974be 55%,#73a6d8 100%)",
    bar: "#004191",
    contactForm: "https://cta-voyages.com/demande-devis",
  },
  {
    slug: "sop-events",
    name: "SOP Events",
    tagline: "Séminaires, team building & incentives",
    description:
      "Spécialiste des séminaires, team buildings, incentives, soirées d'entreprise et lancements de produits, en France et à l'international.",
    phone: "05 34 39 13 92",
    hours: "Lun–Ven : 9h–12h / 14h–17h",
    url: "https://sop-events.fr/",
    logo: "/logos/sop-events.png",
    cover: "/hero/agence-teambuilding.jpg",
    brand: "sop",
    accent: "magenta",
    linkedin: "https://www.linkedin.com/company/sopevents",
    hover: "linear-gradient(135deg,#cb1d48 0%,#dc3d31 100%)",
    bar: "#cb1d48",
    contactForm: "https://sop-events.fr/devis-sur-mesure-evenementiel/",
  },
];

// Navigation : ancres sur la home (préfixe "/#") + pages dédiées.
export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const nav: NavItem[] = [
  { label: "Accueil", href: "/#accueil" },
  { label: "Le Groupe", href: "/#le-groupe" },
  { label: "Nos entités", href: "/#nos-societes" },
  { label: "Chiffres clés", href: "/chiffres-cles" },
  {
    label: "Nos expertises",
    href: "/accompagner-nos-clients",
    children: [
      { label: "Voyage d'affaires", href: "/accompagner-nos-clients/voyage-d-affaires" },
      { label: "Voyage sur-mesure", href: "/accompagner-nos-clients/voyage-sur-mesure" },
      { label: "Séminaire & team building", href: "/accompagner-nos-clients/seminaire-team-building" },
      { label: "Conférence & congrès", href: "/accompagner-nos-clients/conference-congres" },
    ],
  },
  { label: "Investisseurs", href: "/investisseurs" },
  { label: "Contact", href: "/contact" },
];

/** Renvoie l'id d'ancre d'un href de navigation (ex. "/#contact" -> "contact"). */
export function anchorId(href: string): string | null {
  const i = href.indexOf("#");
  return i === -1 ? null : href.slice(i + 1);
}

/**
 * Diaporama plein écran de la page d'accueil (4 images en fondu enchaîné).
 * TODO: déposer les images dans /public/hero et renseigner `src`
 * (ex. "/hero/slide-1.jpg"). Tant que `src` est vide, un dégradé de marque
 * s'affiche à la place — le site reste fonctionnel en attendant les visuels.
 */
export type Slide = {
  src: string;
  alt: string;
  placeholder: string;
  title: string; // titre affiché sur la photo (change à chaque slide)
  text: string; // texte affiché sous le titre
};

// TODO: remplacer les `title` / `text` ci-dessous par les versions définitives
// fournies par le client (un couple titre + texte par photo).
export const heroSlides: Slide[] = [
  {
    // 1 — Voyage d'affaires
    src: "/hero/agence-voyage-affaire.jpg",
    alt: "Voyage d'affaires",
    placeholder: "bg-[linear-gradient(135deg,#1e445b_0%,#1e76b9_100%)]",
    title: "Voyage d'affaires",
    text: "Des déplacements professionnels optimisés : services sur-mesure et tarifs négociés depuis plus de 25 ans.",
  },
  {
    // 2 — Voyage individuel
    src: "/hero/agence-voyage-individuel.jpg",
    alt: "Voyage individuel",
    placeholder: "bg-[linear-gradient(135deg,#1e76b9_0%,#cc1c49_100%)]",
    title: "Voyage individuel",
    text: "Vos voyages sur-mesure, imaginés par des experts du voyage depuis 1992.",
  },
  {
    // 3 — Séminaire
    src: "/hero/agence-evenementielle.jpg",
    alt: "Séminaire d'entreprise",
    placeholder: "bg-[linear-gradient(135deg,#1e445b_0%,#bd1818_100%)]",
    title: "Séminaire",
    text: "Des séminaires d'entreprise marquants, organisés de A à Z, en France et à l'international.",
  },
  {
    // 4 — Team building
    src: "/hero/agence-teambuilding.jpg",
    alt: "Team building",
    placeholder: "bg-[linear-gradient(135deg,#cc1c49_0%,#bd1818_100%)]",
    title: "Team building",
    text: "Des activités de cohésion qui fédèrent et motivent durablement vos équipes.",
  },
];

// Étiquette H1 fixe du splash (ne change pas selon la photo)
export const hero = {
  label: "Quatre expertises, un seul groupe",
} as const;

// `value` = cible numérique du compteur animé ; `prefix`/`suffix` = symboles affichés.
export const stats = [
  { value: 30, prefix: "+ de ", suffix: "", label: "ans d'expertise" },
  { value: 4, prefix: "", suffix: "", label: "entités spécialisées" },
  { value: 120, prefix: "+ de ", suffix: "", label: "sociétés en compte" },
  { value: 100, prefix: "", suffix: "%", label: "sur-mesure" },
] as const;

/** Services « Accompagner nos clients » (une page par service). */
export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  cover: string;
  points: string[];
  entitySlug: string;
  /** Dégradé de marque (CSS) appliqué en voile sur l'image du hero. */
  theme: string;
  links?: { label: string; href: string }[];
};

export const services: Service[] = [
  {
    slug: "voyage-d-affaires",
    title: "Voyage d'affaires",
    short: "Optimisez les déplacements professionnels de vos équipes.",
    intro:
      "Nous prenons en charge l'ensemble des déplacements professionnels de vos collaborateurs : réservation, suivi, maîtrise des coûts et assistance permanente, en France comme à l'international.",
    cover: "/hero/cover-voyage-affaires.jpg",
    points: [
      "Tarifs négociés via le 1er réseau de voyage d'affaires en France (TourCom)",
      "Assistance voyageurs 24/7",
      "Réservation en ligne avec CTA Business Connect",
      "Reporting et maîtrise budgétaire",
      "Politique voyage sur-mesure",
    ],
    entitySlug: "cta-business-travel",
    theme: "linear-gradient(130deg,#16425b 0%,#0277bd 100%)",
    links: [
      { label: "Mon voyage d'affaires", href: "https://ctabusinesstravel.com/services" },
      { label: "CTA Business Connect", href: "https://ctabusinesstravel.com/cta-business-connect" },
      { label: "Réservation de vols", href: "https://ctabusinesstravel.com/blog/reservation-vols-affaires" },
      { label: "Réservation d'hôtel", href: "https://ctabusinesstravel.com/blog/reservation-hoteliere-affaires" },
      { label: "Réservation de train", href: "https://ctabusinesstravel.com/blog/reservation-train-affaires" },
      { label: "Assistance 24/7 & alertes sécurité", href: "https://ctabusinesstravel.com/blog/assistance-24h-24-alertes" },
      { label: "Suivi des déplacements", href: "https://ctabusinesstravel.com/blog/suivi-deplacements-voyageurs" },
      { label: "Carte logée & facturation centralisée", href: "https://ctabusinesstravel.com/blog/carte-logee-paiement-centralise" },
    ],
  },
  {
    slug: "voyage-sur-mesure",
    title: "Voyage sur-mesure",
    short: "Des voyages sur-mesure conçus par des experts depuis plus de 30 ans.",
    intro:
      "Agence de voyages créée il y a plus de 30 ans, nous imaginons vos voyages sur-mesure en nous appuyant sur les plus grands voyagistes et sur le 1er réseau européen de voyages (TourCom).",
    cover: "/hero/cover-voyage-sur-mesure.jpg",
    points: [
      "Plus de 30 ans d'expertise",
      "Sélection des plus grands voyagistes",
      "Voyages sur-mesure et individuels",
      "1er réseau européen de voyages (TourCom)",
      "Accompagnement personnalisé de A à Z",
    ],
    entitySlug: "cta-voyages",
    theme: "linear-gradient(130deg,#004191 0%,#2974be 60%,#73a6d8 100%)",
    // Site CTA Voyages en cours de production : pas de liens externes pour l'instant.
  },
  {
    slug: "seminaire-team-building",
    title: "Séminaire & team building",
    short: "Fédérez vos équipes en France et à l'international.",
    intro:
      "Séminaires, team buildings, incentives et soirées d'entreprise : nous concevons des événements qui motivent et rassemblent vos équipes, partout dans le monde.",
    cover: "/hero/cover-seminaire.jpg",
    points: [
      "Plus de 20 ans d'expertise événementielle",
      "Événements de 10 à 2 000 personnes",
      "Devis sur-mesure sous 72 h",
      "France & international",
      "Incentives, séminaires et soirées d'entreprise",
    ],
    entitySlug: "sop-events",
    theme: "linear-gradient(130deg,#cb1d48 0%,#dc3d31 100%)",
    links: [
      { label: "Séminaire d'entreprise", href: "https://sop-events.fr/forfaits/seminaire-entreprise/" },
      { label: "Team building", href: "https://sop-events.fr/forfaits/organisation-team-building-entreprise/" },
      { label: "Soirée événementielle", href: "https://sop-events.fr/forfaits/organisation-soiree-evenementielle-entreprise/" },
      { label: "Incentive & voyages", href: "https://sop-events.fr/forfaits/incentive-voyage-organise-entreprise/" },
      { label: "Événements sportifs", href: "https://sop-events.fr/forfaits/reservation-evenements-sportifs" },
      { label: "Inauguration & lancement de produit", href: "https://sop-events.fr/forfaits/inauguration-locaux-lancement-produit/" },
      { label: "Nos réalisations", href: "https://sop-events.fr/nos-realisations/" },
    ],
  },
  {
    slug: "conference-congres",
    title: "Conférence & congrès",
    short: "Conventions et congrès professionnels, de 100 à 5 000+ participants.",
    intro:
      "Nous concevons et organisons vos conférences, conventions et congrès professionnels de bout en bout, de 100 à plus de 5 000 participants.",
    cover: "/hero/cover-conference.jpg",
    points: [
      "Plus de 170 événements organisés dans le monde (2025)",
      "45 destinations différentes (2025)",
      "De 100 à plus de 5 000 participants",
      "Une équipe dédiée de chargés de projets",
      "Gestion logistique et technique de A à Z",
    ],
    entitySlug: "cta-meeting-events",
    theme: "linear-gradient(130deg,#1c244b 0%,#477ff7 100%)",
    links: [
      { label: "Tous les types d'événements", href: "https://ctameetingevents.fr/types-evenements/" },
      { label: "Séminaires", href: "https://ctameetingevents.fr/types-evenements/" },
      { label: "Conférences & congrès", href: "https://ctameetingevents.fr/types-evenements/" },
      { label: "Soirées de gala", href: "https://ctameetingevents.fr/types-evenements/" },
      { label: "Salons aéronautiques", href: "https://ctameetingevents.fr/types-evenements/" },
      { label: "Cérémonies professionnelles", href: "https://ctameetingevents.fr/types-evenements/" },
      { label: "Notre savoir-faire", href: "https://ctameetingevents.fr/savoir-faire/" },
      { label: "Notre équipe", href: "https://ctameetingevents.fr/equipe/" },
    ],
  },
];

/**
 * Chiffres clés — UNIQUEMENT des données réelles relevées sur les sites du groupe.
 * `value` => compteur animé ; `text` => valeur affichée telle quelle.
 */
export type KeyStat = {
  label: string;
  value?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  text?: string;
};

export const keyStats: { group: string; items: KeyStat[] }[] = [
  {
    group: "Le groupe",
    items: [
      { value: 4, label: "entités spécialisées" },
      { value: 30, suffix: "+", label: "ans d'expertise" },
      { text: "1992", label: "création de CTA Voyages" },
      { text: "24/7", label: "assistance voyageurs" },
    ],
  },
  {
    group: "Voyage d'affaires — réseau TourCom",
    items: [
      { text: "1er", label: "réseau de voyage d'affaires en France" },
      { value: 1200, suffix: "+", label: "agences partenaires" },
      { value: 2.7, decimals: 1, suffix: " Md€", label: "volume d'affaires du réseau (2023)" },
      { value: 1000000, suffix: "+", label: "tarifs négociés dans le monde" },
      { value: 2000, suffix: "+", label: "professionnels abonnés à la newsletter" },
    ],
  },
  {
    // TODO: chiffres estimés pour le voyage individuel — à confirmer par le client.
    group: "Voyage individuel",
    items: [
      { value: 30, suffix: "+", label: "ans d'expertise (depuis 1992)" },
      { value: 90, suffix: "+", label: "pays desservis" },
      { value: 50000, suffix: "+", label: "voyageurs accompagnés" },
      { value: 60, suffix: "+", label: "voyagistes partenaires" },
      { value: 98, suffix: " %", label: "clients satisfaits" },
    ],
  },
  {
    group: "Événementiel & séminaires",
    items: [
      { value: 20, suffix: "+", label: "ans d'expertise événementielle" },
      { value: 170, suffix: "+", label: "événements dans le monde (2025)" },
      { value: 45, suffix: "+", label: "destinations (2025)" },
      { value: 1500, suffix: "+", label: "événements organisés par an" },
      { text: "10 à 5 000", label: "participants par événement" },
      { text: "72 h", label: "pour un devis sur-mesure" },
    ],
  },
];
