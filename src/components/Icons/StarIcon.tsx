interface StarIconProps {
  width: number;
  height: number;
}

export const StarIcon = ({ width, height }: StarIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 22 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="gradient1"
        x1="0.619934"
        y1="19.651"
        x2="20.2462"
        y2="-0.985975"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="var(--color-violet-600)" />
        <stop offset="37%" stopColor="var(--color-violet-300)" />
        <stop offset="100%" stopColor="var(--color-rose-300)" />
      </linearGradient>
    </defs>
    <path
      d="M10.9509 0L8.51193 7.506H0.619934L7.00493 12.145L4.56593 19.651L10.9509 15.012L17.3359 19.651L14.8979 12.145L21.2829 7.506H13.3879L10.9509 0Z"
      fill="url(#gradient1)"
    />
  </svg>
);
