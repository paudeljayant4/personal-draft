export const Contact = () => {
  const socials = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/grusco_69/",
      icon: "Instagram",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/jayant.paudel.682446",
      icon: "Facebook",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jayant-paudel-272077369/",
      icon: "Linkedin",
    },
  ];

  return (
    <section id="connect" className="relative px-6 py-20 max-w-4xl mx-auto">
      <div className="absolute -top-10 left-0 w-full h-20 bg-vermilion/5"></div>
      <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
        Let's connect.
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 bg-background/50 backdrop-blur-sm rounded-lg text-sm font-medium text-foreground hover:bg-background/70 transition-colors border border-border/50"
          >
            {/* We'll use simple text icons for now; could replace with actual icons */}
            <span className="text-vermilion-500">{social.icon}</span>
            <span>{social.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};