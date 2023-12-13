type slide = { year: number, text: string };

type sliderData = {
  begin: number,
  end: number,
  id: number,
  section: string,
  slides: slide[],
};

export { sliderData, slide };
