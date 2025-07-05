
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Clock,
  MapPin,
  Users,
  Video,
  Globe,
  ArrowRight,
  Star
} from "lucide-react";

const EventsPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "AI Automation Workshop: From Zero to Hero",
      date: "January 15, 2025",
      time: "2:00 PM - 4:00 PM UTC",
      type: "Workshop",
      format: "Online",
      attendees: 150,
      maxAttendees: 200,
      description: "Learn to build your first AI automation workflow from scratch in this hands-on workshop.",
      topics: ["Workflow Design", "Tool Integration", "Best Practices"]
    },
    {
      id: 2,
      title: "AI Business Transformation Summit",
      date: "January 22, 2025",
      time: "10:00 AM - 6:00 PM UTC",
      type: "Summit",
      format: "Hybrid",
      attendees: 500,
      maxAttendees: 1000,
      description: "Discover how leading businesses are transforming their operations with AI automation.",
      topics: ["Case Studies", "ROI Analysis", "Implementation Strategies"]
    },
    {
      id: 3,
      title: "Monthly Community Meetup",
      date: "February 5, 2025",
      time: "7:00 PM - 8:30 PM UTC",
      type: "Meetup",
      format: "Online",
      attendees: 75,
      maxAttendees: 100,
      description: "Connect with fellow AI automation enthusiasts and share your latest projects.",
      topics: ["Project Showcase", "Q&A", "Networking"]
    }
  ];

  const pastEvents = [
    {
      title: "AI Tools Masterclass",
      date: "December 10, 2024",
      attendees: 300,
      recording: true
    },
    {
      title: "Automation Agency Bootcamp",
      date: "November 25, 2024",
      attendees: 150,
      recording: true
    },
    {
      title: "No-Code AI Solutions",
      date: "November 10, 2024",
      attendees: 200,
      recording: true
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            AI Automation Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join live workshops, summits, and community meetups to accelerate your AI automation journey
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Upcoming Events</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="bg-card border-l-4 border-l-primary">
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        {event.type}
                      </Badge>
                      <Badge variant="outline">
                        {event.format}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {event.attendees}/{event.maxAttendees} registered
                      </div>
                      <div className="flex items-center gap-1">
                        {event.format === "Online" ? (
                          <Video className="h-4 w-4" />
                        ) : event.format === "Hybrid" ? (
                          <Globe className="h-4 w-4" />
                        ) : (
                          <MapPin className="h-4 w-4" />
                        )}
                        {event.format}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {event.topics.map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-center space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {Math.round((event.attendees / event.maxAttendees) * 100)}%
                      </div>
                      <div className="text-sm text-muted-foreground">Full</div>
                      <div className="w-full bg-muted rounded-full h-2 mt-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <Button variant="cta" className="w-full">
                      Register Now
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Event Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Types of Events We Host
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card text-center">
              <CardHeader>
                <Video className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Live Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hands-on sessions where you build real automation workflows alongside experts
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Industry Summits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Large-scale events featuring industry leaders sharing the latest AI automation trends
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Community Meetups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Casual gatherings for networking, project sharing, and collaborative learning
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Past Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Past Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {event.attendees}
                    </div>
                  </div>
                  {event.recording && (
                    <Button variant="outline" size="sm" className="w-full">
                      <Video className="h-4 w-4 mr-2" />
                      Watch Recording
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="text-center">
          <Card className="bg-gradient-hero text-white p-12">
            <CardContent className="p-0">
              <Star className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <h2 className="text-3xl font-bold mb-4">Never Miss an Event</h2>
              <p className="text-xl mb-8 opacity-90">
                Subscribe to get notified about upcoming workshops, summits, and community events
              </p>
              <Button size="xl" variant="cta" className="mb-4">
                Subscribe to Updates
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <p className="text-sm opacity-75">Free updates • Unsubscribe anytime</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default EventsPage;
