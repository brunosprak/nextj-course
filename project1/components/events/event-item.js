import Link from 'next/link';

const EventItem = (props) => {
    const {title, image, date, location, id} = props;

    const dateFormatted = new Date(date).toLocaleDateString('en-US' , {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const locationFormatted = location.replace(', ', '\n');

    return <li>
        <div>
        <img src={'/' + image} alt={title}/>
        <div>
            <h2>{title}</h2>
        </div>
        <div>
            <time>{dateFormatted}</time>
        </div>
        <div>
            <address>{locationFormatted}</address>
        </div>
        </div>
        <div>
            <Link href={`/events/${id}`}>Explore event</Link>
        </div>
    </li>;
};

export default EventItem;