import { BlockRenderer } from "@components/BlockRenderer"
import { getHomePage } from "data/loader";
import { notFound } from "next/navigation";

async function loader() {
  const data = await getHomePage();
  if (!data) notFound();
  return { ...data.data };
}

export default async function App() {
  // const carouselLinks = [
  //   {
  //     id: 0,
  //     src: "https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-194096.jpg&fm=jpg&_gl=1*6m6e8s*_ga*MTY1MDI0NTU2My4xNzEyODExNTcy*_ga_8JE65Q40S6*MTcxMjgxMTU3MS4xLjEuMTcxMjgxMTU3NS4wLjAuMA..",
  //     alt: "",
  //   },
  //   {
  //     id: 1,
  //     src: "https://images.pexels.com/photos/9685868/pexels-photo-9685868.jpeg",
  //     alt: "",
  //   },
  //   {
  //     id: 2,
  //     src: "https://images.pexels.com/photos/3618480/pexels-photo-3618480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     alt: "",
  //   },
  //   {
  //     id: 3,
  //     src: "https://images.pexels.com/photos/2431402/pexels-photo-2431402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     alt: "",
  //   }
  // ]

  const data = await loader();
  const blocks = data?.blocks || [];

  return (
    <div className=' w-full text-base-content bg-white'>
      <BlockRenderer blocks={blocks} />
    </div>
  )
}
