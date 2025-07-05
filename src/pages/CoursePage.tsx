
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  PlayCircle, 
  Clock, 
  Users, 
  CheckCircle,
  Award,
  Download
} from "lucide-react";

// Course data inspired by AI automation services
const mockCourseData: Record<string, any> = {
  "1": {
    title: "AI Workflow Automation Fundamentals",
    subtitle: "Build Intelligent Systems That Work for You",
    level: "Beginner",
    duration: "4 hours",
    students: 1250,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    instructor: {
      name: "Noah",
      bio: "AI Automation Specialist with experience building scalable systems for businesses",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
    },
    whatYouLearn: [
      "Design intelligent automation workflows",
      "Connect multiple AI tools seamlessly",
      "Optimize business processes with AI",
      "Build scalable automation systems",
      "Implement no-code AI solutions"
    ],
    modules: [
      {
        title: "Introduction to AI Automation",
        lessons: ["Understanding AI Workflows", "Identifying Automation Opportunities", "Planning Your First System"],
        duration: "45 min"
      },
      {
        title: "Building Your First Workflow",
        lessons: ["Tool Selection", "Connection Setup", "Testing and Optimization"],
        duration: "90 min"
      },
      {
        title: "Advanced Automation Patterns",
        lessons: ["Multi-step Workflows", "Conditional Logic", "Error Handling"],
        duration: "120 min"
      },
      {
        title: "Scaling Your Systems",
        lessons: ["Performance Optimization", "Monitoring Setup", "Maintenance Best Practices"],
        duration: "75 min"
      }
    ],
    bonuses: [
      "AI Automation Toolkit & Templates",
      "Community Access",
      "Live Implementation Sessions",
      "Certificate of Completion"
    ]
  },
  "2": {
    title: "Custom AI Agent Development",
    subtitle: "Create Intelligent Assistants for Your Business",
    level: "Intermediate",
    duration: "6 hours",
    students: 850,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    instructor: {
      name: "Noah",
      bio: "AI Automation Specialist with experience building scalable systems for businesses",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
    },
    whatYouLearn: [
      "Design custom AI agents",
      "Implement conversational interfaces",
      "Integrate with business systems",
      "Deploy and manage AI assistants",
      "Monitor agent performance"
    ],
    modules: [
      {
        title: "AI Agent Fundamentals",
        lessons: ["Agent Architecture", "Use Case Analysis", "Design Principles"],
        duration: "60 min"
      },
      {
        title: "Building Your Agent",
        lessons: ["Core Logic Implementation", "Integration Setup", "Testing Protocols"],
        duration: "150 min"
      },
      {
        title: "Advanced Features",
        lessons: ["Memory Systems", "Context Management", "Multi-modal Capabilities"],
        duration: "120 min"
      },
      {
        title: "Deployment & Management",
        lessons: ["Production Setup", "Monitoring Systems", "Continuous Improvement"],
        duration: "90 min"
      }
    ],
    bonuses: [
      "Agent Template Library",
      "Integration Code Examples",
      "Deployment Checklists",
      "Expert Office Hours"
    ]
  }
};

const CoursePage = () => {
  const { id } = useParams();
  const course = mockCourseData[id || ""];

  if (!course) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Course Not Found</h1>
          <p className="text-muted-foreground">The course you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              {course.level} Course
            </Badge>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {course.title}
            </h1>
            
            <p className="text-xl text-muted-foreground">
              {course.subtitle}
            </p>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {course.duration}
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {course.students.toLocaleString()} enrolled
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-gradient-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
              <Button size="xl" variant="cta" className="w-full mb-4">
                Enroll Now - Start Learning Today
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Join thousands of students already learning
              </p>
            </div>
          </div>
          
          {/* Video Preview */}
          <div className="space-y-4">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <iframe
                src={course.videoUrl}
                title="Course Preview"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Watch the course introduction
            </p>
          </div>
        </div>

        {/* What You'll Learn */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {course.whatYouLearn.map((item: string, index: number) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Course Curriculum */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Course Curriculum</h2>
          <div className="space-y-4">
            {course.modules.map((module: any, index: number) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      Module {index + 1}: {module.title}
                    </h3>
                    <Badge variant="outline">{module.duration}</Badge>
                  </div>
                  <ul className="space-y-2">
                    {module.lessons.map((lesson: string, lessonIndex: number) => (
                      <li key={lessonIndex} className="flex items-center gap-2 text-muted-foreground">
                        <PlayCircle className="h-4 w-4" />
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Bonuses */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Course Includes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {course.bonuses.map((bonus: string, index: number) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gradient-card rounded-lg">
                <Award className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground font-medium">{bonus}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Instructor */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Meet Your Instructor</h2>
          <Card className="bg-card">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <img 
                  src={course.instructor.image} 
                  alt={course.instructor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {course.instructor.name}
                  </h3>
                  <p className="text-muted-foreground">{course.instructor.bio}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <Card className="bg-gradient-hero text-white p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold mb-4">Ready to Master AI Automation?</h2>
              <p className="text-xl mb-6 opacity-90">
                Join {course.students.toLocaleString()}+ students building the future with AI
              </p>
              <Button size="xl" variant="cta" className="mb-4">
                Start Your Journey Today
              </Button>
              <p className="text-sm opacity-75">Begin learning immediately after enrollment</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default CoursePage;
