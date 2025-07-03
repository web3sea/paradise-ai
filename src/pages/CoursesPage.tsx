
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
  Users,
  Star,
  PlayCircle
} from "lucide-react";

// Mock course data - replace with Supabase data later
const mockCourses = [
  {
    id: 1,
    title: "AI Automation Fundamentals for Business Owners",
    description: "Master the basics of AI automation and transform your business processes",
    price: 297,
    level: "Beginner",
    duration: "4 hours",
    students: 1250,
    rating: 4.8,
    instructor: "Noah",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
    category: "Fundamentals"
  },
  {
    id: 2,
    title: "Building Your First AI-Powered Workflow",
    description: "Hands-on project-based learning to create your first automated workflow",
    price: 397,
    level: "Intermediate",
    duration: "6 hours",
    students: 850,
    rating: 4.9,
    instructor: "Noah",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
    category: "Workflows"
  },
  {
    id: 3,
    title: "Prompt Engineering Mastery",
    description: "Craft powerful prompts for maximum AI output and efficiency",
    price: 197,
    level: "Beginner",
    duration: "3 hours",
    students: 2100,
    rating: 4.7,
    instructor: "Noah",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
    category: "AI Tools"
  },
  {
    id: 4,
    title: "Starting Your AI Automation Agency",
    description: "Complete blueprint for launching and scaling your own AI automation agency",
    price: 997,
    level: "Advanced",
    duration: "12 hours",
    students: 425,
    rating: 4.9,
    instructor: "Noah",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
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
  const categories = ["All", "Fundamentals", "Workflows", "AI Tools", "Business"];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            AI Automation Courses
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master AI automation with our comprehensive courses designed by industry experts
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
                <div className="absolute top-4 right-4">
                  <div className="bg-black/50 text-white px-2 py-1 rounded text-sm font-medium">
                    ${course.price}
                  </div>
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
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current text-yellow-500" />
                    {course.rating}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Button asChild className="w-full" variant="cta">
                    <Link to={`/course/${course.id}`} className="flex items-center gap-2">
                      <PlayCircle className="h-4 w-4" />
                      View Course
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
