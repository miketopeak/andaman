import { cn } from '@/lib/utils';
import React from 'react';

interface SectionProps {
  bgColor?: string;
  className?: string;
  children: React.ReactNode;
}

const Section = ({ className, children, bgColor }: SectionProps) => {
  return (
    <section className={cn(bgColor)}>
      <div className={cn("~py-20/28", className)}>
        <div className="container">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;