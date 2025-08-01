import Footer from './Footer.jsx';

export default function AuthorGuidelines() {
  return (
    <div className='w-full overflow-hidden'>
      <div className="py-8 w-full px-9">
        <h2 className="text-3xl font-bold text-orange-500 text-center mb-3">
          GUIDELINES TO AUTHORS
        </h2>

        <div className="text-left">
          <h3 className="text-2xl font-bold text-blue-900 mt-4 mb-3">1. Submission Guidelines</h3>
          <p className="text-lg text-justify">
            To maintain the highest standards of academic quality and integrity, authors must adhere to the following submission norms:
          </p>
          <ul className="list-disc list-inside text-lg text-justify pl-5">
            <li>Format: All papers must follow the IEEE Standard two-column conference format (A4 size) in English.</li>
            <li>Length: Papers must be 3 to 6 pages long, including figures, tables, and references. Submissions exceeding six pages will be rejected.</li>
            <li>Font & Style: Follow IEEE formatting with appropriate font size and spacing. Do not include page numbers or headers/footers.</li>
            <li>Abstract: Must not exceed 100 words.</li>
            <li>Keywords: Provide 3–5 keywords during submission.</li>
            <li>References: Should be properly formatted and cited within IEEE style.</li>
            <li>File Type: PDF only. Ensure fonts are embedded.</li>
            <li>Anonymity: Submissions should be prepared for double-blind review, so do not include author names or affiliations in the paper.</li>
            <li>
              IEEE Templates: 
              <a href='https://www.ieee.org/conferences/publishing/templates.html' className='text-blue-500 hover:underline ml-2'>Download Here</a>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-blue-900 mt-6 mb-3">2. Review Process</h3>
          <ul className="list-disc list-inside text-lg text-justify pl-5">
            <li>Paper Identification: Each submission is assigned a unique Paper ID to anonymize author details.</li>
            <li>Plagiarism Check: A mandatory plagiarism screening is conducted. Submissions with a similarity index exceeding 10% will be rejected without review.</li>
            <li>Peer Review: Shortlisted papers undergo two rounds of review by domain experts. Reviewers provide detailed comments and scoring.</li>
            <li>Final Selection: Based on review outcomes, authors of accepted papers will be notified to submit their camera-ready version using the official template.</li>
          </ul>

          <h3 className="text-2xl font-bold text-blue-900 mt-6 mb-3">3. Originality of Submissions</h3>
          <ul className="list-disc list-inside text-lg text-justify pl-5">
            <li>Submitted work must be original, unpublished, and not under consideration elsewhere.</li>
            <li>All authors must comply with the <a href='https://www.ieee.org/publications/rights/plagiarism/id-plagiarism.html' className='text-blue-500 hover:underline'>IEEE anti-plagiarism policy.</a></li>
            <li>Authors are fully responsible for the integrity of their submissions.</li>
          </ul>

          <h3 className="text-2xl font-bold text-blue-900 mt-6 mb-3">4. Where to Submit</h3>
          <p className="text-lg text-justify">
            All papers must be submitted via the <span className="font-semibold"> Microsoft Conference Management Toolkit (CMT).</span>
            <span className="text-gray-500 italic ml-1">[CMT Submission Link – Coming Soon]</span>
          </p>

          <h3 className="text-2xl font-bold text-blue-900 mt-6 mb-2">5. How to Submit</h3>
          <p className="text-lg text-justify">
            Before submission:
          </p>
          <ul className="list-disc list-inside text-lg text-justify pl-5">
            <li>You must have a CMT account. If you don't have one, create your account <a href="https://cmt3.research.microsoft.com" className="text-blue-500 hover:underline">here</a>.</li>
            <li>For step-by-step instructions on the submission process, refer to the<a href='https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html' className='text-blue-500 hover:underline'> Author Submission Guide.</a> </li>
          </ul>

          <h3 className="text-2xl font-bold text-blue-900 mt-6 mb-3">6. Important Notes</h3>
          <ul className="list-disc list-inside text-lg text-justify pl-5">
            <li>No revisions are allowed once a paper is submitted. The review process begins immediately.</li>
            <li>Papers not conforming to the format, length, or originality standards will be desk-rejected.</li>
            <li>All accepted and presented papers will be submitted for possible inclusion in IEEE Xplore, subject to quality and compliance.</li>
            <li>Authors must complete IEEE copyright transfer as part of the final submission process.</li>
          </ul>

          <h3 className="text-2xl font-bold text-blue-900 mt-6 mb-3">7. Registration and Participation</h3>
          <ul className="list-disc list-inside text-lg text-justify pl-5">
            <li>Details on registration fees are available on the conference website.</li>
            <li>Presentation formats will be communicated via email upon acceptance.</li>
            <li>At least one author of each accepted paper must register and attend the conference to present the work.</li>
          </ul>

        </div>
      </div>
      <Footer />
    </div>
  );
}
