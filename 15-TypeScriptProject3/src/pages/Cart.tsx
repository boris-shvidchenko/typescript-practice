import { useContext } from "react"
import { StoreContext } from '../context/storeContext';
import CartItem from "../components/CartItem";

export default function Cart() {

    const { state } = useContext(StoreContext);

    const cart = state.items.map(i => <CartItem item={i} />)

    console.log(cart);

    return (
        <main className='cart-main'>
            <p className='cart-header'>Total Items: <span className='cart-span'>{state.totalItems}</span></p>
            {cart}
        </main>
    )
}