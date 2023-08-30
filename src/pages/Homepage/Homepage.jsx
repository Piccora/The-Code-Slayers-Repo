import { CardDefault, CardDefault2, CardDefault3 } from "../../components/ui/card";
import { CardWithLink, CardWithLink2, CardWithLink3 } from "../../components/ui/cardwithlink";

export function Homepage() {
    return(
        <div>
            <div className="h-screen items-center flex justify-center overflow-x-hidden">
                <div className="bg-cyan-100 h-4/5 w-full absolute top-0 "></div>
                <h1 className="text-8xl absolute">Homepage</h1>
            </div>
            <h3 className="text-6xl left-32 relative w-0 bottom-20">Courses</h3>
            <div className=" flex flex-nowrap left-24 relative">
                <CardDefault/>
                <div className="w-16"></div>
                <CardDefault2/>
                <div className="w-16"></div>
                <CardDefault3/>
            </div>
            <h3 className="text-6xl left-32 relative top-36">Events & Workshops</h3>
            <div className=" flex flex-nowrap left-24 relative top-48">
                <CardWithLink/>
                <div className="w-16"></div>
                <CardWithLink2/>
                <div className="w-16"></div>
                <CardWithLink3/>
            </div>
        </div>

    )
}

export default Homepage;