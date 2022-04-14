export const Categories = ({ categories, filterItems }) => {
    const showCategories = categories.map((item, index) => {
        return (
            <button 
                type="button"
                className="filter-btn"
                key={index}
                onClick={() => filterItems(item)}
            >
                {item}
            </button>
        )
    })

    return (
        <div className="btn-container">
            {showCategories}
        </div>
    )
}