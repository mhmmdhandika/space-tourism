import { useState } from 'react';
import contents from '../data/contents';

function Technolgy() {
  const [choosedTerminology, setChoosedTerminology] = useState(0);
  const { technology } = contents;

  return (
    <section className='h-[calc(100vh+15rem)] bg-component bg-technology-mobile grid grid-rows-[repeat(4,_min-content)] content-center place-items-center gap-y-9 sm:bg-technology-tablet lg:bg-technology-desktop lg:grid-rows-[repeat(2,_min-content)] lg:grid-cols-[min-content] lg:pl-14'>
      <h1 className='title-component lg:col-span-2 lg:place-self-start'>
        <span>03</span> Space launch 101
      </h1>
      <picture className='col-start-3 row-start-2'>
        <source
          srcSet={technology[choosedTerminology].images.portrait}
          media='(min-width: 1024px)'
        />
        <img
          src={technology[choosedTerminology].images.landscape}
          alt={technology[choosedTerminology].name}
        />
      </picture>
      <ul className='flex gap-4 justify-center items-center lg:flex-col lg:col-start-1 lg:gap-8'>
        {technology.map((_, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => setChoosedTerminology(index)}
                className={`h-[40px] w-[40px] font-bellefair text-lg rounded-full border-[1px] border-white ${
                  index === choosedTerminology
                    ? 'bg-white text-black'
                    : 'text-white bg-transparent'
                } lg:h-[80px] lg:w-[80px] lg:text-3xl`}
              >
                {index + 1}
              </button>
            </li>
          );
        })}
      </ul>
      <article className='text-center w-[80%] lg:col-start-2 lg:text-start'>
        <h2 className='title-1-article-component'>The Terminology...</h2>
        <h3 className='title-2-article-component'>
          {technology[choosedTerminology].name}
        </h3>
        <p className='desc-article-component'>
          {technology[choosedTerminology].description}
        </p>
      </article>
    </section>
  );
}
export default Technolgy;
