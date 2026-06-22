import React, { useState } from "react";
import { QUIZ_QUESTIONS } from "../data";
import { TrafficSignSvg } from "./TrafficSignSvg";
import { Award, CheckCircle2, XCircle, RotateCcw, AlertTriangle, ArrowRight, HelpCircle } from "lucide-react";

export const SignQuiz: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const activeQuestion = QUIZ_QUESTIONS[currentIndex];

  const handleOptionClick = (optionIdx: number) => {
    if (isAnswered) return; // Prevent multiple selections

    setSelectedAnswerIndex(optionIdx);
    setIsAnswered(true);

    if (optionIdx === activeQuestion.correctAnswerIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextClick = () => {
    setSelectedAnswerIndex(null);
    setIsAnswered(false);

    if (currentIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswerIndex(null);
    setIsAnswered(false);
    setScore(0);
    setQuizCompleted(false);
  };

  // Passing criteria (e.g. 6 out of 8 correct is a PASS)
  const isPass = score >= 6;

  return (
    <section id="quiz" className="py-24 bg-white border-t border-neutral-100 relative">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-orange-500/10 text-orange-700 border border-orange-500/20 uppercase">
            Official Prep Mode
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-950 mt-3 mb-3">
            Traffic Signs Theory Simulator
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm max-w-xl mx-auto">
            Get 100% prepared to clear Punjab’s official DLIMS computerized sign examination on your very first try. Test your road instincts below!
          </p>
        </div>

        {/* QUIZ ACTIVE VIEW */}
        {!quizCompleted ? (
          <div className="bg-white rounded-3xl border border-neutral-200 p-6 sm:p-8 shadow-sm space-y-6">
            
            {/* Top Score Tracker / Progress Bar */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs text-neutral-500 font-bold uppercase tracking-wider">
                Question {currentIndex + 1} of {QUIZ_QUESTIONS.length}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-orange-600 bg-orange-500/10 px-2 py-0.5 rounded">
                  Correct Spotlights: {score}
                </span>
              </div>
            </div>

            {/* Micro Progress Bar graph */}
            <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              ></div>
            </div>

            {/* Question Card Box */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
              {/* Left Column: Huge Vector Sign Display */}
              <div className="md:col-span-4 flex flex-col justify-center items-center py-4 bg-white rounded-xl border border-neutral-200">
                <TrafficSignSvg type={activeQuestion.svgType} className="w-32 h-32 transform hover:scale-105 transition-transform" />
                <span className="text-[10px] uppercase text-neutral-500 tracking-widest font-black mt-4">
                  {activeQuestion.category}
                </span>
              </div>

              {/* Right Column: Question Statement & Title */}
              <div className="md:col-span-8 space-y-3">
                <h3 className="text-xl font-bold text-neutral-900 leading-snug">
                  What does this road sign indicate?
                </h3>
                <p className="text-sm font-semibold text-orange-600 italic">
                  Urdu Context: "{activeQuestion.signName}"
                </p>
                <div className="flex items-center gap-1.5 text-xs text-neutral-600">
                  <HelpCircle className="w-4 h-4 text-orange-600" />
                  <span>Choose correct legal compliance rule under traffic police codes:</span>
                </div>
              </div>
            </div>

            {/* Options Interactive Checklist */}
            <div className="grid grid-cols-1 gap-3">
              {activeQuestion.options.map((option, idx) => {
                const isSelected = selectedAnswerIndex === idx;
                const isCorrect = idx === activeQuestion.correctAnswerIndex;

                let optionStyle = "bg-neutral-50 border-neutral-200 hover:border-orange-500 hover:bg-neutral-105/10 text-neutral-800";
                
                if (isAnswered) {
                  if (isCorrect) {
                     optionStyle = "bg-emerald-500/10 border-emerald-500/50 text-emerald-800 font-bold ring-1 ring-emerald-500/30";
                  } else if (isSelected) {
                     optionStyle = "bg-rose-500/10 border-rose-500/50 text-rose-800 font-bold ring-1 ring-rose-500/30";
                  } else {
                     optionStyle = "bg-neutral-50 border-neutral-100 text-neutral-400 opacity-60";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(idx)}
                    disabled={isAnswered}
                    className={`w-full p-4 rounded-xl text-left border text-xs sm:text-sm transitions-all duration-200 flex items-center justify-between cursor-pointer focus:outline-none ${optionStyle}`}
                  >
                    <span>{option}</span>
                    
                    {isAnswered && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation Panel */}
            {isAnswered && (
              <div className="p-5 bg-orange-50/50 rounded-xl border border-orange-200/50 space-y-2 animate-fade-in text-xs leading-relaxed">
                <div className="flex items-center gap-1.5 text-orange-600 font-bold">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Sign Rule Clarification (Punjab DLIMS Guidelines):</span>
                </div>
                <p className="text-neutral-700">{activeQuestion.explanation}</p>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleNextClick}
                    className="px-4 py-2 rounded-xl bg-neutral-600 hover:bg-neutral-700 text-white font-bold text-xs flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    {currentIndex + 1 === QUIZ_QUESTIONS.length ? "Finish Practice" : "Next Question"}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          // QUIZ COMPLETE VIEW (RESULT SLATE)
          <div className="bg-white rounded-3xl border border-neutral-200 p-8 text-center shadow-md max-w-2xl mx-auto space-y-6">
            
            <div className="flex justify-center flex-col items-center">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                isPass ? "bg-emerald-500/15 text-emerald-600" : "bg-rose-500/15 text-rose-600"
              }`}>
                <Award className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-black text-neutral-900">
                {isPass ? "Mubarak Ho! You Passed." : "Practice Required!"}
              </h3>
              <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">
                Practice Score: {score} out of {QUIZ_QUESTIONS.length} Questions Correct
              </p>
            </div>

            {/* Pass / Fail Gauge Indicator */}
            <div className={`p-4 rounded-xl border max-w-md mx-auto text-xs ${
              isPass 
                ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                : "bg-orange-50 border-orange-200 text-orange-800"
            }`}>
              {isPass ? (
                <p className="leading-relaxed">
                  ✅ Aapne passing guidelines clear kr li hain (Min 6/8 needed). Ab aap official Faisalabad Traffic computerized exam clear karne ke liye fully ready hain! Enroll with GoDriveify to begin in-vehicle trials.
                </p>
              ) : (
                <p className="leading-relaxed">
                  ⚠️ Punjab Traffic police me passing minimum limit 80% (equivalent to 6 out of 8 signs) hai. Practice makes perfect! Barahe karam quiz doobara check kr ke review kijiye.
                </p>
              )}
            </div>

            <div className="w-full h-px bg-neutral-200 my-2"></div>

            {/* Quick stats on regulatory vs warnings */}
            <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-neutral-605">
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <span className="block text-neutral-500 text-[10px] uppercase font-bold">Passing Ratio</span>
                <span className="text-neutral-900 text-base font-black">{Math.round((score / QUIZ_QUESTIONS.length) * 100)}%</span>
              </div>
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <span className="block text-neutral-500 text-[10px] uppercase font-bold">Standard Requirement</span>
                <span className="text-neutral-900 text-base font-black">80% in Punjab</span>
              </div>
            </div>

            <button
              onClick={handleRestart}
              className="px-6 py-3 rounded-xl bg-neutral-600 hover:bg-neutral-700 text-white font-bold text-xs flex items-center gap-2 mx-auto cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Retake Practice Quiz
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
