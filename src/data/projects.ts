export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
 {
    id: 1,
    title: 'Tic Tac Toe Game',
    description: 'A classic tic-tac-toe game where two players compete with smooth interactions and UI feedback.',
    image: 'https://i.postimg.cc/QMHdFY6t/2025-06-02-104310.png',
    category: 'webapp',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repoLink: 'https://github.com/samarkhaled-FE/Tic-Tac-To',
    liveLink: 'https://683e245df80bc4285fbeb6e8--soft-palmier-9d6b1a.netlify.app/',
    featured: true
  },
  {
    id: 2,
    title: 'Age Calculator',
    description: 'An age calculator that calculates age based on the user\'s birthdate input.',
    image: 'https://i.postimg.cc/j5fqXwYY/2025-06-02-103737.png',
    category: 'webapp',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repoLink: 'https://github.com/samar/age-calculator',
    liveLink: 'https://683e277ed1ea7e326cfe6b73--monumental-eclair-42dd05.netlify.app/',
    featured: false
  },
  {
    id: 3,
    title: 'Calculator',
    description: 'A modern calculator app with basic and advanced math operations and keyboard support.',
    image: 'https://i.postimg.cc/0Q7xST78/2025-06-02-104235.png',
    category: 'webapp',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repoLink: 'https://github.com/samar/calculator',
    liveLink: 'https://683e255d4ad04d2a1c2744e6--incredible-youtiao-b619c3.netlify.app/',
    featured: false
  },
  {
    id: 4,
    title: 'To-Do List',
    description: 'A to-do list app with task addition, deletion, and local storage support.',
    image: 'https://i.postimg.cc/m2pxPLKY/2025-06-02-105238.png',
    category: 'webapp',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repoLink: 'https://github.com/samar/todo-app',
    liveLink: 'https://samar-todo.vercel.app/',
    featured: true
  },
  {
    id: 5,
    title: 'Movie App',
    description: 'A movie browsing app using an external API to fetch latest movies with search and filter features.',
    image: 'https://i.postimg.cc/FzGZnK0D/photo.jpg',
    category: 'webapp',
    technologies: ['React', 'API', 'Styled Components'],
    repoLink: 'https://github.com/samarkhaled-FE/Movie-Project-React',
    liveLink: 'https://movie-project-react-nine.vercel.app',
    featured: true
  },
  {
    id: 6,
    title: 'Card Component',
    description: 'A reusable card UI component showcasing images and information with clean design.',
    image: 'https://i.postimg.cc/bvjmJ4Y0/2025-06-02-104144.png',
    category: 'frontend',
    technologies: ['HTML', 'CSS' , 'JavaScript'],
    repoLink: 'https://github.com/samar/card-component',
    liveLink: 'https://683e2690d1ea7e302afe6b3f--inspiring-mousse-f6db93.netlify.app/'
  },
  {
    id: 7,
    title: 'Landing Page',
    description: 'A responsive landing page for a fictional service or product, designed with modern layout.',
    image: 'https://i.postimg.cc/vmMvM9X3/2025-06-02-104405.png',
    category: 'frontend',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repoLink: 'https://github.com/samar/landing-page',
    liveLink: 'https://683e26259ca0a02b98e828eb--beamish-cocada-9b8760.netlify.app/'
  },
  {
    id: 8,
    title: 'Azkar App',
    description: 'An Islamic app that fetches daily Azkar from an API with emoji heart animation on completion.',
    image: 'https://i.postimg.cc/0yCwY4d0/2025-06-02-104700.png',
    category: 'webapp',
    technologies: ['JavaScript', 'API', 'CSS Animation'],
    repoLink: 'https://github.com/samarkhaled-FE/10-Repo-Finder-Azkar',
    liveLink: 'https://683e25cbd1ea7e2e74fe6c22--courageous-pothos-776e75.netlify.app/',
    featured: true
  },
  {
    id: 9,
    title: 'Get Recipes App',
    description: 'A recipe discovery app that fetches pizza, pasta, seafood, and popcorn recipes using an API.',
    image: 'https://i.postimg.cc/mr87snPg/2025-06-02-105604.png',
    category: 'webapp',
    technologies: ['JavaScript', 'API', 'Bootstrap'],
    repoLink: 'https://github.com/samar/recipe-app',
    liveLink: 'https://683e29b98345fe4d8dfd6d42--harmonious-malasada-dc40fb.netlify.app/',
    featured: false
  },
  {
    id: 10,
    title: 'Digital Clock',
    description: 'A digital clock showing current time with stylish design and responsive layout.',
    image: 'https://i.postimg.cc/JzQpsPs9/2025-06-02-105037.png',
    category: 'webapp',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repoLink: 'https://github.com/samar/digital-clock',
    liveLink: 'https://683e2a6bcda6074ce1d274a2--wondrous-sprite-849193.netlify.app/'
  }, {
    id:11,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality.',
    image: 'https://i.postimg.cc/C1cShG00/2025-05-12-124355.png',
    category: 'fullstack',
    technologies: ['Html', 'Css', 'JavaScript', 'Bootstarp'],
    liveLink: 'https://683e2ba81de52b3656965285--radiant-sable-01f695.netlify.app/',
    repoLink: 'https://github.com/samarkhaled-FE/ShopeWSamar',
    featured: true
  }, 
];