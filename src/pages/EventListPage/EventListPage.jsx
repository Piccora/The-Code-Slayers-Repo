import { CardDefault } from "../../components/ui/card";
import { getAllCourses } from "../../firebase/Database";
import { useState,useEffect } from "react";

export function EventList() {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        getAllCourses().then(courses => {
            setCourses(courses)
        })
    }, [])
    return (
        <div>
            <div className="h-screen items-center flex justify-center overflow-x-hidden">
                <h1 className="text-8xl absolute">Courses</h1>
            </div>
            <div className="grid grid-cols-3 w-full left-12 relative gap-y-12">
                {/* <CardDefault />
                <CardDefault />
                <CardDefault /> */}
                {
                    courses.length > 0 && courses.map((course, index) => {
                        return(
                        <CardDefault key={index} prop={course} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default EventList;