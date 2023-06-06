
export default function CartItem({ item }: any) {
    console.log(item);
    return (
        <div>
            <p className='item-name'>{item[0]}</p>
            <img className='item-img' src={item[1]} />
        </div> 
    )
}