import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="BBJ School Logo"
              className="w-20 h-20 object-contain"
            />
            <span
              className="text-4xl font-normal text-gray-900 tracking-wide"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              HAMEEDAH PRIVATE SCHOOL
            </span>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className="hidden md:flex justify-center mt-auto">
          <div className="flex items-center gap-10">
            <a
              href="#home"
              className="text-xl text-gray-600 hover:text-[#C0B799] font-light tracking-wide transition-colors duration-200"
              style={{
                fontFamily:
                  "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-xl text-gray-600 hover:text-[#C0B799] font-light tracking-wide transition-colors duration-200"
              style={{
                fontFamily:
                  "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              About
            </a>
            <a
              href="#academicss"
              className="text-xl text-gray-600 hover:text-[#C0B799] font-light tracking-wide transition-colors duration-200"
              style={{
                fontFamily:
                  "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              Academics
            </a>
            <a
              href="#gallery"
              className="text-xl text-gray-600 hover:text-[#C0B799] font-light tracking-wide transition-colors duration-200"
              style={{
                fontFamily:
                  "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              Gallery
            </a>
            <a
              href="#admissions"
              className="text-xl text-gray-600 hover:text-[#C0B799] font-light tracking-wide transition-colors duration-200"
              style={{
                fontFamily:
                  "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              Admissions
            </a>
            <a
              href="#contact"
              className="text-xl text-gray-600 hover:text-[#C0B799] font-light tracking-wide transition-colors duration-200"
              style={{
                fontFamily:
                  "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 py-6">
          <div className="flex flex-col gap-5">
            <a
              href="#home"
              className="text-xl text-gray-700 hover:text-[#C0B799] font-light tracking-wide transition-colors duration-200"
              style={{
                fontFamily:
                  "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-xl text-gray-700 hover:text-[#C0B799] font-light tracking-wide transition-colors duration-200"
              style={{
                fontFamily:
                  "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              About
            </a>
            <a
              href="#academicss"
              className="text-xl text-gray-700 hover:text-[#C0B799] font-light tracking-wide transition-colors duration-200"
              style={{
                fontFamily:
                  "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              Academics
            </a>
            <a
              href="#gallery"
              className="text-xl text-gray-700 hover:text-[#C0B799] font-light tracking-wide transition-colors duration-200"
              style={{
                fontFamily:
                  "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              Gallery
            </a>
            <a
              href="#admissions"
              className="text-xl text-gray-700 hover:text-[#C0B799] font-light tracking-wide transition-colors duration-200"
              style={{
                fontFamily:
                  "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              Admissions
            </a>
            <a
              href="#contact"
              className="text-xl text-gray-700 hover:text-[#C0B799] font-light tracking-wide transition-colors duration-200"
              style={{
                fontFamily:
                  "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
