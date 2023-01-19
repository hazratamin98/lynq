import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={234}
    height={104}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M233.707 96.707a1 1 0 0 0 0-1.414l-6.364-6.364a1 1 0 1 0-1.414 1.414L231.586 96l-5.657 5.657a.999.999 0 1 0 1.414 1.414l6.364-6.364ZM190 97h43v-2h-43v2Z"
      fill="#FBFF12"
    />
    <path
      d="M1 1c15.333 31.667 74.6 95 189 95"
      stroke="url(#a)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={142}
        y1={87}
        x2={6}
        y2={14}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FBFF12" />
        <stop offset={1} stopColor="#101011" />
      </linearGradient>
    </defs>
  </svg>
)

export default SvgComponent
