function CarouselHome() {
    return (
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/images/trough/020acdf45cf4cd83ce17048bb16c3909.jpg" className="object-cover w-full h-[400px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/images/trough/1d00638e2ec990061fe1a126cca35a16.jpg" className="object-cover w-full h-[400px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/images/trough/2e396b075024d61ddd9107b416cf5475.jpg" className="object-cover w-full h-[400px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="/images/trough/8296eb933b86d2aa27616f17b6367fc8.jpg" className="object-cover w-full h-[400px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
}

export default CarouselHome;