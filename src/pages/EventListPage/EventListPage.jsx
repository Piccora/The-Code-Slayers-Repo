import { CardWithLink } from "../../components/ui/CardWithLink";
import { getAllEvents } from "../../firebase/Database";
import { useState,useEffect } from "react";

export function EventList() {
    const [events, setEvents] = useState([])
    useEffect(() => {
        getAllEvents().then(events => {
            setEvents(events)
        })
    }, [])
    return (
        <div>
            <div className="h-screen items-center flex justify-center overflow-x-hidden">
                <h1 className="text-8xl absolute">Events</h1>
            </div>
            <div className="grid grid-cols-3 w-full left-12 relative gap-y-12">
                {/* <CardDefault />
                <CardDefault />
                <CardDefault /> */}
                {
                    events.length > 0 && events.map((event, index) => {
                        return(
                        <CardWithLink key={index} prop={event} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default EventList;