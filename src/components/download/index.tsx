import { m } from "framer-motion";
import { useVisible } from "../../hooks/useVisible";
import { toRight } from "../../utils/animation";

const Download = () => {
  const [ref, controls] = useVisible();

  return (
    <section
      id="download"
      className="flex w-full max-w-full flex-col items-center justify-center px-5 pt-16"
    >
      <m.div
        ref={ref}
        initial="hidden"
        variants={toRight}
        animate={controls}
        className="flex flex-col items-center justify-center text-center md:w-[45%]"
      >
        <h2>Download Aplikasi Keren Ini Sekarang!</h2>
        <p className="pt-4 pb-8 font-sanspro text-base text-dark/60">
          Please download lah aplikasi ini, udah susah-susah buat, mana pas bikin sampe begadang,
          terus juga ditambah weekend. Jadi, please download lah ya.
        </p>
        <div className="flex gap-4">
          <button>
            <img src="/img/app-store.svg" alt="App Store" />
          </button>
          <button>
            <img src="/img/play-store.svg" alt="Play Store" />
          </button>
        </div>
      </m.div>
    </section>
  );
};

export default Download;
