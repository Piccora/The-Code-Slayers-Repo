import { CardDefault, CardDefault2, CardDefault3 } from "../../components/ui/card";
import { CardWithLink, CardWithLink2, CardWithLink3 } from "../../components/ui/cardwithlink";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllCourses,getAllEvents } from "../../firebase/Database";

export function Homepage() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([])
    const [events, setEvents] = useState([])
    useEffect(() => {
        getAllEvents().then(events => {
            setEvents(events.slice(0, 3))
        })
    }, [])
    useEffect(() => {
        getAllCourses().then(courses => {
            setCourses(courses.slice(0, 3))
        })
    }, [])
    const navigateCourseList = () => {
        navigate("/CoursesList");
    };



    return (
        <div>
            <div className="h-screen items-center flex justify-center overflow-x-hidden">
                <h1 className="text-8xl absolute">Homepage</h1>
            </div>
            <h3 className="text-6xl left-32 relative w-0 bottom-20">Courses</h3>
            <Button color="blue" className="relative bottom-32 left-3/4" onClick={navigateCourseList}>all courses</Button>
            <div className=" flex relative left-24">
                {courses?.length > 0 && courses?.map((course, index) => {
                    return (
                        <>
                            <CardDefault key={index} prop={course} />
                            <div className="w-16"></div>
                        </>)
                })
                }
            </div>
            <h3 className="text-6xl left-32 relative top-36 w-3/4">Events & Workshops</h3>
            <div className=" flex relative top-48 left-24 mb-60">
                {events?.length > 0 && events?.map((event, index) => {
                    return (
                        <>
                            <CardWithLink key={index} prop={event} />
                            <div className="w-16"></div>
                        </>)
                })
                }
            </div>
        </div>

    )
}


export default Homepage;