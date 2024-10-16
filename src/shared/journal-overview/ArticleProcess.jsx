import React from "react";
import Sidebar from "../Sidebar/Sidebar";

function ArticleProcess() {
  return (
    <>

      <section className="lg:my-10 my-5">
        <div className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0 py-5">
          <div className="lg:flex md:flex  gap-8 ">
            <div className="max-w-full w-full leading-relaxed">
              <h1 className="text-[#E4B1F0] text-center  text-3xl font-bold ">
                Article Processing
              </h1>
              <ul className='mt-8 list-disc list-outside pl-5 '>
                <li>All articles in the International Journal of Advanced Research in Information Technology and Management Science (IJDIII) journals are of Open Access (OA).</li>
                <li>Authors can copy, redistribute, remix, transform, and build upon the material since all the papers are published under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license.</li>
                <li>Community standards, rather than copyright law, will continue to provide the mechanism for enforcement of proper attribution and responsible use of the published work.</li>
              </ul>


              <div className="lg:max-w-3xl max-w-xl w-full mx-auto  ">
                {/* content goes here */}
                {/* <h1 className="flex -mt-40 h-screen justify-center items-center text-4xl font-bold">
                  Coming Soon
                </h1> */}
              </div>
            </div>


          </div>


        </div>
      </section>
    </>
  );
}

export default ArticleProcess;
