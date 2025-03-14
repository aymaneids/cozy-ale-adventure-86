
import React from "react";
import { motion } from "framer-motion";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  category?: string;
  highlight?: boolean;
  origin?: string;
  abv?: string;
}

const MenuCard: React.FC<MenuItemProps> = ({
  name,
  description,
  price,
  category,
  highlight = false,
  origin,
  abv,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`p-5 rounded-md ${
        highlight
          ? "bg-tavern-gold/10 border border-tavern-gold/30"
          : "bg-white/60 backdrop-blur-sm border border-white/20"
      } shadow-sm transition-all duration-300 hover:shadow-md`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-serif font-medium text-tavern-brown">
            {name}
            {highlight && (
              <span className="ml-2 text-xs uppercase tracking-wider bg-tavern-gold text-white px-2 py-0.5 rounded-full">
                Featured
              </span>
            )}
          </h3>
          {category && (
            <p className="text-xs text-tavern-brown/70 mt-1 uppercase tracking-wider">
              {category}
            </p>
          )}
        </div>
        <span className="text-tavern-brown font-medium">
          {price}
        </span>
      </div>
      
      {(origin || abv) && (
        <div className="flex gap-4 mt-2 text-xs text-tavern-brown/70">
          {origin && <span>Origin: {origin}</span>}
          {abv && <span>ABV: {abv}</span>}
        </div>
      )}
      
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </motion.div>
  );
};

export default MenuCard;
