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

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

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

const generatePhotos = () => Array.from({ length: PHOTOS_COUNT }, (_, index) => createPhotoDescription(index + 1));

const photosMockData = generatePhotos();

console.log(photosMockData);
