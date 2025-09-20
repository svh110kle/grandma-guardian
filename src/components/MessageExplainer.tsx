import { useState } from "react";
import { Shield, AlertTriangle, CheckCircle, Volume2, Copy, Trash2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const MessageExplainer = () => {
  const [message, setMessage] = useState("");
  const [analysis, setAnalysis] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  // Mock analysis function - in real app this would call AI API
  const analyzeMessage = async () => {
    setIsAnalyzing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock analysis based on message content
    const isScam = message.toLowerCase().includes("urgent") || 
                   message.toLowerCase().includes("click here") ||
                   message.toLowerCase().includes("verify") ||
                   message.toLowerCase().includes("suspended");
    
    const mockAnalysis = {
      isScam,
      confidence: isScam ? 0.85 : 0.92,
      explanation: isScam 
        ? "This message shows signs of being a scam. It uses urgent language and asks you to click links or provide personal information."
        : "This message appears to be safe. It doesn't contain common scam indicators.",
      warnings: isScam ? [
        "Uses urgent or threatening language",
        "Asks you to click on links",
        "Requests personal information",
        "Creates false sense of emergency"
      ] : [],
      advice: isScam 
        ? "Do not click any links or provide personal information. Delete this message and report it as spam."
        : "This message seems safe, but always be cautious with personal information."
    };
    
    setAnalysis(mockAnalysis);
    setIsAnalyzing(false);
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8; // Slower for elderly users
      utterance.volume = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  const sampleMessages = [
    {
      type: "scam",
      content: "URGENT: Your bank account has been suspended. Click here immediately to verify your identity and avoid permanent closure."
    },
    {
      type: "safe",
      content: "Hi Mom, just wanted to let you know I arrived safely at the hotel. Will call you tomorrow. Love you!"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-foreground">Message Safety Checker</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Paste any message, email, or text you're unsure about. We'll help you understand if it's safe.
        </p>
      </div>

      {/* Sample Messages */}
      <Card className="bg-accent-soft">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Shield className="h-8 w-8 text-accent" />
            Try These Examples
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {sampleMessages.map((sample, index) => (
            <div key={index} className="p-4 bg-card rounded-lg border">
              <div className="flex items-center justify-between mb-3">
                <Badge variant={sample.type === "scam" ? "destructive" : "secondary"}>
                  {sample.type === "scam" ? "Example Scam" : "Example Safe Message"}
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setMessage(sample.content)}
                  className="gap-2"
                >
                  <Copy className="h-4 w-4" />
                  Try This
                </Button>
              </div>
              <p className="text-foreground leading-relaxed">{sample.content}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Message Input */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Enter Your Message</CardTitle>
          <CardDescription className="text-lg">
            Copy and paste the message you want to check below:
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Paste your message here..."
            className="min-h-32 text-lg resize-none"
          />
          
          <div className="flex gap-4 justify-center">
            <Button
              onClick={analyzeMessage}
              disabled={!message.trim() || isAnalyzing}
              size="lg"
              className="gap-3 text-lg px-8 py-4"
            >
              <Shield className="h-6 w-6" />
              {isAnalyzing ? "Checking..." : "Check Message"}
            </Button>
            
            <Button
              variant="outline"
              onClick={() => setMessage("")}
              size="lg"
              className="gap-3 text-lg px-8 py-4"
            >
              <Trash2 className="h-6 w-6" />
              Clear
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Analysis Results */}
      {analysis && (
        <Card className={`border-2 ${analysis.isScam ? 'border-destructive bg-destructive-soft' : 'border-success bg-success-soft'}`}>
          <CardHeader>
            <CardTitle className={`text-3xl flex items-center gap-4 ${analysis.isScam ? 'text-destructive' : 'text-success'}`}>
              {analysis.isScam ? (
                <AlertTriangle className="h-10 w-10" />
              ) : (
                <CheckCircle className="h-10 w-10" />
              )}
              {analysis.isScam ? "⚠️ Likely Scam" : "✅ Appears Safe"}
            </CardTitle>
            <CardDescription className="text-xl">
              Confidence: {Math.round(analysis.confidence * 100)}%
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Simple Explanation:</h3>
              <p className="text-xl leading-relaxed text-foreground">
                {analysis.explanation}
              </p>
              <Button
                variant="outline"
                size="lg"
                onClick={() => speakText(analysis.explanation)}
                className="mt-4 gap-2"
              >
                <Volume2 className="h-5 w-5" />
                Listen to Explanation
              </Button>
            </div>

            {analysis.warnings.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-destructive">Warning Signs Found:</h3>
                <ul className="space-y-2">
                  {analysis.warnings.map((warning: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 text-lg">
                      <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0" />
                      {warning}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3">What Should You Do?</h3>
              <p className="text-xl leading-relaxed text-foreground mb-4">
                {analysis.advice}
              </p>
              <Button
                variant="outline"
                size="lg"
                onClick={() => speakText(analysis.advice)}
                className="gap-2"
              >
                <Volume2 className="h-5 w-5" />
                Listen to Advice
              </Button>
            </div>

            {analysis.isScam && (
              <div className="text-center">
                <Button
                  variant="destructive"
                  size="lg"
                  onClick={() => toast({
                    title: "Family Notified",
                    description: "We've sent a notification to your trusted contacts about this suspicious message.",
                  })}
                  className="gap-3 text-lg px-8 py-4"
                >
                  <AlertTriangle className="h-6 w-6" />
                  Notify My Family
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MessageExplainer;