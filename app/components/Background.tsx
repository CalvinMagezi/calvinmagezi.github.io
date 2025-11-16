function Background() {
  return (
    <section className="w-full px-8 pt-20 pb-16 xl:px-0">
      <div className="flex flex-col items-start max-w-6xl mx-auto md:flex-row">
        <h3 className="w-full text-4xl font-extrabold tracking-normal sm:text-5xl md:text-5xl md:pr-10 lg:pr-16 xl:pr-20 md:leading-none md:-mt-2 md:w-1/2">
          Tech leader, father of three, and proudly African. Building the future 
          through innovative technology solutions.
        </h3>
        <div className="flex flex-col w-full mt-8 space-y-5 md:w-1/2 md:space-y-10 md:mt-0">
          <ul className="flex flex-col">
            <li>
              <strong>Birthday</strong>: 28 April 1997
            </li>
            <li>
              <strong>Phone</strong>: <a href="tel:+256770773552" className="text-blue-400 hover:text-blue-300">+256770773552</a>
            </li>
            <li>
              <strong>City</strong>: Kampala, Uganda
            </li>
            <li>
              <strong>Email</strong>: <a href="mailto:calvin.m.magezi@gmail.com" className="text-blue-400 hover:text-blue-300">calvin.m.magezi@gmail.com</a>
            </li>
            <li>
              <strong>Current Title</strong>: CTO at Kolaborate & Co-founder/CTO at SiteSeer
            </li>
          </ul>

          <p className="col-span-6 text-base font-normal lg:leading-8 xl:leading-9 md:text-xl">
            As CTO at Kolaborate, I lead technology strategy for connecting African 
            tech professionals with global opportunities and supporting refugee employment 
            programs. At SiteSeer, I co-founded an AI-powered construction management platform 
            transforming Africa&apos;s $71.5B construction market. I&apos;m also passionate about 
            social impact through tech, having created the &quot;Elevating Women With Tech&quot; 
            program and spoken to refugee students. Married to Mariannah and father to 
            twins Lucah & Zion (2023) and daughter Nova (2025).
          </p>
        </div>
      </div>
    </section>
  );
}

export default Background;