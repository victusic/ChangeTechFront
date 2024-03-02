export const BurgerMenu: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg width="25" height="19" viewBox="0 0 25 19" fill="none" {...props}>
      <path
        d="M2 2H23M2 9.5H23M2 17H23"
        stroke="current"
        strokeWidth="2.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};
