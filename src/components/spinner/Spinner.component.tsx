import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export type TypeSize = 'xs' | 'sm' | 'md' | 'lg'

const spinnerVariants = cva(
  'animate-spin rounded-full border-t-4 border-blue-500 border-solid',
  {
    variants: {
      size: {
        xs: 'h-4 w-4',
        sm: 'h-8 w-8',
        md: 'h-12 w-12',
        lg: 'h-16 w-16',
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  },
)

interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  size?: TypeSize
}

const Spinner: React.FC<SpinnerProps> = ({ className, size, ...props }) => {
  return <div className={cn(spinnerVariants({ size, className }))} {...props} />
}

export default Spinner
