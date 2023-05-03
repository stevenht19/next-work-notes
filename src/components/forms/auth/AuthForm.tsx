import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from '@/components/atoms/Button'
import { Input } from '@/components/atoms/Input'
import { Typography } from '@/components/atoms/Typography'
import { SubmitHandler, useForm } from '@/hooks/useForm'
import { Credentials } from '@/services/auth/utils'

type Props = {
  title: string
  initialState: Credentials
  action: (credentials: Credentials) => Promise<void>
}

export default function AuthForm({ initialState, title, action }: Props) {

  const router = useRouter()

  const { formValues, onChange, handleSubmit, formState } = useForm<Credentials>(initialState)
  const { isSubmitting, error } = formState

  const signUpCredentials = typeof initialState?.username === 'string'

  const onSubmit: SubmitHandler<Credentials> = async (data) => {
    await action(data)
    router.push('/')
  }

  return (
    <div className='max-w-lg mx-auto pt-16'>
      <Typography.h2>
        {title}
      </Typography.h2>
      <Typography color='text-zinc-300'>
        {signUpCredentials ? `Let's get started for free!` : 'Welcome again!'}
      </Typography>
      <form
        className='flex flex-col gap-7 border border-neutral-800 mt-6 p-8 rounded-md'
        onSubmit={handleSubmit(onSubmit)}
      >
        {
          signUpCredentials ? (
            <Input
              name='username'
              label='Username'
              type='text'
              placeholder='Type an username'
              value={formValues.username!}
              onChange={onChange}
            />
          ) : null
        }
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
        {
          signUpCredentials ? (
            <Typography color='text-zinc-300'>
              {`Do you already have an account? `}
              <Link
                href='/login'
                className='text-blue-600 underline'
              >
                Log in
              </Link>
            </Typography>
          ) : (
            <Typography color='text-zinc-300'>
              {`Don't you have an account? `}
              <Link
                href='/signup'
                className='text-blue-600 underline'
              >
                Sign up
              </Link>
            </Typography>
          )
        }
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
