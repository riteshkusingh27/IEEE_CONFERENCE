
const ImportantDates = () => {
  const dates = [
    { title: "Paper Submission start date", date: "1st September, 2025", bold: true },
    { title: "Last Date of Paper Submission", date: "15th October, 2025'", bold: true },
    { title: "Notification of Acceptance", date: "30th November, 2025", bold:'true' },
    
    { title: "Last Date of Author Registration", date: "10th December, 2025",bold:'true' },
    { title: "Last Date To Submit Camera-Ready Manuscript ", date: "25th December, 2025",bold:'true' },
    {title:"Date Of Conference",date:"23rd & 34th January, 2026",bold:true}
  ];

  return (
    <div className="p-6  w-full  pl-8 mt-5">
      <h2 className="text-3xl font-bold text-gray-900 text-center">
        <span className="text-orange-600 text-3xl ">IMPORTANT DATES</span>
      </h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse min-w-[300px]">
          <thead>
            <tr className="border-b">
              <th className="text-left font-semibold p-2">Deadline</th>
              <th className="text-left font-semibold p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {dates.map((item, index) => (
              <tr key={index} className="border-b">
                <td
                  className={`p-2 ${item.bold ? "font-bold" : "text-gray-600"}`}
                >
                  {item.title}
                </td>
                <td className={`p-2 ${item.bold ? "font-bold" : "text-gray-600"}`}>
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImportantDates;
