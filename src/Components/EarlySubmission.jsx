import React from 'react';

const EarlySubmission = () => {
  return (
    <div className=' p-10'>
      <h2 className='text-3xl font-bold mb-1 text-blue-900'>
        <span className='underline'>Early Submission Advantage</span>
      </h2>
      <p className='text-lg mb-3'>
        Discount on Registration Fee to Authors who will submit their paper early and will not wait for the last date of submission. This discount is available on all categories of Authors.
      </p>
      <div className='overflow-x-auto'>
        <table className='w-full border-collapse border border-blue-300'>
          <thead>
            <tr className='bg-blue-300 text-lg font-normal'>
              <th className='border border-blue-300 px-4 py-2 text-left'>Paper Submission Date</th>
              <th className='border border-blue-300 px-4 py-2 text-left'>Discount on Registration Fee (Early Bird & Regular)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-blue-200 text-lg font-normal'>
              <td className='border border-blue-300 px-4 py-2'>December 1<sup>st</sup> - December 15<sup>th</sup></td>
              <td className='border border-blue-300 px-4 py-2'>25%</td>
            </tr>
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EarlySubmission;