import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
    const {children, pageTitle} = props

    return (
    <div>
        <Head>
            <title>{pageTitle}</title>
            <meta
                name="description"
                content="Getting Started With NextJS"
                key="desc"
            />
        </Head>

        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
    </div>
  )
}