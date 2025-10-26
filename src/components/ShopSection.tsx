import { Button } from "../components/ui/button";
import shopDisplay from "../assets/shopdisplay.png";
import giftBox from "../assets/giftbox.png";
import macaronsAssorted from "../assets/macaronsassorted.png";
import strawberryCupcake from "../assets/strawberrycupcake.png";
import cherryCupcake from "../assets/cherrycupcake.png";
import velvetCupcake from "../assets/velvetCupcake.png";

import ProductCard from "./ProductCard";

const ShopSection = () => {
    const shopProducts = [
        {
            image: macaronsAssorted,
            name: "Macaron Box",
            description: "12 pieces of French macarons in assorted flavors",
            price: "$28.00"
        },
        {
            image: giftBox,
            name: "Deluxe Gift Box",
            description: "Curated selection of cupcakes and macarons",
            price: "$45.00"
        },
        {
            image: shopDisplay,
            name: "Party Bundle",
            description: "24 mini cupcakes perfect for celebrations",
            price: "$65.00"
        },
        {
            image: strawberryCupcake,
            name: "Strawberry Dream",
            description: "Vanilla cupcake with strawberry buttercream",
            price: "$3.99",
        },
        {
            image: cherryCupcake,
            name: "Cherry Delight",
            description: "Chocolate cupcake with vanilla cream",
            price: "$3.99",
        },
        {
            image: velvetCupcake,
            name: "Red Velvet Classic",
            description: "Red velvet with cream cheese frosting",
            price: "$4.50",
        },
    ];

    return (
        <section className="py-20 px-6 bg-soft-rose/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4">
                        Lojinha
                    </h2>
                    <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
                        Guloseimas e caixas de presente prontas para encomenda, perfeitas para presentear ou presentear você mesmo
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {shopProducts.map((product, index) => (
                        <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <ProductCard {...product} />
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-blush-pink to-soft-rose rounded-3xl p-12 text-center shadow-elegant animate-scale-in">
                    <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                       Oferta especial
                    </h3>
                    <p className="font-poppins text-lg text-foreground/80 mb-6 max-w-xl mx-auto">
                       Encomende 3 ou mais itens e ganhe<span className="font-bold text-primary">20% de desconto</span> toda a sua compra
                    </p>
                    <Button
                        size="lg"
                        className="rounded-full font-poppins font-semibold text-lg px-10 bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft"
                    >
                       Compre agora
                    </Button>
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h4 className="font-playfair text-xl font-semibold text-foreground mb-2">Fresco diariamente</h4>
                        <p className="font-poppins text-sm text-muted-foreground">Todos os produtos feitos frescos todas as manhãs</p>
                    </div>

                    <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                            </svg>
                        </div>
                        <h4 className="font-playfair text-xl font-semibold text-foreground mb-2">Presente pronto</h4>
                        <p className="font-poppins text-sm text-muted-foreground">Linda embalagem incluída em cada pedido</p>
                    </div>

                    <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h4 className="font-playfair text-xl font-semibold text-foreground mb-2">Recolha fácil</h4>
                        <p className="font-poppins text-sm text-muted-foreground">Faça seu pedido on-line e retire no mesmo dia</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopSection;