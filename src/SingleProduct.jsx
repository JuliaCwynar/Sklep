import React from 'react'
import data from './data_exp.json'

function SingleProduct() {   


    return (
        <div className='product'>
            <div className='product--row'>
            <h1>{data.name}</h1>
            </div>
            <div className='product--row'>
            <div className='product--description'>
                <img src={data.image}/>
                <p>Lambda: {data.lambda}</p>
                <p>Producent: {data.producent}</p>
                <p>Kolor: {data.color}</p>
                <p>Typ: {data.type}</p>
            </div>
            <div className='product--pricing'>
                <h3>Cena {data.price} zł</h3>
                <span>VAT: {data.price*0.23}</span>
                <p>Dostawa</p>
                <p>Stan magazynowy: <span>Dostępność duża</span></p>
                <div className='product--choice'>
                    <label for="pet-select">Grubość styropianu:</label>
                    <select name="pets" id="pet-select">
                        <option value="">--Please choose an option--</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                        <option value="spider">Spider</option>
                        <option value="goldfish">Goldfish</option>
                    </select>
                </div>
                <div className='product--choice'>
                <label for="pet-select">Wykończenie krawędzi: </label>
                    <select name="pets" id="pet-select">
                        <option value="">--Please choose an option--</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                        <option value="spider">Spider</option>
                        <option value="goldfish">Goldfish</option>
                    </select>
                </div>
                <h4>Ilość m^3 w opakowaniu: </h4>
                <div className='product--calculated'>
                    <div>
                        <input type='number'></input>
                        <button>Dodaj do koszyka</button>
                    </div>
                </div>
            </div>
            </div>
            <div className='product--row'>
                <h2>Oblicz ilość potrzebnych paczek:</h2>
                <h3>Styropian {data.name}</h3>
            </div>
        </div>
    )
}

export default SingleProduct;