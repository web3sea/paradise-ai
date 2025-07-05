
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap,
  Target,
  Heart,
  Globe,
  Users,
  TrendingUp,
  Award,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const AboutPage = () => {
  const stats = [
    { label: "Students Taught", value: "10,000+", icon: Users },
    { label: "Automation Workflows Built", value: "500+", icon: Zap },
    { label: "Businesses Transformed", value: "200+", icon: TrendingUp },
    { label: "Countries Reached", value: "50+", icon: Globe }
  ];

  const values = [
    {
      icon: Target,
      title: "Practical Learning",
      description: "Every course is built from real-world experience, ensuring you learn skills that actually work in practice."
    },
    {
      icon: Heart,
      title: "Community First",
      description: "We believe in the power of community and mutual support in the journey of AI automation mastery."
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Stay ahead of the curve with cutting-edge AI automation techniques and emerging technologies."
    },
    {
      icon: CheckCircle,
      title: "Results Driven",
      description: "Our success is measured by your success. We're committed to helping you achieve tangible results."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About AI Paradise
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Empowering individuals and businesses to harness the transformative power of AI automation
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <Card className="bg-gradient-hero text-white p-12">
            <CardContent className="p-0 text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl opacity-90 max-w-4xl mx-auto">
                To democratize AI automation by making it accessible, practical, and profitable for everyone. 
                We believe that with the right knowledge and tools, anyone can leverage AI to create more 
                efficient workflows, scale their business, and unlock new opportunities.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-card text-center">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  AI Paradise was born from a simple observation: while AI automation has incredible 
                  potential to transform businesses and lives, most people don't know where to start 
                  or how to implement it effectively.
                </p>
                <p>
                  Drawing from extensive experience in building AI automation systems for businesses 
                  across various industries, we recognized the need for practical, accessible education 
                  that bridges the gap between complex AI technology and real-world applications.
                </p>
                <p>
                  Today, we're proud to have helped thousands of individuals and businesses unlock 
                  the power of AI automation, creating more efficient workflows, reducing manual work, 
                  and opening new possibilities for growth and innovation.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=400&fit=crop" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card">
                <CardHeader>
                  <value.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Instructor Section */}
        <section className="mb-16">
          <Card className="bg-gradient-card p-8">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <img 
                  src="/lovable-uploads/0f77d9e8-34b9-4e8e-9ba2-81e8d582636d.png" 
                  alt="Noah - Lead Instructor" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-foreground">Noah</h3>
                <p className="text-muted-foreground">Lead Instructor & Founder</p>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-foreground mb-4">Meet Your Instructor</h3>
                <p className="text-muted-foreground mb-4">
                  With extensive experience in AI automation and a passion for teaching, Noah has 
                  helped hundreds of businesses streamline their operations and unlock new growth 
                  opportunities through intelligent automation.
                </p>
                <p className="text-muted-foreground mb-6">
                  Having worked with companies across various industries, Noah brings real-world 
                  insights and practical expertise to every course, ensuring students learn not 
                  just the theory, but how to implement solutions that deliver measurable results.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AI Automation Expert</Badge>
                  <Badge variant="secondary">Business Consultant</Badge>
                  <Badge variant="secondary">Community Builder</Badge>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Why Choose AI Paradise?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Expert-Led Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn from practitioners with real-world experience building and implementing 
                  AI automation solutions
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Supportive Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join a thriving community of learners and practitioners who support each other's 
                  growth and success
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Practical Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every lesson is designed to provide actionable knowledge you can immediately 
                  apply to your work or business
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-gradient-hero text-white p-12">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of students who are already transforming their careers and businesses with AI automation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="xl" variant="cta">
                  Explore Courses
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button size="xl" variant="hero">
                  Join Community
                  <Users className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
