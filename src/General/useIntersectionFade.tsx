import { useEffect } from "react";

export function useIntersectionFade(stackRef: any, otherStackRef: any) {
  useEffect(() => {
    if (!stackRef.current || !otherStackRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stackRef.current.classList.add("fade-out");
          } else {
            stackRef.current.classList.remove("fade-out");
          }
        });
      },
      {
        threshold: 0,
      }
    );

    observer.observe(otherStackRef.current);

    return () => {
      observer.disconnect();
    };
  }, [stackRef, otherStackRef]);
}
