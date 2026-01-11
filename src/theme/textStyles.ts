export const TextStyles = {
  h1: {
    fontFamily: "'Russo One', sans-serif",
    fontSize: {
      lPc: "64px",
      sPc: "48px",
      lTab: "44px",
      sTab: "42px",
      lMob: "34px",
      sMob: "26px",
    },
    lineHeight: "1.2",
  },
  h2: {
    fontFamily: "'Russo One', sans-serif",
    fontSize: {
      lPc: "48px",
      sPc: "36px",
      lTab: "32px",
      sTab: "32px",
      lMob: "28px",
      sMob: "22px",
    },
    lineHeight: "1.2",
  },
  h3: {
    fontFamily: "'Russo One', sans-serif",
    fontSize: {
      lPc: "38px",
      sPc: "32px",
      lTab: "26px",
      sTab: "26px",
      lMob: "22px",
      sMob: "16px",
    },
    lineHeight: "1.2",
  },
  h4: {
    fontFamily: "'Russo One', sans-serif",
    fontSize: {
      lPc: "34px",
      sPc: "28px",
      lTab: "22px",
      sTab: "22px",
      lMob: "18px",
      sMob: "18px",
    },
    lineHeight: "1.2",
  },
  h5: {
    fontFamily: "'Russo One', sans-serif",
    fontSize: {
      lPc: "26px",
      sPc: "22px",
      lTab: "20px",
      sTab: "20px",
      lMob: "16px",
      sMob: "14px",
    },
    lineHeight: "1.2",
  },
  h6: {
    fontFamily: "'Russo One', sans-serif",
    fontSize: {
      lPc: "26px",
      sPc: "22px",
      lTab: "18px",
      sTab: "16px",
      lMob: "12px",
      sMob: "10px",
    },
    lineHeight: "1.2",
  },
} as const;

export type TextStyleKey = keyof typeof TextStyles;
