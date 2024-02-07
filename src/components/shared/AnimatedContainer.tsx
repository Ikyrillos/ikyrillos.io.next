import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};
export default function AnimatedContainer({ children }: Props) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.375 }}
    >
      {children}
    </motion.div>
  );
}
