import { cn } from '../lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-body text-sm font-medium tracking-wide transition-all duration-300',
        variant === 'primary' &&
          'bg-[#051A24] text-white shadow-[0_4px_16px_rgba(5,26,36,0.18),0_1px_3px_rgba(5,26,36,0.08)] hover:shadow-[0_8px_28px_rgba(5,26,36,0.24),0_2px_6px_rgba(5,26,36,0.12)] hover:translate-y-[-1px] active:translate-y-0',
        variant === 'secondary' &&
          'bg-white text-[#051A24] border border-[#051A24]/10 shadow-[0_2px_8px_rgba(5,26,36,0.06)] hover:shadow-[0_6px_20px_rgba(5,26,36,0.12)] hover:border-[#051A24]/20 hover:translate-y-[-1px] active:translate-y-0',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
