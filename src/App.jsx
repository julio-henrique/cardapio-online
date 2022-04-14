import { useState } from "react";
import data from './data'

import { Menu } from './Menu'
import { Categories } from './Categories'

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(data)
  const [categories, setCaregories] = useState(allCategories)

  function filterItems(categoriesParam) {
    if (categoriesParam === 'all') return setMenuItems(data)

    const filteredCategory = data.filter(item => item.category === categoriesParam)
    
    setMenuItems(filteredCategory)
    return categoriesParam
  }


  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems}/>
      </section>
    </main>
  )
}

export default App;
