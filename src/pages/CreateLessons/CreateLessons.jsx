import React,{useState} from "react";
import { setLesson } from "../../firebase/Database";
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Textarea,
} from "@material-tailwind/react";
import { useSearchParams } from "react-router-dom";

export function CreateLessons(course) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [url, setURL] = useState('');
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    const handleOpen = () => setOpen((cur) => !cur);
    const handleSubmit=()=>{
        console.log(id,name)
        const data={name:name, description:description, url:url};
        const newLessons = [...course.course.lessons,data]
        setLesson(id,{'lessons':newLessons})
        handleOpen()
    }
    return (
        <>
            <div>
                <div className="flex w-max gap-4 m-11 ml-24">
                    <Button color="blue" variant="filled" size="lg" onClick={handleOpen}>New lesson</Button>
                </div>
            </div>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardHeader
                        variant="gradient"
                        color="blue"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            Edit lesson
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="black">
                            Write a title for the lesson
                        </Typography>
                        <Input required label="Enter course name" size="lg" value={name} onChange={ev=>setName(ev.target.value)} />
                        <Typography variant="h4" color="black">
                            Write a description for the lesson
                        </Typography>
                        <Textarea required label="Description" value={description} onChange={ev=>setDescription(ev.target.value)} />
                        <Typography variant="h4" color="black">
                            Add a video link
                        </Typography>
                        <Input required label="Video link" size="lg" value={url} onChange={ev=>setURL(ev.target.value)}/>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" onClick={handleSubmit} fullWidth>
                            Confirm
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    )
}

export default CreateLessons;