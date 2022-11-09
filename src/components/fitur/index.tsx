import { m } from "framer-motion";
import { useVisible } from "../../hooks/useVisible";
import { toLeft } from "../../utils/animation";
import { features } from "../../utils/data";

const Fitur = () => {
  const [ref, controls] = useVisible();

  return (
    <section
      id="fitur"
      className="flex w-full max-w-full items-center justify-center px-5 py-16 font-sanspro"
    >
      <div className="flex flex-col items-center justify-center gap-10 md:w-xl md:flex-row md:justify-between">
        <div className="h-full max-h-full w-full max-w-full">
          <img className="h-full w-full" src="/img/fitur.svg" alt="Fitur" />
        </div>
        <m.div ref={ref} initial="hidden" animate={controls} variants={toLeft}>
          <div>
            <h2>
              Memangnya ada fitur apa aja sih di aplikasi yang katanya keren ini? Jadi penasaran
              nich~
            </h2>
            <p className="my-7 text-dark/60">
              Aplikasi sekeren ini akan membuat kamu tidak dapat memberi alasan apapun untuk bolos
              matkul dosen (HAHA MAMPUS!). Lagian lo kuliah tapi jarang masuk, titip absen doang!
            </p>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 gap-6 sm:grid-cols-2">
            {features.map((item, index) => (
              <div key={index + 1} className="">
                <img src={item.icon} alt="Features" />
                <h4 className="my-2">{item.feature}</h4>
                <p className="text-dark/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default Fitur;
