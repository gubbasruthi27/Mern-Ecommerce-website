import { Target, Eye, Heart, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: 'Our Mission',
      description: 'To empower individuals to express their unique style through premium quality fashion and lifestyle products that blend contemporary design with timeless elegance.',
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: 'Our Vision',
      description: 'To become India\'s most trusted fashion destination, setting trends while maintaining sustainable and ethical practices that respect both people and planet.',
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: 'Our Values',
      description: 'Quality, sustainability, inclusivity, and customer satisfaction guide every decision we make. We believe fashion should be accessible, ethical, and inspiring.',
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Our Promise',
      description: 'Premium quality products, exceptional customer service, and a seamless shopping experience. Your satisfaction is our success, and we stand behind every product we sell.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent via-background to-accent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About StyleSphere</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            More than just a fashion store – we're a community of style enthusiasts dedicated to helping you discover and express your authentic self through carefully curated collections.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2024, StyleSphere emerged from a simple belief: everyone deserves access to quality fashion that makes them feel confident and authentic. What started as a small passion project has grown into a thriving platform serving thousands of style-conscious customers across India.
              </p>
              <p>
                We understand that fashion is more than just clothing – it's a form of self-expression, a confidence booster, and a way to connect with the world around you. That's why we meticulously curate every piece in our collection, ensuring it meets our high standards for quality, design, and versatility.
              </p>
              <p>
                Our team of fashion experts travels the world to discover emerging trends and timeless classics, bringing you a carefully selected range that balances contemporary style with lasting value. From everyday essentials to statement pieces, each item is chosen with you in mind.
              </p>
              <p>
                As we continue to grow, our commitment remains unchanged: to provide exceptional products, outstanding service, and an inspiring shopping experience that keeps you coming back. We're not just building a business; we're building relationships with customers who trust us to help them look and feel their best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">5000+</p>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-muted-foreground">Products</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-muted-foreground">Cities Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">4.8/5</p>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every product, every interaction, and every decision is made with our customers in mind. We're committed to providing not just great fashion, but a shopping experience that exceeds your expectations at every touchpoint.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
