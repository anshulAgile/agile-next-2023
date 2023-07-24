import { useEffect } from 'react'
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
  console.log('props: ', props);

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
      <BannerSection />
      <HowItWorks />
      <RecentlyAdded />
      <TrustSection />
    </>
  )
}