export interface InputProps {
  id: string
  name: string
  type?: string
  placeholder?: string
  label?: string
  disabled?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void

  error?: boolean
  helperText?: string
}