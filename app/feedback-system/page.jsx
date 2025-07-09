
import FeedbackSystem from "./FeedBackSystem"
import Image from "next/image"

export const metadata = {
    title: "FeedBack System Challenge"
}

export default function FeedBackSystemPage() {

    return (
        <>
            <div className="p-10 border border-primary m-3 mb-6">
                <h3 className="text-3xl text-primary font-bold mb-3">Output Results: </h3>
                <FeedbackSystem />
            </div>

            <div className="flex gap-6 items-center justify-center">
                <Image
                    className="card"
                    src={"/feedback-system/Feedback-HackerRank-1.png"}
                    height={300}
                    width={300}
                    alt="Question 1"
                />
                <Image
                    className="card"
                    src={"/feedback-system/Feedback-HackerRank-2.png"}
                    height={300}
                    width={300}
                    alt="Question 2"
                />
                <Image
                    className="card"
                    src={"/feedback-system/Feedback-HackerRank-3.png"}
                    height={300}
                    width={300}
                    alt="Question 3"
                />
            </div>

        </>
    )
}
