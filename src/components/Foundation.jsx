import foundationImg from '../images/foundation-img.jpg'

function Foundation() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 md:order-1">
            {/* Label */}
            <div className="text-xs sm:text-sm font-bold mb-3 sm:mb-4" style={{ fontFamily: 'sans-serif', color: '#FACC15' }}>
              Foundation
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'sans-serif', color: '#1E3A8A' }}>
              <span className="block">Built on mission, vision,</span>
              <span className="block">and values</span>
            </h2>
            
            {/* Paragraph */}
            <p className="text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
              We believe every student deserves an education that challenges the mind and builds character. Our approach combines rigorous academics with mentorship, creating graduates ready to lead.
            </p>
            
            {/* CTA Elements */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <button className="bg-white border px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-blue-50 transition text-sm sm:text-base" style={{ color: '#374151', borderColor: '#2563EB' }}>
                Learn
              </button>
              <a href="#more" className="font-medium flex items-center gap-1 hover:underline transition text-sm sm:text-base" style={{ color: '#1E3A8A' }}>
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
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] order-1 md:order-2">
            <img 
              src={foundationImg} 
              alt="Foundation" 
              className="w-full h-full object-cover rounded-lg md:rounded-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Foundation

