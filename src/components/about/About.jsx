import React from 'react'

const About = () => {
  return (
    <section className="py-16 bg-gray-100">
    <div className="grid max-w-5xl grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-2">
      {/* Image */}
      <div>
        <img
          src="/images/solid.jpg"
          alt="Premier Waste Management Experts"
          className="w-full h-[450px] rounded-lg shadow-lg"
        />
      </div>
      {/* Text Content */}
      <div className="mt-10 text-center md:text-left">
  <p className="mb-2 font-semibold text-[#FFA500]">Discover Our Commitment to Sustainable Waste Management For Better Tomorrow</p>
  {/* <h2 className="mb-4 text-3xl font-semibold md:text-4xl">Your EcoTrade Support</h2> */}
  <p className="mb-6 text-lg text-gray-700 ">
    At <span className='font-bold text-black '>EcoTrade</span>, we connect you with efficient waste management solutions that prioritize sustainability and convenience. Whether you need public or private waste services, we have tailored options to fit your unique needs, helping create a cleaner and greener Nigeria.
  </p>
  <div className="p-4 bg-yellow-300 rounded-lg shadow-lg">
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