import SlideShow from "@/component/SlideShow";
import Image from "next/image";

export const metadata = {
  title: "Slide Show challange",
};

export default function slideShowPage() {
  const Slides = [
    {
      title: "Today's workout plan",
      text: "We're gonna do 3 fundamental exercises.",
    },
    {
      title: "First, 10 push-ups",
      text: "Do 10 reps. Remember about full range of motion. Don't rush.",
    },
    {
      title: "Next, 20 squats",
      text: "Squats are important. Remember to keep your back straight.",
    },
    {
      title: "Finally, 15 sit-ups",
      text: "Slightly bend your knees. Remember about full range of motion.",
    },
    {
      title: "Great job!",
      text: "You made it, have a nice day and see you next time!",
    },
  ];

  return (
    <>
      <div className="p-10 border border-primary m-3 card mb-6">
        <h3 className="text-3xl text-primary font-bold mb-3">Output Results: </h3>
        <SlideShow slides={Slides} />
      </div>

      <div className="flex gap-6 items-center justify-center">
        <Image
          className="card"
          src={"/slideshow/Slideshow-HackerRank-1.png"}
          height={300}
          width={300}
          alt="Question 1"
        />
        <Image
          className="card"
          src={"/slideshow/Slideshow-HackerRank-2.png"}
          height={300}
          width={300}
          alt="Question 2"
        />
        <Image
          className="card"
          src={"/slideshow/Slideshow-HackerRank-3.png"}
          height={300}
          width={300}
          alt="Question 3"
        />
      </div>
    </>
  );
}
