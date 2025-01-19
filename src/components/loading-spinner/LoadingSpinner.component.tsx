import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Spinner, TypeSize } from '@/components/spinner'

const loadingSpinnerVariants = cva('flex items-center justify-center', {
  variants: {
    variant: {
      default: 'bg-transparent',
      primary: 'bg-gray-100',
    },
    size: {
      md: 'min-h-32',
      lg: 'min-h-screen',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'lg',
  },
})

interface LoadingSpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingSpinnerVariants> {
  spinnerSize?: TypeSize
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  className,
  spinnerSize,
  variant,
  size,
  ...props
}) => {
  return (
    <div
      className={cn(loadingSpinnerVariants({ variant, size, className }))}
      {...props}
    >
      <Spinner size={spinnerSize} />
    </div>
  )
}

export default LoadingSpinner
