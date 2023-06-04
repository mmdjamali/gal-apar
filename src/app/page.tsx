import Categories from "@/components/categories";
import EventCards from "@/components/event-cards";
import EventSwiper from "@/components/event-swiper";
import FooterMobile from "@/components/layout/footer-mobile";
import MobileApplicationBar from "@/components/layout/mobile-application-bar";
import SpecialProductGroup from "@/components/special-product-group";

export default function Home() {
  return (
    <main>
        <MobileApplicationBar/>
        <EventSwiper className=""/>
        <SpecialProductGroup className="my-8"/>
        <EventCards/>
        <Categories className="mt-4"/>

        <FooterMobile className="mt-8"/>
    </main>
  )
}
