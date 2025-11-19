import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Foundation from './components/Foundation'
import Programs from './components/Programs'
import Facilities from './components/Facilities'
import SchoolMoments from './components/SchoolMoments'
import StudentVoices from './components/StudentVoices'
import CTA from './components/CTA'
import ContactUs from './components/ContactUs'
import Questions from './components/Questions'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{ 
      backgroundColor: '#F8FAFC'
    }}>
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Foundation Section */}
      <Foundation />

      {/* Programs Section */}
      <Programs />

      {/* Facilities Section */}
      <Facilities />

      {/* School Moments Section */}
      <SchoolMoments />

      {/* Student Voices Section */}
      <StudentVoices />

      {/* CTA Section */}
      <CTA />

      {/* Contact Us Section */}
      <ContactUs />

      {/* Questions Section */}
      <Questions />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App

