export enum TrafficSignCategory {
  REGULATORY = "Regulatory (Hukmi)",
  WARNING = "Warning (Ibtidai)",
  INFORMATIONAL = "Informational (Malomati)",
}

export interface TrafficSignQuestion {
  id: string;
  signName: string;
  category: TrafficSignCategory;
  symbol: string; // Describes the key geometric / visual theme of the sign
  svgType: "no-entry" | "stop" | "speed-50" | "no-honking" | "one-way" | "turn-right" | "u-turn-prohibited" | "height-limit" | "steep-hill" | "narrow-bridge" | "school-ahead" | "parking" | "hospital" | "first-aid";
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface DrivingProgram {
  id: string;
  name: string;
  duration: string;
  description: string;
  urduDescription: string;
  basePrice: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Specialty";
  features: string[];
}

export interface StudentBooking {
  bookingId: string;
  name: string;
  phone: string;
  email: string;
  programId: string;
  programName: string;
  instructorGender: "male" | "female";
  transmission: "manual" | "automatic";
  pickup: "doorstep" | "hub";
  timing: "morning" | "afternoon" | "evening";
  price: number;
  instructorName: string;
  scheduledStart: string;
  progress: number; // 0-100 indicating fictitious training progress
  status: "Confirmed" | "In Progress" | "Completed";
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}
