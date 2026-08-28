export const Skills = () => {
  const skills = [
    "Communication",
    "Leadership",
    "Public Speaking",
    "Critical Thinking",
    "Teamwork",
    "Adaptability",
    "Initiative",
  ];

  return (
    <section className="relative px-6 py-20 max-w-4xl mx-auto">
      <div className="absolute -top-10 left-0 w-full h-20 bg-vermilion/5"></div>
      <h2 className="text-3xl font-bold mb-10 text-foreground text-center">
        Skills
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-background/50 backdrop-blur-sm rounded-full text-sm font-medium text-foreground hover:bg-background/70 transition-colors border border-border/50"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};