import React from 'react'
import Select from 'react-select'

function Header({countryList, setPosition, selectedCountry, setSelectedCountry}) {
    var options=[];
    var selectedOption = {...selectedCountry, value:selectedCountry?.area, label: selectedCountry?.name?.common}
    countryList.forEach(element => {
        options.push({...element, value:element?.area, label: element?.name?.common })
    });
    
const handleSelectCountry = (country)=>{
    setSelectedCountry(country);
    setPosition(country.latlng)
}
  
  return (
    <div className='searchInput'>
        <Select options={options} value={selectedOption} onChange={handleSelectCountry} />
    </div>
  )
}
export default Header