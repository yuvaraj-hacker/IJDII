import React from "react";
import { Link } from "react-router-dom";
import '../Home/Home.css'
import Sidebar from "../Sidebar/Sidebar";

function Home() {

  return (
    <>











      <section>
        <section>

          {/* <div class="relative h-96 w-full flex items-center justify-center">
            <div class="absolute inset-0 bg-[url('src/assets/Images/Herosection/digital.jpg')] bg-cover bg-center opacity-95"></div>
            <h1 className="relative text-white text-center text-4xl font-bold">
              Welcome To International Journal of Digital Innovation, Insight, and Information
            </h1>
          </div> */}


          <div className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0 py-5">
            <div className="lg:flex md:flex  gap-8 ">
              <div className="max-w-full w-full ">
                <h1 className="text-black text-center text-3xl font-bold text-3d mt-10">
                  Welcome To International Journal of Digital Innovation, Insight, and Information
                </h1>


                <h1 className="text-justify py-5 mt-3">
                  <strong className="text-primary-blue-color font-bold">
                    International Journal of Digital Innovation, Insight, and Information (IJDIII)
                  </strong>{" "}
                  is a scholarly online, open access, peer-reviewed
                  interdisciplinary, quarterly, and fully refereed journal
                  focusing on theories, methods and applications on Advanced
                  Research in Computer Science, Information Technology and
                  Management Science. It is an international scientific journal
                  that aims to contribute to the constant scientific research
                  and training, so as to promote research in the field of
                  Engineering , Technology and Management Science.
                </h1>

                <h1 className="bg-slate-300 h-[1px] w-full"></h1>
                <h1 className="bg-[#E4B1F0]  text-black text-center p-2 shadow mt-5 font-semibold py-2">
                  The Journal covers following areas of Digital Innovation, Insight, and Information
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-8 py-5">
                  <div className="max-w-full w-full">
                    <div className="flex gap-3 items-center mb-5">
                      <img src="src/assets/Images/Herosection/Innovation.png" alt="" />
                      <p className="text-center  text-xl font-semibold">Digital Innovation</p>
                    </div>











                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8 " src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>    The Role of AI in Digital Transformation</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>  Blockchain Technology and Its Applications</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>   Innovations in Cloud Computing</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>  Digital Twins in Industry 4.0 </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>    The Impact of IoT on Business Models</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>   Emerging Trends in Augmented Reality (AR)</h1>
                    </h1>

                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1> Innovations in FinTech Solutions</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>   The Future of E-Commerce: Trends and Technologies</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>   Smart Cities: The Role of Digital Innovations</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>  Cybersecurity Innovations in a Digital World </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Collaboration Technologies </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Computational Intelligence</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Cyber-Physical Systems</h1>
                    </h1>

                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Cybersecurity</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Data Mining </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Data Science</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Data Warehousing </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Decision Support Systems</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Deep Learning</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Digital Libraries</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Digital Marketing</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Digital Payments</h1>
                    </h1>

                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Digital Supply Chain</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Digital Transformation </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Digital Twins</h1>
                    </h1>

                  </div>
                  <div className="max-w-full w-full">
                    <div className="flex gap-3 items-center mb-5">
                      <img src="src/assets/Images/Herosection/Customer Insight.png" alt="" />
                      <p className="text-center  text-xl font-semibold">Insight and Analytics</p>
                    </div>

                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>E-commerce</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Edge Computing</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Educational Technology</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Enterprise Resource Planning </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Ethical Hacking</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>FinTech</h1>
                    </h1>

                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Green IT </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Health Informatics</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Human-Computer Interaction</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>IT Auditing </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>IT Compliance</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>IT Ethics</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>IT Governance</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>IT Infrastructure</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>IT Innovation</h1>
                    </h1>

                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>IT Lifecycle Management </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>IT Outsourcing</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>IT Performance Measurement </h1>
                    </h1>

                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>IT Project Management</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>IT Risk Management</h1>
                    </h1>

                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>IT Service Management</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>IT Strategy </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Information Systems</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Information Technology </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Innovation Management</h1>
                    </h1>


                  </div>
                  <div className="max-w-full w-full">
                    <div className="flex gap-3 items-center text-xl font-semibold mb-5">
                      <img src="src/assets/Images/Herosection/System Information.png" alt="" />
                      <p className="text-center">Information Technology</p>
                    </div>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Intelligent Systems</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Internet of Things (IoT)</h1>
                    </h1>

                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Knowledge Discovery</h1>
                    </h1>

                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Knowledge Management</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Machine Learning </h1>
                    </h1>

                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Mobile Computing </h1>
                    </h1>

                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Natural Language Processing </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Operations Management</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Predictive Analytics </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Privacy Enhancing Technologies</h1>
                    </h1>

                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Quantum Computing</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Robotics</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Semantic Web</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Smart Cities</h1>
                    </h1>

                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Smart Grids </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Software Engineering </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Software Testing</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Social Media Analytics </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Strategic Management </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Supply Chain Management </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Technology Adoption </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Technology Management </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>User Experience (UX) </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Virtual Reality </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 mb-1">
                      <img className="mt-1 w-8 h-8" src="src/assets/Images/Herosection/arr.png" alt="" />
                      <h1>Visual Computing </h1>
                    </h1>
                  </div>
                </div>
              </div>

              <Sidebar />

            </div>
          </div>

          <h1 className="bg-slate-300 h-[1px] w-full mt-5"></h1>
          {/* </div> */}
        </section>

        <section>
          <div className="max-w-screen-xl mx-auto w-full lg:px-0 px-5 py-5">
            <h1 className="mt-3 text-center">
              We publish original research articles, review articles and
              technical notes. The journal reviews papers within two weeks of
              submission and publishes accepted articles on the internet
              immediately upon receiving the final versions.Our fast reviewing
              process is our strength.
            </h1>

            <h1 className="text-center mt-2">
              Launch of Next Issue: 25<sup>th</sup> Dec 2024
            </h1>
            <h1 className="text-center mt-2 p-2 font-bold">
              Last Date for Submission of Manuscript for next Issue: 18<sup>th</sup> Dec
              2024
            </h1>

            <h1 className="text-center mt-2">With Warm Regards,</h1>
            <h1 className="text-center font-semibold mt-2">Editor-in-chief</h1>
            <h1 className="text-center font-semibold mt-1">IJDIII</h1>
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
