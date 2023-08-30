import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div className={`flex min-h-screen flex-col items-center w-full justify-between`}>
            <Nav />
            <div className="px-2 sm:px-6 w-full">
                {children}
            </div>
            <Footer />
        </div>
    )
}