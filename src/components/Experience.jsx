const experiences = [
  {
    period: "2027",
    role: "Software Engineer Intern",
    company: "Amazon",
    description:
      "I will be joining Amazon as a Software Engineer Intern in 2027.",
    technologies: [],
    current: false,
  },
  {
    period: "2025 - Present",
    role: "AI Researcher",
    company: "Columbia University",
    description:
      "Working with Professor Adam Lin at Columbia University, I am optimizing a Clear Cell Renal Cell Carcinoma assessment model by replacing task-specific encoders with Google's CT Foundation Model to address critical performance gaps in the MMIST-ccRCC benchmark.",
    technologies: ["Python", "pandas", "NumPy", "PyTorch", "Seaborn"],
    current: true,
  },
  {
    period: "2024 - 2026",
    role: "AI Researcher",
    company: "University of Connecticut",
    description:
      "I created a machine learning pipeline for automated brain tumor segmentation and progression prediction using VQGAN mask tokenization and fine-tuned Meta AI's Segment Anything Model 2 to achieve a 0.5 mean IoU score.",
    technologies: ["Python", "pandas", "NumPy", "Matplotlib", "OpenCV", "TensorFlow"],
    current: false,
  },
  {
    period: "2025 - 2026",
    role: "Data & Programming Lead",
    company: "Glastonbury High School Rocketry Club",
    description:
      "I ran flight path simulations, doubled my sub-team's membership through interactive onboarding, created a wiki chatbot and a reinforcement learning model for 3D physics flight testing, and programmed electronics while mentoring younger members.",
    technologies: ["C", "C#", "Python", "pandas", "NumPy", "TensorFlow", "Seaborn"],
    current: true,
  },
  {
    period: "2025 — 2026",
    role: "Programming & Electronics Captain",
    company: "FIRST Robotics Competition - Team 2170",
    description:
      "I led and expanded FIRST Robotics Team 2170 from 28 to 63 students, taught Java development using GitHub Code Reviews, and raised over $6,000 through local business sponsorships.",
    technologies: ["Java", "C++", "Git", "WPILib", "GitHub Actions"],
    current: false,
  },
  {
    period: "2025",
    role: "Scholar",
    company: "MIT Introduction to Technology, Engineering, and Science (MITES) Semester Program",
    description:
      "I was awarded the Best of MITES award for my writing on the current limitations of AI and the MITES Semester Achievement award for my work on PulseLine, a 24/7 online and on-call agentic AI medical assistant.",
    technologies: ["Python", "OpenAI API", "Twilio", "Ngrok", "FastAPI", "PostgreSQL", "Groq"],
    current: false,
  },
  {
    period: "2023 — 2025",
    role: "Vision & Scouting Lead",
    company: "FIRST Robotics Competition - Team 2170",
    description:
      "I created and optimized an edge-accelerated computer vision pipeline for real-time object detection and tracking as well as overhauled our scouting system to improve data collection and analysis for our robotics team.",
    technologies: ["Python", "Juypter Notebooks", "Ultralytics", "JavaScript", "Sckit-learn"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0
                    ? "md:pr-16"
                    : "md:col-start-2 md:pl-16"
                    }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""
                        }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
