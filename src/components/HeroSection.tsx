import { Button } from "../components/ui/button";
import Bolo from "../assets/Bolo.png";


const HeroSection = () => {
    return (
        <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-soft-rose to-blush-pink">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Texto */}
                    <div className="text-center md:text-left space-y-6 animate-fade-in relative">
                        <h2 className="font-playfair text-5xl md:text-7xl font-bold text-foreground leading-tight">
                            Bite into
                            <br />
                            <span className="text-primary">Happiness.</span>
                        </h2>
                        <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-md mx-auto md:mx-0">
                            Handcrafted with love, every creation is a moment of pure joy and delicious artistry.
                        </p>

                        {/* Botão */}
                        <Button
                            size="lg"
                            className="font-poppins cursor-pointer font-medium px-8 py-6 text-base rounded-full shadow-elegant hover:shadow-gold hover:scale-105 transition-all duration-300 bg-primary hover:bg-primary/90"
                        >
                            Order Now
                        </Button>

                     
                    </div>

                    {/* Imagem do bolo */}
                    <div className="relative animate-scale-in">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/20 rounded-full blur-3xl animate-float"></div>
                        <div
                            className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float"
                            style={{ animationDelay: "1s" }}
                        ></div>
                        <img
                            src={Bolo}
                            alt="Elegant cake with macarons"
                            className="w-full h-[850px] shadow-elegant relative z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
