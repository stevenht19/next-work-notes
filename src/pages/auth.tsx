import { SubmitHandler, useForm } from '@/hooks/useForm'
import { Input } from '@/components/atoms/Input'
import { Typography } from '@/components/atoms/Typography'
import { Button } from '@/components/atoms/Button'
import { Credentials } from '@/services/auth/utils'
import { useRouter } from 'next/router'
import { signUp } from '@/services/auth/signup.service'
import { login } from '@/services/auth/login.service'

export default function Auth() {
  
  const router = useRouter()

  const { formValues, onChange, handleSubmit, formState } = useForm<Credentials>({
    email: '',
    password: ''
  })

  const { isSubmitting, error } = formState

  const onSubmit: SubmitHandler<Credentials> = async (data) => {
    await login(data)
    //await signUp(data)
    router.push('/')
  }

  return (
    <div className='max-w-lg mx-auto pt-24'>
      <Typography.h2>
        Sign up
      </Typography.h2>
      <Typography color='text-neutral-400'>
        {`Welcome! Let's get started for free`}
      </Typography>
      <form 
        className='flex flex-col gap-7 border border-neutral-800 mt-6 p-8 rounded-md'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          name='email'
          label='Email'
          value={formValues.email}
          onChange={onChange}
          placeholder='Type an email'
        />
        <Input
          name='password'
          label='Password'
          type='password'
          value={formValues.password}
          onChange={onChange}
          placeholder='Type a password'
        />
        <Button
          type='submit'
          loading={isSubmitting}
        >
          Sign up
        </Button>
      </form>
      {
        error ? (
          <p className='text-red-500 text-center mt-3'>
            {error}
          </p>
        ) : null
      }
    </div>
  )
}
