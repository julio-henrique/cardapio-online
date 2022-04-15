
export const Menu = ({ menuItems }) => {
    const showMenuItems = menuItems.map(item => {
        const { id, img, title, price, desc } = item
        return (
            <article className='menu-item' key={id}>
                <img src={img} alt={title} className='photo' />
                <div className='item-info'>
                <header>
                    <h4>{title}</h4>
                    <h4 className='price'>R${price}</h4>
                </header>
                <p className='item-text'>{desc}</p>
                </div>
            </article>
        )
    })

    return (
        <div className="section-center">
            {showMenuItems}
        </div>
    )
}