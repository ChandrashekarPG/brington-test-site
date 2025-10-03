export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">
      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold">
          Be the First to Receive the Latest News
        </h2>
        <button className="mt-6 inline-flex items-center justify-center border rounded-full px-6 py-3">
          Sign Up →
        </button>
      </section>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 pb-14 grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-semibold text-lg">Brington</h3>
        </div>

        <div>
          <h4 className="font-semibold">Navigation</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Social</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm mt-2">info@mysite.com</p>
          <p className="text-sm">Tel. 123-456-7890</p>
          <p className="text-sm">India</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs border-t border-white/10 py-4">
        © {new Date().getFullYear()} Brington Inc
      </div>
    </footer>
  );
}
