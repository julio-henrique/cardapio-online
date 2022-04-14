export const Menu = ({ menuItems }) => {
    const showMenuItems = menuItems.map(item => {
        return (
            <article className='menu-item' key={item.id}>
                <img src={item.img} alt={item.title} className='photo' />
                <div className='item-info'>
                <header>
                    <h4>{item.title}</h4>
                    <h4 className='price'>${item.price}</h4>
                </header>
                <p className='item-text'>{item.desc}</p>
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