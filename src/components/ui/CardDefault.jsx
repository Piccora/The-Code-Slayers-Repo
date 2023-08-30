import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function CardDefault(prop) {
    return (
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {prop.title}
          </Typography>
          <Typography>
            {prop.content}
          </Typography>
        </CardBody>
      </Card>
    );
  }