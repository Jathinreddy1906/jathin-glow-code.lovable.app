import { useEffect, useRef } from 'react';

const skillCategories = [
  {
    title: 'Programming',
    icon: '{ }',
    skills: [
      'Python', 'SQL', 'JavaScript',
    ],
  },
  {
    title: 'Data Engineering',
    icon: '▤',
    skills: [
      'ETL / ELT Pipelines', 'Data Cleaning & Validation', 'pandas', 'PySpark', 'Power BI',
    ],
  },
  {
    title: 'Cloud & Databases',
    icon: '☁',
    skills: [
      'AWS S3', 'Lambda', 'Glue', 'Athena', 'IAM', 'PostgreSQL', 'Firebase', 'Google Cloud Platform',
    ],
  },
  {
    title: 'Developer Tools',
    icon: '</>',
    skills: [
      'Git', 'GitHub', 'Docker', 'VS Code', 'REST APIs', 'pytest',
    ],
  },
];

const SkillsSection = () => {
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
    <section id="skills" ref={sectionRef} className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm tracking-widest mb-2">{'// MY EXPERTISE'}</p>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="reveal glass-card p-6 rounded-2xl group hover:border-primary/30 transition-all duration-500"
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-mono text-primary text-lg">
                  {category.icon}
                </span>
                <h3 className="font-orbitron text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-2 rounded-md bg-muted/50 font-mono text-sm text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 reveal">
          <p className="text-center font-rajdhani text-muted-foreground mb-6">
            Also familiar with:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['AWS Glue Data Catalog', 'Athena SQL', 'Boto3', 'psycopg2', 'CSV & Parquet'].map(
              (skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 glass-card rounded-full font-mono text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
