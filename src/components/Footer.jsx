import { useState } from 'react'

function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <footer className="bg-white border-t" style={{ borderColor: '#FACC15', borderWidth: '2px' }}>
      {/* Top Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Leftmost Column - Logo and Newsletter */}
          <div>
            <div 
              className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" 
              style={{ 
                fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive",
                fontStyle: 'italic',
                color: '#1E3A8A'
              }}
            >
              Logo
            </div>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
              Stay informed about school news and events.
            </p>
            <form onSubmit={handleSubscribe} className="mb-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2"
                  style={{ fontFamily: 'sans-serif', borderColor: '#2563EB', focusRingColor: '#2563EB' }}
                  required
                />
                <button
                  type="submit"
                  className="text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition whitespace-nowrap"
                  style={{ fontFamily: 'sans-serif', backgroundColor: '#1E3A8A' }}
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-xs" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
              We respect your privacy and never share your information.
            </p>
          </div>

          {/* Second Column - About us */}
          <div>
            <h3 className="font-bold mb-4" style={{ fontFamily: 'sans-serif', color: '#1E3A8A' }}>
              About us
            </h3>
            <ul className="space-y-2">
              {['Our story', 'Leadership', 'Careers', 'Press', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm hover:underline transition"
                    style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Third Column - Academics */}
          <div>
            <h3 className="font-bold mb-4" style={{ fontFamily: 'sans-serif', color: '#1E3A8A' }}>
              Academics
            </h3>
            <ul className="space-y-2">
              {['Programs', 'Admissions', 'Calendar', 'Resources', 'Support'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-sm hover:underline transition"
                    style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Rightmost Column - Follow us */}
          <div>
            <h3 className="font-bold mb-4" style={{ fontFamily: 'sans-serif', color: '#1E3A8A' }}>
              Follow us
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Facebook', icon: <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 6.015 4.388 11.007 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/> },
                { name: 'Instagram', icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/> },
                { name: 'X', icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/> },
                { name: 'LinkedIn', icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/> },
                { name: 'YouTube', icon: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/> }
              ].map((social) => (
                <li key={social.name}>
                  <a 
                    href={`#${social.name.toLowerCase()}`}
                    className="text-sm hover:underline transition flex items-center gap-2"
                    style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#FACC15' }}>
                      {social.icon}
                    </svg>
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t py-4 sm:py-6" style={{ borderColor: '#FACC15', borderWidth: '1px' }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs text-center sm:text-left" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
              © 2025 Generic School Project. All rights reserved
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-end">
              {['Privacy policy', 'Terms of service', 'Cookie settings'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-xs hover:underline transition"
                  style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

