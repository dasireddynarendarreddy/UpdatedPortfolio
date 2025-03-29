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
    {
      title: 'Chat Bot',
      description:
        'Chat Bot Application Which is Same as Chat gpt and Gemini gpt Model you can ask the question the gpt will generate the answer the some features are their in this application which are not there in chat gpt also User can also delete the Response if he dont like and navigate betweent the response and histroy tarcking',
      image: 'https://tchelete.com/wp-content/uploads/2023/07/chatbot-development-with-deep-nlp-1024x1024.png',
      tags: ['React', 'TailwindCss', 'localstorage',"Material ui"],
      liveUrl: 'https://geminigpt1.netlify.app/',
      githubUrl: 'https://github.com/dasireddynarendarreddy/chatbot',

    },
    
      {
        title: 'Quiz App Integrated With Gemini API',
        description:
          'QUIZ App where the user can take the Quiz on the different programming languages and frameworks and user can select the level of the quiz like(easy,hard,medium) and No.of question based on the users choice the gemini gpt will generate this questions and give and by using the react js the question will be rendered on screen the user will get the instant result about the answer of question',
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/593/846/datas/original.png',
        tags: ['React', 'TailwindCss', 'mongodb',"shadcn ui"],
        liveUrl: 'https://geminiquizapp.netlify.app/',
        githubUrl: 'https://github.com/dasireddynarendarreddy/QuiZApp',
  
      }
    
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