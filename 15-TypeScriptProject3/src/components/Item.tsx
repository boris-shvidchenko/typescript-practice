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
            <section className='item-section'>
                <p className='item-price'>Cost: ${price}</p>
                <div className='item-div'>
                    <button className='item-btn'>Add to cart</button>
                    <button className='item-btn'>Remove</button>
                </div>
            </section>
        </div>
    )
}