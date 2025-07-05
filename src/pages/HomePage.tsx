import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  MapPin, 
  Laptop, 
  Users, 
  Zap, 
  TrendingUp,
  Calendar,
  ExternalLink
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/60" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Master AI Automation
              <span className="block bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
                Live in Paradise
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Join Noah's exclusive community of digital nomads learning to geo-arbitrage 
              with AI automation while working remotely from paradise destinations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/join">Join the Community</Link>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <a 
                  href="https://lu.ma/neydsdl3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Next Meetup Friday <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Our Vision & Mission
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We believe the future of work is location-independent, AI-powered, and freedom-focused. 
                Our mission is to teach ambitious individuals how to build automated income streams 
                using AI while living their dream lifestyle in paradise destinations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-card shadow-card border-0 hover:shadow-float transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Vision</h3>
                  <p className="text-muted-foreground">
                    A world where technology enables true freedom - where your location 
                    doesn't limit your potential, and AI amplifies your capabilities.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card border-0 hover:shadow-float transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <Zap className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Mission</h3>
                  <p className="text-muted-foreground">
                    To empower digital nomads with cutting-edge AI automation skills, 
                    creating sustainable location-independent income streams.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              What You'll Master
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four comprehensive modules designed to transform you into an AI automation expert
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: "AI Fundamentals",
                description: "Master the core concepts of AI and machine learning"
              },
              {
                icon: Zap,
                title: "Automation Tools",
                description: "Build powerful workflows with no-code AI platforms"
              },
              {
                icon: TrendingUp,
                title: "Geo Arbitrage",
                description: "Leverage global markets and cost differences"
              },
              {
                icon: MapPin,
                title: "Remote Lifestyle",
                description: "Design your perfect nomadic lifestyle"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-card shadow-card border-0 hover:shadow-float transition-all duration-300 group">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 mx-auto flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Join Our Thriving Community
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with like-minded individuals on the same journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Active Forum",
                description: "Share insights, ask questions, and get support from the community",
                categories: ["General Discussion", "Q&A", "Newbie Corner"]
              },
              {
                icon: Calendar,
                title: "Weekly Meetups",
                description: "Virtual and in-person gatherings to network and learn together",
                categories: ["Online Sessions", "Local Meetups", "Workshops"]
              },
              {
                icon: Laptop,
                title: "Course Modules",
                description: "Structured learning path from beginner to expert level",
                categories: ["Video Lessons", "Hands-on Projects", "Assessments"]
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gradient-card shadow-card border-0 hover:shadow-float transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.categories.map((category, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-sm text-muted-foreground">{category}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90">
              Join our growing community of digital nomads who are already part of this movement. 
              Your freedom lifestyle awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/join">Join the Community</Link>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <a 
                  href="https://lu.ma/neydsdl3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Attend Next Meetup <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
