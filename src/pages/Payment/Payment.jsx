import { ButtonGroup, Button } from "@material-tailwind/react";
 
export function Payment() {
  return (
    <div className="flex w-max flex-col gap-4 bg-green-600">
      <ButtonGroup color="yellow">
        <Button>50 Coins for $5.00</Button>
        <Button>100 Coins for $10.00</Button>
        <Button>200 Coins for $20.00</Button>
      </ButtonGroup>
      <ButtonGroup color="yellow">
        <Button>500 Coins for $50.00</Button>
        <Button>1000 Coins for $100.00</Button>
        <Button>5000 Coins for $500.00</Button>
      </ButtonGroup>
      </div>
  )
}