import { useState, useEffect } from 'react'
import schoolImg1 from '../Images/school-img-01.jpg'
import schoolImg2 from '../Images/school-img-02.jpg'
import schoolImg3 from '../Images/school-img-03.jpg'
import schoolImg4 from '../Images/school-img-04.jpg'
import schoolImg5 from '../Images/school-img-05.jpg'
import schoolImg6 from '../Images/school-img-06.jpg'

function SchoolMoments() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const schoolImages = [
    schoolImg1,
    schoolImg2,
    schoolImg3,
    schoolImg4,
    schoolImg5,
    schoolImg6,
  ]
  
  // Total number of slides (6 images)
  const totalSlides = schoolImages.length
  // Responsive slides per view: 1 on mobile, 2 on tablet, 3 on desktop
  const [slidesPerView, setSlidesPerView] = useState(3)
  
  // Update slides per view based on window size
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1)
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(3)
      }
    }
    
    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
    return () => window.removeEventListener('resize', updateSlidesPerView)
  }, [])

  const maxIndex = Math.max(0, totalSlides - slidesPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const goToSlide = (index) => {
    const targetIndex = Math.min(index, maxIndex)
    setCurrentIndex(targetIndex)
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'sans-serif', color: '#1E3A8A' }}>
            School moments
          </h2>
          <p className="text-sm sm:text-base max-w-2xl mx-auto px-4" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
            A glimpse into daily life, celebrations, and achievements across our community.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg hover:bg-gray-50 transition"
            aria-label="Previous slide"
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 text-black" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden px-2 sm:px-0">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
            >
              {schoolImages.map((image, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 px-1 sm:px-2 md:px-3"
                  style={{ width: `${100 / slidesPerView}%` }}
                >
                  <div className="bg-gray-100 rounded-lg sm:rounded-xl p-1.5 sm:p-2 flex items-center justify-center overflow-hidden min-h-[250px] sm:min-h-[280px] md:min-h-[300px]">
                    <div className="rounded-lg w-full aspect-square overflow-hidden">
                      <img 
                        src={image}
                        alt={`School moment ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg hover:bg-gray-50 transition"
            aria-label="Next slide"
          >
            <svg 
              className="w-6 h-6 text-black" 
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
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => {
            const isActive = index >= currentIndex && index < currentIndex + slidesPerView
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition ${
                  isActive ? '' : 'bg-gray-300'
                }`}
                style={isActive ? { backgroundColor: '#1E3A8A' } : {}}
                aria-label={`Go to slide ${index + 1}`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SchoolMoments

