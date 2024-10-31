import React from 'react';
import Navbar from "../components/navbar/Navbar";


const News = () => {
  const posts = [
    {
      id: 1,
      title: 'Sustainable Waste Management Practices in Nigeria',
      date: 'October 25, 2024',
      excerpt: 'Explore the innovative methods being implemented across Nigeria to manage waste sustainably.',
      imageUrl: 'https://cdn.punchng.com/wp-content/uploads/2023/09/20220519/George-Akume.png',
    },
    {
      id: 2,
      title: 'Community Recycling Initiatives: Making a Difference',
      date: 'October 22, 2024',
      excerpt: 'Learn how local communities are coming together to promote recycling and reduce waste.',
      imageUrl: 'https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2024/10/Picture3.jpg?w=624&ssl=1',
    },
    {
      id: 3,
      title: 'The Importance of Proper Waste Disposal',
      date: 'October 18, 2024',
      excerpt: 'Understanding the impact of waste disposal on our environment and health.',
      imageUrl: 'https://guardian.ng/wp-content/uploads/2023/09/lawma-1424x802.jpg',
    },
  ];

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Latest News & Articles</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-2">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <a href="#" className="text-green-500 font-semibold hover:underline">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default News;
