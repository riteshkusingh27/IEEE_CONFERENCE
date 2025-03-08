import React from 'react';

const News = () => {
  const newsUpdates = [
    { id: 1, date: 'August 1 2025', content: 'Paper Submission Starts' }
  ];

  return (
    <div className=" p-4 bg-gradient-to-r from-pal-50 to-purple-50 rounded-lg shadow-md w-full">
      <h2 className="text-xl font-bold mb-4 text-purple-700">Important Dates</h2>
      <ul className="space-y-3">
        {newsUpdates.map((news) => (
          <li key={news.id} className="border-l-4 border-purple-400 pl-3 bg-white rounded-lg p-2 shadow-sm">
            <p className="text-sm font-bold text-black">{news.date}</p>
            <p className="text-base font-medium text-gray-900">{news.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
