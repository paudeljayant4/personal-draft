export const Interests = () => {
  const interests = [
    {
      title: "Code",
      description: "Exploring technology, programming and building things.",
      icon: "<code>",
    },
    {
      title: "Mind",
      description: "Interested in psychology, human behaviour and how people think.",
      icon: "🧠",
    },
    {
      title: "Strategy",
      description: "Chess, problem solving and competitive thinking.",
      icon: "♟️",
    },
    {
      title: "World",
      description: "Travelling, discovering cultures and understanding different perspectives.",
      icon: "🌍",
    },
    {
      title: "Movement",
      description: "Football, fitness and staying active.",
      icon: "⚽",
    },
    {
      title: "Stories",
      description: "Books, anime, ideas and stories that offer different ways of seeing the world.",
      icon: "📚",
    },
  ];

  return (
    <section id="interests" className="relative px-6 py-20 max-w-4xl mx-auto">
      <div className="absolute -top-10 left-0 w-full h-20 bg-vermilion/5"></div>
      <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
        Things that keep me curious.
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {interests.map((interest, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 hover:bg-background/70 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-4">{interest.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">{interest.title}</h3>
            <p className="text-sm text-muted-foreground text-center">{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};