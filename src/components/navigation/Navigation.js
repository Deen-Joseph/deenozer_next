import Header from "./Header";
import Footer from "./Footer"

const Navigation =({children})=> {
    return(
        <>
        <Header></Header>
        <main className="flex flex-col min-h-screen" >{children}</main>
        <Footer className="mt-auto"></Footer>
        </>
    )


}
export default Navigation