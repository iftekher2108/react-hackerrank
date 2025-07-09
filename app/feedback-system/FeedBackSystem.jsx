'use client'
import { useState } from "react";

const FeedbackSystem = () => {

    const [aspects, setAspects] = useState([
        { name: "Readability", upvotes: 0, downvotes: 0 },
        { name: "Performance", upvotes: 0, downvotes: 0 },
        { name: "Security", upvotes: 0, downvotes: 0 },
        { name: "Documentation", upvotes: 0, downvotes: 0 },
        { name: "Testing", upvotes: 0, downvotes: 0 },
    ]);


    const handleAspects = (index, type) => {
        setAspects((prevAspects) => {
            return prevAspects.map((aspect, i) => {
                if (i === index) {
                    return {
                        ...aspect,
                        [type]: aspect[type] + 1
                    };
                }
                return aspect;
            })
        })

    }

    return (
        <div className="my-0 mx-auto text-center">
            <div className=" wrap justify-center mt-30 gap-5">
                {
                    aspects.map((aspect, index) => (
                        <div key={index}>
                        <div  className="p-10">
                            <h2 className="p-3 bg-primary rounded-xl">{aspect.name}</h2>
                            <div className="flex gap-10 justify-center mt-5">
                                <button className="py-10 px-15 btn btn-primary"
                                    onClick={() => handleAspects(index, 'upvotes')}
                                    data-testid={`upvote-btn-${index}`}>
                                    👍 Upvote
                                </button>
                                <button className="py-10 px-15 btn btn-error"
                                    onClick={() => handleAspects(index, 'downvotes')}
                                    data-testid={`downvote-btn-${index}`}>
                                    👎 Downvote
                                </button>
                            </div>
                            <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
                                Upvotes: <strong>{aspect.upvotes}</strong>
                            </p>
                            <p className="my-10 mx-0" data-testid={`downvote-count-${index}`}>
                                Downvotes: <strong>{aspect.downvotes}</strong>
                            </p>
                        </div>
                            {(index !== aspects.length  - 1  ) && <hr className=" text-primary m-4"/> }
                       </div> 
                         
                    ))
                }


            </div>
        </div>
    );
};

export default FeedbackSystem;
