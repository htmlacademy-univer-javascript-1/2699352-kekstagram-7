import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './util.js';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артём', 'Мария', 'Александр', 'Анна', 'Дмитрий',
  'Елена', 'Михаил', 'Ольга', 'Игорь', 'Наталья'
];

const DESCRIPTIONS = [
  'Отличный день для прогулки!',
  'Зацените мой новый лук.',
  'Утренний кофе бодрит как никогда.',
  'Просто красивый закат.',
  'Выходные с друзьями.',
  'Когда работа в удовольствие.',
  'Маленькие радости жизни.',
  'Пейзаж, от которого захватывает дух.'
];

const PHOTOS_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MAX_COMMENTS = 30;
const AVATARS_COUNT = 6;

const generateCommentId = createIdGenerator();

const createMessage = () => {
  const sentencesCount = getRandomInteger(1, 2);
  const commentMessages = Array.from({ length: sentencesCount }, () => getRandomArrayElement(MESSAGES));
  return [...new Set(commentMessages)].join(' ');
};

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATARS_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPhotoDescription = (id) => {
  const commentsCount = getRandomInteger(0, MAX_COMMENTS);

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: Array.from({ length: commentsCount }, createComment)
  };
};

export const generatePhotos = () => Array.from({ length: PHOTOS_COUNT }, (_, index) => createPhotoDescription(index + 1));
