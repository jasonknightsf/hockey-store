
const ProductSection = () => {
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Professional Ice Skates",
      description: "Experience unmatched performance with our top-tier ice skates. Designed for speed, agility, and comfort, these skates are used by professional players worldwide. Features include lightweight carbon fiber construction and precision steel blades.",
      features: ["Carbon fiber boot", "Professional steel blades", "Custom fit technology"]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Elite Protective Pads",
      description: "Stay protected without sacrificing mobility. Our advanced padding system offers maximum protection while maintaining flexibility. Used by NHL players for ultimate performance and safety on the ice.",
      features: ["Impact-resistant materials", "Flexible joint design", "Moisture-wicking interior"]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Pro Hockey Helmets",
      description: "Advanced helmet technology for maximum head protection. Our helmets feature multi-impact foam, adjustable fit systems, and superior ventilation. Trust the same gear that protects elite athletes.",
      features: ["Multi-impact protection", "Adjustable fit system", "Superior ventilation"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 font-roboto-slab">
            Featured Equipment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-roboto font-light">
            Discover the same professional-grade equipment used by NHL stars
          </p>
        </div>

        <div className="space-y-24">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Product Image */}
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-material-lg bg-card">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Product Content */}
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-3xl md:text-4xl font-light text-foreground font-roboto-slab">
                  {product.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-roboto font-light">
                  {product.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground font-roboto">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4 flex-shrink-0"></div>
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="pt-6">
                  <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-material font-roboto uppercase tracking-wide">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
