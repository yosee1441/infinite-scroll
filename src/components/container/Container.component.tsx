import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const containerVariants = cva('container mx-auto')

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  children?: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={cn(containerVariants({ className }))}>{children}</div>
}

export default Container
