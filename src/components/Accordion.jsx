import React from "react";

export default function Accordion({ items }) {
  const [open, setOpen] = React.useState(null);

  return (
    <div className="divide-y rounded-xl border bg-white/60 backdrop-blur">
      {items.map((it, idx) => (
        <div key={idx}>
          <button
            className="w-full text-left px-4 py-3 font-medium focus-visible:underline"
            aria-expanded={open === idx}
            onClick={() => setOpen(open === idx ? null : idx)}
          >
            {it.title}
          </button>

          {open === idx && (
            <div className="px-4 pb-4 text-sm text-gray-700">{it.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
