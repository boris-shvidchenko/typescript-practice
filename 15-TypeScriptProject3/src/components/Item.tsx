import { useContext } from 'react';
import { StoreContext } from '../context/storeContext';

type ItemType = {
    name: string, 
    img: string, 
    key: string, 
    price: number
}

export default function Item({ name, img, price }: ItemType) {

    const {state, dispatch} = useContext(StoreContext);

    // Temporary function
    function displayState() {
        console.log('1: ', state);
        dispatch({ type: 'UPDATE_ITEMS', payload: [name, img, price, 1] });
        console.log('2: ', state);
    }

    return (
        <div className='item-main'>
            <p className='item-name'>{name}</p>
            <img className='item-img' src={img} alt={'Image of ' + name} />
            <section className='item-section'>
                <p className='item-price'>Cost: ${price}</p>
                <div className='item-div'>
                    <button onClick={displayState} className='item-btn'>Add to cart</button>
                    <button className='item-btn'>Remove</button>
                </div>
            </section>
        </div>
    )
}