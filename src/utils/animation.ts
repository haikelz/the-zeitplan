export const toRight = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  hidden: { opacity: 0, x: -100 },
};

export const toLeft = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  hidden: { opacity: 0, x: 100 },
};

export const fadeIn = {
  visible: { opacity: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0 },
};

export const toRightWithDelay = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.7 } },
  hidden: { opacity: 0, x: -100 },
};

export const toRightWithMoreDelay = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 2.1 } },
  hidden: { opacity: 0, x: -100 },
};

export const toTop = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 1.4 } },
  hidden: { opacity: 0, y: 100 },
};
