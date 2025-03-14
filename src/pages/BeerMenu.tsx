
import React from "react";
import { motion } from "framer-motion";
import MenuCard from "../components/MenuCard";

const BeerMenu = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Beer menu categories and items
  const menuCategories = [
    {
      name: "Craft Beers",
      description: "Our selection of locally brewed and specialty craft beers.",
      items: [
        {
          name: "Revolution Anti-Hero IPA",
          description: "A bold American IPA with citrus and pine hop aromas, balanced with a solid malt backbone.",
          price: "$7",
          origin: "Chicago, IL",
          abv: "6.7%",
          highlight: true,
        },
        {
          name: "Half Acre Daisy Cutter",
          description: "A bright pale ale with dank hops and a dry, crisp finish.",
          price: "$7",
          origin: "Chicago, IL",
          abv: "5.2%",
        },
        {
          name: "Goose Island 312",
          description: "A crisp, fruity urban wheat ale with a spicy aroma of Cascade hops.",
          price: "$6",
          origin: "Chicago, IL",
          abv: "4.2%",
        },
        {
          name: "Lagunitas IPA",
          description: "Well-rounded IPA with caramel malt barley and a citrusy hop profile.",
          price: "$7",
          origin: "Chicago, IL",
          abv: "6.2%",
        },
        {
          name: "Three Floyds Zombie Dust",
          description: "Medium-bodied pale ale with notes of citrus and an intensely aromathic and hop-forward profile.",
          price: "$8",
          origin: "Munster, IN",
          abv: "6.2%",
        },
      ],
    },
    {
      name: "Imported Beers",
      description: "Premium selections from breweries around the world.",
      items: [
        {
          name: "Guinness Draught",
          description: "Dark Irish dry stout with a creamy head and subtle coffee and chocolate notes.",
          price: "$7.50",
          origin: "Ireland",
          abv: "4.2%",
        },
        {
          name: "Stella Artois",
          description: "Belgian pilsner with a light, crisp flavor and subtle malt sweetness.",
          price: "$6.50",
          origin: "Belgium",
          abv: "5.0%",
        },
        {
          name: "Pilsner Urquell",
          description: "The world's first golden pilsner with a refreshing, clean taste and spicy hop character.",
          price: "$7",
          origin: "Czech Republic",
          abv: "4.4%",
        },
        {
          name: "Chimay Blue",
          description: "Authentic Trappist ale with rich flavors of dark fruits and a warming alcohol presence.",
          price: "$9",
          origin: "Belgium",
          abv: "9.0%",
          highlight: true,
        },
        {
          name: "Ayinger Celebrator",
          description: "Double bock with rich, complex maltiness and notes of caramel, coffee, and chocolate.",
          price: "$8.50",
          origin: "Germany",
          abv: "6.7%",
        },
      ],
    },
    {
      name: "Seasonal & Limited Releases",
      description: "Special rotating selections available for a limited time.",
      items: [
        {
          name: "Beer of the Month: Metropolitan Krankshaft",
          description: "A German-style Kölsch with subtle fruity esters, a crisp finish, and just a hint of sweetness.",
          price: "$6.50",
          origin: "Chicago, IL",
          abv: "5.0%",
          highlight: true,
        },
        {
          name: "Founders KBS",
          description: "Imperial stout aged in bourbon barrels with coffee and chocolate for a rich, complex profile.",
          price: "$10",
          origin: "Grand Rapids, MI",
          abv: "12.0%",
        },
        {
          name: "Revolution Deep Wood Series",
          description: "Barrel-aged barleywine with flavors of toffee, vanilla, and bourbon-soaked dark fruits.",
          price: "$11",
          origin: "Chicago, IL",
          abv: "13.5%",
        },
      ],
    },
    {
      name: "Wine & Spirits",
      description: "Our carefully selected wine list and premium spirits.",
      items: [
        {
          name: "House Red",
          description: "A medium-bodied blend with notes of red fruits and a smooth finish.",
          price: "$9 / glass",
          category: "Wine",
        },
        {
          name: "House White",
          description: "Crisp, refreshing white wine with subtle citrus notes.",
          price: "$9 / glass",
          category: "Wine",
        },
        {
          name: "Premium Scotch",
          description: "Selection of single malt and blended Scotch whiskies.",
          price: "From $12",
          category: "Spirits",
        },
        {
          name: "Craft Cocktails",
          description: "Seasonally inspired cocktails made with premium spirits and fresh ingredients.",
          price: "From $11",
          category: "Cocktails",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 bg-tavern-brown">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img
            src="/assets/beer-pattern-bg.jpg"
            alt="Beer pattern background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-tavern-gold uppercase tracking-wider text-sm font-medium">Our Selection</span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                Beer & Drinks Menu
              </h1>
              <p className="text-white/80 text-lg mb-6">
                Explore our carefully curated selection of craft, import, and limited-release beers alongside our premium wines and spirits.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto container-padding">
          {menuCategories.map((category, categoryIndex) => (
            <div key={category.name} className="mb-16 last:mb-0">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={categoryIndex}
                variants={fadeIn}
                className="mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-tavern-brown mb-2">
                  {category.name}
                </h2>
                <p className="text-gray-600">{category.description}</p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, index) => (
                  <MenuCard
                    key={item.name}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    category={item.category}
                    highlight={item.highlight}
                    origin={item.origin}
                    abv={item.abv}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              variants={fadeIn}
              className="bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-md border border-white/30"
            >
              <h3 className="text-xl font-serif font-bold text-tavern-brown mb-4">
                Rotating Taps
              </h3>
              <p className="text-gray-700 mb-4">
                In addition to our standard offerings, we feature rotating taps that change weekly to showcase new and seasonal brews. Ask your server about what's currently pouring!
              </p>
              <p className="text-gray-700">
                Follow us on social media to stay updated on our latest tap additions and special beer events.
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
              variants={fadeIn}
              className="bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-md border border-white/30"
            >
              <h3 className="text-xl font-serif font-bold text-tavern-brown mb-4">
                Beer Flight Experience
              </h3>
              <p className="text-gray-700 mb-4">
                Can't decide what to try? Our beer flights allow you to sample four different beers of your choice.
              </p>
              <div className="glass-card p-4 rounded-md bg-tavern-gold/10 border border-tavern-gold/30">
                <p className="text-tavern-brown font-medium">
                  Flight of Four (5oz pours) - $12
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Choose any four beers from our menu to create your custom flight.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeerMenu;
