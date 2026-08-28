export const Footer = () => {
  return (
    <footer className="relative px-6 py-12 bg-background/50 backdrop-blur-sm border-t border-border/50">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-vermilion/3"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center text-center text-muted-foreground">
        <p className="text-xl font-bold mb-2">
          JAYANT PAUDEL
        </p>
        <p className="text-sm mb-4">
          Still becoming.
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/grusco_69/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/jayant.paudel.682446"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/jayant-paudel-272077369/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-4 text-xs">
          © {new Date().getFullYear()} Jayant Paudel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};