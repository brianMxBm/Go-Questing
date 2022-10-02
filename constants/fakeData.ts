import { faker } from '@faker-js/faker';
import niceColors from 'nice-color-palettes';
import { mapIcon } from './icons';

faker.seed(1);

const data = [
  //TDO
  {
    type: 'Please Mow My Lawn',
    image: 'https://cdn-icons-png.flaticon.com/512/2979/2979866.png'
  },
  {
    type: 'Fix My Computer',
    image: 'https://cdn-icons-png.flaticon.com/512/3406/3406954.png'
  },
  {
    type: 'Watch and Feed My Cat',
    image: 'https://cdn-icons-png.flaticon.com/512/1312/1312500.png'
  },
  {
    type: 'Change My Oil',
    image: 'https://cdn-icons-png.flaticon.com/512/3085/3085411.png'
  },
  {
    type: 'Seamstress Needed In... ',
    image: 'https://cdn-icons-png.flaticon.com/512/6994/6994365.png'
  },
  {
    type: 'Need People For Focus...',
    image: 'https://cdn-icons-png.flaticon.com/512/4490/4490381.png'
  },
  {
    type: 'Fix My Computer',
    image: 'https://cdn-icons-png.flaticon.com/512/3406/3406954.png'
  },
  {
    type: 'Watch and Feed My Cat',
    image: 'https://cdn-icons-png.flaticon.com/512/1312/1312500.png'
  },
  {
    type: 'Change My Oil',
    image: 'https://cdn-icons-png.flaticon.com/512/3085/3085411.png'
  },
  {
    type: 'Seamstress Needed In... ',
    image: 'https://cdn-icons-png.flaticon.com/512/6994/6994365.png'
  },
  {
    type: 'Need People For Focus...',
    image: 'https://cdn-icons-png.flaticon.com/512/4490/4490381.png'
  },
  {
    type: 'Fix My Computer',
    image: 'https://cdn-icons-png.flaticon.com/512/3406/3406954.png'
  },
  {
    type: 'Watch and Feed My Cat',
    image: 'https://cdn-icons-png.flaticon.com/512/1312/1312500.png'
  },
  {
    type: 'Change My Oil',
    image: 'https://cdn-icons-png.flaticon.com/512/3085/3085411.png'
  },
  {
    type: 'Seamstress Needed In... ',
    image: 'https://cdn-icons-png.flaticon.com/512/6994/6994365.png'
  },
  {
    type: 'Need People For Focus...',
    image: 'https://cdn-icons-png.flaticon.com/512/4490/4490381.png'
  },
  {
    type: 'Tutor Me In Java Please',
    image: 'https://cdn-icons-png.flaticon.com/512/2936/2936735.png'
  }
];

const colors = niceColors[1];

export const jobCategories = [
  'Trending Quests',
  'Courier Services',
  'Tech',
  'Education',
  'Auto',
  'Garden'
];

export default data.map((item, index) => ({
  ...item,
  key: faker.datatype.uuid(),
  subType: faker.commerce.productName(),
  color: `${colors[index % colors.length]}`,
  fullColor: colors[index % colors.length],
  description: [...Array(2).keys()].map(faker.commerce.productDescription).join('. '),
  pay: `${faker.finance.amount(5, 10, 0, '$')}`
  //subcategories: faker.helpers.shuffle(data).slice(0, 3)
}));

export const popularJobs = faker.helpers.shuffle(data).map((item) => ({
  ...item,
  key: faker.datatype.uuid(),
  rating: faker.random.numeric(3),
  pay: `$${faker.finance.amount()}`
}));
