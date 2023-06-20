import React from 'react'

function CountryData({selectedCountry}) {
    console.log(selectedCountry)
  return (
    <div className='country-wrap'>
       <div className="country-details">
          <h2>{selectedCountry.name.common}</h2>
          <img src={selectedCountry.flags.png} />
          <p><strong>Capital:</strong> {selectedCountry.capital}</p>
          {/* <p><strong>Currency:</strong> {selectedCountry.currencies.INR.name } <span>{selectedCountry.currencies.INR.symbol}</span></p> */}
          <p><strong>Population:</strong> {selectedCountry.population}</p>
          <p><strong>Latlang:</strong> {selectedCountry.latlng}</p>
          <p><strong>Languages:</strong> {selectedCountry.languages.eng}, <span>{selectedCountry.languages.hin}</span>,  <span>{selectedCountry.languages.tam}</span></p>
          <p><strong>Area:</strong> {selectedCountry.area}</p>
          <p><strong>TimeZone:</strong> {selectedCountry.timezones}</p>
          <p><strong>Region:</strong> {selectedCountry.region}</p>
         
        </div>
    </div>
  )
}

export default CountryData