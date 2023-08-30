import { Typography, Input, Select, Option, Button } from "@material-tailwind/react";
import { NavbarDefault } from "../../components/ui/Navbar/Nav"
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export function CreateLessons() {
    const navigate = useNavigate();
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.click();
    };

    return (
        <div>
            <NavbarDefault />
            <div className="flex w-max gap-4 m-10px">
                <Button color="blue" variant="filled" size="lg">color blue</Button>
            </div>
            <div className="">
                <div>
                    <Typography variant="h3" className="">Create Lesson</Typography>
                </div>
                <div className="create-course-body-2">
                    <Typography variant="h5">Name your course here</Typography>
                    <Typography variant="h6">You can change course's name later</Typography>
                    <div className="w-72 center-block">
                        <Input label="Username" />
                    </div>
                    <br />
                    <Typography variant="h5" className="create-course-body-2">Choose the category for your course</Typography>
                    <button type="button" onClick={handleClick} className="w-24 h-24 text-center flex items-center justify-center text-sm gap-1 text-gray-500 rounded-lg bg-white border border-gray-200 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                    </svg>
                    <div>
                        Upload
                    </div>
                    <input ref={inputRef} type="file" className="hidden" multiple />
                    </button>
                    <Button variant="filled" size="lg" onClick={() => navigate('/create-lessons')}>Proceed</Button>
                </div>
            </div>
        </div>
    )
}

export default CreateLessons;