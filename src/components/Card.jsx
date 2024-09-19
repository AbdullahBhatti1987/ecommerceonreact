function Card({ image, category, title, price }) {
  return (

    <div className="lg:w-1/5 md:w-1/4 sm:w-1/3 w-10/12 border-2 p-4" >
      <a className="flex relative h-48 rounded overflow-hidden justify-center">
        <img alt="ecommerce" className="object-fit  " src={image} />
      </a>
      <div className="mt-4 flex flex-col items-start">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium text-left">
          {title}
        </h2>
        <p className="mt-1">${price}</p>
      </div>
    </div>
  );
}
export default Card;
