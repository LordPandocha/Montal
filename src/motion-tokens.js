export const motionTokens = {
  duration: {
    fast: 0.18,
    normal: 0.35,
    slow: 0.72,
    entrance: 0.88,
    ambient: 18,
  },
  easing: {
    smooth: [0.18, 0.82, 0.22, 1],
    sharp: [0.4, 0, 0.2, 1],
  },
  distance: {
    small: 8,
    medium: 22,
    large: 42,
    parallax: 86,
  },
  scrollRange: 0.27,
  scale: {
    rest: 1,
    hover: 1.035,
    press: 0.98,
  },
};

export const springs = {
  gentle: { type: "spring", stiffness: 120, damping: 18 },
  snappy: { type: "spring", stiffness: 300, damping: 30 },
  playful: { type: "spring", stiffness: 240, damping: 17 },
};
