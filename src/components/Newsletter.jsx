import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'sans-serif', color: '#1E3A8A' }}>
            <span className="block">Stay informed about school</span>
            <span className="block">news and events</span>
          </h2>
          
          {/* Description */}
          <p className="text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto px-4" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
            Subscribe to receive updates on admissions, programs, and community happenings.
          </p>
          
          {/* Subscription Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center mb-4 px-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 max-w-md px-4 py-2.5 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
              style={{ fontFamily: 'sans-serif', borderColor: '#2563EB', focusRingColor: '#2563EB' }}
              required
            />
            <button
              type="submit"
              className="text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold hover:opacity-90 transition whitespace-nowrap text-sm sm:text-base"
              style={{ fontFamily: 'sans-serif', backgroundColor: '#1E3A8A' }}
            >
              Subscribe
            </button>
          </form>
          
          {/* Disclaimer Text */}
          <p className="text-xs sm:text-sm px-4" style={{ fontFamily: 'sans-serif', fontWeight: '400', color: '#374151' }}>
            By subscribing you agree to receive communications from Generic School Project
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter

