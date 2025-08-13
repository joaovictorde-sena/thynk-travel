import React, { useState } from 'react'
import { categories } from '../data/data'
import './Categories.css'

const Categories = () => {
  const [activeTab, setActiveTab] = useState('Parques');

  const handleTabClick = (category) => {
    setActiveTab(category)
  }

  const filteredCategories = categories.filter((item) => item.type === activeTab)

  return (
    <section className='categories'>
        <h2>Categorias populares</h2>
        <div className='tabs'>
          {['Parques', 'Praias', 'Monumentos'].map((tab)=>(
            <button 
              key={tab} 
              className= {`tab ${activeTab === tab ? 'active' : ''}`} 
              onClick={() => handleTabClick(tab)}
            >
            {tab}
            </button>
          ))}
        </div>

        <div className='categories-grid'>
            {filteredCategories.map((category, index)=>(
                <div className='category-card' key={index}>
                    <img src={category.image} alt={category.title} />
                    <h3>{category.title}</h3>
                    <button>Ver pacotes</button>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Categories