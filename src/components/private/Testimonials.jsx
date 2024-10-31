import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Jane Doe',
      photo: '/images/jane.jpg',
      rating: 5,
      review: 'Amazing service! Highly recommend to everyone.',
    },
    {
      id: 2,
      name: 'John Smith',
      photo: '/images/john.jpg',
      rating: 4,
      review: 'Great experience, very satisfied with the results.',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      photo: '/images/alice.jpg',
      rating: 5,
      review: 'Truly outstanding service and attention to detail!',
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="px-5 py-10 bg-gray-100">
      <h2 className="mb-8 text-2xl font-semibold text-center">What Our Customers Say</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-lg">
            <img
              src={testimonial.photo}
              alt={testimonial.name}
              className="w-16 h-16 mb-4 rounded-full"
            />
            <h3 className="mb-2 text-lg font-bold">{testimonial.name}</h3>
            <div className="flex items-center mb-3">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.971a1 1 0 00.95.69h4.166c.969 0 1.371 1.24.588 1.81l-3.373 2.448a1 1 0 00-.364 1.118l1.287 3.971c.3.921-.755 1.688-1.539 1.118L10 13.527l-3.373 2.448c-.783.57-1.838-.197-1.539-1.118l1.287-3.971a1 1 0 00-.364-1.118L2.638 9.398c-.783-.57-.38-1.81.588-1.81h4.166a1 1 0 00.95-.69l1.286-3.971z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
