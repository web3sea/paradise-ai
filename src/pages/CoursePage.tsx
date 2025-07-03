
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  PlayCircle, 
  Clock, 
  Users, 
  Star, 
  CheckCircle,
  Award,
  Download,
  MessageSquare
} from "lucide-react";

// Mock course data - replace with Supabase data later
const mockCourseData = {
  1: {
    title: "AI Automation Fundamentals for Business Owners",
    subtitle: "Transform Your Business with AI Automation",
    price: 297,
    originalPrice: 497,
    level: "Beginner",
    duration: "4 hours",
    students: 1250,
    rating: 4.8,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    instructor: {
      name: "Noah",
      bio: "AI Automation Expert with 3+ years of agency experience in Bali",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
    },
    whatYouLearn: [
      "Master the fundamentals of AI automation",
      "Identify automation opportunities in your business",
      "Use no-code tools like Zapier and Make.com",
      "Build your first automated workflow",
      "Scale automation across your organization"
    ],
    modules: [
      {
        title: "Introduction to AI Automation",
        lessons: ["What is AI Automation?", "Business Impact & ROI", "Common Use Cases"],
        duration: "45 min"
      },
      {
        title: "No-Code Automation Tools",
        lessons: ["Zapier Fundamentals", "Make.com Advanced", "Integration Strategies"],
        duration: "90 min"
      },
      {
        title: "Building Your First Workflow",
        lessons: ["Planning Your Automation", "Implementation", "Testing & Optimization"],
        duration: "120 min"
      },
      {
        title: "Scaling Your Automation",
        lessons: ["Advanced Workflows", "Team Implementation", "Monitoring & Maintenance"],
        duration: "75 min"
      }
    ],
    bonuses: [
      "AI Automation Toolkit (Templates & Checklists)",
      "Private Community Access",
      "Monthly Live Q&A Sessions",
      "Certificate of Completion"
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "Small Business Owner",
        content: "This course transformed how I run my business. I'm saving 10 hours per week!",
        rating: 5
      },
      {
        name: "Mike Chen",
        role: "Marketing Director",
        content: "Noah's practical approach made AI automation finally click for me.",
        rating: 5
      }
    ]
  }
};

const CoursePage = () => {
  const { id } = useParams();
  const course = mockCourseData[id as keyof typeof mockCourseData];

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
                {course.students.toLocaleString()} students
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                {course.rating}
              </div>
            </div>
            
            {/* Pricing */}
            <div className="bg-gradient-card p-6 rounded-lg border">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-foreground">${course.price}</span>
                <span className="text-lg text-muted-foreground line-through">${course.originalPrice}</span>
                <Badge variant="destructive">40% OFF</Badge>
              </div>
              
              <Button size="xl" variant="cta" className="w-full mb-4">
                Enroll Now - Start Learning Today
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                30-day money-back guarantee
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
            {course.whatYouLearn.map((item, index) => (
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
            {course.modules.map((module, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      Module {index + 1}: {module.title}
                    </h3>
                    <Badge variant="outline">{module.duration}</Badge>
                  </div>
                  <ul className="space-y-2">
                    {module.lessons.map((lesson, lessonIndex) => (
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
          <h2 className="text-2xl font-bold text-foreground mb-6">Course Bonuses</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {course.bonuses.map((bonus, index) => (
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

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Student Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {course.testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <Card className="bg-gradient-hero text-white p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-6 opacity-90">
                Join {course.students.toLocaleString()}+ students who have already started their AI automation journey
              </p>
              <Button size="xl" variant="cta" className="mb-4">
                Enroll Now for ${course.price}
              </Button>
              <p className="text-sm opacity-75">30-day money-back guarantee</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default CoursePage;
