import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCourse } from "../../firebase/Database";

export default function Course() {
    const [course, setCourse] = useState(null)
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id"); // "1234"
    useEffect(() => {
        getCourse(id).then(course =>{
            setCourse(course)
        })
    },[])
    return (
        <div>
            {course ?
                <>
                    <Typography>{course.name}</Typography>
                    <Typography>{course.description}</Typography>
                    <Typography>{course.category}</Typography>
                    <Typography>{course.image}</Typography>
                    <img src={course.image} alt="" />
                </>
                :
                <></>
            }
        </div>
    )
}