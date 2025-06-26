
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Youtube } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      url: "https://github.com/nethmiherath",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/nethmiherath",
      color: "hover:text-blue-400"
    },
    {
      icon: <Youtube size={24} />,
      label: "YouTube",
      url: "https://youtube.com/@nethmi_th01",
      color: "hover:text-red-400"
    }
  ];

  return (
    <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-900 dark:text-white">Follow Me</CardTitle>
        <CardDescription className="text-slate-600 dark:text-slate-400">
          Connect with me on social media and professional platforms
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-slate-500 dark:text-slate-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            <strong className="text-teal-600 dark:text-teal-400">Linktree:</strong>{" "}
            <a href="https://linktr.ee/nethmi_th" target="_blank" rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors">
              linktr.ee/nethmi_th
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialLinks;
