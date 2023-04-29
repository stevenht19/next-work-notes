import { AuthForm } from '@/components/forms/auth'
import { login } from '@/services/auth/login.service'
import { Credentials } from '@/services/auth/utils'
import Head from 'next/head'

export default function Login() {

  const crendetials: Credentials = {
    email: '',
    password: ''    
  }

  return <>
    <Head>
      <title>Sign in</title>
    </Head>
    <AuthForm
      title='Sign in'
      initialState={crendetials}
      action={login}
    />
  </>
}
