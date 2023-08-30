import { CardDefault } from "../../components/ui/card"; 

export function Course() {
    return(
        <div>
            <div className="h-screen items-center flex overflow-x-hidden">
                <div className="bg-cyan-100 h-4/5 w-full absolute top-0 "></div>
                <div className="w-2/5 h-2/4 bg-red-200 absolute left-36">some picture</div>
            </div>
            <h1 className="text-6xl absolute left-24 bottom-4">Course name</h1>
            <div>
                <div className="w-2/4 block">
                    <a href="" className="text-5xl relative left-32 top-16">About :</a>
                    <p className="text-2xl relative left-96 top-8">
                        text text text text text text text text text text text text text text text text 
                    </p>
                </div>
                <div className="w-2/4 block top-20 relative">
                    <a href="" className="text-5xl relative left-32 top-16">Modules :</a>
                    <p className="text-2xl relative left-96 top-8">
                        text text text text text text text text text text text text text text text text 
                    </p>
                </div>
                <div className="w-2/4 block top-40 relative">
                    <a href="" className="text-5xl relative left-32 top-16">Reviews :</a>
                    <p className="text-2xl relative left-96 top-8">
                        text text text text text text text text text text text text text text text text 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Course;