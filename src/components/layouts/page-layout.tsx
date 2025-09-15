type Props = {
    children?: React.ReactNode
    className?: string
}

export default function PageLayout({ children, className }: Props) {
  return (
    <div className={`space-y-4 ${className}`}>
        {children}
    </div>
  )
}
