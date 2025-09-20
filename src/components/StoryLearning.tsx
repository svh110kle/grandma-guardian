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
      id: 2,
      title: "The Golden Goose Scam",
      type: "Fable Adaptation", 
      duration: "4 minutes",
      difficulty: "Beginner",
      description: "Understand get-rich-quick scams through a familiar fable.",
      content: `In a small town, there lived a wise woman named Martha who received a phone call one day.

"Congratulations!" said the caller. "You've won a million dollars! Just send us $500 for processing fees and taxes."

This reminded Martha of the old fable about the golden goose. The greedy people wanted all the golden eggs at once and ended up with nothing.

Martha thought: "If I really won money, why would I need to pay to receive it? This sounds like the greedy people in the fable - they want my $500 and will disappear like smoke."

She hung up the phone and called her son to tell him about the suspicious call. Her son confirmed it was a common scam.

Martha learned that real prizes never require upfront payment, just like real golden geese don't need you to pay them to lay eggs!`,
      lesson: "Real prizes never require upfront payments. If it sounds too good to be true, it probably is.",
      category: "Phone Scams"
    },
    {
      id: 3,
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