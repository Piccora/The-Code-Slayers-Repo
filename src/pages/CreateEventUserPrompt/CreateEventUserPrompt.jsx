import { useNavigate } from "react-router-dom";
// import { LessonForm } from "../../components/form/LessonForm/LessonForm"
import { useRef } from "react";
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

export function CreateEventUserPrompt() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.click();
    };

    return (
        <>
            <div>
                <div className="flex w-max gap-4 m-11">
                    <Button color="blue" variant="filled" size="lg" onClick={handleOpen}>New form question</Button>
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
                            New Question
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="black">
                            Choose a picture for your form
                        </Typography>
                        <button type="button" onClick={handleClick} className="w-24 h-24 text-center flex items-center justify-center text-sm gap-1 text-gray-500 rounded-lg bg-white border border-gray-200 shadow-sm m-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                        </svg>
                        <div>
                            Upload
                        </div>
                        <input ref={inputRef} type="file" className="hidden" multiple />
                    </button>
                        <Typography variant="h4" color="black">
                            Create a question
                        </Typography>
                        <Textarea label="Type question here" />
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

export default CreateEventUserPrompt;