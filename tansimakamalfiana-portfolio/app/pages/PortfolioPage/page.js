import Image from "next/image";
import FionaIcon from "@/app/components/FionaIcon"
import GitHubIcon from "@/app/components/GitHubIcon"
import LinkedInIcon from "@/app/components/LinkedInIcon"
import Buttons from "@/app/components/Buttons"

import Navigation from "@/app/navigation/page"


export default function PortfolioPage() {
  return (
    <main className="bg-[#FBC5B8] text-black my-auto flex-col flex flex-wrap rounded-2xl">
      <Navigation />

      <div className="w-screen bg-pink-50 flex-col rounded-2xl pb-12">
        <h1 className=" mx-auto justify-center flex py-4 text-6xl">RESUME</h1>

        {/* Double-sided pane */}
        <div className="w-10/12 h-full flex flex-wrap justify-center mx-auto">
          {/* First Side */}
          <div className=" h-full bg-red-500 max-w-3xl">
            <h2 className=" text-4xl pb-12">Experience</h2>

            {/* Experience Field */}
            <div className="">
            <div className="w-full flex justify-space mx-auto">
                <h3 className="mr-auto justify-start text-2xl">Cyferd | Internship </h3>
                <h3 className="ml-auto pr-4">01/23 - 04/23</h3>
              </div>
              <div className="w-full flex justify-space mx-auto">
                <h3 className="ml-auto pr-4 italic">Calgary, AB</h3>
              </div>
              <ul className="mt-4">
                <li>• Collaborated with the solution expert of Cyferd to develop an innovative mental health application using Cyferd
technology, implementing JSON coding</li>
                <li>• Crafted PowerPoint presentations showcasing application’s front-end features, boosting user satisfaction
• Achieved recognition as a Certified Cyferd Modeller for exceptional contributions to project development and
implementation</li>
                <li>• Utilized engineering principles to drive innovation and collaboration, supporting business objectives in a dynamic
team setting</li>
                <li>• Applied Lean principles and process optimization, achieving a 15% reduction in production cycle time and a 20%
increase in operational efficiency</li>
                <li>• Reference: <span className="underline">haider.al-seaidy@cyferd.com</span> <span className="underline"></span></li>
              </ul>
            </div>

            {/* IT Volunteering */}
            <div className="mt-6">
            <div className="w-full flex justify-space mx-auto">
                <h3 className="mr-auto justify-start text-2xl">IT Volunteering Support Specialist </h3>
                <h3 className="ml-auto pr-4">01/23 - Present</h3>
              </div>
              <div className="w-full flex justify-space mx-auto">
                <h3 className="ml-auto pr-4 italic">Calgary, AB</h3>
              </div>
              <ul className="mt-4">
                <li>• Resolved campus computer issues for 100+ users</li>
              </ul>
            </div>

            <div className="mt-6">
            <div className="w-full flex justify-space mx-auto">
                <h3 className="mr-auto justify-start text-2xl">Data Entry | Freelance</h3>
                <h3 className="ml-auto pr-4">04/23 - Present</h3>
              </div>
              <div className="w-full flex justify-space mx-auto">
                <h3 className="ml-auto pr-4 italic">Calgary, AB</h3>
              </div>
              <ul className="mt-4">
                <li>• Input financial data, including transactions, invoices, receipts, and payment details using Excel</li>
                <li>• Enter and categorize expenses, which helps in tracking and managing the company’s spending. Did proper
categorization to ensure accurate financial reporting</li>
                <li>• Accuracy, attention to detail, and adherence to financial regulations</li>
               
              </ul>
            </div>

            <div className="mt-6">
              <div className="w-full flex justify-space mx-auto">
                <h3 className="mr-auto justify-start text-2xl">Team Lead | The Body Shop</h3>
                <h3 className="ml-auto pr-4">01/23 - 02/24</h3>
              </div>
              <div className="w-full flex justify-space mx-auto">
                <h3 className="ml-auto pr-4 italic">Calgary, AB</h3>
              </div>
              <ul className="mt-4">
                <li>• Produced financial reports detailing cost breakdowns and profitability analysis, supporting strategic decision-making
for the body shop department, highlighting strong analytical skills, business acumen, and customer service skills</li>
              </ul>
            </div>

            <h2 className=" text-4xl pb-12 mt-10">Projects</h2>
            <div className="">
              <div className="w-full flex justify-space mx-auto">
                <h3 className="mr-auto justify-start text-2xl">Capstone Project</h3>
                <h3 className="ml-auto pr-4">01/23 - 04/23</h3>
              </div>
              <div className="w-full flex justify-space mx-auto">
                <h3 className="mr-auto pr-4 italic"> TailwindCSS, React.JS, Next.JS, Node.JS, Firebase</h3>
                <h3 className="ml-auto pr-4 italic">Calgary, AB</h3>
              </div>
              <ul className="mt-4">
                <li>• Led Capstone team to develop dynamic cat breeding website</li>
                <li>• Utilized React.js, Next.js, Node.js for scalability and front end, Firebase for real-time database</li>
                <li>• Leveraged Visual Studio Code for coding, debugging, and Git/GitHub version control, achieving a boost in code
quality and deployment efficiency</li>
<li>• Employed UML diagrams for system architecture, following agile and scrum methodologies</li>
<li>• Designed and developed an admin dashboard using React.js; streamlined management of 50+ cat breeds, 100 cats,
and interactive site content, focusing in a increase in user satisfaction, and site content</li>
<li>• Implemented Tailwind CSS for rapid UI prototyping and responsive design</li>

              </ul>
            </div>
          </div>

          {/* Second Side */}
          <div className=" h-ful pl-8 ml-4">
            <h2 className=" text-4xl pb-12">Education</h2>

            <div className="w-full flex justify-space mx-auto">
              <h3 className="mr-auto justify-start text-2xl">Southern Alberta Institute of Technology</h3>
              <h3 className="ml-auto pr-4">09/22 - 04/24</h3>
            </div>
            <div className="w-full flex justify-space mx-auto">
              <h3 className="mr-auto pr-4">Diploma in Software Development - Global Campus Scholarship Award</h3>
              <h3 className="ml-auto pr-4 ">Calgary, AB</h3>
            </div>

            <h2 className=" text-4xl pb-12 mt-6">Skills</h2>
          </div>
        </div>
      </div>
    </main>
  );
}