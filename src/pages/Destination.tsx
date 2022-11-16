import { useState } from 'react';
import data from '../data/contents';

function Destination() {
  const [choosedPlanet, setChoosedPlanet] = useState(0);
  const { destinations } = data;

  return (
    <section className='component gap-y-6 bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop'>
      <div className='flex flex-col justify-center items-center gap-y-7'>
        <h1 className='font-barlow-condensed uppercase text-md tracking-[0.2em] sm:text-xl lg:text-2xl'>
          <span className='font-bold text-secondary/70'>01</span> pick your
          destination
        </h1>
        <img
          src={destinations[choosedPlanet].images.webp}
          alt={destinations[choosedPlanet].name}
          className='aspect-square w-64 sm:w-80 lg:w-[75rem]'
        />
      </div>
      <article className='mt-3'>
        <ul className='flex justify-center items-center gap-x-8 font-barlow-condensed text-lg lg:justify-start'>
          {destinations.map((item, index) => {
            return (
              <li key={item.name}>
                <button
                  className={`uppercase pb-1 border-b-[3px] ${
                    index === choosedPlanet
                      ? 'text-white'
                      : 'text-secondary/70 border-transparent  hover:border-secondary/70'
                  }`}
                  onClick={() => setChoosedPlanet(index)}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
        <div className='my-8'>
          <h2 className='text-6xl font-bellefair uppercase sm:text-7xl lg:text-heading-2'>
            {destinations[choosedPlanet].name}
          </h2>
          <p className='font-barlow text-secondary/95 mt-3 sm:mx-auto sm:w-[70%] lg:w-full lg:mx-0'>
            {destinations[choosedPlanet].description}
          </p>
        </div>
        <hr className='my-8 border-secondary/40' />
        <div className='font-barlow-condensed tracking-widest uppercase flex flex-col justify-center items-center gap-y-4 sm:flex-row sm:gap-x-10 lg:justify-start lg:gap-x-16'>
          <div>
            <h3 className='text-secondary/80 text-lg lg:text-subheading-2'>
              Avg. Distance
            </h3>
            <p className='font-bellefair text-3xl lg:text-subheading-1'>
              {destinations[choosedPlanet].distance}
            </p>
          </div>
          <div>
            <h3 className='text-secondary/80 text-lg lg:text-subheading-2'>
              Est. Travel Time
            </h3>
            <p className='font-bellefair text-3xl lg:text-subheading-1'>
              {destinations[choosedPlanet].travel}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
export default Destination;
