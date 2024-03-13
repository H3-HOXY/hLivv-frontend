/**
 * @since 
 * @author 최정윤
 */

const Footer = () => {
  return (
    <footer className="Footer flex flex-col items-center bg-neutral-900 text-center text-white">
      <div className="container px-6 pt-6">
        <div className="mb-6 flex justify-center">
          <a href="#!" className="social-icon">
            <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
            </svg>
          </a>
        </div>

        <div>
          <form action="">
            <div className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
              <div className="md:mb-6 md:ml-auto">
                <p>
                  <strong>고객센터 1577-3332 (유료)</strong>
                </p>
              </div>

              <div className="relative md:mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] text-neutral-200 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 [...]"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
                <label
                  htmlFor="exampleFormControlInput1"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-200 transition-all duration-200 ease-out [...]"
                >
                  T. 제휴/대리점 개설문의 02-3480-8000 | F. 02-6442-8081 | M. livartcs@hyundailivart.co.kr
                </label>
              </div>

              <div className="mb-6 md:mr-auto">
                <button
                  type="submit"
                  className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:text-neutral-100 [...]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  H.Livv
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="mb-6">
          <p>
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
        </div>
      </div>

      <div
        className="w-full p-4 text-center"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        Copyrightⓒ HYUNDAI H.Livv Corporation.
        <a className="text-white" href="https://tw-elements.com/">
          All Rights Reserved.
        </a>
      </div>
    </footer>
  );
}

export default Footer;