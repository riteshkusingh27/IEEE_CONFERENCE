import Footer from './Footer.jsx';
import ImportantDates from './ImportantDates.jsx';
export default function AuthorGuidelines() {
  return (
    <div className='w-full overflow-hidden   '>
      <div className=" py-8  w-full px-9 ">
        <h2 className="text-3xl font-bold text-orange-500  text-center mb-3">GUIDELINES TO AUTHORS</h2>
        <div className="text-left">
          <p className="text-lg">
            Below are some useful instructions to assist the authors for submit their papers fo International Conference on Disruptive Technologies for
Multi-Disciplinary Research and Applications 2026 :
          </p>
          
          <h3 className="text-2xl font-bold text-blue-900 mt-4">ORIGINALITY OF SUBMITTED PAPERS</h3>
          <p className="text-lg text-justify">
            Papers submitted to International Conference on Disruptive Technologies for
Multi-Disciplinary Research and Applications 2026  shall contain original work by the author(s) that have not been published
            or submitted for publication elsewhere. The IEEE anti-plagiarism policy is applicable to all submissions.
            The author(s) are solely responsible for any plagiarized submission.
          </p>
          
          <h3 className="text-2xl font-bold text-blue-900 mt-4">PAPER SUBMISSION</h3>
          <p className="text-lg text-justify">
            All papers are required to be prepared and submitted in the IEEE Standard two-column conference format
            of A4 size in English. Papers must be three to six pages in length, including texts, figures, photographs,
            and references. Any submitted paper that exceeds six pages will be rejected. The first page must include
            the title of the paper, author(s), affiliations, address, and text. Do not include page numbers on submitted
            documents. Failing to conform to the standard format will result in rejection. Detailed format information
            is available on the IEEE Website.
          </p>
          <p className="text-lg text-justify">
            The authors are required to use the standard IEEE manuscript template for conferences. The Microsoft Word
            template can be downloaded from the IEEE conference template page:
            <a href="https://www.ieee.org/conferences/publishing/templates.html" className="text-blue-500 hover:underline"> Click here</a>
          </p>
          
          <h3 className="text-2xl font-bold text-blue-900 mt-4">PAPER UPLOAD</h3>
          <p className="text-lg text-justify">
            The submitting authors may be required to create an EDAS account before uploading the paper (if the submitting
            author does not have a Microsoft Conference Management Toolkit account). While uploading the paper, the authors
            should provide the title of the paper, an abstract of no more than 100 words, and keywords in the respective text
            boxes in the paper submission page.
          </p>
          <p className="text-lg text-justify">
            Please note that all accepted papers that are registered and presented in the conference will be sent for possible
            inclusion in IEEE Xplore. The authors must agree to the IEEE copyright conditions and sign the IEEE copyright form
            as part of the online submission process. All submitted papers will be peer-reviewed by the Technical Program
            Committees (TPC). All papers must be Uploaded in PDF via CMT:
            <a href="https://www.ieee.org/conferences/publishing/templates.html" className="text-blue-500 hover:underline"> Click here</a>
          </p>
        </div>
     
      </div>
      <Footer/>
    </div>
  );
}
