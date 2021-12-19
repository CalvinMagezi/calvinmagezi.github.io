function Banner() {
  return (
    <section
      id="landing"
      className="w-full h-screen flex flex-col justify-center items-left"
      style={{
        backgroundImage: "url(" + "/profile2.jpeg" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-screen h-screen bg-black bg-opacity-30 absolute"></div>
      <h1 className="text-white font-bold text-5xl pl-10 z-10">
        Calvin Magezi
      </h1>
      <p className="text-white font-bold text-xl pl-10 z-10 pt-5">
        The Sky Is <strong>Not</strong> The Limit
      </p>
    </section>
  );
}

export default Banner;
