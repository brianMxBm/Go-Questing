import { faker } from '@faker-js/faker';
import niceColors from 'nice-color-palettes';
import { mapIcon } from './icons';

faker.seed(1);

const data = [
  { type: 'Soup', image: mapIcon },
  { type: 'Soup', image: mapIcon },
  { type: 'Soup', image: mapIcon },
  { type: 'Soup', image: mapIcon },
  { type: 'Soup', image: mapIcon },
  { type: 'Soup', image: mapIcon },
  { type: 'Soup', image: mapIcon },
  { type: 'Soup', image: mapIcon },
  { type: 'Soup', image: mapIcon },
  { type: 'Soup', image: mapIcon }
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
  color: `${colors[index % colors.length]}66`,
  fullColor: colors[index % colors.length],
  description: [...Array(2).keys()].map(faker.commerce.productDescription).join('. '),
  pay: `$${faker.random.numeric(200)}`,
  subcategories: faker.helpers.shuffle(data).slice(0, 3)
}));

export const popularJobs = faker.helpers.shuffle(data).map((item) => ({
  ...item,
  key: faker.datatype.uuid(),
  rating: faker.random.numeric(30),
  price: `$${faker.random.numeric(200)}`
}));
