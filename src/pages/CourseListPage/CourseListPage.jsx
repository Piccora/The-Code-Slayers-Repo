import { CardDefault } from "../../components/ui/card"; 

export function CoursesList() {
    return(
        <div>
            <div className="h-screen items-center flex justify-center overflow-x-hidden">
                <div className="bg-cyan-100 h-4/5 w-full absolute top-0 "></div>
                <h1 className="text-8xl absolute">Courses</h1>
            </div>
            <div className="grid grid-cols-3 w-full left-12 relative gap-y-12">
                <CardDefault/>
                <CardDefault/>
                <CardDefault/>
                <CardDefault/>
                <CardDefault/>
            </div>

        </div>
    )
}

export default CoursesList;