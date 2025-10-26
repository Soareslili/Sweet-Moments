import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import partyTable from "../assets/partyTable.png";

const PartiesSection = () => {
    const partyPackages = [
        {
            name: "Sweet Beginnings",
            price: "$150",
            items: ["12 Cupcakes", "24 Macarons", "Dessert Table Setup"],
            serves: "Up to 15 guests",
        },
        {
            name: "Celebration Delight",
            price: "$350",
            items: ["1 Custom Cake", "24 Cupcakes", "48 Macarons", "Cake Pops", "Full Dessert Display"],
            serves: "Up to 40 guests",
            featured: true,
        },
        {
            name: "Grand Affair",
            price: "$650",
            items: ["2-Tier Custom Cake", "48 Cupcakes", "100 Macarons", "Decorative Treats", "Premium Setup & Styling"],
            serves: "Up to 80 guests",
        },
    ];

    const occasions = [
        "Birthdays",
        "Weddings",
        "Baby Showers",
        "Bridal Showers",
        "Corporate Events",
        "Anniversaries",
    ];

    return (
        <section id="pacotes" className="py-24 bg-cream">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4 animate-fade-in">
                    <p className="font-poppins text-sm uppercase tracking-widest text-primary">
                        Comemore com estilo
                    </p>
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
                        Pacotes de festa
                    </h2>
                    <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
                        Torne a sua celebração inesquecível com nossos pacotes de sobremesas lindamente selecionados,
                        projetado para encantar seus convidados e criar doces lembranças.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
                    <div className="animate-fade-in-up">
                        <img
                            src={partyTable}
                            alt="Party dessert table"
                            className="w-full h-[500px] object-cover rounded-2xl shadow-elegant"
                        />
                    </div>
                    <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                        <h3 className="font-playfair text-3xl font-bold text-foreground"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >

                            Perfeito para todas as ocasiões
                        </h3>
                        <p className="font-poppins text-muted-foreground leading-relaxed"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="400"
                        >
                            Esteja você organizando uma reunião íntima ou uma grande celebração,
                            nossos pacotes de festa são adaptados às suas necessidades. Cada pacote inclui
                            uma impressionante exibição de mesa de sobremesas que irá impressionar seus convidados.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {occasions.map((occasion, index) => (
                                <div
                                    key={occasion}
                                    className="flex items-center gap-2 animate-fade-in"
                                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                                    data-aos="fade-down"
                                    data-aos-delay={index * 400}
                                   

                                >
                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                    <span className="font-poppins text-foreground">{occasion}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {partyPackages.map((pkg, index) => (
                        <div
                            key={pkg.name}
                            className="animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.2}s` }}

                        >
                            <Card
                                className={`h-full ${pkg.featured
                                    ? "border-2 border-primary shadow-gold scale-105"
                                    : "border-primary/10"
                                    } transition-all duration-300 hover:shadow-elegant`}
                            >
                                {pkg.featured && (
                                    <div className="bg-primary text-primary-foreground text-center py-2 font-poppins text-sm font-semibold">

                                        Mais populares
                                    </div>
                                )}
                                <CardContent className="p-8 space-y-6">
                                    <div className="text-center space-y-2">
                                        <h3 className="font-playfair text-2xl font-bold text-foreground">
                                            {pkg.name}
                                        </h3>
                                        <p className="font-playfair text-4xl font-bold text-primary">
                                            {pkg.price}
                                        </p>
                                        <p className="font-poppins text-sm text-muted-foreground">
                                            {pkg.serves}
                                        </p>
                                    </div>
                                    <div className="space-y-3 pt-4 border-t border-border">
                                        {pkg.items.map((item) => (
                                            <div key={item} className="flex items-start gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                <span className="font-poppins text-sm text-foreground">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <Button
                                        className={`w-full ${pkg.featured
                                            ? "bg-primary cursor-pointer hover:bg-primary/90 text-primary-foreground"
                                            : "bg-foreground cursor-pointer hover:bg-foreground/90 text-background"
                                            }`}
                                    >
                                        Selecione o pacote
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center bg-background rounded-2xl p-8 border-2 border-primary/20">
                    <p className="font-poppins text-muted-foreground mb-4">
                        Precisa de um pacote personalizado? Estamos felizes em criar algo único para o seu evento.
                    </p>
                    <Button variant="outline" className="border-primary cursor-pointer text-primary hover:bg-primary hover:text-primary-foreground">

                        Contate-nos para orçamento personalizado
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PartiesSection;
