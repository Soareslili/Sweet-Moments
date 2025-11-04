import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import weddingCake from "../assets/weddingCake.png";
import chocolateCake from "../assets/chocolateCake.png";
import vanillaCake from "../assets/vanillaCake.png";

const CakesSection = () => {
  const cakeCategories = [
    {
      image: weddingCake,
      title: "Bolos de Casamento",
      description: "Bolos elegantes e sofisticados, feitos para tornar o seu grande dia inesquecível",
      features: ["Designs personalizados", "Flores naturais", "Ingredientes premium"],
    },
    {
      image: chocolateCake,
      title: "Bolos para Celebrações",
      description: "Perfeitos para aniversários, comemorações e todos os momentos doces da vida",
      features: ["Designs exclusivos", "Diversos sabores", "Tamanhos personalizados"],
    },
    {
      image: vanillaCake,
      title: "Criações Personalizadas",
      description: "Dê vida ao seu bolo dos sonhos com nosso serviço de design sob medida",
      features: ["Designs únicos", "Consultoria de sabores", "Detalhes artísticos e delicados"],
    },

  ];

  return (
    <section id="bolos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <p className="font-poppins text-sm uppercase tracking-widest text-primary">
            Nossas Especialidades
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
            Bolos requintados
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">

            De celebrações íntimas a grandes eventos, nossos bolos personalizados são elaborados
            com precisão, criatividade e amor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cakeCategories.map((cake, index) => (
            <div
              key={cake.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}

              data-aos="fade-down"
              data-aos-delay={index * 300}
            >
              <Card className="group overflow-hidden border-primary/10 hover:shadow-elegant transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={cake.image}
                    alt={cake.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-playfair text-2xl font-bold text-foreground">
                    {cake.title}
                  </h3>
                  <p className="font-poppins text-muted-foreground">
                    {cake.description}
                  </p>
                  <ul className="space-y-2">
                    {cake.features.map((feature) => (
                      <li
                        key={feature}
                        className="font-poppins text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4 bg-primary cursor-pointer hover:bg-primary/90 text-primary-foreground">
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-soft-rose to-blush-pink rounded-2xl p-12 text-center space-y-6 animate-pulse-zoom">
          <h3 className=" text-3xl md:text-4xl font-black text-foreground">

            Projete o bolo dos seus sonhos
          </h3>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">

            Agende uma consulta com nossos cake designers para criar uma obra-prima
            que captura perfeitamente sua visão.
          </p>
          <Button
            size="lg"
            className="bg-foreground cursor-pointer text-background hover:bg-foreground/90 shadow-elegant"
          >
            Faça uma Consulta
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CakesSection;