import project1 from "../assets/projects/P2_Logo_Booki.webp";
import project2 from "../assets/projects/P4_Logo_ninacarducci.webp";
import project3 from "../assets/projects/P5_Logo_kasa.webp";
import project4 from "../assets/projects/P6_Logo_monvieuxgrimoire.webp";
//import test from "../assets/projects/test_booki.png";

export const HERO_CONTENT = `Salut !
Je crée des sites web dynamiques et performants. Du front-end (HTML, CSS, JavaScript, React) au back-end (NodeJS, Express, MongoDB), je m'assure que vos sites sont réactifs, robustes et optimisés pour le SEO. Découvrez mon portfolio et contactez-moi pour discuter de votre prochaine aventure digitale !
`;

export const ABOUT_TEXT = `Après 2 ans et demi en usine, j'ai découvert ma passion pour le développement web grâce à une formation sur OpenClassrooms. Depuis, je suis fasciné par les possibilités infinies de la technologie pour créer des expériences en ligne uniques.

Mon désir d'apprendre est insatiable. Je suis déterminé à continuer à me former tout au long de ma vie pour rester à la pointe de mon domaine.

Explorez mon portfolio pour voir mes réalisations et contactez-moi pour discuter de votre prochain projet en ligne !`;

export const EXPERIENCES = [
  {
    year: "Décembre 2023 à Juin 2024 ",
    role: "Développeur Web",
    company: "Openclassrooms",
    description: `Dans ma formation de Développeur Web, j'ai appris à concevoir, créer et maintenir des sites web dynamiques en utilisant des langages tels que HTML, CSS, JavaScript et des frameworks comme React. Avec une expertise pratique en développement back-end utilisant NodeJS, Express et MongoDB, je suis prêt pour une carrière dans ce domaine passionnant et en constante évolution.`,
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Express",
      "MongoDB",
      "NodeJS",
    ],
  },
];

export const PROJECTS = [
  {
    title:
      "Booki - Créez la page d'accueil d'une agence de voyage avec HTML & CSS",
    image: project1,
    description:
      "Dans ce projet, j'ai créé la page d'accueil d'une agence de voyage en utilisant HTML et CSS, en intégrant une interface responsive basée sur des maquettes Figma pour mobile, tablette et desktop. L'objectif était de comprendre la structuration et le stylisme du code pour développer des compétences en design responsive, cruciales dans le développement web moderne. Cela me prépare à une carrière de développeur front-end compétent.",
    technologies: ["HTML", "CSS"],
    githubUrl: "https://github.com/SilentCraftsman/OC.P2",
  },
  {
    title: "Nina Carducci - Débuggez et optimisez un site de photographe",
    image: project2,
    description:
      "L'objectif de ce projet est d'optimisé le référencement d'un site en améliorant sa performance et son accessibilité. J'ai identifié les problèmes avec des outils comme Lighthouse et Wave, puis j'ai apporté des modifications au code pour améliorer les performances et l'accessibilité. Enfin, j'ai créé un rapport montrant l'impact de ces changements. Ces compétences sont essentielles pour augmenter la visibilité et le trafic du site, ainsi que pour améliorer l'expérience utilisateur.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/SilentCraftsman/OC.P4",
  },
  {
    title:
      "Kasa - Créez une application web de location immobilière avec React",
    image: project3,
    description:
      "Ce projet me permet de développer le front-end d'une application avec React et React Router pour une expérience utilisateur moderne. En utilisant des maquettes fournies, je configure la navigation entre les pages avec React Router. Ces compétences sont essentielles pour créer des applications web réactives et attractives, répondant à la demande croissante dans l'industrie du développement web.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Sass"],
    githubUrl: "https://github.com/SilentCraftsman/OC.P5",
  },
  {
    title:
      "Mon Vieux Grimoire - Développez le back-end d'un site de notation de livres",
    image: project4,
    description:
      "Pour ce projet, mon travail consiste à créer le back-end d'un site de notation de livres avec Express et MongoDB. Je mets en place les opérations CRUD, un système d'authentification et des fonctionnalités de notation. Ces compétences en développement back-end sont cruciales pour des applications performantes et me préparent à travailler sur des projets full-stack complexes.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    githubUrl: "https://github.com/SilentCraftsman/OC.P6",
  },
];

export const CONTACT = {
  address: "122 rue du Pinel, 62218 Lens",
  phoneNo: "06 72 17 57 89",
  email: "giovanni_gambier@gmail.com",
};
