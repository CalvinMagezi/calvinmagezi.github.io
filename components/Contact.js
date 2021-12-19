function Contact() {
  return (
    <div className="py-10  md:py-16">
      <div className="px-10 mx-auto max-w-7xl md:px-16">
        <div className="max-w-3xl mx-auto mb-10 md:mb-16">
          <p className="text-xs font-bold text-blue-500 uppercase">
            Contact Me
          </p>
          <h2 className="mt-1 text-2xl font-bold text-left lg:text-3xl md:mt-2">
            Need to ask us a question?
          </h2>
        </div>
        <form className="grid max-w-3xl gap-4 mx-auto sm:grid-cols-2">
          <div>
            <label
              for="first-name"
              className="inline-block mb-2 text-sm font-medium  sm:text-base"
            >
              Name
            </label>
            <input
              name="first-name"
              className="w-full px-3 py-2 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
            />
          </div>

          <div>
            <label
              for="last-name"
              className="inline-block mb-2 text-sm font-medium  sm:text-base"
            >
              Email
            </label>
            <input
              name="last-name"
              className="w-full px-3 py-2 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              for="subject"
              className="inline-block mb-2 text-sm font-medium  sm:text-base"
            >
              Subject
            </label>
            <input
              name="subject"
              className="w-full px-3 py-2 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              for="message"
              className="inline-block mb-2 text-sm font-medium  sm:text-base"
            >
              Message
            </label>
            <textarea
              name="message"
              className="w-full h-64 px-3 py-2 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
            ></textarea>
          </div>

          <div className="flex items-center justify-between sm:col-span-2">
            <button className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-blue-600 rounded-md outline-none hover:bg-blue-500 active:bg-blue-700 ring-blue-300 md:text-base">
              Send Message
            </button>
          </div>
        </form>
        <p className="max-w-3xl mx-auto mt-5 text-xs text-gray-400">
          Please allow up to 12-16 hour response during the weekends.
        </p>
      </div>
    </div>
  );
}

export default Contact;
