// Contact.jsx

const Contact = () => {
  return (
    <>
      <div className="container mx-auto w-full bg-gray-200">
        <div className="mx-auto max-w-full">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
          <img
              alt="Contact us"
              className="hidden max-h-full w-full rounded-sm object-cover lg:block"
              src="/frames/me1.jpg"
            />
            {/* contact from */}
            <div className="flex items-center justify-center py-8">
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold text-gray-900 md:text-4xl">Get in touch</p>
                <p className="mt-4 text-lg text-gray-600">
                  I would love to hear your friendly suggestions...
                </p>
                <form action="" className="mt-8 space-y-4">
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="first_name"
                      >
                        First Name
                      </label>
                      <input
                        className="flex h-10 w-full px-3 py-2 rounded-sm border text-sm placeholder:text-gray-400 focus:outline-none"
                        type="text"
                        id="first_name"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="last_name"
                      >
                        Last Name
                      </label>
                      <input
                        className="flex h-10 w-full px-3 py-2 rounded-sm border text-sm placeholder:text-gray-400 focus:outline-none"
                        type="text"
                        id="last_name"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full px-3 py-2 rounded-sm border text-sm placeholder:text-gray-400 focus:outline-none"
                      type="text"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <input
                      className="flex h-10 w-full px-3 py-2 rounded-sm border text-sm placeholder:text-gray-400 focus:outline-none"
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="flex w-full px-3 py-2 rounded-sm text-sm placeholder:text-gray-400 focus:outline-none"
                      id="message"
                      placeholder="Leave a message here..."
                      required
                      cols={3}
                      rows={5}
                    />
                    {/* <textarea
                      className="flex w-full rounded-sm p-2"
                      id="message"
                      placeholder="Leave a message here..."
                      cols={3}
                      rows={5}
                    /> */}
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-sm bg-black px-3 py-2 text-sm font-bold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;