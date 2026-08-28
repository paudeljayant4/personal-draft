export const Currently = () => {
  return (
    <section className="relative px-6 py-20 max-w-4xl mx-auto">
      <div className="absolute -top-10 left-0 w-full h-20 bg-vermilion/5"></div>
      <h2 className="text-3xl font-bold mb-6 text-foreground text-center">
        Right now.
      </h2>
      <div className="text-center text-lg text-muted-foreground mb-8">
        Learning. Building. Exploring. Becoming.
      </div>
      <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        I'm exploring technology, developing my skills, learning more about people
        and the world, and figuring out what kind of life I want to build.
      </p>
    </section>
  );
};