import { atom, useAtom } from "jotai";
import { navList } from "../../utils/data";

const isOpenAtom = atom<boolean>(false);
const activeLinkAtom = atom<string>("");

const Navbar = () => {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);
  const [activeLink, setActiveLink] = useAtom(activeLinkAtom);

  const backToTop = (height: number) => {
    window.scrollTo({ top: height, left: 0, behavior: "smooth" });
    setActiveLink("");
  };

  return (
    <header className="fixed top-3 z-10 flex w-full items-center justify-center px-5">
      <nav className="w-full max-w-6xl items-center justify-center rounded-md bg-white/70 p-5 shadow-lg backdrop-blur-lg backdrop-filter">
        <div className="hidden w-full items-center justify-between md:flex">
          <button
            onClick={() => backToTop(0)}
            className="flex cursor-pointer items-center justify-center space-x-3"
          >
            <img src="/img/logo.svg" alt="Zeitplan Logo" />
            <p className="text-lg font-semibold uppercase tracking-wider">Zeitplan</p>
          </button>
          <div>
            <ul className="flex items-center justify-center space-x-10 font-sanspro text-lg font-semibold text-black/50">
              <li>
                <button
                  onClick={() => backToTop(0)}
                  className={`${activeLink === "" ? "font-bold text-primary" : ""} cursor-pointer`}
                >
                  Home
                </button>
              </li>
              {navList.map((item, index) => (
                <li key={index + 1}>
                  <a
                    onClick={() => setActiveLink(item.href)}
                    href={item.href}
                    className={`${activeLink === item.href ? "font-bold text-primary" : ""}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#download">
                  <button
                    onClick={() => setActiveLink("#download")}
                    className="btn-hover flex items-center justify-center gap-2 rounded-[0.250rem] bg-primary px-4 py-1 text-white drop-shadow-lg hover:bg-orange-600"
                  >
                    Download
                    <svg
                      width="14"
                      height="12"
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.16665 6.83334H11.05L8.02498 10.4667C7.95494 10.5509 7.90219 10.6482 7.86973 10.7528C7.83727 10.8575 7.82574 10.9675 7.83579 11.0766C7.85611 11.297 7.96313 11.5002 8.13331 11.6417C8.30349 11.7831 8.52289 11.8512 8.74325 11.8309C8.9636 11.8105 9.16686 11.7035 9.30831 11.5333L13.475 6.53334C13.503 6.49357 13.5281 6.45179 13.55 6.40834C13.55 6.36667 13.5916 6.34167 13.6083 6.30001C13.6461 6.20446 13.6659 6.10275 13.6666 6.00001C13.6659 5.89727 13.6461 5.79556 13.6083 5.70001C13.6083 5.65834 13.5666 5.63334 13.55 5.59167C13.5281 5.54822 13.503 5.50644 13.475 5.46667L9.30831 0.466673C9.22996 0.372605 9.13184 0.296954 9.02094 0.245104C8.91004 0.193253 8.78907 0.166475 8.66665 0.166673C8.47193 0.166293 8.28324 0.234106 8.13331 0.35834C8.04893 0.428298 7.97918 0.514215 7.92805 0.611171C7.87693 0.708127 7.84543 0.814217 7.83536 0.923364C7.8253 1.03251 7.83687 1.14257 7.86941 1.24724C7.90194 1.35191 7.95481 1.44913 8.02498 1.53334L11.05 5.16667H1.16665C0.945633 5.16667 0.733671 5.25447 0.577391 5.41075C0.421111 5.56703 0.333313 5.77899 0.333313 6.00001C0.333313 6.22102 0.421111 6.43298 0.577391 6.58926C0.733671 6.74554 0.945633 6.83334 1.16665 6.83334Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-full items-center justify-between md:hidden">
          <button
            onClick={() => backToTop(0)}
            className="flex items-center justify-center space-x-3 text-lg font-semibold uppercase tracking-wider"
          >
            <img src="/img/logo.svg" alt="Zeitplan Logo" />
            <p>Zeitplan</p>
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        {isOpen ? (
          <div className="mt-4 md:hidden">
            <ul className="flex flex-col items-start justify-center gap-4 font-sanspro text-lg font-semibold text-black/50">
              <li>
                <button
                  onClick={() => backToTop(0)}
                  className={`${activeLink === "" ? "font-bold text-primary" : ""} cursor-pointer`}
                >
                  Home
                </button>
              </li>
              {navList.map((item, index) => (
                <li key={index + 1}>
                  <a
                    onClick={() => setActiveLink(item.href)}
                    href={item.href}
                    className={`${activeLink === item.href ? "font-bold text-primary" : ""}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#download">
                  <button
                    onClick={() => setActiveLink("#download")}
                    className="flex items-center justify-center gap-2 rounded-[0.250rem] bg-primary px-4 py-1 text-white"
                  >
                    Download
                    <svg
                      width="14"
                      height="12"
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.16665 6.83334H11.05L8.02498 10.4667C7.95494 10.5509 7.90219 10.6482 7.86973 10.7528C7.83727 10.8575 7.82574 10.9675 7.83579 11.0766C7.85611 11.297 7.96313 11.5002 8.13331 11.6417C8.30349 11.7831 8.52289 11.8512 8.74325 11.8309C8.9636 11.8105 9.16686 11.7035 9.30831 11.5333L13.475 6.53334C13.503 6.49357 13.5281 6.45179 13.55 6.40834C13.55 6.36667 13.5916 6.34167 13.6083 6.30001C13.6461 6.20446 13.6659 6.10275 13.6666 6.00001C13.6659 5.89727 13.6461 5.79556 13.6083 5.70001C13.6083 5.65834 13.5666 5.63334 13.55 5.59167C13.5281 5.54822 13.503 5.50644 13.475 5.46667L9.30831 0.466673C9.22996 0.372605 9.13184 0.296954 9.02094 0.245104C8.91004 0.193253 8.78907 0.166475 8.66665 0.166673C8.47193 0.166293 8.28324 0.234106 8.13331 0.35834C8.04893 0.428298 7.97918 0.514215 7.92805 0.611171C7.87693 0.708127 7.84543 0.814217 7.83536 0.923364C7.8253 1.03251 7.83687 1.14257 7.86941 1.24724C7.90194 1.35191 7.95481 1.44913 8.02498 1.53334L11.05 5.16667H1.16665C0.945633 5.16667 0.733671 5.25447 0.577391 5.41075C0.421111 5.56703 0.333313 5.77899 0.333313 6.00001C0.333313 6.22102 0.421111 6.43298 0.577391 6.58926C0.733671 6.74554 0.945633 6.83334 1.16665 6.83334Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default Navbar;
