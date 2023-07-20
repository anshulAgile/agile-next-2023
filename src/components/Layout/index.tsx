import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { toCheckAuthPage } from "@/utils/functions";

interface IProps {
    children: ReactNode;
    router: any
}

const Layout: React.FC<IProps> = ({ children, router }) => {

    return (
        <>
            {toCheckAuthPage(router?.state?.path || '') ? < Header /> : null}
            <main>{children}</main>
            {toCheckAuthPage(router?.state?.path || '') ? <Footer /> : null}
        </>
    )
}

export default Layout
