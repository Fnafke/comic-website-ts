import { ReactNode, useEffect, useRef } from "react";

type Props = {
    children: ReactNode;
    className?: string;
}

const FadeInSection: React.FC<Props> = ({children, className = ""}: Props) => {
    const ref = useRef<HTMLDivElement | null>(null)
    
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("opacity-100", "translate-y-0");
                entry.target.classList.remove("opacity-0", "translate-y-10");
              }
            });
          },
          { threshold: 0.2 }
        );
    
        if (ref.current) observer.observe(ref.current);
    
        return () => {
          if (ref.current) observer.unobserve(ref.current);
        };
      }, []);
    
    return (
    <div
        ref={ref}
        className={`opacity-0 translate-y-10 transition-all duration-700 ${className}`}
    >
        {children}
    </div>
    );
}

export default FadeInSection