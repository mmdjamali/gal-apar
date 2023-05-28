import EventCards from "@/components/event-cards";
import EventSwiper from "@/components/event-swiper";
import MobileApplicationBar from "@/components/layout/mobile-application-bar";
import SpecialProductGroup from "@/components/special-product-group";

export default function Home() {
  return (
    <main>
        <MobileApplicationBar/>
        <EventSwiper className=""/>
        <SpecialProductGroup className="m-4"/>
        <EventCards/>
    </main>
  )
}
