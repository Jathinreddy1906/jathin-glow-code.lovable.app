import { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'AWS Data Pipeline with Python and Boto3',
    description: 'Automated CSV ingestion from S3 triggers a Glue job to clean and deduplicate sales data, write partitioned Parquet, and catalog it for Athena queries. Includes validation, least-privilege IAM, and pytest checks.',
    techStack: ['Python', 'Boto3', 'S3', 'Lambda', 'Glue / PySpark', 'Athena', 'IAM'],
    github: 'https://github.com/Jathinreddy1906/AWS-Data-Pipeline-with-Python-and-Boto3--R',
    gradient: 'from-primary to-secondary',
  },
  {
    title: 'API-to-PostgreSQL Data Ingestion',
    description: 'Fetches users and posts from a REST API, validates records with pandas, and loads them into PostgreSQL with safe upserts. Includes SQL reporting queries.',
    techStack: ['Python', 'pandas', 'REST API', 'PostgreSQL', 'psycopg2'],
    github: 'https://github.com/Jathinreddy1906/API-to-PostgreSQL-Data-Ingestion--R',
    gradient: 'from-secondary to-neon-pink',
  },
  {
    title: 'Customer Order ETL',
    description: 'Cleans customer, order, and product CSVs into a joined order report, calculates totals, and logs each run. Unknown customer IDs are saved separately so records are not lost.',
    techStack: ['Python', 'pandas', 'CSV'],
    github: 'https://github.com/Jathinreddy1906/customer_order_etl_project.',
    gradient: 'from-neon-pink to-primary',
  },
  {
    title: 'Cosmic Play',
    description: 'Interactive web application for creating and participating in polls with real-time results visualization.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    github: 'https://github.com/Jathinreddy1906',
    gradient: 'from-primary to-neon-purple',
  },
  {
    title: 'Reminder Remix',
    description: 'Smart reminder application with customizable notifications, recurring reminders, and a user-friendly interface.',
    techStack: ['Python', 'Tkinter', 'SQLite'],
    github: 'https://github.com/Jathinreddy1906',
    gradient: 'from-neon-purple to-secondary',
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm tracking-widest mb-2">{'// MY WORK'}</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={index}
              className="reveal group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-full glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-6 flex flex-col h-full">
                  {/* Project Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="font-mono text-primary text-xl">{'</>'}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-orbitron text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-rajdhani text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 rounded text-xs font-mono text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-rajdhani font-semibold text-sm text-muted-foreground hover:text-primary transition-colors group/link"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
