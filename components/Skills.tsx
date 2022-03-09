import ProgressBar from "./utils/ProgressBar";

function Skills() {
  return (
    <section id="skills" className="w-full px-4 ">
      <h1 className="pb-2 pl-5 text-4xl font-bold underline">Skills</h1>
      <p className="p-3">
        I'm constantly learning new languages and technologies as we transition
        into the Web 3.0 Error. I've recently begun working with blockchain
        development using Moralis. I currently specialize in using React JS with
        Tailwind CSS for frontend projects such as this website, coupled with a
        Laravel or Node Backend when necessary.
      </p>
      <div className="grid w-full grid-cols-1 gap-2 px-3 py-3 md:grid-cols-2">
        <div>
          <h1>HTML</h1>
          <ProgressBar progressPercentage="95" />
        </div>
        <div>
          <h1>CSS</h1>
          <ProgressBar progressPercentage="90" />
        </div>
        <div>
          <h1>Javascript</h1>
          <ProgressBar progressPercentage="85" />
        </div>
        <div>
          <h1>JQuery</h1>
          <ProgressBar progressPercentage="80" />
        </div>
        <div>
          <h1>PHP</h1>
          <ProgressBar progressPercentage="70" />
        </div>
        <div>
          <h1>Laravel</h1>
          <ProgressBar progressPercentage="85" />
        </div>
        <div>
          <h1>Livewire</h1>
          <ProgressBar progressPercentage="90" />
        </div>
        <div>
          <h1>Alpine JS</h1>
          <ProgressBar progressPercentage="90" />
        </div>
        <div>
          <h1>Node</h1>
          <ProgressBar progressPercentage="65" />
        </div>
        <div>
          <h1>React JS</h1>
          <ProgressBar progressPercentage="80" />
        </div>
        <div>
          <h1>Next JS</h1>
          <ProgressBar progressPercentage="90" />
        </div>
        <div>
          <h1>React Native</h1>
          <ProgressBar progressPercentage="65" />
        </div>
        <div>
          <h1>Wordpress</h1>
          <ProgressBar progressPercentage="60" />
        </div>
        <div>
          <h1>Figma</h1>
          <ProgressBar progressPercentage="80" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
