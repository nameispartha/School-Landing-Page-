import facilityImg1 from '../images/facility-img-01.jpg'
import facilityImg2 from '../images/facility-img-02.jpg'
import facilityImg3 from '../images/facility-img-03.jpg'

function Facilities() {
  const facilities = [
    {
      label: "Library",
      heading: "Extensive collection and quiet study spaces",
      description: "Over twenty thousand volumes and digital resources supporting research and independent learning.",
      image: facilityImg1,
    },
    {
      label: "Science",
      heading: "Fully equipped laboratories for hands-on exploration",
      description: "State-of-the-art equipment where students conduct experiments and develop scientific reasoning.",
      image: facilityImg2,
    },
    {
      label: "Athletics",
      heading: "Indoor and outdoor fields for competitive and recreational sports",
      description: "Comprehensive athletic programs building teamwork, discipline, and physical wellness.",
      image: facilityImg3,
    },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="text-xs sm:text-sm font-bold mb-3 sm:mb-4" style={{ fontFamily: 'sans-serif', color: '#FACC15' }}>
            Facilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'sans-serif', color: '#1E3A8A' }}>
            Where learning comes alive
          </h2>
          <p className="text-sm sm:text-base max-w-2xl mx-auto px-4" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
            Modern spaces designed to inspire curiosity and foster collaboration among students.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {facilities.map((facility, index) => (
            <div key={index} className="rounded-lg relative overflow-hidden min-h-[300px] sm:min-h-[350px]">
              {/* Background Image */}
              <img 
                src={facility.image}
                alt={facility.label}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0" style={{ backgroundColor: 'rgba(30, 58, 138, 0.7)' }}></div>

              {/* Content */}
              <div className="relative z-10 p-4 sm:p-5 md:p-6 h-full flex flex-col">
                {/* Icon Overlay on Right Side */}
                <div className="absolute top-4 sm:top-6 md:top-8 right-2 sm:right-4 opacity-60">
                  <div className="bg-gray-800 rounded-lg w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
                    <svg 
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" 
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="160" cy="40" r="25" fill="white"/>
                      <path d="M0 200 L60 100 L120 140 L200 60 L200 200 Z" fill="white" opacity="0.8"/>
                      <path d="M40 200 L100 80 L160 120 L200 40 L200 200 Z" fill="white"/>
                    </svg>
                  </div>
                </div>

                {/* Label */}
                <div className="text-xs sm:text-sm font-bold text-white mb-3 sm:mb-4 relative z-10" style={{ fontFamily: 'sans-serif' }}>
                  {facility.label}
                </div>

                {/* Heading */}
                <h3 className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4 relative z-10 pr-16 sm:pr-20" style={{ fontFamily: 'sans-serif' }}>
                  {facility.heading}
                </h3>

                {/* Description */}
                <p className="text-white text-xs sm:text-sm mb-4 sm:mb-6 relative z-10" style={{ fontFamily: 'sans-serif', fontWeight: '400' }}>
                  {facility.description}
                </p>

                {/* Discover Link */}
                <a href="#discover" className="text-white font-medium flex items-center gap-1 hover:underline transition inline-block relative z-10 mt-auto">
                  Discover
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default Facilities

