import { Card, CardContent } from '@/components/ui/card';
import { Code2, Palette, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground text-center mb-12">
            I'm a passionate developer with expertise in building modern web
            applications. I love turning complex problems into simple, beautiful,
            and intuitive solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Code2 className="h-8 w-8 mb-4 mx-auto text-primary" />
                  <h3 className="font-semibold mb-2">Clean Code</h3>
                  <p className="text-sm text-muted-foreground">
                    Writing clean, maintainable, and efficient code is my top
                    priority.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Palette className="h-8 w-8 mb-4 mx-auto text-primary" />
                  <h3 className="font-semibold mb-2">Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Creating beautiful and intuitive user interfaces that users love.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Lightbulb className="h-8 w-8 mb-4 mx-auto text-primary" />
                  <h3 className="font-semibold mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Always learning and exploring new technologies and solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}