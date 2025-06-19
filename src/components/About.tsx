
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, and modern web technologies"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user experiences"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and scalability"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in cross-functional teams"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with a love for creating digital experiences that make a difference. 
            With expertise in modern web technologies, I bring ideas to life through clean, efficient code.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                  <skill.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{skill.title}</h3>
                <p className="text-gray-600 leading-relaxed">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              I'm always excited to work on new projects and collaborate with creative minds. 
              Whether you have a specific vision or need help bringing an idea to life, I'm here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="px-4 py-2 bg-white rounded-full">React</span>
              <span className="px-4 py-2 bg-white rounded-full">TypeScript</span>
              <span className="px-4 py-2 bg-white rounded-full">Node.js</span>
              <span className="px-4 py-2 bg-white rounded-full">Tailwind CSS</span>
              <span className="px-4 py-2 bg-white rounded-full">Next.js</span>
              <span className="px-4 py-2 bg-white rounded-full">PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
