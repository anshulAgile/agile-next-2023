import React from 'react'
import style from './style.module.scss'
import Link from 'next/link'
import { login } from '@/service/auth'
import { AxiosResponse } from 'axios'
import { setCookie } from '@/service/cookie'
import { useRouter } from 'next/router'
import Button from '@/components/common/Button'
import { ROUTES } from '@/constants/routes'

const Signin = () => {

    const router = useRouter();

    const onLogin = async () => {
        login({ email: 'rootadmin@yopmail.com', password: '123456' })
            .then((res: AxiosResponse) => {
                setCookie('token', JSON.stringify(res?.data))
                router.replace(ROUTES.default)
            })
            .catch(err => {
                console.log('err: ', err);
            })
    }

    return (
        <div className={style.container}>
            <h2 className='text-center'>Sign in</h2>
            <br />
            <Link href={ROUTES.signup}>Sign Up</Link>
            <br />
            <br />
            <br />
            <div>
                <Button
                    type='button'
                    variant='primary'
                    onClick={onLogin}>
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Signin;
