import Image from 'next/image';
import { ProjectType } from '@/typings';

interface PortfolioProps {
  projects: ProjectType[];
}

const layoutClasses = [
  "row-span-2 col-span-full sm:col-span-1 md:col-start-1 sm:row-start-2 md:row-start-3",
  "row-span-2 col-span-full sm:col-span-1 md:col-start-1 xl:col-start-2 sm:row-start-4 md:row-start-5 xl:row-start-2",
  "row-span-2 col-span-full sm:col-span-1 md:col-start-2 xl:col-start-2 sm:row-start-6 md:row-start-2 xl:row-start-4",
  "row-span-2 col-span-full sm:col-span-1 md:col-start-2 xl:col-start-3 sm:row-start-1 md:row-start-4 xl:row-start-1",
  "row-span-2 col-span-full sm:col-span-1 md:col-start-3 xl:col-start-3 sm:row-start-3 md:row-start-1 xl:row-start-3",
  "row-span-2 col-span-full sm:col-span-1 md:col-start-3 xl:col-start-4 sm:row-start-5 md:row-start-3 xl:row-start-2",
];

function Portfolio({ projects }: PortfolioProps) {
  return (
    <section
      id="projects"
      className="relative w-full px-10 py-16 overflow-hidden"
    >
      <Image
        className="absolute left-0 z-0 w-3/4 transform -translate-y-1/2 opacity-70 top-1/2"
        src="https://cdn.devdojo.com/tails/images/gradient-blob.svg"
        width={800}
        height={600}
        alt="Background gradient blob"
      />
      <Image
        className="absolute left-0 z-0 object-cover object-center w-full h-full opacity-50 top-24"
        src="https://cdn.devdojo.com/tails/images/swirl-white.svg"
        width={1200}
        height={800}
        alt="Background swirl pattern"
      />
      <div className="container relative z-10 px-4 mx-auto">
        <div className="w-full mb-8 sm:w-1/2 md:w-3/4 sm:pr-4 md:pr-12 sm:-mb-32 md:-mb-24 lg:-mb-36 xl:-mb-28">
          <h2 className="font-jetbrains text-xs text-[var(--nexus-cyan)] uppercase tracking-widest mb-4">Projects</h2>
          <p className="font-outfit text-5xl font-bold tracking-tighter lg:text-6xl text-[var(--nexus-cream)] my-3">
            Favorite Works
          </p>
          <p className="font-jakarta text-lg text-[var(--nexus-cream)]/60 max-w-sm">
            Check out a few of my favorite projects. A few are clones of famous
            platforms that were just made for fun. Some like Fomoevents are
            still in development.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {projects?.map((project, index) => (
            <div
              key={project.id}
              className={layoutClasses[index % layoutClasses.length]}
            >
              <a
                href={project.linkToDemo || project.linkToRepo || "#"}
                target="_blank"
                rel="noreferrer"
                className="relative flex flex-col items-start justify-end w-full h-full overflow-hidden bg-black shadow-lg rounded-xl group"
                style={{ aspectRatio: "1/1" }}
              >
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute bottom-0 left-0 z-10 w-full h-full opacity-30 bg-gradient-to-b from-transparent to-gray-900"></div>
                  {project.banner?.url && (
                    <Image
                      className="absolute inset-0 object-cover object-center w-full h-full transition duration-500 lg:opacity-80 group-hover:opacity-100 group-hover:scale-110"
                      src={project.banner.url}
                      width={400}
                      height={400}
                      alt={`${project.title} project screenshot`}
                    />
                  )}
                </div>
                <div className="relative z-10 flex flex-col items-start justify-start w-full px-6 py-7">
                  <span className="px-2 py-1 mb-3 text-xs font-semibold tracking-tight text-white uppercase bg-indigo-500 rounded-md">
                    {project.technologies?.slice(0, 3).join(" + ")}
                  </span>
                  <h4 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-3xl md:text-2xl lg:text-3xl">
                    {project.title}
                  </h4>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
