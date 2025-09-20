import { useState } from "react";
import { BookOpen, Play, Volume2, Star, Clock, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const StoryLearning = () => {
  const [selectedStory, setSelectedStory] = useState<any>(null);

  const stories = [
    {
      id: 1,
      title: "Ravana's Digital Maya - The Great Deception",
      type: "Ramayana Adaptation",
      duration: "7 minutes",
      difficulty: "Beginner",
      description: "Learn about phishing and social engineering through Ravana's tricks from the Ramayana.",
      content: `In the Ramayana, the mighty Ravana used Maya (illusion) to deceive Sita Mata. He appeared as a humble sadhu (holy man) asking for alms, hiding his true demon identity.

Today, cyber criminals use the same Maya! Mrs. Lakshmi received an email that looked exactly like it came from her bank. Just like Ravana's disguise, it seemed trustworthy on the surface.

The email said: "Namaste! Your account needs immediate verification. Click here to protect your savings." It even had the bank's logo and colors!

But Mrs. Lakshmi remembered her grandson's advice: "Ajji, just like Sita should have stayed within Lakshman Rekha's protection, never click links in suspicious emails."

She thought: "If Hanuman always verified before acting, I should too!" Instead of clicking, she called her bank directly.

The bank confirmed - it was fake! Just like Ravana's Maya, the email was a dangerous illusion designed to steal her information.

Remember: Like Ram defeated Ravana's Maya with wisdom, we defeat cyber Maya by verifying first!`,
      lesson: "Cybercriminals use digital Maya to appear trustworthy. Always verify independently, just like crossing Lakshman Rekha safely.",
      category: "Phishing Protection"
    },
    {
      id: 2,
      title: "Duryodhana's Gambling House - The Digital Dice Game",
      type: "Mahabharata Adaptation",
      duration: "8 minutes",
      difficulty: "Intermediate", 
      description: "Understanding online financial scams through the unfair gambling in Mahabharata.",
      content: `In the Mahabharata, Duryodhana invited the Pandavas to a rigged dice game. The game seemed fair, but Shakuni's magical dice ensured the Pandavas would lose everything.

Mr. Krishnan received a phone call: "Sir, you've been selected for our special investment scheme! Double your money in just one week! Many people from your area have already benefited."

This reminded him of Duryodhana's trap. The caller was like Shakuni - the game was rigged from the start!

The caller said: "Just send ₹50,000 to start. Our company is registered and legitimate!" But Mr. Krishnan remembered how even Yudhishthira, the most righteous man, fell for the gambling trap.

He thought: "If Krishna advised the Pandavas to be cautious of too-good-to-be-true offers, I should be too!"

Mr. Krishnan said: "If your scheme is so profitable, why do you need my money? Real businesses don't work this way."

He hung up and later learned it was a Ponzi scheme - a modern dice game where only the scammers win!

Like Krishna's wisdom saved the Pandavas eventually, knowledge protects us from digital gambling traps.`,
      lesson: "Investment schemes promising quick, guaranteed returns are like Shakuni's rigged dice - designed to make you lose.",
      category: "Investment Fraud"
    },
    {
      id: 3,
      title: "The Maya of Fake Apps - Vishnu's Avatar Wisdom",
      type: "Mythological Wisdom",
      duration: "6 minutes",
      difficulty: "Beginner",
      description: "Learn to identify fake apps and websites using the concept of avatars and true identity.",
      content: `In our scriptures, Lord Vishnu takes many avatars, but there are also false gods who pretend to be divine. Devotees learned to identify the true avatars by their actions and divine qualities.

Mrs. Sudha wanted to pay her electricity bill online. She searched "electricity board payment" and found an app that looked official. It had the right colors and logo!

But her daughter had taught her: "Amma, just like we verify a temple's authenticity before offering prayers, always check if an app is real before entering your details."

The fake app was like a false god - it looked divine but had evil intentions! 

Mrs. Sudha noticed warning signs:
- The app asked for more permissions than needed (like a false guru asking for unnecessary donations)
- It had poor reviews (like a temple with unhappy devotees)
- The grammar was poor (true divinity speaks clearly)

She downloaded the official app from her state electricity board's website instead. Just like devotees find peace in authentic temples, she paid her bill safely through the real app.

Remember: Just as we verify the authenticity of our spiritual guides, always verify your digital tools!`,
      lesson: "Verify app authenticity like verifying a temple - check official sources, reviews, and trust your instincts.",
      category: "App Safety"
    },
    {
      id: 4,
      title: "Karna's False Pride - Social Media Scams",
      type: "Mahabharata Adaptation", 
      duration: "7 minutes",
      difficulty: "Intermediate",
      description: "Learn about social media scams through Karna's story of false identity and pride.",
      content: `In the Mahabharata, Karna lived his life believing he was a charioteer's son, but was actually a Kshatriya. His false identity led to many troubles and wrong decisions.

Mr. Rajesh received a friend request on Facebook from someone claiming to be his old school friend Ramesh. The profile had photos that looked like Ramesh from 30 years ago!

The fake "Ramesh" messaged: "Yaar, I'm in trouble! I'm stuck at the airport and need ₹25,000 urgently. Can you send it through UPI? I'll return it tomorrow!"

But Mr. Rajesh remembered Karna's story. Just as Karna's false identity created problems, this could be a false friend creating a scam!

He thought: "If this is really Ramesh, he would know personal details about our school days." So he asked: "Which teacher used to call you by your nickname?"

The scammer couldn't answer! Just like Karna's true identity was revealed, the fake friend was exposed.

Mr. Rajesh called the real Ramesh's phone number. His friend was safely at home and knew nothing about any airport emergency!

Like Arjuna saw through Maya in battle, we must see through digital Maya in social media.`,
      lesson: "Verify social media identities like revealing true character - ask personal questions only real friends would know.",
      category: "Social Media Fraud"
    },
    {
      id: 5,
      title: "The Wolf in Digital Clothing",
      type: "Fairy Tale Adaptation",
      duration: "5 minutes",
      difficulty: "Beginner",
      description: "Learn about phishing emails through the classic tale of Little Red Riding Hood.",
      content: `Once upon a time, there was a kind grandmother named Rose who loved using her computer to stay in touch with her family.

One day, Rose received an email that looked like it came from her bank. The email said: "Dear Customer, your account has been suspended! Click here immediately to verify your identity."

Just like the wolf pretending to be grandmother, this email was not what it seemed. The real bank would never ask for passwords through email, just like grandmother would never have such big teeth!

Rose remembered what her granddaughter taught her: "Always check twice, just like looking closely at grandmother's face." She called her bank directly instead of clicking the link.

The bank confirmed it was a fake email - a "phishing" attempt, like a digital wolf trying to trick her!

Remember: Just as Little Red Riding Hood learned to be careful, always verify before you trust suspicious messages.`,
      lesson: "Phishing emails often create false urgency. Real banks never ask for passwords via email.",
      category: "Email Safety"
    },
    {
      id: 6,
      title: "The Neighbor's Wisdom - Episode 1",
      type: "Family Drama",
      duration: "6 minutes", 
      difficulty: "Intermediate",
      description: "Follow Mrs. Patel as she helps her neighbor avoid a romance scam.",
      content: `Mrs. Patel was having tea with her neighbor Mrs. Johnson when she noticed her friend seemed troubled.

"I've been talking to a wonderful man online," Mrs. Johnson confided. "He says he loves me, but he's stuck overseas and needs money for a plane ticket to come visit me."

Mrs. Patel's heart went out to her friend, but something didn't feel right. It reminded her of the soap operas they watched together - the handsome stranger who wasn't who he claimed to be.

"My dear friend," Mrs. Patel said gently, "in all our favorite shows, what happens when someone asks for money before they've even met?"

Mrs. Johnson thought about it. "The person usually turns out to be lying..."

"Exactly! Real love doesn't start by asking for money. Let's call my tech-savvy grandson together. He can help us check if this person is real."

Together, they discovered the photos were stolen from someone else's social media. Mrs. Johnson's heart was protected, and their friendship grew stronger.

Next episode: Mrs. Patel teaches her friend about social media safety!`,
      lesson: "Online relationships that quickly ask for money are usually scams. Real love doesn't start with financial requests.",
      category: "Romance Scams"
    }
  ];

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.volume = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-foreground">Learn Through Stories</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Understanding online safety through familiar tales, family stories, and cultural wisdom.
        </p>
      </div>

      {!selectedStory ? (
        <div className="grid gap-6">
          {stories.map((story) => (
            <Card key={story.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl text-foreground">{story.title}</CardTitle>
                    <CardDescription className="text-lg">{story.description}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    {story.type}
                  </Badge>
                </div>
                
                <div className="flex flex-wrap gap-3 mt-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-5 w-5" />
                    <span className="text-lg">{story.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="h-5 w-5" />
                    <span className="text-lg">{story.difficulty}</span>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    {story.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex gap-4">
                  <Button
                    onClick={() => setSelectedStory(story)}
                    size="lg"
                    className="gap-3 text-lg px-6 py-3"
                  >
                    <BookOpen className="h-6 w-6" />
                    Read Story
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => speakText(story.content)}
                    className="gap-3 text-lg px-6 py-3"
                  >
                    <Play className="h-6 w-6" />
                    Listen
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          <Button
            variant="outline"
            onClick={() => setSelectedStory(null)}
            size="lg"
            className="gap-2"
          >
            ← Back to Stories
          </Button>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-foreground">{selectedStory.title}</CardTitle>
              <div className="flex items-center gap-4">
                <Badge variant="secondary">{selectedStory.type}</Badge>
                <Badge variant="outline">{selectedStory.category}</Badge>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5" />
                  <span className="text-lg">{selectedStory.duration}</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8">
              <div className="flex justify-center gap-4">
                <Button
                  size="lg"
                  onClick={() => speakText(selectedStory.content)}
                  className="gap-3 text-lg px-8 py-4"
                >
                  <Volume2 className="h-6 w-6" />
                  Listen to Story
                </Button>
              </div>
              
              <div className="prose max-w-none">
                <div className="text-xl leading-relaxed text-foreground whitespace-pre-line">
                  {selectedStory.content}
                </div>
              </div>
              
              <Card className="bg-secondary-soft border-secondary">
                <CardHeader>
                  <CardTitle className="text-2xl text-secondary flex items-center gap-3">
                    <Star className="h-8 w-8" />
                    Key Lesson
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl leading-relaxed text-foreground">
                    {selectedStory.lesson}
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => speakText(selectedStory.lesson)}
                    className="mt-4 gap-2"
                  >
                    <Volume2 className="h-5 w-5" />
                    Listen to Lesson
                  </Button>
                </CardContent>
              </Card>
              
              <div className="text-center">
                <Button
                  onClick={() => setSelectedStory(null)}
                  variant="secondary"
                  size="lg"
                  className="gap-3 text-lg px-8 py-4"
                >
                  <BookOpen className="h-6 w-6" />
                  Read Another Story
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Community Section */}
      <Card className="bg-accent-soft border-accent">
        <CardHeader>
          <CardTitle className="text-2xl text-accent flex items-center gap-3">
            <Users className="h-8 w-8" />
            Community Stories
          </CardTitle>
          <CardDescription className="text-lg">
            Real experiences from other community members who stayed safe online.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-foreground mb-4">
            "These stories helped me recognize when my grandson's Facebook account was hacked. 
            The real lesson from Mrs. Patel's story saved me from sending money to scammers!" 
            - Dorothy, Age 72
          </p>
          <Button variant="outline" size="lg" className="gap-2">
            <Users className="h-5 w-5" />
            Share Your Story
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default StoryLearning;