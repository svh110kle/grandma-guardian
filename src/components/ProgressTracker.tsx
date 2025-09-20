import { Trophy, Target, BookOpen, MessageSquare, Shield, Star, TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const ProgressTracker = () => {
  const achievements = [
    {
      id: 1,
      title: "Message Detective",
      description: "Checked 5 messages for safety",
      icon: MessageSquare,
      earned: true,
      points: 100,
      color: "text-primary"
    },
    {
      id: 2,
      title: "Story Scholar", 
      description: "Read 3 safety stories",
      icon: BookOpen,
      earned: true,
      points: 150,
      color: "text-secondary"
    },
    {
      id: 3,
      title: "Digital Guardian",
      description: "Complete 7 days of learning",
      icon: Shield,
      earned: false,
      points: 200,
      color: "text-accent"
    },
    {
      id: 4,
      title: "Safety Mentor",
      description: "Share knowledge with family",
      icon: Star,
      earned: false,
      points: 300,
      color: "text-accent"
    }
  ];

  const weeklyGoals = [
    {
      title: "Check 3 messages",
      current: 2,
      target: 3,
      description: "Practice identifying safe vs unsafe messages"
    },
    {
      title: "Read 2 stories",
      current: 1,
      target: 2,
      description: "Learn through familiar tales and examples"
    },
    {
      title: "Daily safety tip",
      current: 5,
      target: 7,
      description: "Review one safety tip each day"
    }
  ];

  const learningStats = {
    messagesChecked: 12,
    storiesRead: 8,
    safetyTipsLearned: 25,
    daysActive: 14,
    totalPoints: 850,
    currentLevel: "Safety Explorer",
    nextLevel: "Digital Guardian"
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-foreground">Your Learning Journey</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Track your progress and celebrate your achievements in digital safety.
        </p>
      </div>

      {/* Current Level & Points */}
      <Card className="bg-primary-soft border-primary">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary rounded-full">
              <Trophy className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-3xl text-primary">{learningStats.currentLevel}</CardTitle>
          <CardDescription className="text-xl">
            {learningStats.totalPoints} points earned • {learningStats.daysActive} days active
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-2">Progress to {learningStats.nextLevel}</p>
            <Progress value={65} className="h-3" />
            <p className="text-sm text-muted-foreground mt-2">350 more points needed</p>
          </div>
        </CardContent>
      </Card>

      {/* Learning Statistics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="text-center pb-3">
            <MessageSquare className="h-10 w-10 text-primary mx-auto mb-2" />
            <CardTitle className="text-3xl text-primary">{learningStats.messagesChecked}</CardTitle>
            <CardDescription className="text-lg">Messages Checked</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="text-center pb-3">
            <BookOpen className="h-10 w-10 text-secondary mx-auto mb-2" />
            <CardTitle className="text-3xl text-secondary">{learningStats.storiesRead}</CardTitle>
            <CardDescription className="text-lg">Stories Read</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="text-center pb-3">
            <Shield className="h-10 w-10 text-accent mx-auto mb-2" />
            <CardTitle className="text-3xl text-accent">{learningStats.safetyTipsLearned}</CardTitle>
            <CardDescription className="text-lg">Safety Tips</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="text-center pb-3">
            <Calendar className="h-10 w-10 text-success mx-auto mb-2" />
            <CardTitle className="text-3xl text-success">{learningStats.daysActive}</CardTitle>
            <CardDescription className="text-lg">Days Learning</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Weekly Goals */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Target className="h-8 w-8 text-accent" />
            This Week's Goals
          </CardTitle>
          <CardDescription className="text-lg">
            Complete these goals to earn bonus points and achievements!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {weeklyGoals.map((goal, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{goal.title}</h3>
                <Badge variant={goal.current >= goal.target ? "default" : "secondary"}>
                  {goal.current}/{goal.target}
                </Badge>
              </div>
              <Progress value={(goal.current / goal.target) * 100} className="h-2" />
              <p className="text-muted-foreground">{goal.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Trophy className="h-8 w-8 text-accent" />
            Your Achievements
          </CardTitle>
          <CardDescription className="text-lg">
            Badges you've earned on your digital safety journey.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className={`${achievement.earned ? 'bg-success-soft border-success' : 'bg-muted border-border opacity-60'}`}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${achievement.earned ? 'bg-success' : 'bg-muted-foreground'}`}>
                      <achievement.icon className={`h-8 w-8 ${achievement.earned ? 'text-success-foreground' : 'text-muted'}`} />
                    </div>
                    <div>
                      <CardTitle className={`text-xl ${achievement.earned ? 'text-success' : 'text-muted-foreground'}`}>
                        {achievement.title}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {achievement.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant={achievement.earned ? "default" : "secondary"}>
                      {achievement.earned ? "Earned!" : "Locked"}
                    </Badge>
                    <span className={`text-lg font-semibold ${achievement.earned ? 'text-success' : 'text-muted-foreground'}`}>
                      +{achievement.points} points
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Motivation Section */}
      <Card className="bg-accent-soft border-accent text-center">
        <CardHeader>
          <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
          <CardTitle className="text-2xl text-accent">Keep Up the Great Work!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-xl text-foreground">
            You're making excellent progress! Every message you check and story you read makes you safer online.
          </p>
          <p className="text-lg text-muted-foreground">
            Remember: Small daily steps lead to big safety improvements. Your family is proud of your dedication to staying safe online.
          </p>
          <Button size="lg" variant="default" className="gap-3 text-lg px-8 py-4">
            <Star className="h-6 w-6" />
            Continue Learning
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressTracker;