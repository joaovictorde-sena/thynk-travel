import React from 'react'
import { useLocation } from 'react-router-dom';
import { packages } from '../data/data'
import './SearchResults.css'

const SearchResults = () => {
  const location = useLocation();
  const searchTerm = location.state?.location?.toLowerCase() || '';


  const filteredPackages = packages.filter(pkg => 
    pkg.title.toLowerCase().includes(searchTerm) ||
    pkg.location.toLowerCase().includes(searchTerm)
    )
  return (
    <div className='results-container'>
        <h2>Resultados para: "{searchTerm}"</h2>

        {filteredPackages.length > 0 ? (
            <div className='packages-grid'>
                {filteredPackages.map(pkg => (
                    <div key={pkg.id} className='package-card'>
                        <img src= {pkg.image} alt={pkg.title} className='package-image' />
                        <div className='package-info'>
                            <h3>{pkg.title}</h3>
                            <p className='location'>{pkg.location}</p>
                            <p className='dates'>
                                {pkg.checkIn} - {pkg.location}
                            </p>
                            <p className='price'>{pkg.price}</p>
                            <p className='description'>{pkg.description}</p>
                            <button className='details-button'>Ver detalhes</button>
                        </div>
                    </div>
                ))}
            </div>
  ) : (
    <p>Nenhum pacote encontrado para sua busca.</p>
  )}
  </div>
  )
}

export default SearchResults