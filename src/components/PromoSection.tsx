import { Button } from "../components/ui/button";
import { Instagram, Facebook } from "lucide-react";
import promoCupcakes from "../assets/promoCupcakes.png";

const PromoSection = () => {
    return (
        <section id="contato" className="py-24 bg-gradient-to-b from-blush-pink to-soft-rose">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-fade-in">
                        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
                            Tempo limitado
                            <br />
                            <span className="text-primary">Promo</span>
                        </h2>
                        <p className="font-poppins text-lg text-muted-foreground max-w-md">
                            Descubra nossa coleção especial do Dia dos Namorados com sabores românticos
                            e lindas decorações. Perfeito para celebrar o amor e momentos doces.
                        </p>
                        <Button
                            size="lg"
                            className="font-poppins font-medium px-8 py-6 rounded-full shadow-elegant hover:shadow-gold hover:scale-105 transition-all duration-300 bg-accent hover:bg-accent/90"
                        >
                            Saiba Mais
                        </Button>

                        <div className="pt-8">
                            <p className="font-poppins text-sm font-medium text-muted-foreground mb-4">
                                Siga-nos para doçura diária
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-foreground/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                                </a>
                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-foreground/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                                </a>
                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-foreground/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                    aria-label="Pinterest"
                                >
                                    <svg className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative animate-scale-in">
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent/30 rounded-full blur-3xl"></div>
                        <img
                            src={promoCupcakes}
                            alt="Valentine's cupcakes"
                            className="w-full h-auto rounded-3xl shadow-elegant relative z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoSection;