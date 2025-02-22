const ImportantDates = () => {
  const dates = [
    { title: "Paper Submission start date", date: "Dec 1, 2024", bold: true },
    { title: "Last Date of Paper Submission", date: "Feb 28, 2025", bold: true },
    { title: "Notification of Acceptance", date: "April 15, 2025" },
    { title: "Last Date of Author Registration", date: "May 15, 2025" },
    { title: "Last Date of Non-Author Registration", date: "June 30, 2025" },
  ];

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-xl font-bold text-gray-900 text-center">
        <span className="text-red-500">Important</span> Dates
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
