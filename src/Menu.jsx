import React, { useState } from 'react';
import {DownOutlined, RightOutlined, FilterOutlined, SearchOutlined} from '@ant-design/icons'

let Companies = ['Besser', 'Swisspor'];
let Lambda = [
  '0.030 W/mK',
  '0.031 W/mK',
  '0.032 W/mK',
  '0.034 W/mK',
  '0.035 W/mK',
  '0.036 W/mK',
  '0.037 W/mK',
  '0.038 W/mK',
  '0.039 W/mK',
  '0.040 W/mK',
];
let Efficiency = ['EPS 50', 'EPS 60', 'EPS 70', 'EPS 80', 'EPS 100', 'EPS 120', 'EPS 150', 'EPS 200'];


const choice = (element, handleChange) =>
  element.map((item) => (
    <div className='company'>
      <input 
        type='checkbox'
        value={item} 
        onChange={handleChange}/>
      <label>{item}</label>
    </div>
  ));

function Menu({checkedItems, setCheckedItems}) {
  const [showItems, setShowItems] = useState({});
  const [showFilter, setShowFilter] = useState(true);

  const handleNav = (name) => {
    setShowItems({ ...showItems, [name]: !showItems[name] });
  };

 

  const handleChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems.filter(item => item !== value));
    }
    console.log(checkedItems);
  }


  const dropdown = (name, id) => (
    <div>
      <button className='dropdown-btn' onClick={() => handleNav(id)}>
      <DownOutlined style={{marginRight: '15px', position:'relative',top:'4px'}}/>
        {name}
      </button>
      {showItems[id] && (
        <div className='dropdown-container'>
          <a href='#'><RightOutlined style={{marginRight: '15px'}}/>Styropian grafitowy</a>
          <a href='#'><RightOutlined style={{marginRight: '15px'}}/>Styropian biały</a>
        </div>
      )}
    </div>
  );

  return (
    <div className='filter--menu'>
        <div className='config--bar'>
            <div className='search--bar'>
                <input type="text" id="search-bar" placeholder=""/>
                <SearchOutlined style={{ fontSize: '25px', color: '#000d2a70', position:'relative', float: "right", bottom: "30px", left: "-10px" }}/>
            </div>
            <button className='filter-btn' onClick={() => setShowFilter(!showFilter)}><FilterOutlined style={{ fontSize: '25px', color: '#000d2a70', position:'relative', left: '-11px'}}/></button>
        </div>
      {showFilter && (
        <div className='menu'>
      <div className='categories'>
        <h2>Kategorie</h2>
        {dropdown('Styropian podłogowy', 1)}
        {dropdown('Styropian elewacyjny', 2)}
        {dropdown('Styropian na fundamenty', 3)}
      </div>

      <div className='filter'>
        <h2>Producent</h2>
        <div className='filter--choices'>{choice(Companies, handleChange)}</div>
      </div>

      <div className='filter'>
        <h2>Współczynnik przewodzenia ciepła λD</h2>
        <div className='filter--choices'>{choice(Lambda, handleChange)}</div>
      </div>

      <div className='filter'>
        <h2>Wytrzymałość na ściskanie CS (10) [kPa]</h2>
        <div className='filter--choices'>{choice(Efficiency, handleChange)}</div>
      </div>
    </div>)}
    </div>
  );
}

export default Menu;