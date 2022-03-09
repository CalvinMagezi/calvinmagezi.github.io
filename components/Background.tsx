function Background() {
  return (
    <section className="w-full px-8 pt-20 pb-16 xl:px-0">
      <div className="flex flex-col items-start max-w-6xl mx-auto md:flex-row">
        <h3 className="w-full text-4xl font-extrabold tracking-normal sm:text-5xl md:text-5xl md:pr-10 lg:pr-16 xl:pr-20 md:leading-none md:-mt-2 md:w-1/2">
          Born in Uganda, raised in South Africa. Proudly African and here to
          make a difference.
        </h3>
        <div className="flex flex-col w-full mt-8 space-y-5 md:w-1/2 md:space-y-10 md:mt-0">
          <ul className="flex flex-col">
            <li>
              <strong>Birthday</strong>: 28 April 1997
            </li>
            <li>
              <strong>Phone</strong>: +256770773552
            </li>
            <li>
              <strong>City</strong>: Kampala, Uganda / Nairobi, Kenya
            </li>
            <li>
              <strong>Age</strong>: 24
            </li>
            <li>
              <strong>Email</strong>: calvinmagezi@ymail.com
            </li>
            <li>
              <strong>Current Title</strong>: CEO and Lead Developer
            </li>
          </ul>

          <p className="col-span-6 text-base font-normal lg:leading-8 xl:leading-9 md:text-xl">
            Other than software development, I'm also an agriculturalist looking
            to develop Uganda's agricultural sector through precision farming
            and other technological solutions. I'm the senior software developer
            of the Yesero Mugeyi Foundation, which is working towards building a
            Satellite Town on 2 square miles of land around Kikwite Hill, Hoima
            Uganda find out more here.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Background;
