import { useEffect, useState } from 'react'
import style from './style.module.scss'
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/service/redux/store';
import { authFail } from '@/service/redux/slices/AuthSlice';
import { META_TAGS, ROUTES } from '@/constants/routes';
import { test } from '@/service/auth';
import Meta from '@/components/common/Meta';
import BannerSection from '@/components/common/Home/BannerSection';
import HowItWorks from '@/components/common/Home/HowItWorks';
import RecentlyAdded from '@/components/common/Home/RecentlyAdded';
import TrustSection from '@/components/common/Home/TrustSection';

export default function Home(props: any) {
  const { data } = props

  const [data1, setdata] = useState(data)
  console.log('data1: ', data1);

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
      <Meta {...META_TAGS.default} />
      <div>
        {data1?.length ? data1?.map((val: any) => {
          return <div key={val?.id}>
            <h2>{val?.name}</h2>
            <h2>{val?.phone}</h2>
          </div>
        }) : null}
      </div>

      <BannerSection />
      <HowItWorks />
      <RecentlyAdded />
      <TrustSection />
    </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await res.json()
  console.log('data: ', data);

  // Pass data to the page via props
  return { props: { data } }
}