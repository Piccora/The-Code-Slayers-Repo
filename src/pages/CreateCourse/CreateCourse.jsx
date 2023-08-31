import { Typography, Input, Select, Option, Button,Textarea } from "@material-tailwind/react";
import './CreateCourse.css'
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { addCourse, storage } from "../../firebase/Database";
import { v4 } from "uuid";
import {ref, uploadBytes} from "firebase/storage"

export function CreateCourse() {
    const [courseName, setCourseName] = useState('')
    const [courseDes, setCourseDes] = useState('')
    const [category, setCategory] = useState('')
    const [imageUpload,setImage] = useState(null)

    const navigate = useNavigate();
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.click();
    };
    const handleSubmit=async()=>{
        console.log(courseName,courseDes,category,imageUpload)
        if (imageUpload == null) return;
        const newFileName=`${v4()+imageUpload.name}`
        const imageRef = ref(storage, newFileName);
        await uploadBytes(imageRef, imageUpload).then(async(snapshot) => {
            const dr= await addCourse({'name': courseName, 'description': courseDes,'category':category ,'image': `https://storage.googleapis.com/the-code-slayers-project.appspot.com/${newFileName}`})
            navigate({
                pathname: "/Course",
                search: `?id=${dr.id}`, // inject code value into template
              });
        });
        
    }
    return (
        <div className="create-course-body">          
            <div className="create-course-body-2">
                <div>
                    <Typography variant="h3">Create Course</Typography>
                </div>
                <div className="create-course-body-2">
                    <Typography variant="h5">Name your course here</Typography>
                    <div className="w-72 center-block ">
                        <Input label="Course name" value={courseName} onChange={ev=>setCourseName(ev.target.value)} />
                    </div>
                    <Typography variant="h6">Description</Typography>
                    <div className="w-96 center-block">
                        <Textarea label="Description" value={courseDes} onChange={ev=>setCourseDes(ev.target.value)} />
                    </div>
                    <Typography variant="h5" className="create-course-body-2">Choose the category for your course</Typography>
                    <div className="w-72 center-block">
                        <Select label="Select Version" >
                            <Option onClick={()=>setCategory("Data Science")} >Data Science</Option>
                            <Option onClick={()=>setCategory("Business")}>Business</Option>
                            <Option onClick={()=>setCategory("Computer Science")}>Computer Science</Option>
                            <Option onClick={()=>setCategory("Economics")}>Economics</Option>
                            <Option onClick={()=>setCategory("Marketing")}>Marketing</Option>
                        </Select>
                    </div>
                    <button type="button" onClick={handleClick} className="w-24 h-24 text-center flex items-center justify-center text-sm gap-1 text-gray-500 rounded-lg bg-white border border-gray-200 shadow-sm m-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                        </svg>
                        <div>
                            Upload
                        </div>
                        <input ref={inputRef} onChange={ev=> setImage(ev.target.files[0])} type="file" className="hidden" multiple />
                    </button>
                    <Button variant="filled" size="lg" onClick={handleSubmit}>Proceed</Button>
                </div>
            </div>
        </div>
    )
}

export default CreateCourse;