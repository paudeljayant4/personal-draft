export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 pt-20 pb-12 text-center overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-5"></div>
      </div>

      <div className="relative z-10">
        <h1 className="text-5xl font-bold tracking-tight text-foreground mb-4">
          JAYANT
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Curious by nature. Driven by possibility.
        </p>
        <p className="text-lg text-muted-foreground max-w-xl mb-8">
          Coding. Ideas. People. The world.
        </p>
        <p className="text-sm text-muted-foreground mb-10">
          A personal space documenting the person I'm becoming.
        </p>
        <a href="#about" className="inline-block px-6 py-3 bg-foreground/90 text-background rounded-lg hover:bg-foreground/80 transition-colors font-medium">
          Explore ↓
        </a>
      </div>
    </section>
  );
};