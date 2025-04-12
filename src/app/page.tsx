import CreateYourDreamTrip from "./components/CreateYourDreamTrip";
import CreateYourJourney from "./components/CreateYourJourney";
import IslandTabsGallery from "./components/IslandTabsGallery";
import PopularTours from "./components/PopularTours";
import Reviews from "./components/Reviews";
import TravelBlog from "./components/TravelBlog";

export default function Home() {
  return (
    <>
      <CreateYourDreamTrip />
      <IslandTabsGallery />
      <PopularTours />
      <TravelBlog />
      <Reviews />
      <CreateYourJourney />
    </>
  );
}
