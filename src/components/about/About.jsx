import React from 'react'

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-green-100 via-green-300 to-green-500">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
      {/* Image */}
      <div>
        <img
          src="/images/solid.jpg"
          alt="Premier Waste Management Experts"
          className="w-full h-[450px] rounded-lg shadow-lg"
        />
      </div>
      {/* Text Content */}
      <div className="text-center md:text-left">
  <p className="text-yellow-500 font-semibold mb-2">Discover Our Commitment to Sustainable Waste Management</p>
  <h2 className="mb-4 text-3xl font-semibold md:text-4xl">Your Premier Waste Management Support</h2>
  <p className="mb-6 text-lg text-gray-700">
    At <span className='font-bold text-yellow-500 text-2xl'>PMW</span>, we connect you with efficient waste management solutions that prioritize sustainability and convenience. Whether you need public or private waste services, we have tailored options to fit your unique needs, helping create a cleaner and greener Nigeria.
  </p>
  <div className="bg-yellow-300 p-4 rounded-lg shadow-lg">
    <ul className="space-y-2 text-gray-600">
      <li>✅ Nationwide coverage to reach all communities.</li>
      <li>✅ Reliable and sustainable waste management options.</li>
      <li>✅ Customized plans designed for diverse needs.</li>
      <li>✅ Affordable services with flexible scheduling.</li>
    </ul>
  </div>
</div>

    </div>
  </section>

  )
}

export default About;