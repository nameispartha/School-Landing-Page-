import contactImg from '../images/contact-us.jpg'

function ContactUs() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="text-xs sm:text-sm mb-3 sm:mb-4" style={{ fontFamily: 'sans-serif', color: '#FACC15', fontWeight: '600' }}>
            Get in touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'sans-serif', color: '#1E3A8A' }}>
            Contact us
          </h2>
          <p className="text-sm sm:text-base max-w-2xl mx-auto px-4" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
            We're here to answer your questions and welcome your family.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left Column - Contact Information */}
          <div className="space-y-6 sm:space-y-8 order-2 md:order-1">
            {/* Email Section */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ color: '#FACC15' }}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
              </div>
              <div>
                <div className="font-bold mb-1" style={{ fontFamily: 'sans-serif', color: '#1E3A8A' }}>
                  Email
                </div>
                <div className="text-sm mb-1" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
                  Reach us by email
                </div>
                <div className="text-sm" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
                  admissions@genericschool.edu
                </div>
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ color: '#FACC15' }}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
              </div>
              <div>
                <div className="font-bold mb-1" style={{ fontFamily: 'sans-serif', color: '#1E3A8A' }}>
                  Phone
                </div>
                <div className="text-sm mb-1" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
                  Call during business hours
                </div>
                <div className="text-sm" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
                  +1 (555) 123-4567
                </div>
              </div>
            </div>

            {/* Office Section */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ color: '#FACC15' }}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                  />
                </svg>
              </div>
              <div>
                <div className="font-bold mb-1" style={{ fontFamily: 'sans-serif', color: '#1E3A8A' }}>
                  Office
                </div>
                <div className="text-sm mb-2" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
                  1247 Education Lane, Sydney NSW 2000 Australia
                </div>
                <a href="#directions" className="text-sm flex items-center gap-1 hover:underline transition inline-block" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#1E3A8A' }}>
                  Get directions
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
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] order-1 md:order-2">
            <img 
              src={contactImg} 
              alt="Contact Us" 
              className="w-full h-full object-cover rounded-lg sm:rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs

