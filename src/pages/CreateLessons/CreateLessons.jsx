import { useNavigate } from "react-router-dom";
// import { LessonForm } from "../../components/form/LessonForm/LessonForm"
import React from "react";
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

export function CreateLessons() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <>
            <div>
                <div className="flex w-max gap-4 m-11">
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
                        <Input label="Enter course name" size="lg" />
                        <Typography variant="h4" color="black">
                            Write a description for the lesson
                        </Typography>
                        <Textarea label="Description" />
                        <Typography variant="h4" color="black">
                            Add a video link
                        </Typography>
                        <Input label="Video link" size="lg" />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" onClick={handleOpen} fullWidth>
                            Confirm
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    )
}

export default CreateLessons;