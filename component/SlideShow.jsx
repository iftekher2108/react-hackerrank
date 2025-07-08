'use client'
import { useState } from "react";
export default function SlideShow({slides}) {

  const [index, setIndex] = useState(0);

  console.log(slides)

function restart() {
  setIndex(0)
}

const isFirstSlide = index === 0;
const isLastSlide = index === slides.length - 1;


  function nextHandle() {
    if(!isLastSlide) setIndex(index + 1);
     
  }
  function prevHandle() {
   if (!isFirstSlide) setIndex(index -1)
  }

  return (
    <div className="p-10">
      <div id="navigation" className="flex items-center gap-8 justify-center text-center mb-6">
        <button data-testid="button-restart" 
        onClick={()=> restart()}
        disabled={isFirstSlide}
        className={`small btn btn-primary px-6 py-3}`}>
          Restart
        </button>
        <button data-testid="button-prev" 
        onClick={()=>prevHandle()}
        disabled={isFirstSlide}
        className={`small btn btn-primary px-6 py-3}`}>
          Prev
        </button>
        <button data-testid="button-next" 
        onClick={()=> nextHandle()}
        disabled={isLastSlide}
        className={`small btn btn-primary px-6 py-3`}>
          Next
        </button>
      </div>
      <div id="slide" className="card bg-gray-800 rounded-2xl p-3 text-center">
        <h1 data-testid="title">{slides[index].title}</h1>
        <p data-testid="text">{slides[index].text}</p>
      </div>
    </div>
  );
}