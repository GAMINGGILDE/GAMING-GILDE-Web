import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

export const DiscordFrame = () => {
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const startAnimation = () => {
    if (hasAnimated) return;
    if (!elementRef.current) return;

    animate(elementRef.current, {
      translateX: [150, 0],
      easing: "easeOutExpo",
      opacity: 1,
      duration: 3000,
    });

    setHasAnimated(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          observer.unobserve(entries[0].target);
          startAnimation();
        }
      },
      {
        threshold: 0.75, // 75% des Elementes erreicht
        rootMargin: "100px 0px", // Bereich Vergrößerung, in dem das Element erkannt wird
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current as Element);
    }
  }, [hasAnimated]);

  return (
    <div ref={elementRef} className="relative" style={{ opacity: 0 }}>
      <iframe
        title="Discord-Widget"
        src="https://discord.com/widget?id=1219625244906754093&theme=dark"
        className="w-full"
        height="600"
        style={{ border: 0 }}
      ></iframe>
    </div>
  );
};
