import { FC, HTMLAttributes } from "react"

interface Heart extends HTMLAttributes<SVGElement> {
  height?: string
  width?: string
}
//https://codepen.io/agilBAKA/details/eEKmbX
const Heart: FC<Heart> = ({ height, width, ...props }) => {
  return (
    <span className="heart">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        height={height}
        width={width}
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </span>
  )
}
Heart.defaultProps = {
  height: "1.5rem",
  width: "1.5rem",
}

export default Heart
