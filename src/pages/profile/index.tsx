import { ROUTES } from '@/constants/routes'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './style.module.scss'
import axios from 'axios'

const Profile = () => {

    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => setdata(res.data))
    }, [])

    return (
        <div className={styles.container}>
            <h2 className='text-center'>Protected Profile Page</h2>
            <br />
            {data?.length ? data?.map((val: any) => {
                return <h1 key={val.id}>{val.name}</h1>
            }) : null}
            <Link href={ROUTES.default}>Home</Link>
        </div>
    )
}

export default Profile