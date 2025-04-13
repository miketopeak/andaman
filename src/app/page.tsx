import CreateYourDreamTrip from "./components/CreateYourDreamTrip";
import CreateYourJourney from "./components/CreateYourJourney";
import IslandTabsGallery from "./components/IslandTabsGallery";
import PopularTours from "./components/PopularTours";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import TravelBlog from "./components/TravelBlog";

export default function Home() {
  return (
    <>
      <CreateYourDreamTrip />
      <IslandTabsGallery />
      <PopularTours />
      <Services />
      <TravelBlog />
      <Reviews />
      <CreateYourJourney />
    </>
  );
}
