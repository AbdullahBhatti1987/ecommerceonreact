import { Carousel } from "flowbite-react";

function CarouselCard({className}) {
  return (
    <div className={className}>
      <Carousel indicators={false} control={false} icon={false}>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
      </Carousel>
    </div>
  );
}
export default CarouselCard