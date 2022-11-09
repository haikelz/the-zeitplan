import { prices } from "../../utils/data";
import { m } from "framer-motion";
import { fadeIn, toRightWithDelay, toTop } from "../../utils/animation";
import { useVisible } from "../../hooks/useVisible";

const Harga = () => {
  const [ref, controls] = useVisible();

  return (
    <section
      id="harga"
      className="flex w-full max-w-full flex-col items-center justify-center bg-primary/5 px-5 py-16 font-sanspro"
    >
      <div className="flex w-full flex-col items-center justify-center xl:w-xl">
        <div className="flex flex-col items-center justify-center text-center">
          <m.div
            ref={ref}
            animate={controls}
            variants={fadeIn}
            initial="hidden"
            className="md:w-1/2"
          >
            <h2>Main catur sambil bersepeda, beda harga beda fitur</h2>
          </m.div>
          <m.div
            ref={ref}
            animate={controls}
            variants={toRightWithDelay}
            initial="hidden"
            className="md:w-[60%]"
          >
            <p className="mt-4 text-dark/60">
              Aplikasi ini gratis sebenernya, brodie. Tapi kalo mau bayar gapapa juga sih, untuk
              gantinya kami kasih fitur yang spesial buat kamu!
            </p>
          </m.div>
        </div>
        <m.div
          ref={ref}
          animate={controls}
          variants={toTop}
          initial="hidden"
          className="my-16 grid w-full gap-7 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 lg:flex-row"
        >
          {prices.map((item, index) => (
            <div
              key={index + 1}
              className="h-fit rounded-lg bg-white py-8 px-10 shadow-lg transition-all ease-in-out hover:scale-105 hover:cursor-pointer"
            >
              <p className="font-ibm text-sm tracking-widest text-primary">{item.type}</p>
              <h3 className="mt-4 text-3xl">{item.price}</h3>
              <p className="mt-1 text-[#0C0E2B]/60">{item.desc}</p>
              <ul className="mt-5 mb-8">
                {item.listFeatures.map((feature, index) => (
                  <li key={index + 1} className="my-2 flex items-center gap-4">
                    <img className="h-[20px] w-[20px]" src="/img/check.svg" alt="check icon" />
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
              <button className="btn-hover w-full rounded-md bg-primary py-2 font-sanspro font-semibold text-white hover:bg-orange-600">
                Download
              </button>
            </div>
          ))}
        </m.div>
        <div className="text-center md:w-1/2">
          <p className="font-sanspro text-dark/60">
            <span className="font-bold">Harap Diingat: </span>
            Harga di atas belum termasuk KKM, dan harga sewaktu-waktu bisa berubah secara mendadak
            seperti pengumuman PPKM darurat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Harga;
