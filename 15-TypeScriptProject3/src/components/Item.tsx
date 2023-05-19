type ItemType = {
    name: string, 
    img: string, 
    key: string, 
    price: number
}

export default function Item({ name, img, price }: ItemType) {
    return (
        <div>
            <p>{name}</p>
            <img src={img} alt={'Image of ' + name} />
            <p>Cost: ${price}</p>
        </div>
    )
}