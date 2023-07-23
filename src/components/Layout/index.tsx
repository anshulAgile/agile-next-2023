import { ReactNode, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { toCheckAuthPage } from "@/utils/functions";
import { useRouter } from "next/router";
interface IProps {
    children: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
    const router = useRouter();
    const showHeader = toCheckAuthPage(router.pathname)

    return (
        <>
            {showHeader && <Header />}
            <main>{children}</main>
            {showHeader && <Footer />}
        </>
    )
}

export default Layout
