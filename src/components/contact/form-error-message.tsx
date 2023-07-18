export interface FormErrorMessageProps {
  message?: string
}

export function FormErrorMessage({ message }: FormErrorMessageProps) {
  return (
    <p className="text-red-600 m-0 px-1" style={{ minHeight: '20px' }}>
      {message}
    </p>
  )
}
