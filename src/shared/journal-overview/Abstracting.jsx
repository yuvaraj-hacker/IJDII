import React from "react";
import Sidebar from "../Sidebar/Sidebar";

function Abstracting() {
  return (
    <>
      <section className="lg:my-10 my-5">
        <div className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0 py-5">
          <div className="lg:flex md:flex  gap-8 ">
            <div className="max-w-full w-full leading-relaxed">
              <h1 className="text-[#E4B1F0] text-center  text-3xl font-bold ">
                Abstracting and Indexing
              </h1>
              <p className="mt-8 ">Selected  IJDIII will be indexed in all major indexing services, including Web of Science, Scopus, EBSCO, ProQuest, CNKI, DBLP, Google Scholar, Microsoft Academic Search, OCLC Discovery Services, DOAJ, Elektronische Zeitschriftenbibliothek, CrossRef, and others soon.</p>




            </div>

            {/* <Sidebar /> */}
          </div>

          {/* <h1 className="bg-slate-300 h-[1px] w-full mt-5"></h1> */}
        </div>
      </section>
    </>
  );
}

export default Abstracting;
