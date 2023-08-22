import { ButtonHTMLAttributes, forwardRef } from "react";

const colors: Record<('defualt' | 'success' | 'error'), string> = {
  defualt: `text-gray-900 dark:text-white
            bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700`,

  success: `text-white 
            bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700`,

  error: `text-white 
          bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700`,
}
const sizes: Record<('sm' | 'md'), string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-5 py-1.5 text-sm',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'defualt' | 'success' | 'error'
  size?: 'sm' | 'md',
  loading?: boolean
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, color, size, loading, ...props }, ref) => {
  const currentColor = colors[color || 'defualt']
  const currentSize = sizes[size || 'sm']

  return (
    <button
      ref={ref}
      type="button"
      className={`font-medium rounded-sm border border-zinc-300 dark:border-zinc-600 focus:ring-2 focus:border-white ${className} ${currentColor} ${currentSize}`}
      {...props}
    >
      {loading
        ? <span className="text-xs lowercase">carregando!</span>
        : children}
    </button>
  );
});

export default Button;
