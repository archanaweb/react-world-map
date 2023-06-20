import React from 'react';
import { CountryWrap } from './CountryDataStyle';

const getCurrencies = (currencyObj) => {
  const propertyKeys = Object.keys(currencyObj);
  const propertValues = [currencyObj[propertyKeys[0]]?.name, currencyObj[propertyKeys[0]]?.symbol];
  // const propertyValues = Object.values(currencyObj);
  return [...propertyKeys, ...propertValues];
}
const getLanguages = (languageObj) => {
  const propertValues = Object.values(languageObj);

  return [...propertValues];
}


function CountryData({selectedCountry}) {
    console.log(selectedCountry)
  return (
      <CountryWrap>
       <div className="country-details">
          <h2>{selectedCountry.name.common}</h2>
          <img src={selectedCountry.flags.png} />
          {selectedCountry?.capital && <p><strong>Capital:</strong> {selectedCountry.capital}</p>}
          {selectedCountry?.currencies && <p><strong>Currency:</strong> {getCurrencies(selectedCountry.currencies).join(', ')}</p>}

          <p><strong>Population:</strong> {selectedCountry.population}</p>
          <p><strong>Latlang:</strong> {selectedCountry.latlng.join(',')}</p>
         {selectedCountry.languages && <p><strong>Languages:</strong> {getLanguages(selectedCountry.languages) .join(', ')}</p>}
          <p><strong>Area:</strong> {selectedCountry.area}</p>
          <p><strong>TimeZone:</strong> {selectedCountry.timezones}</p>
          <p><strong>Region:</strong> {selectedCountry.region}</p>
         
        </div>
      </CountryWrap>
  )
}

export default CountryData