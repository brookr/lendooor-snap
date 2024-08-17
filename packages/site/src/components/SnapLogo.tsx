export const SnapLogo = ({
  color,
  size,
}: {
  color?: string | undefined;
  size: number;
}) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 75 75`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="44" cy="38" r="19"/>
    <circle fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="44" cy="38" r="13"/>
    <polyline fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="30,51 1,51 1,57 38,57 38,56 "/>
    <polyline fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="27,45 3,45 3,51 30,51 "/>
    <polyline fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="26,39 5,39 5,45 27,45 "/>
    <polyline fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="26,33 1,33 1,39 26,39 "/>
    <polyline fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="29,27 3,27 3,33 26,33 "/>
    <polyline fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="35,21 1,21 1,27 29,27 "/>
    <polyline fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="40,20 40,15 3,15 3,21 35,21 "/>
    <rect x="1" y="9" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="37" height="6"/>
  </svg>
);
