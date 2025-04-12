"use client"

import Section from "@/components/common/section";
import { Text } from "@/components/common/text";
import { Button } from "@/components/ui/button";
import { BoomBox, Clock, Heart, Home } from "lucide-react";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface Feature {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

// Feature card data
const features: Feature[] = [
  {
    id: 1,
    icon: <Heart className="text-primary" size={24} />,
    title: "Select only those places you want to visit",
    description: "You are given the freedom to choose attractions allowing you to create a unique itinerary to suit your desires"
  },
  {
    id: 2,
    icon: <Clock className="text-primary" size={24} />,
    title: "Manage your time independently",
    description: "You are given the opportunity to adjust the duration of your trip by increasing or decreasing the number of days"
  },
  {
    id: 3,
    icon: <Home className="text-primary" size={24} />,
    title: "Choose hotels according to your preferences",
    description: "Make a choice and reserve hotels according to your taste, selecting them according to your taste and budget"
  },
  {
    id: 4,
    icon: <BoomBox className="text-primary" size={24} />,
    title: "Find plenty of entertainment for yourself",
    description: "There is plenty of entertainment on the island, and you will certainly be able to find something that will give you pleasure"
  }
];

// Feature card component
const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-dark-800 p-4 2xl:p-6 rounded-lg flex flex-col h-full">
    <Text variant="icon">{icon}</Text>
    <h2 className="text-white text-xl pt-32 pb-6">{title}</h2>
    <p className="text-gray-light">{description}</p>
  </div>
);

const CreateYourDreamTrip = () => {
  return (
    <Section bgColor="bg-dark" className="bg-create-your-dream-trip bg-[length:50%_90%] bg-right-bottom bg-no-repeat">
      <div>
        <Text variant="heading">Create your dream trip yourself</Text>
        <Text variant="subheading" className="pt-8 max-w-lg">
          We invite you to use our site to create your own tour to the Adaman Islands. Now you have the opportunity to choose and customize your ideal trip directly online
        </Text>
        <Button className="mt-8" hasArrow>
          Create a tour
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-3 pt-14">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: i === 0 || i === 2 ? 100 : 50 }}
            whileInView={{ opacity: 1, y: i === 0 || i === 2 ? 0 : i === 1 ? -100 : i === 3 ? -300 : 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}

          >
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-end">
        <Button variant="outline" className="px-8">
          Request assistance
        </Button>
      </div>
    </Section>
  );
};

export default CreateYourDreamTrip;