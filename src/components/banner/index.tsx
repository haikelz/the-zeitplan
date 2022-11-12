const Banner = () => {
  return (
    <section className="flex w-full max-w-full items-center justify-center bg-[#FFF4F2] px-5 pt-28 pb-10">
      <div className="flex flex-col items-center justify-between md:w-xl md:flex-row">
        <div className="md:w-[26rem]">
          <div className="md:w-[20rem]">
            <h1>Sebuah cara mudah mengatur jadwal kuliah kamu</h1>
          </div>
          <div>
            <p className="mt-4 mb-8 font-sanspro leading-relaxed text-[#6F6F6F]">
              Datang kuliah terlambat karena ketiduran itu tidak masalah; datang kuliah karena lupa
              jadwal itu sangatlah tidak keren. Aplikasi ini adalah sahabat kamu sekarang, brodie~
            </p>
          </div>
          <div className="mb-10 flex flex-col font-sanspro font-semibold lg:flex-row">
            <button className="btn-hover mb-3 rounded-md bg-primary py-3 text-white hover:bg-orange-600 md:px-14 lg:mr-3 lg:mb-0">
              Learn More
            </button>
            <button className="btn-hover rounded-md border border-primary/20 bg-primary/10 py-3 text-primary hover:bg-primary/20 md:px-14">
              Play Demo
            </button>
          </div>
          <div className="mt-16">
            <img className="scale-125" src="/img/hero-review.svg" alt="Hero Review" />
          </div>
        </div>
        <div>
          <img className="md:h-[652px] md:w-[579.3px]" src="/img/hero.svg" alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
