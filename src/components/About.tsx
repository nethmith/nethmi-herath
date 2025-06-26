const About = () => {
  return <section id="about" className="py-20 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-teal-600 dark:text-teal-400 mb-4">My Journey</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              As a passionate software engineering undergraduate, I've always been fascinated by the intersection
              of creativity and logic in technology. My journey began with a curiosity about how digital experiences
              can solve real-world problems and create meaningful connections between users and technology.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              What drives me is the challenge of transforming complex problems into elegant, user-friendly solutions.
              I believe that great software isn't just about clean code—it's about understanding people, their needs,
              and crafting experiences that feel intuitive and delightful.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm constantly learning and exploring new technologies, always eager to push the boundaries of what's
              possible in web development and user experience design.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-teal-600 dark:text-teal-400 mb-6">Education</h3>
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-lg">
              <h4 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">BSc (Hons) in Information Technology</h4>
              <p className="text-teal-600 dark:text-teal-400 mb-2">Software Engineering Specialization</p>
              <p className="text-slate-500 dark:text-slate-400 mb-4">Sri Lanka Institute of Information Technology (SLIIT)</p>

              <h5 className="font-semibold mb-3 text-slate-800 dark:text-slate-200">Key Modules:</h5>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• Database System and Algorithm</li>
                <li>• Object-Oriented Programming</li>
                <li>• Web Application Development</li>
                <li>• Mobile Application Development</li>
                <li>• Software Engineering Principles</li>
                <li>• Database Management Systems</li>
                <li>• User Interface Design</li>
                <li>• Agile Software Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default About;