
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter,
  Clock,
  PlayCircle
} from "lucide-react";

// Updated course data focusing on AI automation products
const mockCourses = [
  {
    id: 1,
    title: "AI Workflow Automation Fundamentals",
    description: "Learn to build intelligent systems that automate your business processes",
    level: "Beginner",
    duration: "4 hours",
    instructor: "Noah",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400",
    category: "Fundamentals"
  },
  {
    id: 2,
    title: "Custom AI Agent Development",
    description: "Create intelligent assistants tailored to your specific business needs",
    level: "Intermediate",
    duration: "6 hours",
    instructor: "Noah",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
    category: "Development"
  },
  {
    id: 3,
    title: "AI-Powered Content Generation",
    description: "Master the art of creating high-quality content using AI tools",
    level: "Beginner",
    duration: "3 hours",
    instructor: "Noah",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400",
    category: "Content"
  },
  {
    id: 4,
    title: "Business Process Optimization with AI",
    description: "Transform your operations with intelligent automation strategies",
    level: "Advanced",
    duration: "8 hours",
    instructor: "Noah",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    category: "Business"
  }
];

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = mockCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    
    return matchesSearch && matchesLevel && matchesCategory;
  });

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];
  const categories = ["All", "Fundamentals", "Development", "Content", "Business"];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            AI Automation Courses
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master AI automation with practical, hands-on courses designed to transform how you work
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2 items-center">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-3 py-2 border border-input rounded-md bg-background"
            >
              {levels.map(level => (
                <option key={level} value={level}>{level} Level</option>
              ))}
            </select>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-input rounded-md bg-background"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === "All" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="bg-card shadow-card border-0 hover:shadow-float transition-all duration-300 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    {course.level}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-xl leading-tight hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {course.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Button asChild className="w-full" variant="cta">
                    <Link to={`/course/${course.id}`} className="flex items-center gap-2">
                      <PlayCircle className="h-4 w-4" />
                      Learn More
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No courses found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
