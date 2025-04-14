import Section from '@/components/common/section';
import { Text } from '@/components/common/text';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import IslandGallery from './IslandGallery';

const islandImages = [
  {
    id: 1,
    src: '/assets/images/img-1.png',
    title: 'Andaman Beach',
    caption: 'Beautiful beach with palm trees in Andaman Islands'
  },
  {
    id: 2,
    src: '/assets/bg/hero.png',
    title: 'Island View',
    caption: 'Scenic view of the Andaman coastline'
  },
  {
    id: 3,
    src: '/assets/images/img-1.png',
    title: 'Cellular Jail',
    caption: 'The Cellular Jail, also known as "Kala Pani", was a British colonial prison'
  },
  {
    id: 4,
    src: '/assets/images/img-1.png',
    title: 'Beach Resort',
    caption: 'Luxury beach resort surrounded by palm trees'
  }
];


const IslandTabsGallery = () => {
  return (
    <Section className="bg-dark-700">
      <Text variant="heading">
        Unforgettable places of the islands
      </Text>

      <div className="pt-16">
        <Tabs defaultValue="digilpur" className="w-full">
          <TabsList>
            <TabsTrigger value="digilpur">Digilpur</TabsTrigger>
            <TabsTrigger value="long">Long</TabsTrigger>
            <TabsTrigger value="mayabandar">Mayabandar</TabsTrigger>
            <TabsTrigger value="havelock">Havelock</TabsTrigger>
            <TabsTrigger value="portblair">Port Blair</TabsTrigger>
            <TabsTrigger value="neil">Neil</TabsTrigger>
          </TabsList>

          <TabsContent value="digilpur">
            <IslandGallery data={islandImages} />
          </TabsContent>

          <TabsContent value="long">
            <IslandGallery data={islandImages} />
          </TabsContent>

          <TabsContent value="mayabandar">
            <IslandGallery data={islandImages} />
          </TabsContent>

          <TabsContent value="havelock">
            <IslandGallery data={islandImages} />
          </TabsContent>

          <TabsContent value="portblair">
            <IslandGallery data={islandImages} />
          </TabsContent>

          <TabsContent value="neil">
            <IslandGallery data={islandImages} />
          </TabsContent>

        </Tabs>
      </div>
    </Section>
  );
};

export default IslandTabsGallery;