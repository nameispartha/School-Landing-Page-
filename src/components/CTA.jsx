function CTA() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 text-center border" style={{ borderColor: '#FACC15', borderWidth: '2px' }}>
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ fontFamily: 'sans-serif', color: '#1E3A8A' }}>
            Join our school today
          </h2>
          
          {/* Descriptive Paragraph */}
          <p className="text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto px-4" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
            Begin your child's journey toward excellence and meaningful growth.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold hover:opacity-90 transition text-sm sm:text-base" style={{ fontFamily: 'sans-serif', backgroundColor: '#1E3A8A' }}>
              Enroll
            </button>
            <button className="bg-white border px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold hover:bg-blue-50 transition text-sm sm:text-base" style={{ fontFamily: 'sans-serif', color: '#374151', borderColor: '#2563EB' }}>
              Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

