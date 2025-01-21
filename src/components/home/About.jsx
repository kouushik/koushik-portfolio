export default function About() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                        About Me
                    </h2>
                    <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                        <p>
                            I'm a graduate student at Case Western Reserve University pursuing my Master's in Computer Science.
                            My passion lies in developing software solutions that make a real impact.
                        </p>
                        <p>
                            With experience in both software development and data engineering, I bring a unique perspective
                            to problem-solving. I'm particularly interested in the intersection of AI and robotics,
                            working to create innovative solutions that push technological boundaries.
                        </p>
                        <p>
                            Currently, I work as a Software Research Assistant at the Neuroscience Research Lab,
                            where I develop data processing pipelines and visualization tools that help researchers
                            analyze complex neuroimaging data.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}