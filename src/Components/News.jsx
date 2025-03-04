import React from 'react';

const News = () => {
  const newsUpdates = [
    { id: 1, date: 'Date here ', content: 'upcoming event here ' }
  ];

  return (
    <div className=" p-4 bg-gradient-to-r from-pal-50 to-purple-50 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-purple-700">Latest News</h2>
      <ul className="space-y-3">
        {newsUpdates.map((news) => (
          <li key={news.id} className="border-l-4 border-purple-400 pl-3 bg-white rounded-lg p-2 shadow-sm">
            <p className="text-sm text-gray-500">{news.date}</p>
            <p className="text-base font-medium text-gray-900">{news.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
