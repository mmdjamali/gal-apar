import EventCards from "@/components/event-cards";
import MobileApplicationBar from "@/components/layout/mobile-application-bar";

export default async function Home() {
  return (
    <main>
        <MobileApplicationBar/>
        <EventCards/>
    </main>
  )
}
