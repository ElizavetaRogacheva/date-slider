import { sliderData } from '../src/types';
const MAIN_CIRCLE_X: number = 296;
const MAIN_CIRCLE_Y: number = 265;
const MAIN_CIRCLE_RADIUS: number = 265;
const CIRCLE_RADIUS: number = 28;
const CIRCLE_MIN_RADIUS: number = 3;

const DATA: sliderData[] = [
  {
    begin: 1976,
    end: 1986,
    id: 1,
    section: 'Технологии',
    slides: [
      {
        year: 1976,
        text: 'Phasellus rhoncus quam magna, id blandit ligula tincidunt ac.',
      },
      {
        year: 1979,
        text: 'Suspendisse lacinia egestas orci, ac bibendum nibh aliquet a. ',
      },
      {
        year: 1980,
        text: 'Quisque et suscipit arcu. ',
      },
      {
        year: 1984,
        text: 'Proin tempus congue purus id faucibus',
      },
      {
        year: 1986,
        text: 'Suspendisse vel lorem purus.',
      },
    ],
  },
  {
    begin: 1987,
    end: 1991,
    id: 2,
    section: 'Кино',
    slides: [
      {
        year: 1987,
        text: 'Mauris volutpat in sem vel interdum',
      },
      {
        year: 1988,
        text: 'Sed feugiat libero at nisl tincidunt tincidunt. ',
      },
      {
        year: 1989,
        text: 'Pellentesque sit amet metus tempus, eleifend eros eget, placerat arcu. Pellentesque sed suscipit purus. ',
      },
      {
        year: 1990,
        text: 'Donec elit dolor, interdum in sollicitudin vitae, tincidunt in augue. ',
      },
      {
        year: 1991,
        text: 'hasellus ullamcorper, arcu nec posuere ultrices, urna lacus pharetra nibh, non fermentum turpis mauris vitae diam.',
      },
    ],
  },
  {
    begin: 1992,
    end: 1997,
    id: 3,
    section: 'Литература',
    slides: [
      {
        year: 1992,
        text: 'Nam euismod vel libero lobortis ultricies. Suspendisse ornare sollicitudin nulla, ut posuere odio hendrerit nec. Nullam sodales laoreet felis.',
      },
      {
        year: 1993,
        text: 'Maecenas odio neque, varius quis quam tincidunt, pellentesque aliquet felis.',
      },
      {
        year: 1994,
        text: 'Quisque consequat mollis faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
      },
      {
        year: 1995,
        text: 'Morbi interdum condimentum tempus. Fusce fringilla nibh ac turpis euismod, molestie finibus dui iaculis. Pellentesque ligula tellus, gravida at vulputate et, vestibulum in tellus.',
      },
      {
        year: 1997,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget turpis ultrices, sagittis mi nec, iaculis leo. ',
      },
    ],
  },
  {
    begin: 1999,
    end: 2004,
    id: 4,
    section: '',
    slides: [
      {
        year: 1999,
        text: 'Aenean eu ultricies lorem. Duis lobortis felis vestibulum, lobortis turpis sit amet, bibendum lectus. Aenean eget sapien et ante pharetra commodo vel ut ipsum.',
      },
      {
        year: 2000,
        text: 'Maecenas odio neque, varius quis quam tincidunt, pellentesque aliquet felis.',
      },
      {
        year: 2001,
        text: 'Mauris volutpat in sem vel interdum',
      },
      {
        year: 2002,
        text: 'Quisque consequat mollis faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
      },
    ],
  },
  {
    begin: 2005,
    end: 2014,
    id: 5,
    section: 'Спорт',
    slides: [
      {
        year: 2005,
        text: 'Quisque consequat mollis faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
      },
      {
        year: 2008,
        text: 'Mauris volutpat in sem vel interdum',
      },
      {
        year: 2010,
        text: 'Nam euismod vel libero lobortis ultricies. Suspendisse ornare sollicitudin nulla, ut posuere odio hendrerit nec. Nullam sodales laoreet felis.',
      },
      {
        year: 2012,
        text: 'hasellus ullamcorper, arcu nec posuere ultrices, urna lacus pharetra nibh, non fermentum turpis mauris vitae diam.',
      },
    ],
  },
  {
    begin: 2015,
    end: 2022,
    id: 6,
    section: 'Наука',
    slides: [
      {
        year: 2015,
        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        year: 2016,
        text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        year: 2017,
        text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
      {
        year: 2018,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sapien nisl, pulvinar eget augue nec, ullamcorper tincidunt augue.',
      },
      {
        year: 2019,
        text: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus',
      },
    ],
  },
];
export {
  DATA,
  MAIN_CIRCLE_X,
  MAIN_CIRCLE_Y,
  MAIN_CIRCLE_RADIUS,
  CIRCLE_RADIUS,
  CIRCLE_MIN_RADIUS,
};
