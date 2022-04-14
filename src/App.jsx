import { useState } from "react";
import data from './data'

import { Menu } from './Menu'
import { Categories } from './Categories'

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(data)
  const [categories, setCaregories] = useState(allCategories)

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
      </section>
      {/* aqui vem os componentes, o categories filtra os items */}
      <Categories />
      <Menu menuItems={menuItems}/>
    </main>
  )
}

export default App;
