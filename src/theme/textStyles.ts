export const TextStyles = {
  logo: {
    fontFamily: "Rubik Mono One",
    fontSize: {
      lPc: "82px",
      sPc: "58px",
      sTab: "52px",
      lMob: "42px",
      base: "32px",
    },
    lineHeight: {
      lPc: "102px",
      sPc: "72px",
      sTab: "64px",
      lMob: "52px",
      base: "40px",
    },
  },
  plRegular: {
    fontFamily: "'Russo One', sans-serif",
    fontSize: {
      lPc: "22px",
      sPc: "18px",
      sTab: "16px",
      lMob: "14px",
      base: "10px",
    },
    lineHeight: "auto",
  },
  menuNav: {
    fontFamily: "'Russo One', sans-serif",
    fontSize: {
      lPc: "12px",
      sPc: "10px",
      sTab: "8px",
      base: "6px",
    },
    lineHeight: "auto",
  },
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
