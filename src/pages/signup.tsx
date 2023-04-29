import Head from 'next/head'
import { AuthForm } from '@/components/forms/auth'
import { signUp } from '@/services/auth/signup.service'

export default function SignUp() {

  const credentials = {
    email: '',
    password: '',
    username: ''
  }

  return <>
    <Head>
      <title>Sign up</title>
    </Head>
    <AuthForm
      title='Sign up'
      action={signUp}
      initialState={credentials}
    />
  </>
}
