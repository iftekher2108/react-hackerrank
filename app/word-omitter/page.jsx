import { WordOmitter } from "@/component/WordOmiter";
import Image from "next/image";


export const metadata = {
    title: 'word omitter challange'
}

export default function WordOmiterPage() {
    const OMITTED_WORDS = ["a", "the", "and", "or", "but"];
    return(
        <>
        <div className="p-10 border border-primary m-3 card mb-6">
        <h3 className="text-3xl text-primary font-bold mb-3">Output Results: </h3>
               <WordOmitter wordOmit={OMITTED_WORDS}  /> 
        </div>

 <div className="flex gap-6 items-center justify-center">
        <Image
          className="card"
          src={"/word-omitter/Word-Omitter-HackerRank-1.png"}
          height={300}
          width={300}
          alt="Question 1"
        />
        <Image
          className="card"
          src={"/word-omitter/Word-Omitter-HackerRank-2.png"}
          height={300}
          width={300}
          alt="Question 2"
        />
       
      </div>

        </>
    )

}
