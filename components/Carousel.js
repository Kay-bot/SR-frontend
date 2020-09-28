import React, { useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: '/images/banner1.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    src: '/images/banner2.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
  },
  {
    src: '/images/banner3.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
  },
  {
    src: '/images/banner4.jpg',
    altText: 'Slide 4',
    caption: 'Slide 4',
  },
  {
    src: '/images/banner5.jpg',
    altText: 'Slide 5',
    caption: 'Slide 5',
  },
];

const CustomCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          className="img-fluid"
          alt="Responsive image"
          src={item.src}
          alt={item.altText}
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 500px;
            }
            @media screen and (max-width: 1100px) {
              .custom-tag {
                max-width: 100%;
                height: 350px;
              }
            }
            @media screen and (max-width: 600px) {
              .custom-tag {
                max-width: 100%;
                height: 200px;
              }
            }
    
            `}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
