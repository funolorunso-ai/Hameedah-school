const Footer = () => (
  <footer className="bg-[#C0B799] text-gray-800">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 pt-32 pb-24 min-h-[60vh] items-center">
      {/* Logo */}
      <div className="h-full flex flex-col justify-center">
        <div className="mb-4">
          <img
            src="/logo.png"
            alt="BBJ Schools Logo"
            className="h-12 md:h-16 w-auto"
          />
        </div>
        <p className="text-xs text-gray-500">Grooming to succeed</p>
      </div>
      {/* Quick Links */}
      <div className="h-full flex flex-col justify-center">
        <h3
          className="text-sm font-light tracking-wide mb-6 text-gray-900"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          Quick Links
        </h3>
        <ul className="space-y-3 text-xs text-gray-500">
          <li>
            <a href="#home" className="hover:text-[#C0B799] transition-colors">
              HOME
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#C0B799] transition-colors">
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#academics"
              className="hover:text-[#C0B799] transition-colors"
            >
              ACADEMICS
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="hover:text-[#C0B799] transition-colors"
            >
              GALLERY
            </a>
          </li>
          <li>
            <a
              href="#admissions"
              className="hover:text-[#C0B799] transition-colors"
            >
              ADMISSIONS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[#C0B799] transition-colors"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
      {/* Contact */}
      <div className="h-full flex flex-col justify-center">
        <h3
          className="text-sm font-light tracking-wide mb-6 text-gray-900"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          Get In Touch
        </h3>
        <div className="text-xs text-gray-500 space-y-2">
          <p>
            Plot 12/13, Tower of Victory Street, Erunwen, Off Eruwen Road,
            Ikorodu, Lagos.
          </p>
          <p>+234 803 357 3875, 0701 082 1938, or 0807 254 8185.</p>
          <p>balqisdada@gmail.com.</p>
        </div>
      </div>
    </div>
    <div className="text-center text-xs text-gray-400 border-t border-gray-200 py-3">
      © 2026 BBJ Schools. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
