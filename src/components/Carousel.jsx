import { Carousel as FlowbiteCarousel } from "flowbite-react";

import "../App.css";

function Carousel() {
  return (
    <div className="minHeight sm:h-96 2xl:h-96">
      <FlowbiteCarousel className="">       
          <img src="../../images/slide-bg-1.jpg" alt="..." />
          <img src="../../images/slide-bg-2.jpg" alt="..." />
      </FlowbiteCarousel>
      <div></div>
    </div>
  );
}

export default Carousel;
