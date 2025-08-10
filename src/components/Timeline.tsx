import React from 'react';
import { Package, Cake } from 'lucide-react';

interface TimelineEvent {
  title: string;
  date: string;
  icon: JSX.Element;
  link?: string;
}

const Timeline: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      title: "Released Meteor theme",
      date: "2024-06-01",
      icon: <Package className="h-4 w-4" />,
      link: "https://butterythemes.com/buy/959f821b-3729-4c56-8247-5dc8496171b3"
    },
    {
      title: "Happy Birthday!",
      date: "1997-08-09",
      icon: <Cake className="h-4 w-4" />
    }
  ];

  return (
    <>
      <h3 className="absolute -translate-y-3 inline-flex transform-gpu items-center bg-white dark:bg-gray-950 rounded-full px-4 mx-4 border-2 border-gray-100 dark:border-gray-900 font-bold text-gray-600 dark:text-white text-sm z-30">
        Events
      </h3>
      <ul className="flow-root mt-6" role="list">
        {events.map((event, index) => (
          <li key={index} className="group relative pb-3">
            <span aria-hidden="true" className="absolute left-6 top-4 -ml-px h-full w-0.5 bg-gray-100 dark:bg-gray-900 z-0"></span>
            {event.link ? (
              <a className="relative flex space-x-3 default-transition default-focus rounded-md px-2" href={event.link} target="_blank" rel="noopener noreferrer">
                <div className="text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-white h-8 w-8 rounded-md flex items-center justify-center ring-2 ring-white dark:ring-gray-950 border-2 border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 z-20 default-transition group-hover:border-gray-200 dark:group-hover:border-gray-800">
                  {event.icon}
                </div>
                <div className="text-gray-400 dark:text-gray-300 flex min-w-0 flex-1 justify-between space-x-4 pt-1.5 default-transition group-hover:text-gray-500 dark:group-hover:text-white">
                  <div>
                    <p className="font-semibold text-xs line-clamp-1" title={event.title}>
                      {event.title}
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm">
                    <time className="font-normal" dateTime={event.date}>
                      {new Date(event.date).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).split('/').join('-')}
                    </time>
                  </div>
                </div>
              </a>
            ) : (
              <div className="relative flex space-x-3 default-transition default-focus rounded-md px-2">
                <div className="text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-white h-8 w-8 rounded-md flex items-center justify-center ring-2 ring-white dark:ring-gray-950 border-2 border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 z-20 default-transition">
                  {event.icon}
                </div>
                <div className="text-gray-400 dark:text-gray-300 flex min-w-0 flex-1 justify-between space-x-4 pt-1.5 default-transition">
                  <div>
                    <p className="font-semibold text-xs line-clamp-1" title={event.title}>
                      {event.title}
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm">
                    <time className="font-normal" dateTime={event.date}>
                      {new Date(event.date).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).split('/').join('-')}
                    </time>
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Timeline;
