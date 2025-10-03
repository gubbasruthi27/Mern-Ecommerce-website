import { Product } from '@/contexts/CartContext';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';
import product6 from '@/assets/product-6.jpg';

export const products: Product[] = [
  {
    id: 1,
    name: 'Elegant White Dress',
    price: 4999,
    image: product1,
    category: 'Women',
    description: 'A stunning white dress perfect for any occasion. Made from premium fabric with elegant design.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Cream', 'Ivory'],
  },
  {
    id: 2,
    name: 'Classic Leather Jacket',
    price: 8999,
    image: product2,
    category: 'Unisex',
    description: 'Premium leather jacket with timeless design. Perfect for adding edge to any outfit.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Brown', 'Navy'],
  },
  {
    id: 3,
    name: 'Lavender Sweater',
    price: 2999,
    image: product3,
    category: 'Women',
    description: 'Soft and cozy lavender sweater. Perfect for layering and staying warm in style.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Lavender', 'Pink', 'Grey'],
  },
  {
    id: 4,
    name: 'Premium Denim Jeans',
    price: 3499,
    image: product4,
    category: 'Unisex',
    description: 'High-quality denim jeans with perfect fit. Versatile and durable for everyday wear.',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Blue', 'Black', 'Grey'],
  },
  {
    id: 5,
    name: 'Floral Summer Dress',
    price: 3999,
    image: product5,
    category: 'Women',
    description: 'Beautiful floral dress perfect for summer. Lightweight and breathable fabric.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Multi', 'Blue', 'Pink'],
  },
  {
    id: 6,
    name: 'Professional Blazer',
    price: 6999,
    image: product6,
    category: 'Unisex',
    description: 'Elegant blazer for professional settings. Tailored fit with premium finish.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'Grey'],
  },
  {
    id: 7,
    name: 'Casual Cotton T-Shirt',
    price: 999,
    image: product1,
    category: 'Unisex',
    description: 'Comfortable cotton t-shirt for everyday wear. Soft fabric with modern fit.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Grey', 'Blue'],
  },
  {
    id: 8,
    name: 'Stylish Cardigan',
    price: 3499,
    image: product3,
    category: 'Women',
    description: 'Versatile cardigan perfect for layering. Soft knit with elegant drape.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Beige', 'Black', 'Lavender'],
  },
];
