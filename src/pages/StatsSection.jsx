import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, label: "Happy Customers", suffix: "+" },
  { value: 3, label: "Years of Excellence", suffix: "+" },
  { value: 24, label: "Customer Support", suffix: "/7" },
  { value: 100, label: "Customer Satisfaction", suffix: "%" },
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let current = 0;
          const duration = 3000; // ⏱ slower animation
          const frameRate = 5;
          const totalFrames = duration / frameRate;
          const step = value / totalFrames;

          const timer = setInterval(() => {
            current += step;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, frameRate);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};


const StatsSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-14 text-center">

          {stats.map((item, i) => (
            <div key={i}>
              <h3 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">
                <Counter value={item.value} suffix={item.suffix} />
              </h3>

              <p className="text-gray-400 text-sm uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
