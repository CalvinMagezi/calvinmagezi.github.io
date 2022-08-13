import Image from "next/image";

function Resume() {
  return (
    <section id="resume">
      <div className="py-8 ">
        <div className="container flex flex-col items-start mx-auto md:flex-row ">
          <div className="sticky flex flex-col w-full px-8 mt-2 md:top-36 lg:w-1/3 ">
            <p className="ml-2 text-[#FFC100] uppercase tracking-loose">
              Summary
            </p>
            <p className="mb-2 text-3xl leading-normal md:text-4xl md:leading-relaxed">
              Calvin Magezi
            </p>
            <p className="mb-4 text-sm md:text-base">
              Innovative and driven Software Developer with 5+ years of
              designing websites and applications. CEO, Founder and Lead
              Developer at MTS.
            </p>
            <ul className="flex flex-col space-y-2">
              <li>Plot 83 Princess Bagaya Close,Hoima, Uganda</li>
              <li>+256 770-773-552</li>
              <li>calvin@magezi.tech</li>
            </ul>
            <a
              href="https://magezi-tech.vercel.app"
              target="_blank"
              className="bg-transparent mt-5 mr-auto hover:bg-[#FFC100] text-[#FFC100] hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-[#FFC100] hover:border-transparent"
            >
              <Image src="/logo-18.png" width="150" height="60" />
            </a>
          </div>
          <div className="sticky ml-0 md:ml-12 lg:w-2/3">
            <div className="container w-full h-full mx-auto">
              <div className="relative h-full p-10 overflow-hidden wrap">
                <div
                  className="absolute h-full border border-2-2 border-yellow-555"
                  style={{
                    right: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  className="absolute h-full border border-2-2 border-yellow-555"
                  style={{
                    left: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-[#FFC100]">2011-2015</p>
                    <h4 className="mb-3 text-lg font-bold md:text-2xl">
                      Brookhouse International Schools Kenya
                    </h4>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base">
                      At Brookhouse I participated in the Round Square
                      International Conference in Jordan, Harvard People to
                      People conference in Boston and captained the Rugby,
                      Hockey and Basketball teams.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full mb-8 right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-[#FFC100]">2015 - 2016</p>
                    <h4 className="mb-3 text-lg font-bold md:text-2xl">
                      Segi University, Malaysia
                    </h4>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base">
                      I undertook a 9 month Pre-medicine course, but soon found
                      out that medicine was not my calling so I turned towards
                      Software Development
                    </p>
                  </div>
                </div>
                <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-[#FFC100]">2017 - 2020</p>
                    <h4 className="mb-3 text-lg font-bold md:text-2xl">
                      Nelson Mandela University, Port Elizabeth
                    </h4>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base">
                      I completed my first working web application in my first
                      year of university. I studied databases and algorithms,
                      programming in C#. I was mentored by Tolu Kush, a software
                      developer in the UK. I built and published 7 websites in
                      my 3rd year of university. I dropped out before my final
                      year of university.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full mb-8 right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1 w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-[#FFC100]">2020 - 2021</p>
                    <h4 className="mb-3 text-lg font-bold text-left md:text-2xl">
                      FREELANCE DEVELOPER
                    </h4>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base">
                      I developed and designed the Yesero Mugenyi Foundation
                      Website, managed up to 5 projects and tasks at a given
                      time while under pressure. I was recommended by and
                      consulted with clients on the most appropriate software
                      for their company. I created 4+ software designs and
                      proposals a month for clients for 4 consecutive 3
                      consecutive months.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row-reverse items-center justify-between w-full mb-24 left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-[#FFC100]">2021</p>
                    <h4 className="mb-3 text-lg font-bold md:text-2xl">
                      LEAD DEVELOPER AT MSIMBO IT
                    </h4>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base">
                      Assisted in the development of The Big Quiz Show Kenya. A
                      live quiz engine that ran on KTN for 7 weeks. Lead
                      developer in the development of Bidleo and Bidchapchap,
                      online reverse auction platforms. Lead development on
                      Captains Terrace Point of Sales System. Assisted in the
                      development of Supamall, Escrow and other projects Msimbo
                      IT is developing.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full mb-8 right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1 w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-[#FFC100]">
                      September 2021
                    </p>
                    <h4 className="mb-3 text-lg font-bold text-left md:text-2xl">
                      FOUNDED MTS
                    </h4>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base">
                      In September of 2021 I decided that I was ready to try
                      take on the challenge of running my own company. So I
                      founded MTS and put together a team of like minded
                      individuals who are looking to create unique solutions and
                      grow a network large enough to serve as a purpose for the
                      smart city my family is building.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row-reverse items-center justify-between w-full mb-24 left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-[#FFC100]">
                      December 2021
                    </p>
                    <h4 className="mb-3 text-lg font-bold md:text-2xl">
                      MOVED TO DUBAI
                    </h4>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base">
                      In December 2021 I relocated myself from Nairobi to Dubai.
                      The trip was initially set to find an investor for one of
                      our products that was coming up, but due to lack of
                      interest by the investor, I ended up changing plans and
                      instead remained in Dubai to seek further connections and
                      start a life with my beautiful girlfriend Mariannah Hiuhu.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full mb-8 right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1 w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-[#FFC100]">
                      February 2022
                    </p>
                    <h4 className="mb-3 text-lg font-bold text-left md:text-2xl">
                      APPOINTED CTO OF EPITOME CONCIERGE KAMPALA
                    </h4>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base">
                      I had been working with the epitome concierge kampala for
                      some time, and due to the value I brought to the table I
                      was offered shares in the company that I enthusiastically
                      took up along with the title of CTO. The co-founder Joel
                      Sengendo is a good friend of mine which had me even more
                      excited to embark on this journey
                    </p>
                  </div>
                </div>

                <div className="flex flex-row-reverse items-center justify-between w-full mb-24 left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-[#FFC100]">June 2022</p>
                    <h4 className="mb-3 text-lg font-bold md:text-2xl">
                      CO FOUNDED FLYKEY
                    </h4>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base">
                      In June of 2022, me alongside 3 other individuals founded
                      a drone technology solutions company known as Flykey.
                      Flykey is focussed mainly on drone solutions within the
                      agricultural sector, however we do venture into fields
                      such as security and surveillance.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full mb-8 right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1 w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-[#FFC100]">August 2022</p>
                    <h4 className="mb-3 text-lg font-bold text-left md:text-2xl">
                      APPOINTED HEAD OF TECHNOLOGY AT WALL BRICK REAL ESTATE
                    </h4>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base">
                      In August 2022 I was appointed the head of technology and
                      digital marketing at wall brick real estate, a real estate
                      company based and operating within Dubai. I was given the
                      duties of designing and maintaining systems that would aid
                      the real estate company, including their web application.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
