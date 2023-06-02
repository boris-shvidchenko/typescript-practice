import { careerData } from '../../data/careerData'; 
import Job from '../components/Job';

export default function Careers() {

    const careers = careerData.map(job => {
        return (
            <Job details={job} key={job.name} />
        )
    })

    return (
        <div className='careers-main'>{careers}</div>
    )
}