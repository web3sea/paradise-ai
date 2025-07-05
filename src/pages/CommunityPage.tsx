
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  MessageSquare, 
  Calendar,
  Trophy,
  Heart,
  Zap,
  ArrowRight
} from "lucide-react";

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Join Our AI Automation Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Connect with like-minded professionals, share knowledge, and accelerate your AI automation journey together
          </p>
          <Button size="xl" variant="cta" className="mb-4">
            Join Community
          </Button>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="bg-gradient-card text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">5,000+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card text-center">
            <CardContent className="p-6">
              <MessageSquare className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">15,000+</div>
              <div className="text-sm text-muted-foreground">Discussions</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card text-center">
            <CardContent className="p-6">
              <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Success Stories</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card text-center">
            <CardContent className="p-6">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">Weekly</div>
              <div className="text-sm text-muted-foreground">Live Sessions</div>
            </CardContent>
          </Card>
        </div>

        {/* What You Get */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            What You Get in Our Community
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get direct access to AI automation experts and receive personalized advice for your projects
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Peer Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn from fellow practitioners, share experiences, and collaborate on automation projects
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-primary mb-2" />
                <CardTitle>24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get help whenever you need it with our active community providing round-the-clock support
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Live Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join weekly live workshops covering the latest AI tools, techniques, and industry trends
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <Trophy className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Showcase Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Share your automation success stories and get recognition for your innovative solutions
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Networking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect with professionals from various industries and build valuable business relationships
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Community Guidelines
          </h2>
          <Card className="bg-gradient-card p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Be Respectful</h3>
                <p className="text-muted-foreground mb-6">
                  Treat all community members with respect and kindness. We're all here to learn and grow together.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">Share Knowledge</h3>
                <p className="text-muted-foreground">
                  Help others by sharing your experiences, insights, and solutions. Knowledge grows when shared.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Stay On Topic</h3>
                <p className="text-muted-foreground mb-6">
                  Keep discussions focused on AI automation, productivity, and business growth topics.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">No Spam</h3>
                <p className="text-muted-foreground">
                  Avoid excessive self-promotion and irrelevant content. Quality over quantity always.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Join CTA */}
        <section className="text-center">
          <Card className="bg-gradient-hero text-white p-12">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold mb-4">Ready to Connect?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of AI automation enthusiasts building the future together
              </p>
              <Button size="xl" variant="cta" className="mb-4">
                <Users className="h-5 w-5 mr-2" />
                Join Our Community
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <p className="text-sm opacity-75">Free to join • Instant access</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default CommunityPage;
