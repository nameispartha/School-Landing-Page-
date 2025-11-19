import programImg1 from '../Images/program-img-01.jpg'
import programImg2 from '../Images/program-img-02.jpg'
import programImg3 from '../Images/program-img-03.jpg'
import programImg4 from '../Images/program-img-04.jpg'

function Programs() {
  const programs = [
    {
      title: "Kindergarten through grade two",
      description: "Play-based learning with foundational skills in literacy and numeracy.",
      image: programImg1,
    },
    {
      title: "Primary school grades three through five",
      description: "Deepening critical thinking through project-based learning and collaborative work.",
      image: programImg2,
    },
    {
      title: "Middle school grades six through eight",
      description: "Building independence and exploring diverse subjects with specialized teachers.",
      image: programImg3,
    },
    {
      title: "High school grades nine through twelve",
      description: "Advanced coursework, leadership opportunities, and preparation for university.",
      image: programImg4,
    },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="text-xs sm:text-sm font-bold mb-3 sm:mb-4" style={{ fontFamily: 'sans-serif', color: '#FACC15' }}>
            Programs
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'sans-serif', color: '#1E3A8A' }}>
            Education for every stage
          </h2>
          <p className="text-sm sm:text-base max-w-2xl mx-auto px-4" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
            From early learning to college preparation, we tailor instruction to each student's growth.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="rounded-lg relative overflow-hidden min-h-[300px] sm:min-h-[350px] md:min-h-[400px]"
            >
              {/* Background Image */}
              <img 
                src={program.image}
                alt={program.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0" style={{ backgroundColor: 'rgba(30, 58, 138, 0.7)' }}></div>

              {/* Content */}
              <div className="relative z-10 p-4 sm:p-5 md:p-6 h-full flex flex-col">
                {/* Top-Left Icon */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    <path d="M22 7v10l-10 5V12L22 7z" opacity="0.5"/>
                  </svg>
                </div>

                {/* Spacer for icon */}
                <div className="h-10 sm:h-12"></div>

                {/* Title */}
                <h3 className="text-white font-bold text-base sm:text-lg mb-2 sm:mb-3 flex-grow" style={{ fontFamily: 'sans-serif' }}>
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-white text-xs sm:text-sm mb-4 sm:mb-6" style={{ fontFamily: 'sans-serif', fontWeight: '400' }}>
                  {program.description}
                </p>

                {/* Explore Link */}
                <a href="#explore" className="text-white font-medium flex items-center gap-1 hover:underline transition inline-block mt-auto">
                  Explore
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

export default Programs

