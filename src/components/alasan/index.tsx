import { reasons } from "../../utils/data";
import { m } from "framer-motion";
import { toLeft, toRight } from "../../utils/animation";
import { useVisible } from "../../hooks/useVisible";

const Alasan = () => {
  const [ref, controls] = useVisible();

  return (
    <section id="alasan" className="flex w-full max-w-full items-center justify-center py-16 px-5">
      <div className="flex w-full flex-col items-center justify-center md:justify-between lg:flex-row xl:w-xl">
        <m.div
          ref={ref}
          animate={controls}
          variants={toRight}
          initial="hidden"
          className="flex max-w-full items-center justify-start md:w-[60rem]"
        >
          <div className="flex flex-col lg:w-[22rem]">
            <h2>Kenapa Kamu Sangat Harus Pakai Aplikasi Yang Keren Ini?</h2>
            <p className="mt-5 font-sanspro text-dark/60">
              Sejujurnya aplikasi kita ini seringkali bermasalah. Kadang-kadang gak bisa submit
              data, kadang dibukanya lambat, kadang tiba-tiba logout sendiri, untung gak berdua.
            </p>
            <div className="mt-10 flex space-x-5 font-inter tracking-wide md:justify-start">
              <div>
                <p className="uppercase text-[#0C1B4D]/60">Total Don&#39;tloud</p>
                <p className="text-xl font-semibold">1,501,234</p>
              </div>
              <div className="h-full border-[1px] py-8"></div>
              <div>
                <p className="uppercase text-[#0C1B4D]/60">Total Users</p>
                <p className="text-xl font-semibold">1,318,829</p>
              </div>
            </div>
          </div>
        </m.div>
        <m.div
          ref={ref}
          variants={toLeft}
          initial="hidden"
          animate={controls}
          className="mt-6 grid w-full grid-cols-1 grid-rows-1 gap-6 font-sanspro md:grid-cols-2 lg:grid-rows-2"
        >
          {reasons.map((item, index) => (
            <div
              key={index + 1}
              className="cursor-pointer rounded-md bg-primary/5 p-7 transition-all ease-in-out hover:scale-105"
            >
              <div className="flex items-center space-x-3">
                <div className="rounded-md bg-primary/20 p-3">
                  <img src={item.icon} alt="" />
                </div>
                <p className="text-lg font-semibold">{item.because}</p>
              </div>
              <p className="mt-4">{item.desc}</p>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default Alasan;
