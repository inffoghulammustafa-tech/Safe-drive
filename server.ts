import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini
let ai: GoogleGenAI | null = null;
try {
  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  } else {
    console.warn("GEMINI_API_KEY is not defined in the environment. AI Assistant services will run in offline demo mode.");
  }
} catch (error) {
  console.error("Failed to initialize GoogleGenAI:", error);
}

// Endpoint: AI Assistant Support for DLIMS and traffic sign consultation
app.post("/api/assistant", async (req, res) => {
  const { message, chatHistory } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  if (!ai) {
    // Elegant fallback response when API key is not present
    return res.json({
      response: "Aapka swagat hai GoDriveify assistant mein! Currently, I am running in offline mode. For a premium training plan in Faisalabad: Document requirements include: CNIC Copy, Medical Certificate (Form B), 3 Passport size photographs. The learner permit is valid for 6 months, and you can take the test after 42 days at Faisalabad Traffic Police Headquarters. Our school offers door step pick-and-drop, separate female instructors, and custom tracks. How can I help you enroll?"
    });
  }

  try {
    const formattedHistory = (chatHistory || []).map((chat: { sender: string; text: string }) => {
      return {
        role: chat.sender === 'user' ? 'user' : 'model',
        parts: [{ text: chat.text }]
      };
    });

    formattedHistory.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const systemInstruction = 
      "You are the GoDriveify Smart Assistant - an expert consultant for GoDriveify driving school in Faisalabad, Pakistan. " +
      "Help students with questions about: driving courses, manual vs automatic transmission, licensing rules under DLIMS Punjab, " +
      "sign tests, practical driving tests (reversing, L-shape track, parallel parking, incline start), and required documents (CNIC, medical form, learner license for 42 days). " +
      "We offer doorstep pick-and-drop facility, customized scheduling, and separate certified female instructors for female students. " +
      "Be supporting, supportive, and motivating. Keep answers concise, helpful, and formatted beautifully in short paragraphs or clean bullet points. " +
      "You are comfortable chatting in English and Roman Urdu (e.g., 'Aapko licensing ke liye pehle learner permit banwana hoga...') depending on what the user prefers.";

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedHistory,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    const textResponse = response.text || "Main samajh nahi paya, kya aap dobara pooch sakte hain?";
    res.json({ response: textResponse });

  } catch (error: any) {
    console.error("Gemini Assistant error:", error);
    res.status(500).json({ 
      error: "Error processing assistance request", 
      details: error.message,
      response: "Maaf kijiyega, system response generate nahi ho saka. Faisalabad licensing inquiry ke liye humara training course join krein or hamare specialist team se bat krein!" 
    });
  }
});

// Endpoint: Mock or dynamic feedback for booking slots & confirmation
app.post("/api/bookings", (req, res) => {
  const { name, phone, email, courseType, instructorGender, transmission, pickup, timing } = req.body;
  
  if (!name || !phone || !courseType) {
    return res.status(400).json({ error: "Name, phone, and course type are required." });
  }

  const assignedInstructors = instructorGender === 'female' 
    ? ["Madam Sadia", "Madam Ayesha", "Madam Fatima", "Madam Zainab"]
    : ["Sir Bilal", "Sir Hamza", "Sir Kamran", "Sir Tariq"];

  const instructorName = assignedInstructors[Math.floor(Math.random() * assignedInstructors.length)];
  const bookingId = "GD-" + Math.floor(100000 + Math.random() * 900000);
  
  res.json({
    success: true,
    bookingId,
    instructorName,
    message: `Apka order process ho gya hai! ${instructorName} will contact you shortly to confirm your premium pick & drop slot for ${courseType} in Faisalabad. Ready to roll!`,
    scheduledStart: new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString()
  });
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server starting on port ${PORT}`);
  });
}

startServer();
