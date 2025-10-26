import { Button } from "./ui/button";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
}

const ProductCard = ({ image, name, description, price }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
      <div className="aspect-square overflow-hidden bg-warm-beige">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 text-center space-y-3">
        <h3 className="font-playfair text-xl font-semibold text-foreground">
          {name}
        </h3>
        <p className="font-poppins text-sm text-muted-foreground">
          {description}
        </p>
        <p className="font-poppins text-2xl font-bold text-primary">
          {price}
        </p>
        <Button
          variant="outline"
          className="w-full rounded-full font-poppins font-medium border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;