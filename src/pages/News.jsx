import React from 'react';
import Navbar from "../components/navbar/Navbar";
import { Link } from 'react-router-dom';


const News = () => {
  const posts = [
    {
      id: 1,
      title: 'Sustainable Waste Management Practices in Nigeria',
      date: 'October 25, 2024',
      excerpt: 'Explore the innovative methods being implemented across Nigeria to manage waste sustainably.',
      imageUrl: 'https://cdn.punchng.com/wp-content/uploads/2023/09/20220519/George-Akume.png',
      newsUrl: 'https://guardian.ng/news/nigeria/metro/sanwo-olu-urges-stakeholders-to-explore-opportunities-in-waste-management/'
    },
    {
      id: 2,
      title: 'Community Recycling Initiatives: Making a Difference',
      date: 'October 22, 2024',
      excerpt: 'Learn how local communities are coming together to promote recycling and reduce waste.',
      imageUrl: 'https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2024/10/Picture3.jpg?w=624&ssl=1',
      newsUrl: 'https://punchng.com/waste-conversion-remains-elusive-as-nigeria-struggles-to-tap-into-recycling-economy/'
    },
    {
      id: 3,
      title: 'The Importance of Proper Waste Disposal',
      date: 'October 18, 2024',
      excerpt: 'Understanding the impact of waste disposal on our environment and health.',
      imageUrl: 'https://guardian.ng/wp-content/uploads/2023/09/lawma-1424x802.jpg',
      newsUrl: 'https://www.unicef.org/nigeria/press-releases/unicef-and-youth-volunteers-plant-trees-and-recycle-plastic-waste-across-nigeria'
    },
  ];

  return (
    <>
    <Navbar />
    <div className="container p-6 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">Latest News & Articles</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="overflow-hidden transition-transform duration-500 transform bg-white rounded-lg shadow-lg hover:scale-105">
            <img src={post.imageUrl} alt={post.title} className="object-cover w-full h-48" />
            <div className="p-4">
              <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
              <p className="mb-2 text-gray-600">{post.date}</p>
              <p className="mb-4 text-gray-700">{post.excerpt}</p>
              <Link to={post.newsUrl} className="font-semibold text-green-500 hover:underline">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default News;
