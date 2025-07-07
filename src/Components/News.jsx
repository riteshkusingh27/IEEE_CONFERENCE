import React from "react";

const News = () => {
  const newsUpdates = [
    {
      id: 1,
      date: (
        <>
          1<sup>st</sup> September, 2025
        </>
      ),
      content: "Paper Submission Starts",
    },
    {
      id: 2,
      date: (
        <>
          15<sup>th</sup> October, 2025
        </>
      ),
      content: "Last Date of Paper Submission",
    },
    {
      id: 3,
      date: (
        <>
          30<sup>th</sup> November, 2025
        </>
      ),
      content: "Notification of Acceptance",
    },
    {
      id: 4,
      date: (
        <>
          10<sup>th</sup> December, 2025
        </>
      ),
      content: "Last Date of Author Registration",
    },
    {
      id: 5,
      date: (
        <>
          24<sup>th</sup> December, 2025
        </>
      ),
      content: "Last Date To Submit Camera-Ready Manuscript",
    },
    {
      id: 6,
      date: (
        <>
          23<sup>rd</sup> & 24<sup>th</sup> January, 2026
        </>
      ),
      content: "Conference Dates",
    },
  ];

  return (
    <div className=" p-4 bg-gray-100 rounded-lg shadow-md w-full">
      <h2 className="text-xl font-bold mb-4 text-purple-700">
        Important Dates
      </h2>
      <ul className="space-y-3">
        {newsUpdates.map((news) => (
          <li
            key={news.id}
            className="border-l-4 border-purple-400 pl-3 bg-white rounded-lg p-2 shadow-sm"
          >
            <p className="text-sm font-bold text-black select-none">
              {news.date}
            </p>
            <p className="text-base font-medium text-gray-900">
              {news.content}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
