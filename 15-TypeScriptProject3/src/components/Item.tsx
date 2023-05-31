import { useContext } from 'react';
import { StoreContext } from '../context/storeContext';

type ItemType = {
    name: string, 
    img: string, 
    key: string, 
    price: number,
};

export default function Item({ name, img, price }: ItemType) {

    const {state, dispatch} = useContext(StoreContext);

    // Adds item to state
    function addItem() {

        const itemCheck = state.items.filter(i => i[0] === name);
        if(itemCheck.length === 0) {
            dispatch({ type: 'UPDATE_ITEMS', payload: [name, img, price, 1] });
        } else {
            console.log('item exists in state');
            const addedQnty = itemCheck[0][3];
            // dispatch({ type: 'UPDATE_ITEMS', itemCheck:  });
            console.log(addedQnty);
        }

        // For testing 
        console.log(state.items);
    }

    return (
        <div className='item-main'>
            <p className='item-name'>{name}</p>
            <img className='item-img' src={img} alt={'Image of ' + name} />
            <section className='item-section'>
                <p className='item-price'>Cost: ${price}</p>
                <div className='item-div'>
                    <button onClick={addItem} className='item-btn'>Add to cart</button>
                    <button className='item-btn'>Remove</button>
                </div>
            </section>
        </div>
    )
}