import { Button } from "../components/ui/button";

const MenuSection = () => {
    const menuCategories = [
        {
            name: "Cupcakes",
            description: "Deliciosos mini bolos perfeitos para qualquer ocasião",
            items: ["Sonho de Baunilha", "Delícia de Chocolate", "Veludo Vermelho", "Amor de Morango"],
            price: "Preço: R$3,50"
        },
        {
            name: "Bolos Exclusivos",
            description: "Nossas criações mais queridas",
            items: ["Clássico de Chocolate", "Baunilha Premium", "Explosão de Limão", "Paraíso de Caramelo"],
            price: "A partir de R$45,00"
        },
        {
            name: "Bolos Personalizados",
            description: "Designs únicos para seus momentos especiais",
            items: ["Bolos de Casamento", "Bolos de Aniversário", "Bolos de Comemoração", "Eventos Corporativos"],
            price: "Preço sob consulta"
        },
        {
            name: "Macarons",
            description: "Docinhos franceses delicados e irresistíveis",
            items: ["Framboesa", "Pistache", "Chocolate", "Mel com Lavanda"],
            price: "A partir de R$2,50"
        },
        {
            name: "Edições Sazonais",
            description: "Criações festivas disponíveis por tempo limitado",
            items: ["Coleção de Natal", "Verão Frutado", "Especiarias de Outono", "Flores de Primavera"],
            price: "Variável"
        },
        {
            name: "Caixas Presenteáveis",
            description: "Seleções especiais com embalagens encantadoras",
            items: ["Caixa Deluxe", "Mini Sortido", "Coleção Amor", "Kit Celebração"],
            price: "A partir de R$25,00"
        }


    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-b from-background to-warm-beige/80">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4">
                        Menu
                    </h2>
                    <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore nossa coleção artesanal de delícias doces, preparadas diariamente com amor
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {menuCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3">
                                {category.name}
                            </h3>
                            <p className="font-poppins text-sm text-muted-foreground mb-4">
                                {category.description}
                            </p>
                            <ul className="space-y-2 mb-6">
                                {category.items.map((item, idx) => (
                                    <li key={idx} className="font-poppins text-sm text-foreground/80 flex items-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex items-center justify-between pt-4 border-t border-border">
                                <p className="font-poppins text-lg font-semibold text-primary">
                                    {category.price}
                                </p>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="rounded-full cursor-pointer font-medium border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                                >
                                   Saiba Mais
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuSection;