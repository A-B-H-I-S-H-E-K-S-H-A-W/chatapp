// components/ButtonLoader.jsx
import { motion } from "framer-motion";

const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 0.7,
      ease: "linear",
    },
  },
};

const ButtonLoader = () => {
  return (
    <motion.div
      className="w-5 h-5 border-2 border-t-transparent border-white rounded-full"
      variants={spinnerVariants}
      animate="animate"
    />
  );
};

export default ButtonLoader;
