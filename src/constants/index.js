import project1 from "../assets/projects/P2_Logo_Booki.png";
import project2 from "../assets/projects/P4_Logo_ninacarducci.png";
import project3 from "../assets/projects/P5_Logo_kasa.png";
import project4 from "../assets/projects/P6_Logo_monvieuxgrimoire.png";

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
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
