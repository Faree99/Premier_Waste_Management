import React, { useState } from 'react';

const Faqs = () => {
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (

    <section className="p-6 rounded-lg shadow-md bg-green-50">
  <h3 className="text-2xl font-bold text-center text-green-600">Tips & FAQs</h3>
  <p className="mt-2 text-center text-gray-600">Get answers to common questions and learn about waste management best practices.</p>
  
  {/* Two-column grid layout */}
  <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
    {/* FAQs Column */}
    <div className="space-y-4">
      <div>
        <h3
          onClick={() => toggleFaq(1)}
          className="text-lg font-bold text-green-700 cursor-pointer"
        >
          What items are considered recyclable?
        </h3>
        {faqOpen === 1 && (
          <p className="mt-2 text-gray-600">
            Aluminum cans, paper, plastics, etc., can be recycled...
          </p>
        )}
      </div>
      <div>
        <h3
          onClick={() => toggleFaq(2)}
          className="text-lg font-bold text-green-700 cursor-pointer"
        >
          How often are pickups scheduled?
        </h3>
        {faqOpen === 2 && (
          <p className="mt-2 text-gray-600">
            Pickups are scheduled weekly, with dates varying by location.
          </p>
        )}
      </div>
    </div>

    {/* Tips Column */}
    <div className="space-y-2 text-left">
      <p className="text-gray-700">• Always separate recyclable and non-recyclable waste.</p>
      <p className="text-gray-700">• Avoid illegal dumping; use the designated public trash cans.</p>
      <p className="text-gray-700">• Reduce waste by reusing materials whenever possible.</p>
    </div>
  </div>
</section>

  );
};

export default Faqs;
