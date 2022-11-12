import { m } from "framer-motion";
import { useVisible } from "../../hooks/useVisible";
import { toLeft } from "../../utils/animation";
import { linkList, sosmedList } from "../../utils/data";

const Footer = () => {
  const [ref, controls] = useVisible();

  return (
    <footer className="flex w-full max-w-full items-center justify-center px-5 py-16">
      <m.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={toLeft}
        className="flex flex-col items-start justify-between border-t pt-16 md:w-xl md:flex-row md:items-start md:justify-between md:space-x-20"
      >
        <div className="flex flex-col items-start justify-center font-sanspro text-dark/60 md:block md:w-[38%]">
          <div className="flex items-center justify-center space-x-3 md:justify-start">
            <img src="/img/logo.svg" alt="zeitplan" />
            <h4 className="my-5">Zeitplan</h4>
          </div>
          <div>
            <p className="mb-5">
              Sebuah aplikasi yang membantu kamu untuk membuat jadwal kuliah, jadwal mabar, jadwal
              makan, jadwal liga inggris, dan jadwal-jadwal lainnya. Walaupun banyak error,
              setidaknya kami sudah berusaha semaksimal mungkin.
            </p>
            <span className="font-semibold">COPYRIGHT (C) 2021. DESIGN BY NAUVAL</span>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 grid-rows-1 gap-24 md:mt-0">
          {linkList.map((item, index) => (
            <div key={index + 1}>
              <h4>{item.name}</h4>
              <ul className="mt-2">
                {item.link.map((value, index) => (
                  <li key={index + 1}>
                    <p className="font-sanspro font-semibold text-dark/60">{value}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h4 className="mt-2 md:mt-0">Tetap Terhubung</h4>
          <p className="my-2 w-[90%] font-sanspro text-dark/60">
            Lihat kami pansos di sosial media berikut:
          </p>
          <div className="flex space-x-3">
            {sosmedList.map((sosmed, index) => (
              <a key={index + 1} href={sosmed.href}>
                <div className="flex items-center justify-center rounded-full bg-primary/5 p-3  ">
                  <img src={sosmed.imgSrc} alt={sosmed.alt} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </m.div>
    </footer>
  );
};

export default Footer;
