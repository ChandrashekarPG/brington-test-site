export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-orange-400/95">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <nav aria-label="Primary">
          <ul className="flex items-center justify-center gap-10 text-white">
            <li>
              <a
                href="#home"
                className="font-semibold hover:opacity-90 focus-visible:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#numbers"
                className="hover:opacity-90 focus-visible:underline"
              >
                Numbers
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:opacity-90 focus-visible:underline"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#speakers"
                className="hover:opacity-90 focus-visible:underline"
              >
                Speakers
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:opacity-90 focus-visible:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
