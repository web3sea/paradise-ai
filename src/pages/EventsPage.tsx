
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Clock,
  Users,
  Video,
  ArrowRight,
  Star,
  ExternalLink
} from "lucide-react";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Weekly Community Hangouts
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join us every Friday for our weekly community hangouts where we discuss AI automation, share insights, and connect with fellow digital nomads
          </p>
        </div>

        {/* Weekly Hangout */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">This Week's Hangout</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-l-4 border-l-primary">
              <div className="grid md:grid-cols-3 gap-6 p-6">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      Weekly Hangout
                    </Badge>
                    <Badge variant="outline">
                      Online
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Friday Community Hangout
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    Join our weekly community gathering to discuss AI automation trends, share your latest projects, get feedback, and connect with like-minded digital nomads from around the world.
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Every Friday
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Time varies by week
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      Open to all community members
                    </div>
                    <div className="flex items-center gap-1">
                      <Video className="h-4 w-4" />
                      Online via Video Call
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">What to expect:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• AI automation news and trends</li>
                      <li>• Community project showcases</li>
                      <li>• Q&A sessions with Noah</li>
                      <li>• Networking with fellow nomads</li>
                      <li>• Tips for geo-arbitrage and remote work</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-4">
                  <Button variant="cta" className="w-full" asChild>
                    <a 
                      href="https://lu.ma/neydsdl3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Join This Friday
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Free for all community members
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* What We Cover */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            What We Cover in Our Hangouts
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gradient-card text-center">
              <CardHeader>
                <Video className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Live Discussions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Interactive conversations about the latest AI tools, automation strategies, and industry trends
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Community Showcase</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Members share their latest AI automation projects, wins, and lessons learned
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card text-center">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Expert Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Direct access to Noah's expertise and personalized advice for your automation journey
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="text-center">
          <Card className="bg-gradient-hero text-white p-12">
            <CardContent className="p-0">
              <Calendar className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <h2 className="text-3xl font-bold mb-4">Never Miss A Hangout</h2>
              <p className="text-xl mb-8 opacity-90">
                Get notified about our weekly Friday hangouts and other community events
              </p>
              <Button size="xl" variant="cta" className="mb-4" asChild>
                <a 
                  href="https://lu.ma/neydsdl3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Join Our Next Hangout
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
              <p className="text-sm opacity-75">Free community event • All welcome</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default EventsPage;
