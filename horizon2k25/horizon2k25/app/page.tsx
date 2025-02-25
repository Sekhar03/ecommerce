'use client';
import Description from '@/components/client/description/description';
import Events from '@/components/client/events/events';
import { Gallery } from '@/components/client/gallery/Gallery';
import Landing from '@/components/client/landing/landing';
import LanyardContainer from '@/components/client/LanyardContainer';
import Loader from '@/components/client/preloader/loader';
import { Sponsors } from '@/components/client/sponsors/sponsors';
import { Testimonials } from '@/components/client/testimonial/testimonial';

import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.log('Setting isLoading to false');
      setIsLoading(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <main data-scroll-container>
      <AnimatePresence mode='wait'>
        {isLoading && <Loader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Events />
      <Gallery />
      <Testimonials />
      <Sponsors />
      <LanyardContainer />
    </main>
  );
}