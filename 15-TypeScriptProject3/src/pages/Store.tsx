// Data
import { storeData } from '../../data/storeData' 
// Components
import Item from '../components/Item';

export default function Store() {
    return (
        <main>
            {storeData.map(item => <Item key={item.key} name={item.name} img={item.img} price={item.price} />)}
        </main>
    )
}