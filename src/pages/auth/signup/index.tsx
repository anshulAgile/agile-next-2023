import React from 'react'
import style from './style.module.scss'
import Link from 'next/link'
import { ROUTES } from '@/constants/routes'

const Signup = () => {
    return (
        <div className={style.container}>
            <h2 className='text-center'>Signup</h2>
            <br />
            <div>
                <Link href={ROUTES.signin}>Sign IN</Link>
            </div>
        </div>
    )
}

export default Signup