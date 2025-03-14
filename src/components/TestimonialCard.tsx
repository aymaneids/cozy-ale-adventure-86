
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  rating: number;
  source?: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  rating,
  source,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-md border border-white/30"
    >
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < rating ? "text-tavern-gold fill-tavern-gold" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="italic text-gray-700 mb-4">"{quote}"</p>
      <div className="flex flex-col">
        <span className="font-medium text-tavern-brown">{author}</span>
        {source && (
          <span className="text-xs text-gray-500">{source}</span>
        )}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
