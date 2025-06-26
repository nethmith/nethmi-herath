
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a friendly chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <div className="space-y-8">
            <ContactInfo />
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
