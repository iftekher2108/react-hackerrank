"use client";
import Link from "next/link";
import Image from "next/image";

export default function HomeClient() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-200 via-blue-100 to-purple-200 p-6 animate-fade-in">
      <div className="card w-full max-w-2xl shadow-2xl bg-white/80 border-2 border-primary rounded-3xl backdrop-blur-md">
        <div className="card-body items-center text-center">
          <div className="flex flex-col items-center mb-4">
            <Image src="/globe.svg" alt="HackerRank Globe" width={80} height={80} className="mb-2 animate-bounce" />
            <h1 className="card-title text-4xl md:text-5xl font-extrabold text-primary mb-2 drop-shadow-lg">
              Welcome to <span className="text-secondary">HackerRank</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-accent mb-2 tracking-wide">Coding Challenge Solutions</h2>
          </div>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            <span className="font-semibold text-accent">Explore, Learn, and Grow!</span> <br />
            This project showcases solutions to various coding challenges from <span className="font-semibold text-accent">HackerRank</span>.<br />
            Discover different approaches, master new techniques, and boost your problem-solving skills.<br />
            Whether you're preparing for interviews or sharpening your coding abilities, you'll find helpful resources and inspiration here.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <Link href="/slide-show" className="btn btn-primary btn-lg shadow-md hover:scale-105 transition-transform duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A2 2 0 0021 6.382V5a2 2 0 00-2-2H5a2 2 0 00-2 2v1.382a2 2 0 001.447 1.342L9 10m6 0v10m0 0H9m6 0a2 2 0 002-2v-8m-2 10a2 2 0 01-2-2v-8m0 10H9m0 0V10" /></svg>
              View Slide Show
            </Link>
            <Link href="/word-omitter" className="btn btn-secondary btn-lg shadow-md hover:scale-105 transition-transform duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m-6-8h6" /></svg>
              Word Omitter
            </Link>
            <Link href="/feedback-system" className="btn btn-accent btn-lg shadow-md hover:scale-105 transition-transform duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2m10 0V6a4 4 0 00-8 0v2m8 0H7" />
              </svg>
              Feedback System
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1.2s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
