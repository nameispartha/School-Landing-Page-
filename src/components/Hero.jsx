import heroImg from '../images/hero-img.jpg'

function Hero() {
  return (
    <section className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 relative" style={{ 
      backgroundColor: '#F8FAFC'
    }}>
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border" style={{ borderColor: '#FACC15', borderWidth: '2px' }}>
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Section - Text and CTA */}
            <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
              {/* Headline - Stacked */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'sans-serif', color: '#1E3A8A' }}>
                <span className="block">Shaping future</span>
                <span className="block">leaders</span>
                <span className="block">through</span>
                <span className="block">quality</span>
                <span className="block">education</span>
              </h1>
              
              {/* Body Text */}
              <p className="text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
                We prepare students for success with rigorous academics, character development, and real-world experience. Join a community where excellence meets opportunity.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:opacity-90 transition text-sm sm:text-base" style={{ backgroundColor: '#1E3A8A' }}>
                  Apply now
                </button>
                <button className="bg-white border px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-blue-50 transition text-sm sm:text-base" style={{ color: '#374151', borderColor: '#2563EB' }}>
                  Download brochure
                </button>
              </div>
            </div>
            
            {/* Right Section - Image */}
            <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] order-1 md:order-2">
              <img 
                src={heroImg} 
                alt="Hero" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

