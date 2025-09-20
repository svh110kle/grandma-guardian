import { useState } from "react";
import { Shield, MessageSquare, BookOpen, TrendingUp, Volume2, Users, HelpCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MessageExplainer from "@/components/MessageExplainer";
import StoryLearning from "@/components/StoryLearning";
import ProgressTracker from "@/components/ProgressTracker";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-10 w-10 text-primary" />
              <div>
                <h1 className="text-3xl font-bold text-foreground">Smart Ajji</h1>
                <p className="text-lg text-muted-foreground">Your trusted digital safety companion</p>
              </div>
            </div>
            <Button variant="outline" size="lg" className="gap-2">
              <Volume2 className="h-5 w-5" />
              Audio Help
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-primary-soft py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { id: "home", label: "Home", icon: Shield },
              { id: "messages", label: "Check Messages", icon: MessageSquare },
              { id: "stories", label: "Learn Stories", icon: BookOpen },
              { id: "progress", label: "My Progress", icon: TrendingUp },
              { id: "help", label: "Ask for Help", icon: HelpCircle },
            ].map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                variant={activeTab === id ? "default" : "secondary"}
                size="lg"
                onClick={() => setActiveTab(id)}
                className="gap-3 text-lg px-8 py-4 h-auto"
              >
                <Icon className="h-6 w-6" />
                {label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {activeTab === "home" && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={heroImage} 
                alt="Elderly person safely using technology with digital protection"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
                <div className="container mx-auto px-6 text-center text-primary-foreground">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Your Digital Safety Hub</h2>
                  <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                    Stay safe online with simple tools and stories that help you recognize scams and protect your personal information.
                  </p>
                  <Button size="xl" variant="secondary" className="mt-6 gap-3">
                    <Shield className="h-8 w-8" />
                    Start Learning Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab("messages")}>
                <CardHeader className="text-center">
                  <MessageSquare className="h-16 w-16 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">Check a Message</CardTitle>
                  <CardDescription className="text-lg">
                    Not sure if a message is safe? Let us help you understand it.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="lg" className="w-full text-lg py-4">
                    Check Message Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab("stories")}>
                <CardHeader className="text-center">
                  <BookOpen className="h-16 w-16 text-secondary mx-auto mb-4" />
                  <CardTitle className="text-2xl">Learn with Stories</CardTitle>
                  <CardDescription className="text-lg">
                    Understand online safety through familiar stories and examples.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="secondary" size="lg" className="w-full text-lg py-4">
                    Start Learning
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab("progress")}>
                <CardHeader className="text-center">
                  <TrendingUp className="h-16 w-16 text-accent mx-auto mb-4" />
                  <CardTitle className="text-2xl">Your Progress</CardTitle>
                  <CardDescription className="text-lg">
                    See how much you've learned and earned digital safety achievements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="lg" className="w-full text-lg py-4">
                    View Progress
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Additional Resources */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Additional Resources</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Quick Reference Guide", desc: "Important phone numbers and safety reminders", icon: "📋" },
                  { title: "Family Contact List", desc: "Keep trusted contacts easily accessible", icon: "👨‍👩‍👧‍👦" },
                  { title: "Safe Website List", desc: "Legitimate websites for banking and shopping", icon: "🔗" },
                  { title: "Daily Safety Checklist", desc: "Simple daily habits to stay safe online", icon: "✅" }
                ].map((resource, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <span className="text-3xl">{resource.icon}</span>
                        <div>
                          <h4 className="font-semibold text-lg">{resource.title}</h4>
                          <p className="text-muted-foreground">{resource.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Today's Safety Tip */}
            <Card className="bg-success-soft border-success">
              <CardHeader>
                <CardTitle className="text-2xl text-success flex items-center gap-3">
                  <Shield className="h-8 w-8" />
                  Today's Safety Tip
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-foreground leading-relaxed">
                  Remember: Real banks will never ask for your password or PIN through email or text messages. 
                  When in doubt, call your bank directly using the number on your card.
                </p>
                <Button variant="outline" size="lg" className="mt-4 gap-2">
                  <Volume2 className="h-5 w-5" />
                  Listen to Tip
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "messages" && <MessageExplainer />}
        {activeTab === "stories" && <StoryLearning />}
        {activeTab === "progress" && <ProgressTracker />}
        
        {activeTab === "help" && (
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-foreground">How Can We Help?</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <MessageSquare className="h-8 w-8 text-primary" />
                    Ask About a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-4">Get immediate help understanding any suspicious message or email.</p>
                  <Button size="lg" className="w-full" onClick={() => setActiveTab("messages")}>
                    Check Message
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Users className="h-8 w-8 text-secondary" />
                    Call Family
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-4">When in doubt, it's always safe to call a trusted family member.</p>
                  <Button variant="secondary" size="lg" className="w-full">
                    Family Contacts
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;