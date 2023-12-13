import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../sass/DateBlock.scss';

interface IMyProps {
  beginDate: number;
  endDate: number;
}

function usePrevious(value: number) {
  const ref = useRef(0);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

const DateBlock: React.FC<IMyProps> = (props: IMyProps) => {
  const begin = props.beginDate;
  const end = props.endDate;
  const beginRef = useRef<HTMLSpanElement>(null);
  const endRef = useRef<HTMLSpanElement>(null);
  const prevBegin = usePrevious(begin);
  const prevEnd = usePrevious(end);

  const animateDates = (
    component: HTMLSpanElement | null,
    content: number,
    prev: number,
  ) => {
    gsap.from(component, {
      textContent: prev,
      duration: 1,
      snap: { textContent: 1 },
      stagger: 1,
    });
    gsap.to(component, {
      textContent: content,
      duration: 1,
      snap: { textContent: 1 },
      stagger: 1,
    });
  };

  useEffect(() => {
    if (prevBegin === 0) {
      return;
    }
    animateDates(beginRef.current, begin, prevBegin);
    animateDates(endRef.current, end, prevEnd);
  }, [props]);
  return (
    <div className="dateBlock">
      <span className="dateBlock_begin" ref={beginRef}>
        {begin}
      </span>
      <span className="dateBlock_end" ref={endRef}>
        {end}
      </span>
    </div>
  );
};

export default DateBlock;
