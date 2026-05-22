import { cn } from '../lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 font-body text-sm font-medium tracking-wide transition-all duration-300',
        variant === 'primary' &&
          'bg-[#051A24] text-white shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),0_26px_7px_0_rgba(5,26,36,0),inset_0_2px_8px_0_rgba(255,255,255,0.5)] hover:translate-y-[-1px] active:translate-y-0',
        variant === 'secondary' &&
          'bg-white text-[#051A24] shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08)] hover:translate-y-[-1px] active:translate-y-0',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
