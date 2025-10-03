import React, { useRef } from "react";

export default function Carousel({ children }) {
  const ref = useRef(null);

  const scrollBy = (d) => {
    ref.current?.scrollBy({ left: d, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={ref}
        className="flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory pb-2"
      >
        {React.Children.map(children, (c, i) => (
          <div key={i} className="min-w-[260px] snap-start">
            {c}
          </div>
        ))}
      </div>

      <div className="absolute -top-12 right-0 flex gap-2">
        <button
          className="border px-3 py-1 rounded"
          onClick={() => scrollBy(-300)}
          aria-label="Prev"
        >
          ‹
        </button>
        <button
          className="border px-3 py-1 rounded"
          onClick={() => scrollBy(300)}
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </div>
  );
}
