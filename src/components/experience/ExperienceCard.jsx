export default function ExperienceCard({ experience, icon: Icon }) {
    const { title, company, location, date, description, achievements, tech } = experience;

    return (
        <div className="relative pl-20">
            {/* Timeline dot */}
            <div className="absolute left-7 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-600 
                      dark:bg-primary-400 ring-4 ring-white dark:ring-gray-900" />

            {/* Icon */}
            <div className="absolute left-0 w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900 
                      flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400">
                            {company} • {location}
                        </p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                        {date}
                    </p>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {description}
                </p>

                {achievements && (
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                        {achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                        ))}
                    </ul>
                )}

                {tech && (
                    <div className="flex flex-wrap gap-2">
                        {tech.map((item) => (
                            <span
                                key={item}
                                className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 
                           text-gray-700 dark:text-gray-300"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}