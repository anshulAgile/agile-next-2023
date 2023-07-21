import { ROUTES } from '@/constants/routes'
import Link from 'next/link'
import styles from './style.module.scss'

const Profile = () => {
    return (
        <div className={styles.container}>
            <h2 className='text-center'>Protected Profile Page</h2>
            <br />
            <Link href={ROUTES.default}>Home</Link>
        </div>
    )
}

export default Profile