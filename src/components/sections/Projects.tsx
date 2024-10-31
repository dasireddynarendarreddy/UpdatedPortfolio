import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import { Button } from '@/components/ui/button';
  import { ExternalLink, Github } from 'lucide-react';
  
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform built with React, Node.js, and MongoDB.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'prisma'],
      liveUrl: 'https://mynextjsproject-phi.vercel.app/',
      githubUrl: 'https://github.com/dasireddynarendarreddy/mynextjsproject',
    },
    {
      title: 'Drawing App',
      description:
        'A Application for Drawing collaborative Ans storing Drawings with real-time updates.',
      image: 'https://copyassignment.com/wp-content/uploads/2022/12/1-1024x568.png',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://drawboard-ten.vercel.app/',
      githubUrl: 'https://github.com/dasireddynarendarreddy/drawboard',
    },
    {
      title: 'Keep Notes',
      description:
        'An Application where you can Manage Your Notes And Save Your Notes and Listen your Notes',
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2016/01/Google-Keep-notes.png',
      tags: ['React', 'TailwindCss', 'Amazon Polly',"Material ui"],
      liveUrl: 'https://makenotesandpdf.netlify.app/',
      githubUrl: 'https://github.com/dasireddynarendarreddy/makenotes',
    },
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                      <Github className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }