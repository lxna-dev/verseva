"use client";

import { useInView } from "motion/react";
import { useRef } from "react";
import { motion } from "framer-motion";

type InViewProps = {
  children: React.ReactNode;
};

export default function InView({ children }: InViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -35% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
