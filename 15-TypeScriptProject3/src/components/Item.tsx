import { useContext } from 'react';
import { StoreContext } from '../context/storeContext';

type ItemType = {
    name: string, 
    img: string, 
    key: string, 
    price: number
};

export default function Item({ name, img, price }: ItemType) {

    const {state, dispatch} = useContext(StoreContext);

    // Adds item to state
    function addItem() {

        // Plan:
        // if list with name not in state
        //      then add list
        // else 
        //      then + quantity (last item in list)

        // Remove function will be opposite 

        // state.items.forEach(item => {
            
        // });
        // [ [ name, img, price, qnty ],[] ]
        // console.log(itemInState);
        dispatch({ type: 'UPDATE_ITEMS', payload: [name, img, price, 1] });
        
        // For testing 
        console.log(state);
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