import CreateYourDreamTrip from "./components/CreateYourDreamTrip";
import CreateYourJourney from "./components/CreateYourJourney";
import IslandTabsGallery from "./components/IslandTabsGallery";
import PopularTours from "./components/PopularTours";

export default function Home() {
  return (
    <>
      <CreateYourDreamTrip />
      <IslandTabsGallery />
      <PopularTours />
      <CreateYourJourney />
    </>
  );
}
