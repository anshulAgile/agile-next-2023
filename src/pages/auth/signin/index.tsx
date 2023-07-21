import style from './style.module.scss'
import Link from 'next/link'
import { login } from '@/service/auth'
import { AxiosResponse } from 'axios'
import { setCookie } from '@/service/cookie'
import { useRouter } from 'next/router'
import Button from '@/components/common/Button'
import { ROUTES } from '@/constants/routes'
import { RenderTextInput } from '@/components/common/FormFIeld'
import { useForm } from 'react-hook-form'

const Signin = () => {

    const router = useRouter();
    const {
        register,
        formState: { errors },
    } = useForm();

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
                <div>
                    <RenderTextInput
                        type="email"
                        labelName={"Email"}
                        placeholder="none"
                        register={register("email", {
                            required: "required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Please enter valid email",
                            },
                        })}
                        errorMessage={errors?.email ? errors?.email?.message : ""}
                    />
                </div>
                <div>
                    <RenderTextInput
                        type="password"
                        labelName={"Password"}
                        placeholder="none"
                        register={register("email", {
                            required: "required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Please enter valid email",
                            },
                        })}
                        errorMessage={errors?.email ? errors?.email?.message : ""}
                    />
                </div>
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
