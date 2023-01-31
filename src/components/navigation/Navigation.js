import Header from "./Header";
import Footer from "./Footer"

const Navigation =({children})=> {
    return(
        <>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
        </>
    )


}
export default Navigation