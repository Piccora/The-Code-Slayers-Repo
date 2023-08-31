import { ButtonGroup, Button } from "@material-tailwind/react";
 
export function Payment() {
  return (
    <div className="flex w-max flex-col gap-4 bg-green-600">
      <ButtonGroup color="yellow">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      </div>
  )
}