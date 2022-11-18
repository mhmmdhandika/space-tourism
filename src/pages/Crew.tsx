import { useState } from 'react';
import contents from '../data/contents';

function Crew() {
  let [choosedCrew, setChoosedCrew] = useState(0);
  const { crew } = contents;

  return (
    <section className='h-[calc(100vh+25rem)] grid grid-rows-[repeat(4,_min-content)] gap-y-8 content-center place-items-center items-center bg-cover bg-center bg-crew-mobile sm:content-end sm:bg-crew-tablet sm:pb-0 lg:bg-crew-desktop lg:grid-cols-2 lg:grid-rows-[repeat(3,_min-content)] lg:gap-y-0 lg:place-items-start lg:px-36 lg:h-base lg:content-end'>
      <h1 className='title-component'>
        <span className=''>02</span> Meet your crew
      </h1>
      <div className='w-full sm:order-last lg:row-span-3'>
        <img
          src={crew[choosedCrew].images.webp}
          alt={crew[choosedCrew].name}
          className='h-64 mx-auto sm:h-[33rem] lg:mr-0'
        />
        <hr className='w-[80%] mx-auto border-white/30 sm:hidden' />
      </div>
      <ul className='flex justify-center items-center gap-x-4 sm:order-3 lg:row-start-3'>
        {crew.map((_, index) => {
          return (
            <li key={index}>
              <button
                className={`w-[15px] h-[15px] rounded-full ${
                  index === choosedCrew ? 'bg-white' : 'bg-white/30'
                }`}
                onClick={() => setChoosedCrew(index)}
              ></button>
            </li>
          );
        })}
      </ul>
      <article className='w-[85%] text-center sm:w-[60%] lg:row-start-2 lg:text-start lg:w-full'>
        <h2 className='title-1-article-component'>{crew[choosedCrew].role}</h2>
        <h3 className='title-2-article-component'>{crew[choosedCrew].name}</h3>
        <p className='desc-article-component'>{crew[choosedCrew].bio}</p>
      </article>
    </section>
  );
}
export default Crew;
