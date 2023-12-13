import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import Slider from './Slider';
import DateBlock from './DateBlock';
import {
  DATA,
  MAIN_CIRCLE_X,
  MAIN_CIRCLE_Y,
  MAIN_CIRCLE_RADIUS,
  CIRCLE_RADIUS,
  CIRCLE_MIN_RADIUS,
} from '../constants';
import { sliderData } from '../types';
import 'swiper/css';

function DateSlider() {
  const [activeCircle, setActiveCircle] = useState<number>(1);
  const [currentData, setCurrentData] = useState<sliderData>(DATA[0]);
  const mainCircleRef = useRef<SVGSVGElement>(null);
  const mainCircleChild = gsap.utils.selector(mainCircleRef);
  const dots: number[] = DATA.map((item) => item.id);
  const angle: number = (Math.PI * 2) / dots.length;

  const rotateCircle = (item: number) => {
    const diff: number = item - activeCircle;
    const rotationDeg: number = (360 / dots.length) * diff;
    // вращение основного круга
    gsap.to(mainCircleRef.current, {
      rotation: `-=${rotationDeg}`,
      duration: 1,
    });
    // разворот дочерних номеров слайдов по вертикальной оси
    gsap.to(mainCircleChild('.circle_text'), {
      rotation: `+=${rotationDeg}`,
      duration: 1,
    });
    // раскрытие точки на круге
    gsap.to(mainCircleChild(`#circle_elem-${item}`), {
      fill: '#fff',
      r: CIRCLE_RADIUS,
      duration: 0.3,
    });
    // показываем номер слайда
    gsap.to(mainCircleChild(`#circleText${item}`), {
      opacity: 1,
      duration: 0.3,
    });
    // возвращаем номер активного слайда в положение точки
    if (item !== activeCircle) {
      gsap.to(mainCircleChild('.circle_elem--active'), {
        fill: '#42567a',
        r: CIRCLE_MIN_RADIUS,
        duration: 0.3,
      });
      gsap.to(mainCircleChild('.circle_text--active'), {
        opacity: 0,
        duration: 0.3,
      });
    }

    // устанавливаем номер активного слайда
    setActiveCircle(item);

    // записываем данные активного слайд а
    const currentObj = DATA.find((elem) => elem.id === item);
    if (currentObj) {
      setCurrentData(currentObj);
    }
  };

  // раскрываем номер на шкале при наведении на точку
  const showNumber = (
    e: React.MouseEvent<SVGCircleElement, MouseEvent>,
    item: number,
  ) => {
    gsap.to(e.target, {
      fill: '#fff',
      r: CIRCLE_RADIUS,
      duration: 0.3,
    });
    gsap.to(mainCircleChild(`#circleText${item}`), {
      opacity: 1,
      duration: 0.3,
    });
  };

  // скрываем номер на шкале при отведении курсора со шкалы
  const hideNumber = (
    e: React.MouseEvent<SVGCircleElement, MouseEvent>,
    item: number,
  ) => {
    gsap.to(e.target, {
      fill: '#42567a',
      r: CIRCLE_MIN_RADIUS,
      duration: 0.3,
    });

    gsap.to(`#circleText${item}`, {
      opacity: 0,
      duration: 0.3,
    });
  };

  return (
    <div className="container">
      <h1 className="mainTitle">
        Исторические <br></br> даты
      </h1>
      <div className="circleBlock">
        <svg
          version="1.1"
          width="592"
          height="530"
          className="mainCircle"
          stroke="rgba(48, 62, 88, 0.5)"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={mainCircleRef}>
          <circle
            cx={MAIN_CIRCLE_X}
            cy={MAIN_CIRCLE_Y}
            r={MAIN_CIRCLE_RADIUS}
          />
          {dots.map((item, index) => {
            const coorX: number =
              MAIN_CIRCLE_RADIUS * Math.cos(2 * angle - item * angle) +
              MAIN_CIRCLE_X;
            const coorY: number =
              MAIN_CIRCLE_Y -
              MAIN_CIRCLE_RADIUS * Math.sin(2 * angle - item * angle);
            const isCurrentActive = activeCircle === item;
            return (
              <g key={index}>
                <circle
                  id={`circle_elem-${item}`}
                  className={`circle_elem${
                    isCurrentActive ? ' circle_elem--active' : ''
                  }`}
                  cx={coorX}
                  cy={coorY}
                  fill={isCurrentActive ? '#fff' : '#42567a'}
                  r={isCurrentActive ? CIRCLE_RADIUS : CIRCLE_MIN_RADIUS}
                  onClick={() => rotateCircle(item)}
                  onMouseOver={(e) => showNumber(e, item)}
                  onMouseLeave={(e) => {
                    if (isCurrentActive) {
                      return;
                    }
                    hideNumber(e, item);
                  }}
                />
                <text
                  x={coorX - 3.5}
                  y={coorY + 7.5}
                  className={`circle_text${
                    isCurrentActive ? ` circle_text--active` : ''
                  }`}
                  id={`circleText${item}`}
                  transform-origin={`${coorX} ${coorY}`}
                  opacity={isCurrentActive ? 1 : 0}>
                  {item}
                </text>
              </g>
            );
          })}
        </svg>
        <div className="navBtns">
          <div className="navBtns_pages">
            <span>{`0${activeCircle}/0${dots.length}`}</span>
          </div>
          <ul className="navBtns_list">
            <li className="navBtns_item">
              <button
                className="navBtns_btn navBtns_btn--prev"
                aria-label="Назад"
                onClick={() => {
                  const back: number = activeCircle - 1;
                  rotateCircle(back);
                }}
                disabled={activeCircle === dots[0]}></button>
            </li>
            <li className="navBtns_item">
              <button
                className="navBtns_btn navBtns_btn--next"
                aria-label="Вперед"
                onClick={() => {
                  const next: number = activeCircle + 1;
                  rotateCircle(next);
                }}
                disabled={activeCircle === dots.length}></button>
            </li>
          </ul>
        </div>
        <DateBlock
          beginDate={currentData.begin}
          endDate={currentData.end}></DateBlock>
      </div>
      <Slider slides={currentData.slides}></Slider>
    </div>
  );
}

export default DateSlider;
