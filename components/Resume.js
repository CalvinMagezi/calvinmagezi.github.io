function Resume() {
  return (
    <section id="resume">
      <div className="dark:bg-[whitesmoke] bg-gray-900 text-white dark:text-indigo-800 py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-indigo-800 uppercase tracking-loose">
              Summary
            </p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
              Calvin Magezi
            </p>
            <p className="text-sm md:text-base  mb-4">
              Innovative and driven Software Developer with 5+ years of
              designing websites and applications. CEO, Founder and Lead
              Developer at Magezi Tech Solutions.
            </p>
            <ul>
              <li>Plot 83 Princess Bagaya Close,Hoima, Uganda</li>
              <li>+256 770-773-552</li>
              <li>calvin@magezi.tech</li>
            </ul>
            <a
              href="https://magezi-tech.vercel.app"
              target="_blank"
              className="bg-transparent mr-auto hover:bg-indigo-800 text-indigo-800 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-indigo-800 hover:border-transparent"
            >
              Magezi Tech Solutions
            </a>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{
                    right: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{
                    left: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-indigo-800">2011-2015</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Brookhouse International Schools Kenya
                    </h4>
                    <p className="text-sm md:text-base leading-snug  text-opacity-100">
                      At Brookhouse I participated in the Round Square
                      International Conference in Jordan, Harvard People to
                      People conference in Boston and captained the Rugby,
                      Hockey and Basketball teams.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-indigo-800">
                      2015 - 2016
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Segi University, Malaysia
                    </h4>
                    <p className="text-sm md:text-base leading-snug  text-opacity-100">
                      I undertook a 9 month Pre-medicine course, but soon found
                      out that medicine was not my calling so I turned towards
                      Software Development
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-indigo-800">
                      2017 - 2020
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Nelson Mandela University, Port Elizabeth
                    </h4>
                    <p className="text-sm md:text-base leading-snug  text-opacity-100">
                      I completed my first working web application in my first
                      year of university. I studied databases and algorithms,
                      programming in C#. I was mentored by Tolu Kush, a software
                      developer in the UK. I built and published 7 websites in
                      my 3rd year of university. I dropped out before my final
                      year of university.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-indigo-800">
                      2020 - 2021
                    </p>
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                      FREELANCE DEVELOPER
                    </h4>
                    <p className="text-sm md:text-base leading-snug  text-opacity-100">
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

                <div className="mb-24 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-indigo-800">2021</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      LEAD DEVELOPER AT MSIMBO IT
                    </h4>
                    <p className="text-sm md:text-base leading-snug  text-opacity-100">
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
