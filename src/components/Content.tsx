import { cn } from "@/utils"
import { DefaultProps } from "./interfaces"
import { FC } from "react"

export const Content: FC<DefaultProps> = ({ className, children }) => {
  return (
    <main className={cn('first_block', className)}>
      <div className="container mt-32">
        {children}
      </div>
    </main>
  )
}
