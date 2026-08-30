import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing clean, maintainable code that can stand the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Always striving to optimize and deliver the best user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with others to bring our ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Building solutions that push the boundaries of what's possible.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future
              <br />
              <span className="font-serif italic font-normal text-white">
                {" "}
                one model at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm an incoming Computer Science and Mathematics double major at UMass Amherst,
                and a first-generation college student who's spent the last few years building
                things that matter, from AI models that catch cancer earlier to computer vision
                systems that let robots see. What ties it all together isn't a specific field,
                it's a love of solving hard problems, especially the ones where the answer isn't
                clean.
              </p>
              <p>
                That's what's pulling me toward quantitative finance. Markets are just uncertainty
                wearing a different costume than the one I've spent years modeling in medical imaging
                and robotics. The same principles apply: noisy data, incomplete information, and a
                reward for anyone who can find signal in it. Whether I was fine-tuning a segmentation
                model on brain MRI scans at UConn or optimizing a CT foundation model for cancer
                assessment at Columbia, the part I've always loved most is the same: turning ambiguity
                into a prediction you can actually trust.
              </p>
              <p>
                I'm heading into UMass wanting the same thing I've always wanted: harder problems,
                better tools to solve them with, and enough curiosity to follow wherever the signal
                leads. Whether that ends up being a hospital, a robot, or a trading floor, you'll always
                find me looking for the next big challenge.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away."
                <br /> - Antoine de Saint-Exupéry
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
