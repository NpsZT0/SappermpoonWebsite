'use client';
function Carousel({ links }: { links: { src: string, alt: string }[] }) {
  return (
    <div data-hs-carousel='{
      "loadingClasses": "opacity-0",
      "isAutoPlay": true
    }' className="relative z-0 h-fit init">
      <div className="hs-carousel relative overflow-hidden w-full min-h-[200px] lg:min-h-[300px] bg-white rounded-none">
        <div
          className="absolute top-0 bottom-0 flex transition-transform duration-700 h-fit hs-carousel-body start-0 flex-nowrap">
          {links.map((link, index) => (
            <div key={index} className="hs-carousel-slide active asdf">
              <div className="flex justify-center h-fit">
                <img src={link.src} alt={link.alt} className="w-full h-[200px] lg:h-[300px] object-cover" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button type="button" onClick={() => { }}
        className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
        <span className="text-2xl" aria-hidden="true">
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
            </path>
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>
      <button type="button"
        className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
        <span className="sr-only">Next</span>
        <span className="text-2xl" aria-hidden="true">
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
            </path>
          </svg>
        </span>
      </button>
      <div className="absolute flex justify-center space-x-2 hs-carousel-pagination bottom-3 start-0 end-0">
        {links.map((_, index) => (
          <span key={index} className="border border-gray-500 border-solid rounded-md cursor-pointer hs-carousel-active:bg-blue-500 hs-carousel-active:border-blue-500 size-3"></span>
        ))}
      </div >
    </div >
  );
}

export default Carousel;