function Home() {
  return (
    <main className='component-space h-default bg-home-mobile bg-no-repeat bg-cover bg-center  text-center font-barlow flex flex-col justify-center items-center sm:bg-home-tablet'>
      <h5 className='font-barlow-condensed text-xl tracking-widest uppercase'>
        So, you want to travel to
      </h5>
      <h1 className='text-heading-2 text-white font-bellefair leading-tight uppercase sm:text-heading-1'>
        Space
      </h1>
      <p className='text-lg sm:w-[80%] sm:text-lg'>
        Let's face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of the edge of it. Well sit back,
        and relax because we'll give you a truly out of this world experience!
      </p>
      <button className='mt-16 bg-white font-bellefair uppercase rounded-full text-primary text-2xl h-44 w-44 hover:outline hover:outline-[30px] hover:outline-slate-500/70 sm:w-52 sm:h-52'>
        Explore
      </button>
    </main>
  );
}
export default Home;
