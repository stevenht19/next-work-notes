import { useState } from 'react'
import useBoolean from './useBoolean'

export type SubmitHandler<T> = (data: T) => Promise<void> 

export const useForm = <T, >(initialValues: T) => {
  const [formValues, setValues] = useState<T>(initialValues)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setSubmitting] = useBoolean()

  const formState = {
    isSubmitting,
    error
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (error) {
      setError(null)
    }
    
    setValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (onSubmit: SubmitHandler<T>) => (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    setSubmitting.on()

    onSubmit(formValues)
      .catch((err) => {
        if (err instanceof Error) {
          setError(err.message)
        }
        setSubmitting.off()
      })
  }

  return {
    formValues,
    formState,
    onChange,
    handleSubmit
  }
}
