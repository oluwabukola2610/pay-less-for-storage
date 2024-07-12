export interface VectorProps extends React.SVGProps<SVGSVGElement> {}

const Vector2: React.FC<VectorProps> = (props) => {
  return (
    <svg
      {...props}
      width="200"
      height="14"
      viewBox="0 0 209 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.34668 11.1836C4.95647 11.1836 7.69909 9.96875 10.2925 9.43828C13.7634 8.72832 17.4191 8.22046 20.9482 7.89964C28.4579 7.21694 36.0491 5.93349 43.5914 5.80985C52.7455 5.65978 62.0554 5.1771 71.1951 4.54678C80.5898 3.89887 90.2466 4.2124 99.5796 3.00814C104.183 2.41412 109.179 2.91628 113.818 2.91628C119.505 2.91628 125.193 2.91628 130.881 2.91628C136.068 2.91628 141.192 3.32965 146.382 3.32965C151.856 3.32965 157.272 4.15638 162.733 4.15638C171.839 4.15638 180.965 5.42349 190.015 6.24618C195.47 6.74212 201.086 8.29004 206.55 8.29004"
        stroke="url(#paint0_linear_1_6622)"
        stroke-width="4"
        stroke-linecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_6622"
          x1="2.34668"
          y1="2.71802"
          x2="117.767"
          y2="108.268"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFE0B3" />
          <stop offset="1" stop-color="#FFCC80" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Vector2;
