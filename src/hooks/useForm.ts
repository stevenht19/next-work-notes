import { useState } from 'react'
import useBoolean from './useBoolean'

export type SubmitHandler<T> = (data: T) => Promise<void> | void

type HandleSubmitType<T> = (onSubmit: SubmitHandler<T>) => (e: React.FormEvent<HTMLFormElement>) => Promise<void>

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

  const handleSubmit: HandleSubmitType<T> = (onSubmit) => async (e) => {
    e.preventDefault()

    try {
      setSubmitting.on()
      await onSubmit(formValues)

    } catch(err) {
      if (err instanceof Error) {
        setError(err.message)
      }
      setSubmitting.off()
    }
    
  }

  const clearForm = () => setValues(initialValues)

  const replace = (data: T) => {
    setValues(data)
  }

  return {
    formValues,
    formState,
    onChange,
    handleSubmit,
    clearForm,
    replace
  }
}
