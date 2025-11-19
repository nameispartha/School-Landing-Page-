import { useState } from 'react'

function Questions() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is your admissions process?",
      answer: "We review applications year-round and consider academic records, teacher recommendations, and family fit. Families are invited to tour campus and meet our team before deciding. Admission decisions are made rolling throughout the school year."
    },
    {
      question: "Do you offer financial aid?",
      answer: "Yes, we offer need-based and merit-based financial assistance to qualified families. Our goal is to make quality education accessible. Contact our admissions office to discuss options and complete a financial aid application."
    },
    {
      question: "What is the student-to-teacher ratio?",
      answer: "Our average class size is twelve to fifteen students, ensuring personalized attention and strong relationships. Smaller groups allow teachers to tailor instruction to each learner's pace and style."
    },
    {
      question: "Are there before and after school programs?",
      answer: "We offer extended care from 7:00 AM to 6:00 PM, including homework support, enrichment activities, and recreation. These programs are available to all enrolled families for an additional fee."
    },
    {
      question: "How do you support students with learning differences?",
      answer: "Our learning support team works with students who have dyslexia, ADHD, and other learning differences. We provide accommodations, small-group instruction, and collaborate with families and outside specialists."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        {/* Top Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'sans-serif', color: '#1E3A8A' }}>
            Questions
          </h2>
          <p className="text-sm sm:text-base max-w-2xl mx-auto px-4" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
            Find answers to common questions about admissions, programs, and life at our school.
          </p>
        </div>

        {/* FAQ Accordion Section */}
        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition"
              >
                <span className="font-bold pr-3 sm:pr-4 text-sm sm:text-base" style={{ fontFamily: 'sans-serif', color: '#1E3A8A' }}>
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: '#FACC15' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Can we visit campus Section */}
        <div className="text-center rounded-lg p-6 sm:p-8" style={{ backgroundColor: '#F8FAFC' }}>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'sans-serif', color: '#1E3A8A' }}>
            Can we visit campus?
          </h3>
          <p className="text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto px-4" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
            Absolutely. We encourage families to schedule a tour and observe classrooms in action. Tours are offered most weekdays; contact admissions to arrange your visit.
          </p>
          <button className="text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold hover:opacity-90 transition text-sm sm:text-base" style={{ fontFamily: 'sans-serif', backgroundColor: '#1E3A8A' }}>
            Contact
          </button>
        </div>
      </div>
    </section>
  )
}

export default Questions

