import { useNavigate } from 'react-router-dom';
import './SearchBar.css'
import React, { useState } from 'react';

const tabs = ['Destino', 'Voos', 'Cruzeiros']

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState('Destino');
  const [passengers, setPassengers] = useState(1);
  const [location, setLocation] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/search-results', {
      state: {
        tab: activeTab,
        location,
        passengers
      }
    });
  }

    return (
    <div className='searchbar-container'>
        <div className='searchbar-tabs'>
            {tabs.map((tab) => (
                <button key={tab} className={activeTab === tab ? 'tab active' : 'tab'} onClick={() => setActiveTab(tab)}>
                    {tab}
                </button>
            ))}
        </div>

        <form className='searchbar-form' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Localização: </label>
                <input type="text" placeholder='Porto Seguro'
                value={location}
                onChange={(e) => setLocation(e.target.value)} />
            </div>

            <div className='form-group'>
                <label>Nº de passageiros: </label>
                <input type="number" 
                value={passengers}
                onChange={(e) => {
                    const value = parseInt(e.target.value, 10);
                    if(!isNaN(value) && value >=1 ) {
                        setPassengers(value);
                    }
                }}/>
            </div>

            <div className='form-group'>
                <label>Check-in: </label>
                <input type="date" />
            </div>

            <div className='form-group'>
                <label>Check-out: </label>
                <input type="date" />
            </div>

            <button type='submit' className='search-button'>
                Procurar pacotes
            </button>
        </form>
        
    </div>
  )
}


export default SearchBar