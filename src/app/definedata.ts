// stores sample (static) data used during front-end development:  not used in production version
import { Book } from './defineclasses';

export const booksArray: Book[] = [
  {
    id: 1,
    title: 'The Power of One',
    author: 'Bryce Courtenay',
    publishdate: 1989,
    category: 'Fiction',
    coversrc:
      'https://images-na.ssl-images-amazon.com/images/I/71kHADBvQjL.jpg',
    contact: 'John Deere',
    phone: '+1 403 555 1234',
    email: 'jdeere@gmail.com',
    postingpw: 'test1',
    abstract: '',
    status: 'active'
  },
  {
    id: 2,
    title: 'Mastery',
    author: 'Robert Greene',
    publishdate: 2012,
    category: 'Non-fiction',
    coversrc:
      'https://images-na.ssl-images-amazon.com/images/I/71LRdEUOmNL.jpg',
    contact: 'Billy Bob Thornton',
    phone: '+1 587 555 5433',
    email: 'bbt@famous.com',
    postingpw: 'test1',
    abstract: '',
    status: 'active'
  },
  {
    id: 3,
    title: 'The Lion The Witch and the Wardrobe',
    author: 'C.S. Lewis',
    publishdate: 1950,
    category: 'Fiction',
    coversrc:
      'https://www.memoriapress.com/wp-content/uploads/2012/03/LionWitchWardrobe.jpg',
    contact: 'Dolly Parton',
    phone: '+1 434 123 2312',
    email: 'dollyparton@yahoo.com',
    postingpw: 'test1',
    abstract: '',
    status: 'active'
  },
  {
    id: 4,
    title: 'The Fault in Our Stars',
    author: 'John Green',
    publishdate: 2012,
    category: 'Fiction',
    coversrc: 'https://images.gr-assets.com/books/1360206420l/11870085.jpg',
    contact: 'Geena Davis',
    phone: '+1 234 325 9384',
    email: 'geena87@email.com',
    postingpw: 'test1',
    abstract: '',
    status: 'active'
  },
  {
    id: 5,
    title: 'Divergent (Divergent #1)',
    author: 'Veronica Roth',
    publishdate: 2012,
    category: 'Fiction',
    coversrc: 'https://images.gr-assets.com/books/1328559506l/13335037.jpg',
    contact: 'Jim Carrey',
    phone: '+1 234 223 5674',
    email: 'funnyguy@famous.com',
    postingpw: 'test1',
    abstract: '',
    status: 'active'
  },
  {
    id: 6,
    title: 'Mockingjay (The Hunger Games #3)',
    author: 'Suzanne Collins',
    publishdate: 2010,
    category: 'Fiction',
    coversrc: 'https://images.gr-assets.com/books/1358275419l/7260188.jpg',
    contact: 'Andrew Burns',
    phone: '+1 394 583 9483',
    email: 'andrew@burns.com',
    postingpw: 'test1',
    abstract: '',
    status: 'active'
  }
];
