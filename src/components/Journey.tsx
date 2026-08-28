export const Journey = () => {
  const experiences = [
    {
      title: "National Cadet Corps — Batch 49",
      description:
        "Participated in NCC and developed discipline, teamwork, responsibility and leadership.",
      period: "2022 - 2024",
    },
    {
      title: "Debate Club — SOS Hermann Gmeiner School, Surkhet",
      description:
        "Served as Vice President of the school's first debate club. Focus: Public speaking, Communication, Critical thinking, Leadership, Structured discussion.",
      period: "2023 - 2024",
    },
    {
      title: "Environment Club — SOS Hermann Gmeiner School, Surkhet",
      description:
        "Served as Vice Secretary and contributed to environmental and community-oriented activities.",
      period: "2023 - 2024",
    },
    {
      title: "Mahakumba National Debate Championship 2024",
      description:
        "Participated in a national-level debate championship, gaining experience in competitive public speaking, argumentation and communication.",
      period: "2024",
    },
  ];

  return (
    <section id="journey" className="relative px-6 py-20 max-w-4xl mx-auto">
      <div className="absolute -top-10 left-0 w-full h-20 bg-vermilion/5"></div>
      <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
        The journey so far.
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start gap-6 p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-vermilion/20 rounded-lg flex items-center justify-center">
                <span className="text-vermilion-500 text-lg">{index + 1}</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{exp.title}</h3>
              <p className="text-muted-foreground mb-2">{exp.description}</p>
              <p className="text-xs text-muted-foreground">{exp.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};