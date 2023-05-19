type ItemType = {
    name: string, 
    img: string, 
    key: string, 
    price: number
}

export default function Item({ name, img, price }: ItemType) {
    return (
        <div className='item-main'>
            <p className='item-name'>{name}</p>
            <img className='item-img' src={img} alt={'Image of ' + name} />
            <p className='item-price'>Cost: ${price}</p>
        </div>
    )
}