import { Link } from "react-router-dom"

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Programming for Everyone',
    },
    {
        id: 'e2',
        title: 'Networking for Coders',
    }

]

export default function EventsPage() {
    return (
        <>
            <h1>EventsPage</h1>
            <ul>
                {DUMMY_EVENTS.map((event) => {
                    return (
                        <li key={event.id}>
                            <Link to={event.id}>{event.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
