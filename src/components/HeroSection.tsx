import { Button } from "../components/ui/button";
import Hero from '../assets/Hero.png'

const HeroSection = () => {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-soft-rose to-blush-pink min-h-[85vh] md:min-h-screen"
      style={{
        backgroundImage: `url(${Hero})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Gradiente suave para leitura do texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-soft-rose/65 via-soft-rose/40 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10 flex justify-center">
        {/* Bloco de texto centralizado */}
        <div className="text-center space-y-6 animate-fade-in max-w-3xl mb-14">
          <h2 className="font-playfair text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Morda

            <br />
            <span className="text-primary">Felicidade.</span>
          </h2>

          <p className="font-bold text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
           Feito à mão com amor, cada criação é um momento de pura alegria e deliciosa arte.
          </p>

          <Button
            size="lg"
            className="font-poppins cursor-pointer font-medium px-8 py-6 text-base rounded-full shadow-elegant hover:shadow-gold hover:scale-105 transition-all duration-300 bg-primary hover:bg-primary/90"
          >
           Encomende agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
