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
    {
      date: "2020 - 2022",
      title: "Junior Developer",
      description: "Started my journey in software development."
    }
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-white">Experience</h2>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="p-4 rounded-md border-2 border-white bg-white dark:border-gray-900 dark:bg-gray-950"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {event.date}
            </span>
            <h3 className="mt-1 text-lg font-semibold text-black dark:text-white">
              {event.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
      title: "Deploy a container to a server",
      date: "05-03-2025",
      icon: "🚀",
      type: "post"
    },
    {
      id: 4,
      title: "How to build a Discord slash command",
      date: "04-03-2025",
      icon: "💬",
      type: "post"
    },
    {
      id: 5,
      title: "Cloudflare is almost perfect",
      date: "02-12-2024",
      icon: "☁️",
      type: "post"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Released Meteor theme",
      date: "01-06-2024",
      icon: "🌟",
      type: "event"
    },
    {
      id: 2,
      title: "Re-launched nuro.dev",
      date: "26-05-2024",
      icon: "🚀",
      type: "event"
    },
    {
      id: 3,
      title: "Joined @ RONIN",
      date: "15-12-2022",
      icon: "💼",
      type: "event"
    },
    {
      id: 4,
      title: "Joined @ Wander",
      date: "14-03-2022",
      icon: "🌍",
      type: "event"
    },
    {
      id: 5,
      title: "Launched nuro.dev",
      date: "22-10-2021",
      icon: "🚀",
      type: "event"
    },
    {
      id: 6,
      title: "Happy Birthday!",
      date: "09-08-1997",
      icon: "🎂",
      type: "event"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Posts Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <span>📝</span>
              Posts
            </h2>
            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="group flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{post.icon}</span>
                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                    {post.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <span>📅</span>
              Events
            </h2>
            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="group flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{event.icon}</span>
                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {event.title}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                    {event.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Building & Music sections inspired by Ben's design */}
        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          {/* Building Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <span>🔨</span>
              Building
            </h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Nothing right now</div>
                  <div className="text-sm">I'm not working on anything right now</div>
                </div>
              </div>
            </div>
          </div>

          {/* Music Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <span>🎵</span>
              Music
            </h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <span className="text-2xl">🎧</span>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Nothing right now</div>
                  <div className="text-sm">I'm not currently listening to any music</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
