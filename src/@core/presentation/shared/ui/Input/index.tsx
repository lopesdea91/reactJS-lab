import { InputHTMLAttributes, forwardRef, useId } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}
const Input = forwardRef<HTMLInputElement, InputProps>(($props, ref) => {
  const { label, className, error, ...props } = $props
  const currentId = useId()

  return (
    <div className='w-full'>
      {label && <label
        htmlFor={currentId}
        className="block mb-1 text-sm font-medium text-gray-800">
        {label}
      </label>
      }
      <input
        ref={ref}
        type="text"
        id={currentId}
        className={`rounded bg-transparent block w-full p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500 border border-zinc-300  dark:focus:ring-blue-500 dark:focus:border-brlue-500 outline-none ${className}`}
        {...props}
      />

      {error && <span
        className='block truncate text-sm font-semibold text-red-800 dark:text-red-600'>
        {error}
      </span>}
    </div>
  )
})

Input.displayName = 'Input'

export default Input