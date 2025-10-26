const Footer = () => {
  const navLinks = ["Home", "Menu", "Lojinha", "Bolos", "Pacotes", "Contato"];

  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <h3 className="font-playfair text-2xl font-bold text-foreground">
            Sweet Moments
          </h3>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-poppins text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="text-center">
            <p className="font-poppins text-sm text-muted-foreground">
              Todos os direitos autorais • Copyright © 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;