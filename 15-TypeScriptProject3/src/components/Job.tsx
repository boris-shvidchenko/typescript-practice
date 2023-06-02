import { Link } from "react-router-dom"

type JobType = {
    details: string,
}

export default function Job({ details }: JobType | any) {
    return (
        <>
            <Link to={`/careers/${details.name}`} className='careers-job'>{details.name}</Link>
        </>
    )
}