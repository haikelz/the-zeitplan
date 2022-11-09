import { m } from "framer-motion";
import { useVisible } from "../../hooks/useVisible";
import { fadeIn, toRightWithDelay, toTop } from "../../utils/animation";
import { reviews } from "../../utils/data";

const Testimoni = () => {
  const [ref, controls] = useVisible();

  return (
    <section
      ref={ref}
      id="testimoni"
      className="flex w-full max-w-full flex-col items-center justify-center bg-primary/10 px-5 py-16 font-sanspro"
    >
      <div className="flex flex-col items-center justify-center xl:w-xl">
        <div className="flex flex-col items-center justify-center text-center md:w-2/5">
          <m.h2 ref={ref} animate={controls} initial="hidden" variants={fadeIn}>
            Apa kata umat manusia tentang aplikasi keren ini?
          </m.h2>
          <m.p
            animate={controls}
            initial="hidden"
            variants={toRightWithDelay}
            className="mt-3 text-dark/60"
          >
            Kami tidak memfilter semua review, males soalnya. Jadi semua yang ditampilkan di sini
            semuanya asli tanpa reksadana.
          </m.p>
        </div>
        <m.div
          animate={controls}
          initial="hidden"
          variants={toTop}
          className="mt-16 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3"
        >
          {reviews.map((item, index) => {
            {
              /**
               * Rating
               * Buat 2 array baru, array newStar untuk star dan array newUnstar untuk unstar
               * expected: [1,2,3,4,5]
               */
            }
            const newStar = new Array(item.rate.star).fill(null).map((item, index) => index + 1);
            const newUnstar = new Array(item.rate.unstar)
              .fill(null)
              .map((item, index) => index + 1);
            return (
              <div
                key={index + 1}
                className="row-span-6 flex h-fit cursor-pointer flex-col justify-center rounded-md bg-white p-6 transition-all ease-in-out hover:scale-105"
              >
                <div className="flex gap-1">
                  {newStar.map((star, index) => (
                    <img key={index + 1} src="/img/star.svg" alt="Star" />
                  ))}
                  {newUnstar.map((unstar, index) => (
                    <img key={index + 1} src="/img/unstar.svg" alt="Unstar" />
                  ))}
                </div>
                <p className="my-5">{item.desc}</p>
                <div className="flex gap-4">
                  <img
                    src={`/img/review-user-${item.userImage}.svg`}
                    alt={`User Review ${item.userImage}`}
                  />
                  <div className="font-poppins">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-dark/60">{item.job}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
};

export default Testimoni;
