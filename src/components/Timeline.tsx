import React from 'react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  organization?: string;
}

const Timeline: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      date: "2024 - Present",
      title: "Full Stack Developer",
      organization: "Company Name",
      description: "Working on exciting projects using modern technologies."
    },
    {
      date: "2022 - 2024",
      title: "Frontend Developer",
      organization: "Previous Company",
      description: "Built and maintained various web applications."
    }
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-white">Experience</h2>
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className="relative pl-8">
            <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-gray-200 dark:bg-gray-800"></div>
            {index !== events.length - 1 && (
              <div className="absolute left-1.5 top-4 bottom-0 w-[1px] bg-gray-200 dark:bg-gray-800"></div>
            )}
            <div className="space-y-1">
              <div className="text-sm text-gray-500 dark:text-gray-400">{event.date}</div>
              <h3 className="font-medium text-black dark:text-white">{event.title}</h3>
              {event.organization && (
                <div className="text-sm text-gray-600 dark:text-gray-400">{event.organization}</div>
              )}
              <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
