import { useState } from 'react'
import { Props as InputProps } from '@/components/atoms/Input'
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

  const onChange: InputProps['onChange'] = ({ target }) => {
    
    if (error) {
      setError(null)
    }
    
    setValues({
      ...formValues,
      [target.name]: target.value
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
