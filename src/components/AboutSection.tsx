import { useEffect, useRef } from 'react';

const timelineData = [
  {
    year: '2026 – Present',
    title: 'Data Engineer Intern',
    organization: 'Resolence Private Limited',
    description: 'Building ETL workflows with Python, PostgreSQL, and AWS services.',
    icon: '▤',
  },
  {
    year: '2022 – 2026',
    title: 'B.Tech, Computer Science & Engineering',
    organization: 'The Apollo University · Chittoor',
    description: 'CGPA: 7.39 / 10',
    icon: '⌘',
  },
];

const AboutSection = () => {
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

    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm tracking-widest mb-2">{'// GET TO KNOW ME'}</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="reveal-left space-y-6">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="font-orbitron text-2xl font-bold text-foreground mb-4">
                Career Summary
              </h3>
              <p className="font-rajdhani text-lg text-muted-foreground leading-relaxed mb-4">
                I'm a <span className="text-primary">Data Engineer</span> and Computer Science Engineering graduate with hands-on experience building ETL pipelines, validating data, and loading it into PostgreSQL.
              </p>
              <p className="font-rajdhani text-lg text-muted-foreground leading-relaxed">
                At <span className="text-secondary">Resolence Private Limited</span>, I work with Python, SQL, and AWS to automate data workflows. I’m seeking Data Engineer or Python Developer opportunities.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-xl text-center group hover:border-primary/50 transition-all duration-300">
                <p className="font-orbitron text-3xl font-bold text-primary group-hover:scale-110 transition-transform">3</p>
                <p className="font-rajdhani text-muted-foreground">Featured Projects</p>
              </div>
              <div className="glass-card p-6 rounded-xl text-center group hover:border-primary/50 transition-all duration-300">
                <p className="font-orbitron text-3xl font-bold text-secondary group-hover:scale-110 transition-transform">5</p>
                <p className="font-rajdhani text-muted-foreground">Certifications</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="reveal-right">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20" />

              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-12 pb-8 last:pb-0 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-8 h-8 rounded-full glass-card flex items-center justify-center text-lg group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                    {item.icon}
                  </div>

                  <div className="glass-card p-5 rounded-xl group-hover:border-primary/30 transition-all duration-300">
                    <p className="font-mono text-primary text-xs mb-1">{item.year}</p>
                    <h4 className="font-orbitron text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="font-rajdhani text-secondary text-sm mb-2">{item.organization}</p>
                    <p className="font-rajdhani text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
