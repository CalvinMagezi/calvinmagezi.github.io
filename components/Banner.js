import { useRecoilState } from "recoil";
import { navbarState } from "../atoms/navbarAtom";

function Banner() {
  const [open, setOpen] = useRecoilState(navbarState);

  return (
    <section
      id="landing"
      className="flex flex-col justify-center w-full h-screen items-left"
      style={{
        backgroundImage: "url(" + "/profile2.jpeg" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`absolute h-screen bg-black bg-opacity-30 ${
          open ? "w-64" : "w-screen"
        }`}
      ></div>
      <h1 className="z-10 pl-10 text-5xl font-bold text-white">
        Calvin Magezi
      </h1>
      <p className="z-10 pt-5 pl-10 text-xl font-bold text-white">
        The Sky Is <strong>Not</strong> The Limit
      </p>
    </section>
  );
}

export default Banner;
