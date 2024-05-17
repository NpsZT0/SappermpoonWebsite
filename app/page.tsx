import ContentHome from "./partials/content-home"
import Carousel from "./components/carousel"

export default function Home() {
  const carouselLinks = [
    {
      src: "https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-194096.jpg&fm=jpg&_gl=1*6m6e8s*_ga*MTY1MDI0NTU2My4xNzEyODExNTcy*_ga_8JE65Q40S6*MTcxMjgxMTU3MS4xLjEuMTcxMjgxMTU3NS4wLjAuMA..",
      alt: "",
    },
    {
      src: "https://images.pexels.com/photos/9685868/pexels-photo-9685868.jpeg",
      alt: "",
    },
    {
      src: "https://images.pexels.com/photos/3618480/pexels-photo-3618480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "",
    },
    {
      src: "https://images.pexels.com/photos/2431402/pexels-photo-2431402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "",
    }
  ]

  return (
    <div className=' w-full text-base-content bg-white'>
      <Carousel links={carouselLinks} />
      <ContentHome />
    </div>

  )
}
