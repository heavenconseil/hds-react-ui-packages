import React, { forwardRef, ForwardRefExoticComponent, ReactNode, RefAttributes, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface CTAProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'small' | 'medium' | 'large'
  href?: string
  target?: string
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void
  startIcon?: ReactNode
  endIcon?: ReactNode
  children?: ReactNode
  disabled?: boolean
  expand?: boolean
  loading?: boolean
}

const CTA = forwardRef<HTMLButtonElement, CTAProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      href,
      target = '_self',
      onClick,
      children,
      className = '',
      startIcon,
      endIcon,
      disabled = false,
      expand = false,
      loading = false,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center rounded-md font-medium',
      'transition-colors duration-200 ease-in-out',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'whitespace-nowrap cursor-pointer'
    )

    const sizeStyles = {
      small: 'h-8 px-3 text-sm gap-1.5',
      medium: 'h-10 px-4 text-sm gap-2',
      large: 'h-12 px-6 text-base gap-2'
    }

    const variantStyles = {
      primary: cn(
        'bg-primary text-primary-foreground hover:bg-primary/90',
        'focus-visible:ring-primary'
      ),
      secondary: cn(
        'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        'focus-visible:ring-secondary'
      ),
      outline: cn(
        'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        'focus-visible:ring-ring'
      ),
      ghost: cn(
        'hover:bg-accent hover:text-accent-foreground',
        'focus-visible:ring-ring'
      ),
      destructive: cn(
        'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        'focus-visible:ring-destructive'
      )
    }

    const buttonClasses = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      expand && 'w-full',
      className
    )

    const content = (
      <>
        {loading && <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />}
        {!loading && startIcon && startIcon}
        {children}
        {!loading && endIcon && endIcon}
      </>
    )

    if (href && !disabled) {
      return (
        <a
          href={href}
          target={target}
          className={buttonClasses}
          onClick={onClick as any}
          {...(props as any)}
        >
          {content}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        onClick={disabled || loading ? undefined : onClick}
        className={buttonClasses}
        disabled={disabled || loading}
        {...props}
      >
        {content}
      </button>
    )
  }
)

CTA.displayName = 'CTA'

export { CTA }
