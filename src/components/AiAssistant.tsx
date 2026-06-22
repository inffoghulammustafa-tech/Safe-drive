import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, Sparkles, User, HelpCircle, Loader2, ArrowRight } from "lucide-react";
import { ChatMessage } from "../types";

export const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Assalam-o-Alaikum! main GoDriveify AI Road Advisor hoon. I am your expert guide for Punjab DLIMS license rules, sign tests, driving tracks, and our custom training programs in Faisalabad. \n\nHow can I help you clear your test or plan a course today? Aap Urdu ya English dono me pooch sakte hain!",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const samplePrompts = [
    { text: "What documents are required for DLIMS?", label: "Required Docs" },
    { text: "Tips for passing the physical L-track reverse test?", label: "Reversing Tips" },
    { text: "How can I book a female instructor course?", label: "Female Coaches" },
  ];

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: "usr-" + Date.now(),
      sender: "user",
      text: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Package conversation history to feed to the model
      const lastSessionMessages = messages.slice(-6).map((m) => ({
        sender: m.sender,
        text: m.text,
      }));

      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          chatHistory: lastSessionMessages,
        }),
      });

      const data = await response.json();
      const botReply = data.response || "Server is currently unavailable. Please rephrase or contact GoDriveify support.";

      const botMsg: ChatMessage = {
        id: "bot-" + Date.now(),
        sender: "bot",
        text: botReply,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      const errorMsg: ChatMessage = {
        id: "bot-err-" + Date.now(),
        sender: "bot",
        text: "System communication offline: Licensing rules in Faisalabad require a verified CNIC, Medical form, and physical track trial. For pricing info, please utilize our custom Cost Estimator tool above!",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  // Safe helper to render response text with bolding and bullet list points correctly
  const renderFormattedText = (rawStr: string) => {
    const lines = rawStr.split("\n");
    return lines.map((line, idx) => {
      let isBullet = false;
      let text = line.trim();

      if (text.startsWith("* ") || text.startsWith("- ") || text.startsWith("• ")) {
        isBullet = true;
        text = text.substring(2);
      } else if (text.match(/^\d+\.\s/)) {
        isBullet = true;
        text = text.replace(/^\d+\.\s/, "");
      }

      // Basic regex replacement for bold formatting (**bold**)
      const boldSegments = text.split(/\*\*([^*]+)\*\*/g);
      const renderedSegments = boldSegments.map((seg, sIdx) => {
        // odd indices correspond to captured bold text segments
        return sIdx % 2 === 1 ? <strong key={sIdx} className="text-cyan-300 font-bold">{seg}</strong> : seg;
      });

      if (isBullet) {
        return (
          <li key={idx} className="ml-5 list-disc text-gray-300 mt-1 pl-1">
            {renderedSegments}
          </li>
        );
      }

      return (
        <p key={idx} className="text-gray-305 leading-relaxed min-h-[0.5rem] mt-1">
          {renderedSegments}
        </p>
      );
    });
  };

  return (
    <section id="ai-advisor" className="py-24 relative bg-[#060913]">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00f2fe]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-cyan-400 uppercase font-extrabold tracking-widest text-xs">AI Integration</span>
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent mt-2 mb-3">
            GoDriveify DLIMS Assistant
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto">
            Aapka driving license pass karne wala dost. Instant legal guidelines on Punjab traffic code, theory exams, files and licensing fee systems.
          </p>
        </div>

        {/* Chat box container */}
        <div className="bg-[#0b1122]/60 rounded-3xl border border-white/[0.08] backdrop-blur-md shadow-2xl overflow-hidden flex flex-col h-[580px]">
          {/* Header */}
          <div className="px-6 py-4 bg-white/[0.02] border-b border-white/[0.05] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-cyan-500 to-rose-500 flex items-center justify-center text-white font-bold shrink-0 animate-pulse">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  Road Safety Guru
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                </h4>
                <p className="text-[10px] text-cyan-400">Powered by Gemini 3.5 Flash</p>
              </div>
            </div>
            <div className="text-[10px] font-mono text-gray-500">
              English &amp; Roman Urdu Ready
            </div>
          </div>

          {/* Quick suggestions rail */}
          <div className="px-6 py-3 bg-white/[0.01] border-b border-white/[0.03] flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mr-1.5">Frequently Asked:</span>
            {samplePrompts.map((p, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(p.text)}
                disabled={isLoading}
                className="px-3 py-1 rounded-full text-[11px] bg-white/[0.03] text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 border border-white/5 hover:border-cyan-500/20 active:scale-95 transition-all text-left truncate cursor-pointer disabled:opacity-50"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            {messages.map((m) => {
              const isBot = m.sender === "bot";
              return (
                <div key={m.id} className={`flex gap-3.5 ${isBot ? "justify-start" : "justify-end"}`}>
                  {isBot && (
                    <div className="w-8 h-8 rounded-full bg-cyan-700/20 flex items-center justify-center text-cyan-400 border border-cyan-500/10 shrink-0 self-start mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`max-w-[78%] rounded-2xl p-4 text-xs sm:text-sm space-y-1 ${
                    isBot 
                      ? "bg-slate-900/60 border border-white/[0.04] text-gray-200" 
                      : "bg-gradient-to-br from-cyan-600 to-cyan-700 text-white font-medium"
                  }`}>
                    <div className="space-y-1 block">
                      {renderFormattedText(m.text)}
                    </div>
                    <span className="block text-[9px] text-right opacity-50 mt-1.5">
                      {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>

                  {!isBot && (
                    <div className="w-8 h-8 rounded-full bg-rose-700/25 flex items-center justify-center text-rose-300 border border-rose-500/10 shrink-0 self-start mt-0.5">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Loading / Typing indicator */}
            {isLoading && (
              <div className="flex gap-3.5 justify-start">
                <div className="w-8 h-8 rounded-full bg-cyan-700/20 flex items-center justify-center text-cyan-400 border border-cyan-500/10 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="bg-slate-900/60 border border-white/[0.04] rounded-2xl p-4 text-xs sm:text-sm text-gray-400 flex items-center gap-2">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                  <span>Thinking on Punjab Traffic codes... Please wait</span>
                </div>
              </div>
            )}
            <div ref={scrollRef} />
          </div>

          {/* User Input actions bar */}
          <div className="p-4 bg-white/[0.01] border-t border-white/[0.04] flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage(inputMessage);
              }}
              disabled={isLoading}
              placeholder="Ask anything (e.g. licensing fee, L-track prep test, medical forms...)"
              className="flex-1 bg-[#060913] border border-white/10 rounded-2xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 disabled:opacity-50"
            />
            <button
              onClick={() => handleSendMessage(inputMessage)}
              disabled={isLoading || !inputMessage.trim()}
              className="px-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-rose-500 text-white font-bold flex items-center justify-center cursor-pointer transition-all hover:scale-105 active:scale-95 disabled:opacity-40 shrink-0"
              aria-label="Send"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
