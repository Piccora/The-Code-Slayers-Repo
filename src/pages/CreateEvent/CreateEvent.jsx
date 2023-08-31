import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import './CreateEvent.css'
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { addEvent } from "../../firebase/Database";

export function CreateEvent() {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [Location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const navigate = useNavigate();

  const handleSubmit = () => {
    addEvent({ 'name': name, 'type': type, 'Location': Location, 'date': date })
    console.log({ 'name': name, 'type': type, 'Location': Location, 'date': date })
    navigate('/EventsList')
  }
  return (
    <div className="create-event">
      <Card color="transparent" shadow={false} className="text-center">
        <Typography variant="h4" color="blue-gray">
          Create an event
        </Typography>
        <br />
        <Typography variant="h5" color="blue-gray" className="text-left">
          Event name
        </Typography>
        <Input size="lg" label="Event name" value={name} onChange={ev => setName(ev.target.value)} />
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Typography variant="h5" color="blue-gray" className="text-left">
              What type of event are you hosting?
            </Typography>
            <Input size="lg" label="Event type" value={type} onChange={ev => setType(ev.target.value)} />
            <Typography variant="h5" color="blue-gray" className="text-left">
              Where will it be hosted?
            </Typography>
            <Input size="lg" label="Location" value={Location} onChange={ev => setLocation(ev.target.value)} />
            <Typography variant="h5" color="blue-gray" className="text-left">
              When will it start?
            </Typography>
            <Input size="lg" label="Starting date" value={date} onChange={ev => setDate(ev.target.value)} />
          </div>
          <Button className="mt-6" fullWidth onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}