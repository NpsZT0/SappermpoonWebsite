import ContentHome from "./components/home/content-home"
import CarouselHome from "./components/home/carousel"

export default function Home() {
  return (
    <div className=' w-full text-base-content bg-base-100'>
      <CarouselHome />
      <ContentHome />
    </div>

  )
}
