import { useState } from 'react'

function Navbar() {
  const [showMoreDropdown, setShowMoreDropdown] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b" style={{ borderColor: '#FACC15', borderWidth: '2px' }}>
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="text-2xl sm:text-3xl font-bold" 
            style={{ 
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive",
              fontStyle: 'italic',
              color: '#1E3A8A'
            }}
          >
            Logo
          </div>

          {/* Desktop Navigation Links and Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              <a href="#home" className="transition text-sm font-medium" style={{ color: '#374151' }}>
                Home
              </a>
              <a href="#about" className="transition text-sm font-medium" style={{ color: '#374151' }}>
                About
              </a>
              <a href="#programs" className="transition text-sm font-medium" style={{ color: '#374151' }}>
                Programs
              </a>
              
              {/* More Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowMoreDropdown(!showMoreDropdown)}
                  className="transition text-sm flex items-center gap-1 font-medium"
                  style={{ color: '#374151' }}
                >
                  More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {showMoreDropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg py-2 min-w-[150px] z-10" style={{ borderColor: '#FACC15' }}>
                    <a href="#contact" className="block px-4 py-2 text-sm hover:bg-blue-50 transition" style={{ color: '#374151' }}>
                      Contact
                    </a>
                    <a href="#gallery" className="block px-4 py-2 text-sm hover:bg-blue-50 transition" style={{ color: '#374151' }}>
                      Gallery
                    </a>
                    <a href="#news" className="block px-4 py-2 text-sm hover:bg-blue-50 transition" style={{ color: '#374151' }}>
                      News
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <button className="bg-white border px-4 py-2 rounded-lg transition text-sm font-medium" style={{ color: '#374151', borderColor: '#2563EB' }}>
                Brochure
              </button>
              <button className="text-white px-4 py-2 rounded-lg transition text-sm font-medium" style={{ backgroundColor: '#1E3A8A' }}>
                Enroll
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button className="text-white px-3 py-1.5 rounded-lg transition text-xs sm:text-sm font-medium" style={{ backgroundColor: '#1E3A8A' }}>
              Enroll
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: '#1E3A8A' }}
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4" style={{ borderColor: '#FACC15' }}>
            <div className="flex flex-col gap-3">
              <a href="#home" className="py-2 transition text-sm font-medium" style={{ color: '#374151' }} onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
              <a href="#about" className="py-2 transition text-sm font-medium" style={{ color: '#374151' }} onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
              <a href="#programs" className="py-2 transition text-sm font-medium" style={{ color: '#374151' }} onClick={() => setMobileMenuOpen(false)}>
                Programs
              </a>
              <a href="#contact" className="py-2 transition text-sm font-medium" style={{ color: '#374151' }} onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
              <a href="#gallery" className="py-2 transition text-sm font-medium" style={{ color: '#374151' }} onClick={() => setMobileMenuOpen(false)}>
                Gallery
              </a>
              <a href="#news" className="py-2 transition text-sm font-medium" style={{ color: '#374151' }} onClick={() => setMobileMenuOpen(false)}>
                News
              </a>
              <button className="bg-white border px-4 py-2 rounded-lg transition text-sm font-medium text-left mt-2" style={{ color: '#374151', borderColor: '#2563EB' }}>
                Brochure
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar

