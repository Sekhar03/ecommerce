import React, { useEffect, useRef, ReactElement } from 'react';
import gsap from 'gsap';

interface MagneticProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: ReactElement<any>;
}

const Magnetic = React.forwardRef<HTMLDivElement, MagneticProps>(({ children }, ref) => {
  const magnetic = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = magnetic.current!.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    magnetic.current!.addEventListener("mousemove", handleMouseMove);
    magnetic.current!.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      magnetic.current!.removeEventListener("mousemove", handleMouseMove);
      magnetic.current!.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

return React.cloneElement(children, { ref: (node: HTMLDivElement) => {
  magnetic.current = node;
  if (typeof ref === 'function') {
    ref(node);
  } else if (ref) {
    (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
  }
}});

}
);

Magnetic.displayName = 'Magnetic';

export default Magnetic;