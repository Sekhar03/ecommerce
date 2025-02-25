import { twMerge } from 'tailwind-merge';
import React from 'react';

interface WidgetWrapperProps {
  children: React.ReactNode;
}

export const WidgetWrapper: React.FC<WidgetWrapperProps> = ({ children }) => {
  return (
    <section className="relative not-prose scroll-mt-[72px]">
      <div
        className={twMerge(
          'relative mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default',
        )}
      >
        {children}
      </div>
    </section>
  );
};
