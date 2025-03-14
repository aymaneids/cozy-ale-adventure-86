
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Beer, Coffee, Calendar, MapPin, ArrowRight } from "lucide-react";
import TestimonialCard from "../components/TestimonialCard";

const Index = () => {
  // Images for the home page
  const tavernImages = [
    "/assets/tavern-interior.jpg",
    "/assets/craft-beer.jpg",
    "/assets/morning-coffee.jpg",
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/assets/tavern-hero.jpg"
            alt="J&M Tavern Interior"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              Chicago's Finest Tavern Experience
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              A home away from home for travelers and locals alike, offering an exceptional selection of craft, import, and limited-release beers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/beer-menu"
                className="bg-tavern-gold text-white px-6 py-3 rounded-md font-medium transition-all hover:bg-tavern-gold/90 hover:shadow-lg"
              >
                View Our Beer List
              </Link>
              <Link
                to="/specials"
                className="bg-transparent text-white border border-white/30 backdrop-blur-sm px-6 py-3 rounded-md font-medium transition-all hover:border-white hover:bg-white/10"
              >
                See Daily Specials
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a
              href="#welcome"
              className="text-white flex flex-col items-center"
              aria-label="Scroll down"
            >
              <span className="text-sm mb-2">Discover More</span>
              <span className="border-2 border-white/30 rounded-full p-2 hover:border-white/60 transition-colors">
                <ArrowRight size={16} className="rotate-90" />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              variants={fadeIn}
            >
              <span className="text-tavern-gold uppercase tracking-wider text-sm font-medium">Welcome to</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-tavern-brown mb-4">
                J&M Tavern
              </h2>
              <p className="text-gray-700 mb-6">
                Founded in 2010, J&M Tavern has been a cornerstone of Chicago's bar scene, offering a unique blend of cozy ambiance, exceptional service, and an outstanding selection of beers and beverages.
              </p>
              <p className="text-gray-700 mb-6">
                What sets us apart is our dedication to creating a genuine "home away from home" for both travelers exploring the Windy City and our beloved local patrons. Our tavern is not just a place to drink, but a place to connect, share stories, and create memories.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-tavern-brown hover:text-tavern-gold transition-colors font-medium"
              >
                Learn more about our story
                <ArrowRight size={16} className="ml-2" />
              </Link>
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
                src="/assets/tavern-detail1.jpg"
                alt="Tavern atmosphere"
                className="rounded-lg shadow-lg object-cover w-full h-64"
              />
              <img
                src="/assets/tavern-detail2.jpg"
                alt="Beer selection"
                className="rounded-lg shadow-lg object-cover w-full h-64 transform translate-y-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <span className="text-tavern-gold uppercase tracking-wider text-sm font-medium">What we offer</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-tavern-brown mt-2">
              The J&M Experience
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
              variants={fadeIn}
              className="glass-card p-8 rounded-lg text-center"
            >
              <div className="bg-tavern-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Beer size={28} className="text-tavern-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold text-tavern-brown mb-3">
                Exceptional Beer Selection
              </h3>
              <p className="text-gray-700">
                Discover our carefully curated selection of craft, import, and limited-release beers that will delight both casual drinkers and connoisseurs.
              </p>
              <Link
                to="/beer-menu"
                className="inline-flex items-center mt-4 text-tavern-brown hover:text-tavern-gold transition-colors font-medium"
              >
                Explore Beer Menu
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={2}
              variants={fadeIn}
              className="glass-card p-8 rounded-lg text-center"
            >
              <div className="bg-tavern-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee size={28} className="text-tavern-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold text-tavern-brown mb-3">
                Morning Delights
              </h3>
              <p className="text-gray-700">
                Start your day with our award-winning coffee, fresh pastries from Bennison's, and delicious breakfast sandwiches from The Goddess and Grocer.
              </p>
              <Link
                to="/morning-menu"
                className="inline-flex items-center mt-4 text-tavern-brown hover:text-tavern-gold transition-colors font-medium"
              >
                View Morning Menu
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={3}
              variants={fadeIn}
              className="glass-card p-8 rounded-lg text-center"
            >
              <div className="bg-tavern-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={28} className="text-tavern-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold text-tavern-brown mb-3">
                Daily Specials
              </h3>
              <p className="text-gray-700">
                Enjoy our rotating daily specials and featured Beer of the Month, offering you new experiences and great value with every visit.
              </p>
              <Link
                to="/specials"
                className="inline-flex items-center mt-4 text-tavern-brown hover:text-tavern-gold transition-colors font-medium"
              >
                Check Daily Specials
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <span className="text-tavern-gold uppercase tracking-wider text-sm font-medium">What people say</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-tavern-brown mt-2">
              Customer Experiences
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="The best selection of beers I've found in Chicago! J&M Tavern has become my regular spot whenever I'm in town for business."
              author="Michael T."
              rating={5}
              source="Google Reviews"
              delay={1}
            />
            <TestimonialCard
              quote="I love stopping by for their morning coffee and pastries. Such a cozy atmosphere to start the day."
              author="Jennifer L."
              rating={5}
              source="Yelp"
              delay={2}
            />
            <TestimonialCard
              quote="Their Beer of the Month program has introduced me to so many amazing brews I wouldn't have tried otherwise."
              author="David K."
              rating={4}
              source="TripAdvisor"
              delay={3}
            />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-tavern-cream">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              variants={fadeIn}
            >
              <span className="text-tavern-gold uppercase tracking-wider text-sm font-medium">Find Us</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-tavern-brown mb-4">
                Visit J&M Tavern Today
              </h2>
              <p className="text-gray-700 mb-6">
                Located in the heart of Chicago, J&M Tavern is easily accessible by public transportation or car. Come experience the warmth and hospitality that has made us a favorite among locals and travelers alike.
              </p>
              
              <div className="flex items-start mb-4">
                <MapPin size={20} className="text-tavern-gold mr-2 mt-1" />
                <span className="text-gray-700">123 W Chicago Ave, Chicago, IL 60654</span>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium text-tavern-brown mb-2">Hours:</h3>
                <p className="text-gray-700">Monday - Thursday: 7am - 12am</p>
                <p className="text-gray-700">Friday - Saturday: 7am - 2am</p>
                <p className="text-gray-700">Sunday: 8am - 10pm</p>
              </div>
              
              <Link
                to="/contact"
                className="bg-tavern-brown text-white px-6 py-3 rounded-md font-medium transition-all hover:bg-tavern-brown/90 hover:shadow-lg inline-flex items-center"
              >
                Get Directions
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
              variants={fadeIn}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654056126738!2d-87.63539082385793!3d41.89675906962191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2sW%20Chicago%20Ave%2C%20Chicago%2C%20IL%2060654!5e0!3m2!1sen!2sus!4v1719352682687!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="J&M Tavern Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-tavern-brown text-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              variants={fadeIn}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Stay Updated with J&M Tavern
              </h2>
              <p className="text-white/80 mb-6">
                Subscribe to our newsletter for the latest updates on events, specials, and new beer arrivals.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-tavern-gold"
                />
                <button className="bg-tavern-gold text-white px-6 py-3 rounded-md font-medium transition-all hover:bg-tavern-gold/90 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-white/60 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
