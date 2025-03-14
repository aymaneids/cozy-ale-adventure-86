
import React from "react";
import { motion } from "framer-motion";
import MenuCard from "../components/MenuCard";
import { Coffee, Utensils } from "lucide-react";

const MorningMenu = () => {
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

  // Morning menu categories and items
  const menuCategories = [
    {
      name: "Award-Winning Coffee",
      description: "Specialty coffee drinks made with locally roasted beans.",
      icon: <Coffee size={24} className="text-tavern-gold" />,
      items: [
        {
          name: "House Drip Coffee",
          description: "Our signature blend with notes of chocolate and caramel.",
          price: "$3.50",
          highlight: true,
        },
        {
          name: "Cold Brew",
          description: "Smooth, low-acid coffee steeped for 24 hours.",
          price: "$4.50",
        },
        {
          name: "Espresso",
          description: "Double shot of our premium espresso blend.",
          price: "$3",
        },
        {
          name: "Cappuccino",
          description: "Equal parts espresso, steamed milk, and milk foam.",
          price: "$4.50",
        },
        {
          name: "Latte",
          description: "Espresso with steamed milk and a light layer of foam.",
          price: "$4.75",
        },
        {
          name: "Mocha",
          description: "Espresso with chocolate, steamed milk, and whipped cream.",
          price: "$5",
        },
      ],
    },
    {
      name: "Fresh Pastries from Bennison's",
      description: "Daily selection of pastries from Bennison's Bakery, a Chicago institution.",
      icon: <Utensils size={24} className="text-tavern-gold" />,
      items: [
        {
          name: "Croissant",
          description: "Buttery, flaky traditional French croissant.",
          price: "$3.75",
        },
        {
          name: "Pain au Chocolat",
          description: "Chocolate-filled croissant pastry.",
          price: "$4.25",
        },
        {
          name: "Almond Croissant",
          description: "Croissant filled with almond cream and topped with sliced almonds.",
          price: "$4.50",
          highlight: true,
        },
        {
          name: "Cinnamon Roll",
          description: "Soft, buttery roll with cinnamon filling and cream cheese frosting.",
          price: "$4.25",
        },
        {
          name: "Scone",
          description: "Daily selection of fresh-baked scones.",
          price: "$3.75",
        },
      ],
    },
    {
      name: "Breakfast Sandwiches",
      description: "Delicious breakfast sandwiches from The Goddess and Grocer.",
      icon: <Utensils size={24} className="text-tavern-gold" />,
      items: [
        {
          name: "Classic Egg & Cheese",
          description: "Scrambled eggs and cheddar cheese on a toasted English muffin.",
          price: "$6.50",
        },
        {
          name: "Bacon, Egg & Cheese",
          description: "Scrambled eggs, bacon, and cheddar cheese on a toasted English muffin.",
          price: "$7.50",
          highlight: true,
        },
        {
          name: "Avocado & Egg",
          description: "Scrambled eggs, avocado, spinach, and herb aioli on multigrain bread.",
          price: "$8",
        },
        {
          name: "Breakfast Burrito",
          description: "Scrambled eggs, black beans, avocado, pico de gallo, and cheddar cheese in a flour tortilla.",
          price: "$9",
        },
      ],
    },
    {
      name: "Morning Extras",
      description: "Additional breakfast offerings to complete your morning meal.",
      icon: <Utensils size={24} className="text-tavern-gold" />,
      items: [
        {
          name: "Greek Yogurt Parfait",
          description: "Greek yogurt with seasonal berries, honey, and house-made granola.",
          price: "$5.50",
        },
        {
          name: "Overnight Oats",
          description: "Steel-cut oats soaked overnight with almond milk, cinnamon, and maple syrup.",
          price: "$5",
        },
        {
          name: "Seasonal Fruit Cup",
          description: "Fresh seasonal fruit selection.",
          price: "$4.50",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 bg-tavern-cream">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <img
            src="/assets/coffee-pattern-bg.jpg"
            alt="Coffee pattern background"
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
              <span className="text-tavern-gold uppercase tracking-wider text-sm font-medium">Start Your Day Right</span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-tavern-brown mb-4">
                Morning Menu
              </h1>
              <p className="text-gray-700 text-lg mb-6">
                Begin your day with our award-winning coffee, fresh pastries from Bennison's, and delicious breakfast sandwiches from The Goddess and Grocer.
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
                <div className="flex items-center mb-2">
                  <div className="mr-3">{category.icon}</div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-tavern-brown">
                    {category.name}
                  </h2>
                </div>
                <p className="text-gray-600">{category.description}</p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, index) => (
                  <MenuCard
                    key={item.name}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    highlight={item.highlight}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Morning Hours Information */}
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
                Morning Hours
              </h3>
              <p className="text-gray-700 mb-4">
                Our morning menu is served from opening until 11:00 AM every day of the week.
              </p>
              <div className="mb-2">
                <p className="text-gray-700">Monday - Saturday: 7:00 AM - 11:00 AM</p>
                <p className="text-gray-700">Sunday: 8:00 AM - 11:00 AM</p>
              </div>
              <p className="text-gray-700 italic mt-4">
                Coffee service continues throughout the day.
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
                About Our Partners
              </h3>
              <p className="text-gray-700 mb-4">
                We're proud to partner with these Chicago institutions to bring you the finest morning offerings:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-medium">Metric Coffee:</span> Award-winning locally roasted coffee beans.</li>
                <li><span className="font-medium">Bennison's Bakery:</span> A legendary Evanston bakery with over 80 years of history.</li>
                <li><span className="font-medium">The Goddess and Grocer:</span> Beloved Chicago establishment known for their gourmet sandwiches and prepared foods.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MorningMenu;
