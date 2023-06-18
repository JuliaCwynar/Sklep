import React, { useState, useEffect } from 'react';
import {CalculatorOutlined, DownOutlined, RightOutlined, FilterOutlined, SearchOutlined} from '@ant-design/icons'
import { Checkbox } from 'antd';
import { filter } from '@chakra-ui/react';

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
let Color = ['white', 'grafit'];
let Type = ['podłogowy', "na fundamenty", "elewacyjny"];
let Categories = ['producent','lambda', 'efficiency', 'color', 'type'];

const choice = (element, handleChange) =>
  element.map((item) => (
    <div className='company'>
      <Checkbox style={{position: 'relative', top: '5px', paddingRight: '5px'}}
        value={item} 
        onChange={handleChange}/>
      <label>{item}</label>
    </div>
  ));

function Menu({checkedItems, setCheckedItems}) {
  const [showItems, setShowItems] = useState({});
  const [showFilter, setShowFilter] = useState(window.innerWidth > 600);

  const [filters, setFilters] = useState([]);
  const [unfilteredList, setUnfilteredList] = useState([checkedItems[0]]);

  const handleNav = (name) => {
    setShowItems({ ...showItems, [name]: !showItems[name] });
  };

  const handleChange = (event) => {
    const producent = event.target.value;
    if (event.target.checked) {
      setFilters([...filters, producent]);
    } else  {
      setFilters(filters.filter((filter) => filter !== producent));
    }
    console.log(filters);
    console.log(checkedItems);
    useEffect(() => {
      setCheckedItems(checkedItems.filter((item) => filters.includes(item.producent)));
    }, [filters]);
    

  }
  
  

  const changeProducent = (event) => {
    const producent = event.target.value;
    let newFilters;

    if (event.target.checked) {
      newFilters = [...filters, producent];
    } else  {
      newFilters = filters.filter((filter) => filter !== producent);
    }
    console.log(checkedItems);
    const filteredArray = newFilters.length == 1 ? checkedItems[0].filter(item => item.producent.includes(newFilters[0] || newFilters[1])) : unfilteredList[0];
    console.log(filteredArray)
    setCheckedItems([filteredArray]);
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
                <input type="text" className="search-bar" placeholder=""/>
                <SearchOutlined style={{ fontSize: '25px', color: '#000d2a70', position:'relative', float: "right", bottom: "30px", left: "-10px" }}/>
            </div>
            <button className='filter-btn' onClick={() => setShowFilter(!showFilter)}><FilterOutlined style={{ fontSize: '25px', color: '#000d2a70', position:'relative', bottom: '5px'}}/></button>
        </div>
      {showFilter && (
        <div className='menu'>
      <div className='categories'>
        <h2>Kategorie</h2>
        {dropdown('Styropian podłogowy', 1)}
        {dropdown('Styropian elewacyjny', 2)}
        {dropdown('Styropian na fundamenty', 3)}
      </div>
      {(window.location.pathname === '/') &&
        <div>
      <div className='filter'>
        <h2>Producent</h2>
        <div className='filter--choices'>{choice(Companies, changeProducent)}</div>
      </div>

      <div className='filter'>
        <h2>Współczynnik przewodzenia ciepła λD</h2>
        <div className='filter--choices'>{choice(Lambda, handleChange)}</div>
      </div>

      <div className='filter'>
        <h2>Wytrzymałość na ściskanie CS (10) [kPa]</h2>
        <div className='filter--choices'>{choice(Efficiency, handleChange)}</div>
      </div>
      </div>}
      {(window.location.pathname !== '/') &&
        <div className='menu--contact'>
          <h2>Dostawa</h2>
          <p>Ceny są aktualne. Zapytania można wysyłać pod adres:
          <br/><b>krzysztof.cwynar@biuro-hossa.eu</b>
          <br/>Napiszcie co potrzebujecie, w jakich ilościach (łącznie minimum ok. 100 paczek), koniecznie należy podać numer telefonu. Nie ważne skąd piszesz, styropian dostarczymy gratis już od 2005 roku z 28 magazynów rozlokowanych w całej Polsce. Dostawa jest gratis. Zapraszamy do współpracy.</p>
        </div>
        
      }
    </div>)}
    </div>
  );
}

export default Menu;