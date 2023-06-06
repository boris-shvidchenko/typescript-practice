import { useParams } from "react-router-dom";
import { careerData } from "../../data/careerData";

export default function Jobs() {

    const { id } = useParams();

    // Extract information 
    const description = careerData.filter(job => job.name === id);

    return (
        <div>
            <h3>{id}</h3>
            <p>{description[0].info}</p>
        </div>
    )
}