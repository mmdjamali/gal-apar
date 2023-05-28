import EventSwiper from "@/components/event-swiper";
import MobileApplicationBar from "@/components/layout/mobile-application-bar";
import SpecialProductGroup from "@/components/special-product-group";

export default async function Home() {
  return (
    <main>
        <MobileApplicationBar/>
        <EventSwiper/>
        <SpecialProductGroup className="mt-4"/>
    </main>
  )
}
