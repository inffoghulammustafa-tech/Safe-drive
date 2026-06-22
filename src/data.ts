import { DrivingProgram, TrafficSignQuestion, TrafficSignCategory } from "./types";

export const DRIVING_PROGRAMS: DrivingProgram[] = [
  {
    id: "beginner-pack",
    name: "Beginner’s Foundation Pack",
    duration: "15 Days (30 Mins Daily)",
    description: "Start from absolute scratch. Learn steering mechanics, clutch-gear coordination, basic road indicators, defensive braking, and early hazard perception.",
    urduDescription: "Bilkul naye drivers ke liye. Steering control, clutch automatic gear use, safe braking, aur aam galiyon me chalane ki mukammal training.",
    basePrice: 12000,
    difficulty: "Beginner",
    features: [
      "Custom Female Instructor option available",
      "Interactive road signals and lane basics",
      "Doorstep pick & drop within Faisalabad limits",
      "Double brake mechanism training cars"
    ]
  },
  {
    id: "intensive-license",
    name: "Certified Intensive & Test Prep",
    duration: "10 Days (40 Mins Daily)",
    description: "Tailor-made for candidates eager to pass the official Faisalabad traffic police license exam. Covers precise L-track reversing, parallel parking, and signal theory.",
    urduDescription: "Sarkari license test ki tayari ke liye koshish. L-track reverse, parallel side parking, aur traffic signal rules ka practice test.",
    basePrice: 9500,
    difficulty: "Intermediate",
    features: [
      "Official L-track simulation training",
      "1-on-1 practical reverse mastery training",
      "Mock verbal theory sign test practice",
      "Expert coordinator assistance at DLIMS center"
    ]
  },
  {
    id: "refresher-premium",
    name: "Premium Refresher Special",
    duration: "6 Days (45 Mins Daily)",
    description: "For drivers returning to the wheel after a gap. Focuses on heavy traffic navigation, lane overtaking on busy corridors (like Canal Rd & Susan Rd), and highway rules.",
    urduDescription: "Un ke liye jinhein driving aati hai par purana gap hai. Faisalabad ki masroof sharahon par confidence ke sath gari chalane ki guide.",
    basePrice: 7500,
    difficulty: "Advanced",
    features: [
      "Intensive heavy traffic rush-hour driving",
      "U-turn and narrow street handling trials",
      "Defensive driving strategies under rush",
      "Expressway lane speed control and ethics"
    ]
  },
  {
    id: "sign-theory",
    name: "3-Day Sign & Track Masterclass",
    duration: "3 Days (60 Mins Daily)",
    description: "Express prep crash program. Focuses 100% on theory sign tests, and simulated cone trials on empty specialized school ground.",
    urduDescription: "Sirf 3 din ka safety crash course. Traffic signs ki pehchan aur specialized ground me cones ke darmian passing trials.",
    basePrice: 5000,
    difficulty: "Specialty",
    features: [
      "Computerized sign test simulator trial loops",
      "Precision blindspot control using mirror alignments",
      "Perfect defensive driving quick-tips leaflet",
      "Certificate of theoretical completion"
    ]
  }
];

export const QUIZ_QUESTIONS: TrafficSignQuestion[] = [
  {
    id: "q1",
    signName: "Stop Sign (Ruk Jayye)",
    category: TrafficSignCategory.REGULATORY,
    symbol: "STOP",
    svgType: "stop",
    options: [
      "Slow down and continue carefully",
      "Come to a complete stop and check safety before proceeding",
      "Parking matches only the white arrows",
      "Give way to right-lane vehicles only"
    ],
    correctAnswerIndex: 1,
    explanation: "The Stop Sign is regulatory. You must always bring your vehicle to a complete halt behind the white line, evaluate merging traffic, and move only when secure."
  },
  {
    id: "q2",
    signName: "No Entry (Dakhla Mamnoo)",
    category: TrafficSignCategory.REGULATORY,
    symbol: "禁止 Entry",
    svgType: "no-entry",
    options: [
      "No entering for heavy vehicles only",
      "No parking allowed on this street",
      "Entry prohibited for all vehicles on this route",
      "One way traffic starts here, keep left"
    ],
    correctAnswerIndex: 2,
    explanation: "This regulatory bar forbids any motorist from entering or driving down a designated street, usually found at one-way exits."
  },
  {
    id: "q3",
    signName: "Speed Limit 50 (Raftar ki Hadd)",
    category: TrafficSignCategory.REGULATORY,
    symbol: "50",
    svgType: "speed-50",
    options: [
      "Minimum speed must be 50 km/h",
      "Recommended travel speed is 50 km/h",
      "Maximum allowed speed limit is 50 km/h",
      "Distance to destination is 50 km"
    ],
    correctAnswerIndex: 2,
    explanation: "A red circle with a number imposes a regulatory maximum limit. Exceeding 50 km/h is illegal and carries an automatic ticket in Punjab traffic circles."
  },
  {
    id: "q4",
    signName: "No Honking (Harn Bajana Mana Hai)",
    category: TrafficSignCategory.REGULATORY,
    symbol: "HORN",
    svgType: "no-honking",
    options: [
      "Always honk near crossings",
      "Do not use vehicle horn except in emergency (Silence Zone)",
      "High pitch horn warning siren area",
      "Damaged noise sensor ahead"
    ],
    correctAnswerIndex: 1,
    explanation: "Placed adjacent to hospitals, schools, and court complexes to maintain silence. Honking is restricted here unless directly required to stave off a collision."
  },
  {
    id: "q5",
    signName: "U-Turn Prohibited (U-Turn Mamnoo)",
    category: TrafficSignCategory.REGULATORY,
    symbol: "U-TURN",
    svgType: "u-turn-prohibited",
    options: [
      "Sharply turn left immediately",
      "Taking a U-turn is strictly forbidden on this stretch",
      "One-way lane loop ahead",
      "Look out for merging right traffic"
    ],
    correctAnswerIndex: 1,
    explanation: "This regulatory sign indicates that drivers are not permitted to change direction back in the opposite direction on this roadway."
  },
  {
    id: "q6",
    signName: "School Ahead (School Hai)",
    category: TrafficSignCategory.WARNING,
    symbol: "CHILDREN",
    svgType: "school-ahead",
    options: [
      "Children playground area, no cars allowed",
      "School crossing ahead - drive slowly and prepare to yield to pupils",
      "Pedestrians crossing standard speed corridor",
      "Bus stop for student drop downs"
    ],
    correctAnswerIndex: 1,
    explanation: "A triangular warning sign alerts you to high child presence. Slow down substantially and watch road margins closely for children attempting to cross."
  },
  {
    id: "q7",
    signName: "Narrow Bridge Ahead (Tang Pul)",
    category: TrafficSignCategory.WARNING,
    symbol: "BRIDGE",
    svgType: "narrow-bridge",
    options: [
      "Toll booth gate coming next",
      "Steep vertical climb ahead",
      "Road narrows into a bridge - reduce speed and adapt to oncoming cars",
      "Keep right lane only"
    ],
    correctAnswerIndex: 2,
    explanation: "Warns of a physical narrowing. Vehicles on a narrow bridge must adjust spacing, and slow to cross securely without side impacts."
  },
  {
    id: "q8",
    signName: "Hospital Nearby (Haspataal)",
    category: TrafficSignCategory.INFORMATIONAL,
    symbol: "H",
    svgType: "hospital",
    options: [
      "Hotel rooms available",
      "Helicopter landing pad",
      "General Parking zones",
      "Hospital facility area - drive quiet and keep alert"
    ],
    correctAnswerIndex: 3,
    explanation: "A blue rectangular informational sign informing you that a medical facility is situated nearby, usually with quiet road speed thresholds."
  }
];
