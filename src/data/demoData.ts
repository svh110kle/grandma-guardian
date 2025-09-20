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
  },
  {
    id: 4,
    title: "Social Media Safety",
    content: "Be careful about sharing personal information on social media. Scammers use this information to make their tricks seem more real.",
    category: "Social Media"
  },
  {
    id: 5,
    title: "Email Safety Rules",
    content: "Don't click on links in unexpected emails, especially if they ask for personal information. Type website addresses directly into your browser instead.",
    category: "Email Safety"
  },
  {
    id: 6,
    title: "Phone Call Safety",
    content: "Never give personal information to unexpected callers. If they claim to be from a company you use, hang up and call that company directly.",
    category: "Phone Safety"
  },
  {
    id: 7,
    title: "Online Shopping Safety",
    content: "Only shop on secure websites (look for 'https' and a lock icon). Use credit cards instead of debit cards for better protection.",
    category: "Online Shopping"
  },
  {
    id: 8,
    title: "Family Emergency Scams",
    content: "If someone calls claiming a family member is in trouble and needs money, hang up and call your family member directly to verify.",
    category: "Family Scams"
  }
];

export const safetyStories = [
  {
    id: 1,
    title: "The Tale of the Fake Nephew",
    content: "Once upon a time, Mrs. Sharma received a call from someone claiming to be her nephew in jail. Like in the story of the boy who cried wolf, this caller was lying. Mrs. Sharma was smart - she hung up and called her nephew directly. He was safe at home! The moral: Always verify unexpected emergency calls by contacting your family directly.",
    category: "Family Emergency Scams",
    moral: "Trust but verify - especially when someone claims there's an emergency."
  },
  {
    id: 2,
    title: "The Merchant and the Golden Email",
    content: "Like the tale of the merchant who was offered fool's gold, Mr. Patel received an email saying he won a lottery he never entered. The email promised golden riches but asked for silver coins first. A wise merchant knows - real gold doesn't cost money to claim! Mr. Patel deleted the email and kept his silver coins safe.",
    category: "Prize Scams",
    moral: "Real prizes are free to claim - anything else is fool's gold."
  },
  {
    id: 3,
    title: "The Password Guardian",
    content: "In ancient times, only the king knew the secret word to enter the royal treasury. Today, your password is like that secret word - it protects your digital treasury. Just as the king never shared his secret word with messengers, never share your password with emails or phone calls claiming to need it.",
    category: "Password Safety",
    moral: "Guard your passwords like a king guards his treasury."
  }
];

export const additionalResources = [
  {
    title: "Quick Reference Guide",
    description: "Important phone numbers and safety reminders you can print and keep handy",
    type: "reference"
  },
  {
    title: "Family Contact List", 
    description: "Keep your trusted family members' contact information easily accessible",
    type: "contacts"
  },
  {
    title: "Safe Website List",
    description: "A list of legitimate websites for banking, shopping, and services you use",
    type: "websites"
  },
  {
    title: "Daily Safety Checklist",
    description: "Simple daily habits to stay safe online",
    type: "checklist"
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