'use client';

import { motion } from "framer-motion";

interface MotionProps {
  type: string;
  initial: {
    x?: number;
    y?: number;
    opacity: number;
  };
  whileInView?: {
    x?: number;
    y?: number;
    opacity: number;
  };
  animate?: {
    x?: number;
    y?: number;
    opacity: number;
  };
  transition?: {
    duration: number;
  };
  viewport?: {
    once: boolean;
  };
  className: string;
  children: React.ReactNode;
}

const Motion = ({
  type,
  children,
  ...props
}: MotionProps) => {
  if (type === 'div') {
    return (
      <motion.div {...props}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.section {...props}>
      {children}
    </motion.section>
  );
}
;

export default Motion;