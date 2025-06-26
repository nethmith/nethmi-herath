
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Web Design & Development",
      description: "Creating modern, responsive websites with accessibility best practices and optimal user experience across all devices.",
      icon: "🌐",
      features: ["Responsive Design", "Modern UI/UX", "Accessibility", "Performance Optimization"]
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and aesthetically pleasing user interfaces that prioritize usability and user satisfaction.",
      icon: "🎨",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      title: "Mobile App Development",
      description: "Building native Android applications with Kotlin, focusing on performance and user experience.",
      icon: "📱",
      features: ["Android Development", "Kotlin Programming", "Material Design", "App Optimization"]
    },
    {
      title: "Frontend Development Consulting",
      description: "Providing expert guidance on best practices, code optimization, and modern frontend development strategies.",
      icon: "💡",
      features: ["Code Review", "Best Practices", "Performance Audit", "Technical Consulting"]
    },
    {
      title: "Agile Support",
      description: "Collaborative project management and development support using Agile methodologies for efficient delivery.",
      icon: "🤝",
      features: ["Sprint Planning", "Team Collaboration", "Project Management", "Quality Assurance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20 h-full">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-slate-900 dark:text-white mb-2">{service.title}</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-600 dark:text-slate-300">
                      <span className="text-teal-600 dark:text-teal-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
