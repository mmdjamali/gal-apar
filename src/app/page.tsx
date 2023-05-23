import EventCards from "@/components/event-cards";
import MobileApplicationBar from "@/components/layout/mobile-application-bar";
import SpecialProductGroup from "@/components/special-product-group";

export default async function Home() {
  return (
    <main>
        <MobileApplicationBar/>
        <EventCards/>
        <SpecialProductGroup className="mt-4"/>
    </main>
  )
}
