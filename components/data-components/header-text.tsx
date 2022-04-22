export const PageHeader = ({ children }: { children: string }) => {
  return (
    <h1 className="font-bold text-center px-10 py-5 max-w-[700px] text-7xl">
      {children}
    </h1>
  )
}
