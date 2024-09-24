import { Button } from "flowbite-react";

function Card({ image, category, title, price, onClick }) {
  return (
    // grid sm:grid-cols-6 md:grid-col-4 lg:grid-cols-3
    <div className="lg:w-[24%] md:w-[31%] sm:w-[48%] w-[48%] border-2 p-4 overflow-hidden">
      <a className="flex relative lg:h-48 rounded overflow-hidden justify-center">
        <img alt="ecommerce" className="object-fit " src={image} />
      </a>
      <div className="mt-4 flex flex-col items-start">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category}
        </h3>
        <h2 className="text-gray-900 title-font lg:text-md md:text-sm sm:text-sm font-medium text-left break-all truncate">
          {title}
        </h2>
        <div className="flex flex-nowrap w-full justify-between items-center gap-2 lg:text-md md:text-sm sm:text-sm text-xs">
          <p className="mt-1 font-bold">${price}</p>
          <Button className="p-0 text-nowrap" onClick={onClick}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
export default Card;
