
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-teal-600 dark:text-teal-400" size={24} />,
      label: "Email",
      value: "nethmiherath100@gmail.com",
      link: "mailto:nethmiherath100@gmail.com"
    },
    {
      icon: <Phone className="text-teal-600 dark:text-teal-400" size={24} />,
      label: "Phone",
      value: "+94 77 64 77 323",
      link: "tel:+94776477323"
    }
  ];

  return (
    <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-900 dark:text-white">Contact Information</CardTitle>
        <CardDescription className="text-slate-600 dark:text-slate-400">
          Feel free to reach out through any of these channels
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-center space-x-4">
              {info.icon}
              <div>
                <p className="text-slate-600 dark:text-slate-300 font-medium">{info.label}</p>
                <a href={info.link} className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors">
                  {info.value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
