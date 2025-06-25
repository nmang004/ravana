import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.645, 0.045, 0.355, 1]
    }
  }
};

export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.645, 0.045, 0.355, 1]
    }
  }
};

export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.645, 0.045, 0.355, 1]
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerChild: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.645, 0.045, 0.355, 1]
    }
  }
};

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotateY: -15
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: [0.645, 0.045, 0.355, 1]
    }
  }
};

export const slideInFromBottom: Variants = {
  hidden: { 
    opacity: 0, 
    y: 100,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.645, 0.045, 0.355, 1]
    }
  }
};

export const revealText: Variants = {
  hidden: { 
    opacity: 0,
    y: 20,
    skewY: 3
  },
  visible: { 
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.6,
      ease: [0.645, 0.045, 0.355, 1]
    }
  }
};

export const drawLine: Variants = {
  hidden: { 
    pathLength: 0, 
    opacity: 0 
  },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  }
};

export const floatingCard: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    rotateX: -10,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.645, 0.045, 0.355, 1]
    }
  }
};