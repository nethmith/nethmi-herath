
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Guru Ticketing System",
      description: "A full-featured support platform developed for the Ministry of Education to manage technical and installation queries related to smartboards. Includes multi-level agent escalation, role-based announcements, and email notifications.",
      technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      category: "Full-Stack Development"
    },
    {
      title: "Online Hotel Reservation System",
      description: "Full-stack Java-based application featuring user authentication, booking management, and comprehensive admin dashboard with real-time availability tracking.",
      technologies: ["Java", "Spring Boot", "MySQL", "HTML/CSS", "JavaScript"],
      category: "Full-Stack Development"
    },
    {
      title: "Staff Management System",
      description: "Web-based employee management solution with role-based access control, attendance tracking, and comprehensive reporting features.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      category: "Web Development"
    },
    {
      title: "Student Management Console Application",
      description: "Java console application for managing student records with CRUD operations, grade calculations, and data persistence.",
      technologies: ["Java", "Object-Oriented Programming", "File I/O"],
      category: "Desktop Application"
    },
    {
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio website showcasing projects and skills with smooth animations and optimal user experience.",
      technologies: ["React.js", "Tailwind CSS", "TypeScript", "Responsive Design"],
      category: "Frontend Development"
    },
    {
      title: "Ticketing & Support System",
      description: "Collaborative group project for Ministry of Education featuring ticket management, real-time notifications, and admin analytics dashboard.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Socket.io", "Tailwind CSS"],
      category: "Full-Stack Development"
    },
    {
      title: "Mobile App Prototype",
      description: "Android application with intuitive onboarding screens, featuring modern UI patterns and smooth user experience flow.",
      technologies: ["Android Studio", "Kotlin", "Material Design", "XML"],
      category: "Mobile Development"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A showcase of projects that demonstrate my passion for creating meaningful digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-400 border-teal-200 dark:border-teal-700">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white mb-2">{project.title}</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-600 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
