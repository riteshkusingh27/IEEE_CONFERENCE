import React from 'react';

const News = () => {
  const newsUpdates = [
    { id: 1, date: '1st September, 2025', content: 'Paper Submission Starts' },
    { id: 1, date: '15th October, 2025', content: 'Last Date of Paper Submission' },
    { id: 1, date: '30th November, 2025', content: 'Notification of Acceptance' },
    { id: 1, date: '10th December, 2025', content: 'Last Date of Author Registration' },
    { id: 1, date: '25th December, 2025', content: 'Last Date To Submit Camera-Ready Manuscript ' },
    { id: 1, date: '23rd & 34th January, 2026', content: 'Conference Dated' },
  ];

  return (
    <div className=" p-4 bg-gradient-to-r from-pal-50 to-purple-50 rounded-lg shadow-md w-full">
      <h2 className="text-xl font-bold mb-4 text-purple-700">Important Dates</h2>
      <ul className="space-y-3">
        {newsUpdates.map((news) => (
          <li key={news.id} className="border-l-4 border-purple-400 pl-3 bg-white rounded-lg p-2 shadow-sm">
            <p className="text-sm font-bold text-black select-none">{news.date}</p>
            <p className="text-base font-medium text-gray-900">{news.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
