import { useState, useEffect } from 'react'

function StudentVoices() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(3)
  
  const testimonials = [
    {
      quote: "The teachers genuinely care about each student's growth, not just grades.",
      name: "Sarah Chen",
      role: "Parent, grade four"
    },
    {
      quote: "My son came alive here. He's curious, confident, and excited about school.",
      name: "James Mitchell",
      role: "Parent, grade two"
    },
    {
      quote: "I've made lifelong friends and learned so much about myself through service projects.",
      name: "Emma Rodriguez",
      role: "Student, grade ten"
    },
    {
      quote: "The balance of academics and activities doesn't overwhelm students.",
      name: "Michael Thompson",
      role: "Parent, grade eight"
    },
    {
      quote: "This school has transformed my daughter's confidence and love for learning.",
      name: "Lisa Anderson",
      role: "Parent, grade six"
    }
  ]

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

  const totalSlides = testimonials.length
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
            Student voices
          </h2>
          <p className="text-sm sm:text-base max-w-2xl mx-auto px-4" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
            Hear from families who have found their home here.
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
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 px-1 sm:px-2 md:px-3"
                  style={{ width: `${100 / slidesPerView}%` }}
                >
                  <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          style={{ color: '#FACC15' }}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-sm sm:text-base mb-4 sm:mb-6 flex-grow" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
                      "{testimonial.quote}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F8FAFC' }}>
                        <div className="w-6 h-6 rounded" style={{ backgroundColor: '#FACC15' }}></div>
                      </div>
                      <div>
                        <div className="font-bold text-sm" style={{ fontFamily: 'sans-serif', color: '#1E3A8A' }}>
                          {testimonial.name}
                        </div>
                        <div className="text-xs" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
                          {testimonial.role}
                        </div>
                      </div>
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
              className="w-5 h-5 sm:w-6 sm:h-6 text-black" 
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

export default StudentVoices

