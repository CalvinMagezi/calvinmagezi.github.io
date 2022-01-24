function Portfolio() {
  return (
    <section
      id="projects"
      className="relative w-full px-10 py-16 overflow-hidden dark:bg-[whitesmoke] bg-gray-900"
    >
      <img
        className="absolute left-0 z-0 w-3/4 transform -translate-y-1/2 opacity-70 top-1/2"
        src="https://cdn.devdojo.com/tails/images/gradient-blob.svg"
      />
      <img
        className="absolute left-0 z-0 object-cover object-center w-full h-full opacity-50 top-24"
        src="https://cdn.devdojo.com/tails/images/swirl-white.svg"
      />
      <div className="container relative z-10 px-4 mx-auto">
        <div className="w-full mb-8 sm:w-1/2 md:w-3/4 sm:pr-4 md:pr-12 sm:-mb-32 md:-mb-24 lg:-mb-36 xl:-mb-28">
          <h2 className="tracking-widest uppercase">Projects</h2>
          <p className="my-3 text-5xl font-bold tracking-tighter lg:text-6xl">
            Favorite Works
          </p>
          <p className="max-w-sm text-lg ">
            Check out a few of my favorite projects. A few are clones of famous
            platforms that were just made for fun. Some like Fomoevents are are
            still in development.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <div className="row-span-2 col-span-full sm:col-span-1 md:col-start-1 sm:row-start-2 md:row-start-3">
            <a
              href="https://whatsapp-2-olive.vercel.app"
              target="_blank"
              className="relative flex flex-col items-start justify-end w-full h-full overflow-hidden bg-black shadow-lg rounded-xl group"
              style={{ aspectRatio: "1/1" }}
            >
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute bottom-0 left-0 z-10 w-full h-full opacity-30 bg-gradient-to-b from-transparent to-gray-900"></div>
                <img
                  className="absolute inset-0 object-cover object-center w-full h-full transition duration-500 lg:opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  src="/whatsapp.png"
                  alt=""
                />
              </div>
              <div className="relative z-10 flex flex-col items-start justify-start w-full px-6 py-7">
                <span className="px-2 py-1 mb-3 text-xs font-semibold tracking-tight text-white uppercase bg-indigo-500 rounded-md">
                  Next JS
                </span>
                <h4 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-3xl md:text-2xl lg:text-3xl">
                  Whatsapp Clone
                </h4>
              </div>
            </a>
          </div>
          <div className="row-span-2 col-span-full sm:col-span-1 md:col-start-1 xl:col-start-2 sm:row-start-4 md:row-start-5 xl:row-start-2">
            <a
              href="https://magezi-web.vercel.app/"
              target="_blank"
              className="relative flex flex-col items-start justify-end w-full h-full overflow-hidden bg-black shadow-lg rounded-xl group"
              style={{ aspectRatio: "1/1" }}
            >
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute bottom-0 left-0 z-10 w-full h-full opacity-30 bg-gradient-to-b from-transparent to-gray-900"></div>
                <img
                  className="absolute inset-0 object-cover object-center w-full h-full transition duration-500 lg:opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  src="/google.png"
                  alt=""
                />
              </div>
              <div className="relative z-10 flex flex-col items-start justify-start w-full px-6 py-7">
                <span className="px-2 py-1 mb-3 text-xs font-semibold tracking-tight text-white uppercase bg-indigo-500 rounded-md">
                  Next JS
                </span>
                <h4 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-3xl md:text-2xl lg:text-3xl">
                  Google Clone
                </h4>
              </div>
            </a>
          </div>
          <div className="row-span-2 col-span-full sm:col-span-1 md:col-start-2 xl:col-start-2 sm:row-start-6 md:row-start-2 xl:row-start-4">
            <a
              href="https://fomoevents.vercel.app"
              target="_blank"
              className="relative flex flex-col items-start justify-end w-full h-full overflow-hidden bg-black shadow-lg rounded-xl group"
              style={{ aspectRatio: "1/1" }}
            >
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute bottom-0 left-0 z-10 w-full h-full opacity-30 bg-gradient-to-b from-transparent to-gray-900"></div>
                <img
                  className="absolute inset-0 object-cover object-center w-full h-full transition duration-500 lg:opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  src="/fomoevents.png"
                  alt=""
                />
              </div>
              <div className="relative z-10 flex flex-col items-start justify-start w-full px-6 py-7">
                <span className="px-2 py-1 mb-3 text-xs font-semibold tracking-tight text-white uppercase bg-indigo-500 rounded-md">
                  Next JS
                </span>
                <h4 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-3xl md:text-2xl lg:text-3xl">
                  Fomoevents
                </h4>
              </div>
            </a>
          </div>
          <div className="row-span-2 col-span-full sm:col-span-1 md:col-start-2 xl:col-start-3 sm:row-start-1 md:row-start-4 xl:row-start-1">
            <a
              href="https://tile-market-tau.vercel.app/"
              target="_blank"
              className="relative flex flex-col items-start justify-end w-full h-full overflow-hidden bg-black shadow-lg rounded-xl group"
              style={{ aspectRatio: "1/1" }}
            >
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute bottom-0 left-0 z-10 w-full h-full opacity-30 bg-gradient-to-b from-transparent to-gray-900"></div>
                <img
                  className="absolute inset-0 object-cover object-center w-full h-full transition duration-500 lg:opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  src="/ktm.png"
                  alt=""
                />
              </div>
              <div className="relative z-10 flex flex-col items-start justify-start w-full px-6 py-7">
                <span className="px-2 py-1 mb-3 text-xs font-semibold tracking-tight text-white uppercase bg-indigo-500 rounded-md">
                  Next JS + Laravel
                </span>
                <h4 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-3xl md:text-2xl lg:text-3xl">
                  Tile Market
                </h4>
              </div>
            </a>
          </div>
          <div className="row-span-2 col-span-full sm:col-span-1 md:col-start-3 xl:col-start-3 sm:row-start-3 md:row-start-1 xl:row-start-3">
            <a
              href="https://next-medium.vercel.app/"
              target="_blank"
              className="relative flex flex-col items-start justify-end w-full h-full overflow-hidden bg-black shadow-lg rounded-xl group"
              style={{ aspectRatio: "1/1" }}
            >
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute bottom-0 left-0 z-10 w-full h-full opacity-30 bg-gradient-to-b from-transparent to-gray-900"></div>
                <img
                  className="absolute inset-0 object-cover object-center w-full h-full transition duration-500 lg:opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  src="/medium.png"
                  alt=""
                />
              </div>
              <div className="relative z-10 flex flex-col items-start justify-start w-full px-6 py-7">
                <span className="px-2 py-1 mb-3 text-xs font-semibold tracking-tight text-white uppercase bg-indigo-500 rounded-md">
                  Next JS + Sanity
                </span>
                <h4 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-3xl md:text-2xl lg:text-3xl">
                  Medium Clone
                </h4>
              </div>
            </a>
          </div>
          <div className="row-span-2 col-span-full sm:col-span-1 md:col-start-3 xl:col-start-4 sm:row-start-5 md:row-start-3 xl:row-start-2">
            <a
              href="https://mkozi-edge.vercel.app/"
              target="_blank"
              className="relative flex flex-col items-start justify-end w-full h-full overflow-hidden bg-black shadow-lg rounded-xl group"
              style={{ aspectRatio: "1/1" }}
            >
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute bottom-0 left-0 z-10 w-full h-full bg-gradient-to-b from-transparent to-gray-900 opacity-30"></div>
                <img
                  className="absolute inset-0 object-cover object-center w-full h-full transition duration-500 lg:opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  src="/mkozi.png"
                  alt=""
                />
              </div>
              <div className="relative z-10 flex flex-col items-start justify-start w-full px-6 py-7">
                <span className="px-2 py-1 mb-3 text-xs font-semibold tracking-tight text-white uppercase bg-indigo-500 rounded-md">
                  Next JS + Laravel
                </span>
                <h4 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-3xl md:text-2xl lg:text-3xl">
                  Mkozi
                </h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
