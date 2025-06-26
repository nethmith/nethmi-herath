
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Java", level: 85 },
        { name: "Kotlin", level: 75 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: 88 },
        { name: "Next.js", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Android Studio", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Postman", level: 85 }
      ]
    }
  ];

  const softSkills = [
    "Problem-solving",
    "Communication",
    "Teamwork",
    "Agile Methodologies",
    "Adaptability",
    "Critical Thinking",
    "Time Management",
    "Leadership"
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-teal-600 dark:text-teal-400 mb-8">Technical Skills</h3>
            <div className="space-y-8">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                  <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">{category.title}</h4>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-slate-600 dark:text-slate-300">{skill.name}</span>
                          <span className="text-teal-600 dark:text-teal-400">{skill.level}%</span>
                        </div>
                        <Progress
                          value={skill.level}
                          className="h-2 bg-slate-200 dark:bg-slate-700"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-teal-600 dark:text-teal-400 mb-8">Soft Skills</h3>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-500 transition-colors">
                    <span className="text-teal-600 dark:text-teal-400">✓</span>
                    <span className="text-slate-600 dark:text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-gradient-to-r from-teal-100/80 to-blue-100/80 dark:from-teal-900/50 dark:to-blue-900/50 rounded-lg p-6 border border-teal-200/50 dark:border-teal-700/50">
              <h4 className="text-lg font-semibold mb-3 text-teal-700 dark:text-teal-400">Philosophy</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies.
                My approach combines technical expertise with creative problem-solving to deliver
                solutions that are not only functional but also delightful to use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
