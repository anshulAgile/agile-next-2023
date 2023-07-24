import { useEffect } from 'react'
import Head from 'next/head'
import style from './style.module.scss'
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/service/redux/store';
import { authFail } from '@/service/redux/slices/AuthSlice';
import { ROUTES } from '@/constants/routes';
import { test } from '@/service/auth';
import Link from 'next/link';

export default function Home() {

  const router = useRouter();
  const dispatch = useAppDispatch();
  const { authToken } = useAppSelector(state => state.auth.userData);

  useEffect(() => {
    test()
  }, [])

  const onLogout = () => {
    dispatch(authFail({}))
    router.replace(ROUTES.signin)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>Home page</h2>
        <br />
        <div>
          <Link href={ROUTES.profile}>Profile link</Link>
        </div>
        <div>
          <button onClick={onLogout}>Logout</button>
        </div>
      </main>
    </>
  )
}
