import Section from '@/components/common/section';
import { Text } from '@/components/common/text';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { TbMail, TbPhone } from 'react-icons/tb';

// Contact information configuration
const contactInfo = [
  {
    value: '+00 000 00 00',
    href: 'tel:+000000000',
    icon: <TbPhone size={20} />
  },
  {
    value: 'gmail@gmail.com',
    href: 'mailto:gmail@gmail.com',
    icon: <TbMail size={20} />
  },
  {
    value: 'gmail@gmail.com',
    href: 'https://t.me/username',
    icon: <FaTelegramPlane size={20} />
  },
  {
    value: 'gmail@gmail.com',
    href: 'https://wa.me/000000000',
    icon: <FaWhatsapp size={20} />
  }
];

const CreateYourJourney = () => {
  return (
    <Section bgColor='bg-dark' className="bg-create-your-journey bg-cover bg-center">
      <div>
        <Text variant="heading">Create Your Journey</Text>
        <Text variant="paragraph" className='max-w-lg pt-5'>
          Have questions or doubts? Simply fill out our contact form and we will contact you as soon as possible. Or maybe you just want to leave a review, we will be very grateful to you
        </Text>


        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8'>

          <div className='space-y-4'>
            <Input
              type="text"
              placeholder="Name"
            />
            <Input
              type="email"
              placeholder="Email"
            />

            <textarea
              placeholder="Message"
              className="bg-transparent border border-gray-dark text-white placeholder:text-gray rounded-md px-3 py-3 w-full h-[120px] resize-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-none"
            />

            <div className="pt-2">
              <Button variant="white" className='text-dark w-full md:w-auto' arrowClassName='bg-dark' hasArrow>
                Send
              </Button>
            </div>
          </div>

          <div className='w-full hidden lg:flex justify-end pt-5 lg:pt-0'>
            <div className="grid grid-cols-2 gap-3">
              {contactInfo.map((info, index) => (
                <Link
                  key={index}
                  href={info.href}
                  className="flex justify-between flex-col items-start gap-10 text-white bg-dark-800 rounded-lg py-3 px-4"
                >
                  <span className="flex-center text-lg text-primary bg-dark-700 rounded-full p-1 size-10">
                    {info.icon}
                  </span>
                  <span className='text-gray'>
                    {info.value}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CreateYourJourney;