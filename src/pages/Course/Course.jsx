import { CardDefault } from "../../components/ui/card";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCourse } from "../../firebase/Database";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import CreateLessons from "../CreateLessons/CreateLessons";

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};
export function Course() {
    const [course, setCourse] = useState(null)
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id"); // "1234"
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    useEffect(() => {
        getCourse(id).then(course => {
            setCourse(course)
            console.log(course.lessons)
        })
    }, [])
    return (
        <>
            {course ? 

                <div>
                    <div className="h-screen items-center flex overflow-x-hidden">
                        <div className="bg-cyan-100 h-4/5 w-full relative top-0 "></div>
                        <img src={course.image} className="w-5/6 h-3/4 bg-red-200 absolute left-36" />
                    </div>
                    <h1 className="text-6xl relative left-24 bottom-4">{course.name}</h1>
                    <CreateLessons course={course} />
                    <div>
                        <div className="w-2/4 block">
                            <a href="" className="text-5xl relative left-32 top-16">About :</a>
                            <p className="text-2xl relative left-96 top-8">
                                {course.description}
                            </p>
                        </div>
                        <div className="w-2/4 block top-20 relative">
                            <a href="" className="text-5xl relative left-32 top-16">Modules :</a>
                            {course.lessons.length > 0 ? 
                            course.lessons.map((lesson,index) => {
                                return (
                                    <Accordion open={open === index} animate={CUSTOM_ANIMATION} className="text-2xl relative left-96 top-8">
                                        <AccordionHeader onClick={() => handleOpen(index)}>{lesson.name}</AccordionHeader>
                                        <AccordionBody>
                                            {lesson.description}
                                        </AccordionBody>
                                    </Accordion>
                                    )
                            })
                            :
                            <p className="text-2xl relative left-96 top-8">
                                No course
                            </p>
                            }
                        </div>
                        <div className="w-2/4 block top-40 relative">
                            <a href="" className="text-5xl relative left-32 top-16">Reviews :</a>
                            <p className="text-2xl relative left-96 top-8">
                                Course is very helpful
                            </p>
                        </div>
                        <div className="h-96"></div>
                    </div>
                </div>

                :
                <></>
            }
        </>
    )
}

export default Course;