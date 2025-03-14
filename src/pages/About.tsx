
import React from "react";
import { motion } from "framer-motion";
import ImageGallery from "../components/ImageGallery";

const About = () => {
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

  // Gallery images
  const galleryImages = [
    {
      src: "/assets/tavern-history1.jpg",
      alt: "Original J&M Tavern from 2010",
      caption: "Original J&M Tavern - 2010",
    },
    {
      src: "/assets/tavern-history2.jpg",
      alt: "Tavern renovation",
      caption: "Major renovation - 2015",
    },
    {
      src: "/assets/tavern-history3.jpg",
      alt: "Beer tasting event",
      caption: "Our first beer tasting event",
    },
    {
      src: "/assets/tavern-interior1.jpg",
      alt: "Current tavern interior",
      caption: "Our current interior",
    },
    {
      src: "/assets/tavern-staff.jpg",
      alt: "J&M Tavern staff",
      caption: "The J&M Tavern team",
    },
    {
      src: "/assets/tavern-event.jpg",
      alt: "Special event at the tavern",
      caption: "J&M Tavern events",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 bg-tavern-darkGreen">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img
            src="/assets/tavern-pattern-bg.jpg"
            alt="Tavern pattern background"
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
              <span className="text-tavern-gold uppercase tracking-wider text-sm font-medium">Our Story</span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                About J&M Tavern
              </h1>
              <p className="text-white/80 text-lg mb-6">
                A home away from home for travelers and locals alike, where Chicago's rich tavern culture meets modern craft beer innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              variants={fadeIn}
            >
              <span className="text-tavern-gold uppercase tracking-wider text-sm font-medium">Our History</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-tavern-brown mb-4">
                The J&M Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2010 by long-time friends Jack Thompson and Mike Roberts, J&M Tavern was born from a shared passion for craft beer and a vision to create a welcoming space that would honor Chicago's rich tavern culture while embracing modern craft beer innovation.
                </p>
                <p>
                  The "J&M" name reflects not just our founders' initials, but also our commitment to being a "Journey & Meeting" place – where travelers and locals alike can find a home away from home, share stories, and create lasting memories.
                </p>
                <p>
                  Our location in the heart of Chicago has allowed us to become a cornerstone of the community, serving not just as a tavern but as a gathering place for beer enthusiasts, morning coffee seekers, and anyone looking for a warm, welcoming atmosphere.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
              variants={fadeIn}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="/assets/founder1.jpg"
                alt="J&M Tavern founder Jack"
                className="rounded-lg shadow-lg object-cover w-full h-64"
              />
              <img
                src="/assets/founder2.jpg"
                alt="J&M Tavern founder Mike"
                className="rounded-lg shadow-lg object-cover w-full h-64 transform translate-y-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <span className="text-tavern-gold uppercase tracking-wider text-sm font-medium">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-tavern-brown mt-2">
              What We Stand For
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
              variants={fadeIn}
              className="glass-card p-8 rounded-lg"
            >
              <h3 className="text-xl font-serif font-bold text-tavern-brown mb-3">
                Community
              </h3>
              <p className="text-gray-700">
                We believe in creating a space where everyone feels welcome, whether you're a local regular or a traveler passing through. Our tavern is built on the connections made here.
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={2}
              variants={fadeIn}
              className="glass-card p-8 rounded-lg"
            >
              <h3 className="text-xl font-serif font-bold text-tavern-brown mb-3">
                Quality
              </h3>
              <p className="text-gray-700">
                From our carefully curated beer selection to our locally sourced coffee and food partnerships, we're committed to offering only the best to our patrons.
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={3}
              variants={fadeIn}
              className="glass-card p-8 rounded-lg"
            >
              <h3 className="text-xl font-serif font-bold text-tavern-brown mb-3">
                Innovation
              </h3>
              <p className="text-gray-700">
                While we respect tradition, we're always looking forward, seeking out new and exciting offerings to share with our community, from craft beers to morning delights.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <span className="text-tavern-gold uppercase tracking-wider text-sm font-medium">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-tavern-brown mt-2 mb-4">
              Through the Years
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Take a visual journey through our history, from our humble beginnings to the vibrant community gathering place we are today.
            </p>
          </motion.div>
          
          <div className="mb-16">
            <ImageGallery images={galleryImages} columnsDesktop={3} columnsMobile={1} />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-tavern-brown">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              variants={fadeIn}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                Become Part of Our Story
              </h2>
              <p className="text-white/80 mb-8">
                Join us for a drink, stay for the community. Come experience what makes J&M Tavern a Chicago favorite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/beer-menu"
                  className="bg-tavern-gold text-white px-6 py-3 rounded-md font-medium transition-all hover:bg-tavern-gold/90 hover:shadow-lg"
                >
                  View Our Menu
                </a>
                <a
                  href="/contact"
                  className="bg-transparent text-white border border-white/30 backdrop-blur-sm px-6 py-3 rounded-md font-medium transition-all hover:border-white hover:bg-white/10"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
