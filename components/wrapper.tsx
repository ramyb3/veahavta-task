import { ReactNode } from 'react'

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-screen-md">{children}</div>
}

export function WrapperLarge({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      className={`grid px-2 py-6 mx-auto xl:px-28 xl:py-16 ${className}`}
    >
      {children}
    </section>
  )
}
