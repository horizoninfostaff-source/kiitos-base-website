interface PhotoPlaceholderProps {
  description: string
  className?: string
}

export default function PhotoPlaceholder({ description, className = '' }: PhotoPlaceholderProps) {
  return (
    <div className={`bg-kb-yellow-light rounded-2xl flex flex-col items-center justify-center p-8 ${className}`}>
      <svg className="w-10 h-10 text-kb-yellow/40 mb-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
      </svg>
      <p className="text-xs font-semibold text-kb-yellow/60 mb-1">📷 写真スペース</p>
      <p className="text-xs text-kb-gray text-center max-w-xs">{description}</p>
    </div>
  )
}
