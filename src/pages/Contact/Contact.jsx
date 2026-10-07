import ContactForm from './components/ContactForm';
import SlideshowSection from '../../sections/slideshow';
import FaqSection from '../About/sections/FaqSection';

export default function Contact() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start pt-24 md:pt-28 pb-16 bg-white">
      <ContactForm />
      <div className="w-full mt-12">
        <FaqSection />
      </div>
      <div className="w-full mt-12">
        <SlideshowSection />
      </div>
    </main>
  );
}
