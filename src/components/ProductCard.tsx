import { Link } from 'react-router-dom';
import { Product } from '@/contexts/CartContext';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/products/${product.id}`}>
      <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 h-full">
        <div className="relative overflow-hidden aspect-[3/4] bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardContent className="p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
            {product.category}
          </p>
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {product.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <span className="text-xl font-bold text-primary">₹{product.price.toLocaleString('en-IN')}</span>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
