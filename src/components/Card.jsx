import { Button } from "flowbite-react";

function Card({ image, category, title, price, onClick }) {
  return (
    // grid sm:grid-cols-6 md:grid-col-4 lg:grid-cols-3
    <div className="lg:w-1/5 md:w-1/4 sm:w-1/3 w-10/12 border-2 p-4 overflow-hidden">
      <a className="flex relative h-48 rounded overflow-hidden justify-center">
        <img alt="ecommerce" className="object-fit  " src={image} />
      </a>
      <div className="mt-4 flex flex-col items-start">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium text-left break-all truncate">
          {title}
        </h2>
        <div className="flex flex-nowrap w-full justify-between items-center gap-2">
          <p className="mt-1 font-bold">${price}</p>
          <Button className="p-0" onClick={onClick}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
export default Card;
