import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Shield, Users } from "lucide-react";

const JoinPage = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Join AI Paradise
            </h1>
            <p className="text-xl text-muted-foreground">
              Connect with Supabase to unlock our exclusive community features
            </p>
          </div>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader className="text-center space-y-4">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Authentication Required</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-center">
                To access our exclusive courses, community forum, and member benefits, 
                we need to set up authentication with Supabase.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm">Secure OAuth authentication</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm">Access to exclusive community</span>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  Click the green Supabase button in the top right to connect authentication
                </p>
                <Button variant="outline" className="w-full" disabled>
                  Authentication Setup Required
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Need help setting up? Check our integration guide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;