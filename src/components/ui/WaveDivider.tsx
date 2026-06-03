interface WaveDividerProps {
  fillColor: string
  bgColor?: string
  flip?: boolean
}

export default function WaveDivider({ fillColor, bgColor = 'bg-white', flip = false }: WaveDividerProps) {
  return (
    <div
      className={`${bgColor} w-full overflow-hidden leading-none`}
      style={{ height: 64, transform: flip ? 'scaleY(-1)' : undefined }}
    >
      <svg
        viewBox="0 0 1440 64"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        <path
          d="M0,20 C180,50 360,5 540,28 C720,52 900,8 1080,30 C1260,52 1380,12 1440,22 L1440,64 L0,64 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  )
}
