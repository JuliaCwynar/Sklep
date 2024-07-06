import { useState, useEffect } from 'react';
import {FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Checkbox } from 'antd';
import { useFilter } from '../contexts/filter-context';


let Manufacturer = ['Besser', 'Swisspor'];
let Lambda = [0.030, 0.031, 0.032, 0.034, 0.035, 0.036, 0.037, 0.038, 0.039, 0.040];
let Efficiency = [50, 60, 70, 80, 100, 120, 150, 200];
let Color = ['Bialy', 'Grafitowy', 'Szary'];
let Type = ['Podlogowy', 'Fundamentowy', 'Elewacyjny', 'XPS', 'Parkingowy', 'Hydro'];

function Menu() {
  const { filter, setFilter } = useFilter();

  const [showFilter, setShowFilter] = useState(window.innerWidth > 600);
  const [selectedFilters, setSelectedFilters] = useState({
    manufacturer: [],
    lambda_d: [],
    cs: [],
    color: [],
    purpose: [],
    categories: [],
    search: '',
  });

  const handleChange = (filterCategory, value) => {
    const updatedFilters = { ...selectedFilters };
    if (updatedFilters[filterCategory].includes(value)) {
      updatedFilters[filterCategory] = updatedFilters[filterCategory].filter((item) => item !== value);
    } else {
      updatedFilters[filterCategory].push(value);
    }
    setSelectedFilters(updatedFilters);
    setFilter(updatedFilters);
  };

    const applyFilters = () => {
    const queryParams = new URLSearchParams();
    
    for (const filterCategory of Object.keys(selectedFilters)) {
      if (selectedFilters[filterCategory].length > 0) {
        queryParams.set(filterCategory, selectedFilters[filterCategory].join(','));
      }
    }
    
    const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
    window.history.pushState({}, '', newUrl);
  };


   const choice = (element, filterCategory) =>
    element.map((item) => (
      <div className='company' key={item}>
        <Checkbox
          style={{ position: 'relative', top: '5px', paddingRight: '5px' }}
          value={item}
          checked={selectedFilters[filterCategory].includes(item)}
          onChange={() => handleChange(filterCategory, item)}
        />
        <label>{item}</label>
      </div>
    ));

  return (
    <div className='filter--menu'>
      <div className='config--bar'>
        <div className='search--bar'>
          <input type="text" className="search-bar" placeholder="" />
          <SearchOutlined
            style={{ fontSize: '25px', color: '#000d2a70', position: 'relative', float: "right", bottom: "30px", left: "-10px" }}
          />
        </div>
        <button className='filter-btn' onClick={() => setShowFilter(!showFilter)}>
          <FilterOutlined style={{ fontSize: '25px', color: '#000d2a70', position: 'relative', bottom: '5px' }} />
        </button>
      </div>
      {showFilter && (
        <div className='menu'>
          {window.location.pathname === '/' && (
            <div>
              <div className='filter'>
                <h2>Producent</h2>
                <div className='filter--choices'>{choice(Manufacturer, 'manufacturer')}</div>
              </div>
               <div className='filter'>
                <h2>Kolor</h2>
                <div className='filter--choices'>{choice(Color, 'color')}</div>
              </div>
              <div className='filter'>
                <h2>Typ</h2>
                <div className='filter--choices'>{choice(Type, 'purpose')}</div>
              </div>
              <div className='filter'>
                <h2>Współczynnik przewodzenia ciepła λD</h2>
                <div className='filter--choices'>{choice(Lambda, 'lambda_d')}</div>
              </div>
              <div className='filter'>
                <h2>Wytrzymałość na ściskanie CS (10) [kPa]</h2>
                <div className='filter--choices'>{choice(Efficiency, 'cs')}</div>
              </div>
            </div>
          )}
          {window.location.pathname !== '/' && <div className='menu--contact'></div>}
        </div>
        
      )}
    </div>
  );
}

export default Menu;