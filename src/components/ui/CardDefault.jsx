import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function CardDefault({prop}) {
    console.log(prop);
    return (
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {prop.course.name}
          </Typography>
          <Typography>
            {prop.description}
          </Typography>
        </CardBody>
      </Card>
    );
  }