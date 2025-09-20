// Demo data for the cybersecurity education app

export const sampleMessages = [
  {
    id: 1,
    type: "scam" as const,
    content: "URGENT: Your bank account has been suspended due to suspicious activity. Click here immediately to verify your identity and avoid permanent closure. Act now!",
    analysis: {
      isScam: true,
      confidence: 0.92,
      explanation: "This message shows clear signs of being a scam. It uses urgent language, creates false panic, and asks you to click links immediately.",
      warnings: [
        "Uses urgent or threatening language",
        "Creates false sense of emergency", 
        "Asks you to click on suspicious links",
        "Claims your account is suspended without proper verification"
      ],
      advice: "Real banks never suspend accounts via text or email without prior notice. Call your bank directly using the number on your card to verify any account issues."
    }
  },
  {
    id: 2,
    type: "scam" as const,
    content: "Congratulations! You've won $50,000 in our lottery! To claim your prize, please send $200 for processing fees to claim your winnings immediately.",
    analysis: {
      isScam: true,
      confidence: 0.95,
      explanation: "This is a classic lottery scam. Real prizes never require upfront payments, and you cannot win contests you never entered.",
      warnings: [
        "Claims you won money without entering a contest",
        "Asks for upfront payment to claim prize",
        "Uses exciting language to create false hope",
        "No legitimate contact information provided"
      ],
      advice: "Delete this message immediately. Real prizes are free to claim. Never send money to receive money - this is always a scam."
    }
  },
  {
    id: 3,
    type: "safe" as const,
    content: "Hi Grandma, just wanted to let you know I arrived safely at college. Classes start tomorrow. Will call you this weekend. Love you!",
    analysis: {
      isScam: false,
      confidence: 0.98,
      explanation: "This appears to be a genuine personal message from a family member. It doesn't ask for money or personal information.",
      warnings: [],
      advice: "This message seems safe. It's a normal family check-in. If you want to be extra careful, you can always call back to confirm."
    }
  },
  {
    id: 4,
    type: "safe" as const,
    content: "Your prescription is ready for pickup at CVS Pharmacy. Store hours: Mon-Fri 9AM-9PM, Sat-Sun 9AM-6PM. Questions? Call (555) 123-4567.",
    analysis: {
      isScam: false,
      confidence: 0.89,
      explanation: "This looks like a legitimate pharmacy notification. It provides store hours and a phone number to call with questions.",
      warnings: [],
      advice: "This message appears legitimate. You can always call the pharmacy directly using the number on your prescription bottle if you want to verify."
    }
  }
];

export const safetyTips = [
  {
    id: 1,
    title: "The Golden Rule of Passwords",
    content: "Never share your passwords through email, text, or phone calls. Real companies will never ask for your password this way.",
    category: "Password Safety"
  },
  {
    id: 2,
    title: "When in Doubt, Call",
    content: "If you receive a suspicious message claiming to be from your bank or a company, hang up and call them directly using the number on your card or statement.",
    category: "Verification"
  },
  {
    id: 3,
    title: "The Gift That Costs Money Isn't a Gift",
    content: "Real prizes and gifts never require you to pay fees upfront. If someone asks you to pay to receive money, it's always a scam.",
    category: "Prize Scams"
  }
];

export const achievementTemplates = [
  {
    title: "First Steps",
    description: "Completed your first message check",
    points: 50,
    icon: "shield"
  },
  {
    title: "Story Time",
    description: "Read your first safety story",
    points: 75,
    icon: "book"
  },
  {
    title: "Weekly Warrior",
    description: "Used the app 5 days in a row",
    points: 200,
    icon: "star"
  }
];