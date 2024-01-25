import pokemon from '../images/pokemon.png';
import quiz from '../images/quiz.png';
import stackoverflow from '../images/stackoverflow.png';

const projects = [
  {
    id: 1,
    title: 'Pokemon',
    img: pokemon,
    link: 'https://kozakadam.github.io/pokemon/',
    description: 'Basic pokemon fighting app, data is from PokeApi.',
    visitable: true
  },
  {
    id: 2,
    title: 'Quiz site',
    img: quiz,
    description: 'Kahoot like multiplayer quiz site with detailed quiz editor.',
    visitable: false
  },
  {
    id: 3,
    title: 'Stack overflow copy',
    img: stackoverflow,
    description: 'Stackoverflow copy. Ask or answer questions, vote for other submissions.',
    visitable: false
  },
  {
    id: 4,
    title: 'project 4',
    // img: ,
    description: 'description',
    visitable: false
  },
];

export default projects;
