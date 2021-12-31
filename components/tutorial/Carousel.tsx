import Glide from "@glidejs/glide";
import { useEffect, useRef } from "react";

export const Carousel: React.FC = ({ children }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current !== null) {
      const slider = new Glide(sliderRef.current, {
        type: "carousel",
        startAt: 0,
        perView: 1,
      });

      slider.mount();
    }
  });

  return (
    <div className="glide" ref={sliderRef}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">{children}</ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
          prev
        </button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
          next
        </button>
      </div>
      <div className="glide__bullets" data-glide-el="controls[nav]">
        <button className="glide__bullet" data-glide-dir="=0"></button>
        <button className="glide__bullet" data-glide-dir="=1"></button>
        <button className="glide__bullet" data-glide-dir="=2"></button>
      </div>
    </div>
  );
};
