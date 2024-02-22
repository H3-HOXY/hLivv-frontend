const Footer = () => {
  return (
    <footer className="Footer flex flex-col items-center bg-neutral-900 text-center text-white">
      <div className="container px-6 pt-6">
        {/* Social media icons container */}
        <div className="mb-6 flex justify-center">
          {/* Social media icons (You can customize the links and icons) */}
          <a href="#!" className="social-icon"> {/* Add your link */}
            <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
              {/* Add your SVG path */}
            </svg>
          </a>
          {/* Add more social media icons as needed */}
        </div>

        {/* Newsletter sign-up form */}
        <div>
          <form action="">
            <div className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
              <div className="md:mb-6 md:ml-auto">
                <p>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              {/* Newsletter sign-up input field */}
              <div className="relative md:mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] text-neutral-200 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 [...]"
                  id="exampleFormControlInput1"
                  placeholder="Email address"
                />
                <label
                  htmlFor="exampleFormControlInput1"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-200 transition-all duration-200 ease-out [...]"
                >
                  Email address
                </label>
              </div>

              {/* Newsletter sign-up submit button */}
              <div className="mb-6 md:mr-auto">
                <button
                  type="submit"
                  className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:text-neutral-100 [...]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Copyright information */}
        <div className="mb-6">
          <p>
            {/* Add your copyright information */}
          </p>
        </div>

        {/* Links section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {/* Add your links here */}
        </div>
      </div>

      {/* Copyright section */}
      <div
        className="w-full p-4 text-center"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2023 Copyright:
        <a className="text-white" href="https://tw-elements.com/">
          TW elements
        </a>
      </div>
    </footer>
  );
}

export default Footer;