import CarouselCard from "./CarouselCard";

function CarouselSlider() {
  return (
    <div className="w-10/12 mx-auto grid h-56 grid-cols-4 gap-2 my-3 sm:h-64 xl:h-80 2xl:h-96">
        <CarouselCard className={"grid grid-cols-4 gap-4"}/>
    </div>
  );
}
export default CarouselSlider