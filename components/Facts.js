import CountUp from "react-countup";
import { FaFile, FaLaptop, FaSmile, FaUserPlus } from "react-icons/fa";

function Facts() {
  return (
    <div className=" w-full dark:bg-[whitesmoke] bg-gray-900 text-white dark:text-indigo-800">
      <h1 className="pb-2 pl-5 text-4xl font-bold underline">Facts</h1>

      <div className="grid items-center justify-between grid-cols-1 px-5 py-5 lg:grid-cols-4">
        <div className="flex items-center">
          <div>
            <FaSmile className="mr-5 text-5xl text-yellow-400 dark:text-indigo-800" />
          </div>
          <div>
            <CountUp
              className="text-3xl text-yellow-400 dark:text-indigo-800"
              start={0}
              end={32}
              duration={5}
            />
            +<h1>Happy Clients</h1>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <FaFile className="mr-5 text-5xl text-yellow-400 dark:text-indigo-800" />
          </div>
          <div>
            <CountUp
              className="text-3xl text-yellow-400 dark:text-indigo-800"
              start={0}
              end={75}
              duration={5}
            />
            +<h1>Projects</h1>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <FaLaptop className="mr-5 text-5xl text-yellow-400 dark:text-indigo-800" />
          </div>
          <div>
            <CountUp
              className="text-3xl text-yellow-400 dark:text-indigo-800"
              start={0}
              end={10000}
              duration={5}
            />
            +<h1>Hours of Coding</h1>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <FaUserPlus className="mr-5 text-5xl text-yellow-400 dark:text-indigo-800" />
          </div>
          <div>
            <CountUp
              className="text-3xl text-yellow-400 dark:text-indigo-800"
              start={0}
              end={3}
              duration={5}
            />
            <h1>Teams Leading</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facts;
