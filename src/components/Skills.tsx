import React from 'react';

interface SkillCategory {
  name: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"]
    }
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-white">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((category, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg font-semibold text-black dark:text-white">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-200 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
