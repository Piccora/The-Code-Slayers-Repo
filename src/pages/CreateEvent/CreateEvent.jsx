import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import './CreateEvent.css'
   
  export function CreateEvent() {
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
      <Input size="lg" label="Event name" />
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
          <Typography variant="h5" color="blue-gray" className="text-left">
            What type of event are you hosting?
      </Typography>
            <Input size="lg" label="Event type" />
            <Typography variant="h5" color="blue-gray" className="text-left">
            Where will it be hosted?
      </Typography>
            <Input size="lg" label="Location" />
            <Typography variant="h5" color="blue-gray" className="text-left">
            When will it start?
      </Typography>
            <Input size="lg" label="Starting date" />
          </div>
          <Button className="mt-6" fullWidth>
            Submit
          </Button>
        </form>
      </Card>
      </div>
    );
  }