function CarouselSlide({
  image,
  title,
  description,
  slideNumber,
  totalSlides,
}) {
  return (
    <div
      id={`slide${slideNumber}`}
      className="carousel-item relative w-full"
    >
      <div className="flex flex-col items-center justify-center gap-4 px-[15%] py-10">
        <img
          src={image}
          className="w-40 rounded-full border-2 border-gray-400 dark:border-gray-600 transition-all duration-300"
        />
        <p className="text-center text-lg font-semibold sm:text-lg text-gray-500 dark:text-gray-400 mb-4 sm:mb-4 max-w-3xl mx-auto">{description}</p>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white transition-all duration-300">{title}</h3>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href={`#slide${slideNumber == 1 ? totalSlides : slideNumber - 1}`}
            className="btn btn-circle text-white bg-gray-800 dark:bg-gray-600 hover:bg-gray-700 dark:hover:bg-gray-500 transition-all duration-300"
          >
            ❮
          </a>
          <a
            href={`#slide${(slideNumber % totalSlides) + 1}`}
            className="btn btn-circle text-white bg-gray-800 dark:bg-gray-600 hover:bg-gray-700 dark:hover:bg-gray-500 transition-all duration-300"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarouselSlide;
