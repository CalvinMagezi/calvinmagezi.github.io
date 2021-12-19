import CountUp from "react-countup";
import { FaFile, FaLaptop, FaSmile, FaUserPlus } from "react-icons/fa";

function Facts() {
  return (
    <div className=" w-full dark:bg-[whitesmoke] bg-gray-900 text-white dark:text-indigo-800">
      <h1 className="text-4xl font-bold pl-5 pb-2 underline">Facts</h1>

      <div className="grid lg:grid-cols-4 grid-cols-1 items-center justify-between px-5 py-5">
        <div className="flex items-center">
          <div>
            <FaSmile className="text-5xl text-yellow-400 mr-5 dark:text-indigo-800" />
          </div>
          <div>
            <CountUp
              className="text-3xl text-yellow-400 dark:text-indigo-800"
              start={0}
              end={100}
              duration={5}
            />
            +<h1>Happy Clients</h1>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <FaFile className="text-5xl text-yellow-400 mr-5 dark:text-indigo-800" />
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
            <FaLaptop className="text-5xl text-yellow-400 mr-5 dark:text-indigo-800" />
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
            <FaUserPlus className="text-5xl text-yellow-400 mr-5 dark:text-indigo-800" />
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
