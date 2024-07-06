/* eslint-disable react/prop-types */
import React from 'react';
import './Table.css';

function TableData({item}) {
    function getM2(quantity){
        const itemIndex = item.available_thickness.indexOf(item.thickness)
        return Math.round(parseFloat(item.square_meters[itemIndex]) * quantity * 10) / 10
    }
    function getM3(quantity){
        const itemIndex = item.available_thickness.indexOf(item.thickness)
        return Math.round(parseFloat(item.cubic_meters[itemIndex]) * quantity * 10) / 10
    }
    function getPieces(quantity){
        const itemIndex = item.available_thickness.indexOf(item.thickness)
        return parseFloat(item.pieces[itemIndex]) * quantity
    }
    
    return (
        <div className='table--data'>
        <div className='item--info1'>
                                <p></p>
                                <span className='p--col'><p>sztuk / płyt</p></span>
                                <span className='p--col'><p>m<span style={{fontSize: 13, position: 'relative', bottom: 6}}>2</span></p></span>
                                <span className='p--col'><p>m<span style={{fontSize: 13, position: 'relative', bottom: 6}}>3</span></p></span>
                                <span className='p--col'><p>W paczce</p></span>
                                <p>{isNaN(getPieces(1)) ? '-' : getPieces(1)}</p>
                                <p>{isNaN(getM2(1)) ? '-' : getM2(1)}</p>
                                <p>{isNaN(getM3(1)) ? '-' : getM3(1)}</p>
                                <span className='p--col'><p>Łącznie</p></span>
                                 <p>{isNaN(getPieces(parseInt(item.quantity))) ? '-' :getPieces(parseInt(item.quantity))}</p>
                                 <p>{isNaN(getM2(parseInt(item.quantity))) ? '-' :getM2(parseInt(item.quantity))}</p>
                                 <p>{isNaN(getM3(parseInt(item.quantity))) ? '-' :getM3(parseInt(item.quantity))}</p>
                            </div>
                            </div>
    )
}

export default TableData;