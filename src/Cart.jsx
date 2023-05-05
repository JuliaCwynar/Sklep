import { DeleteOutlined } from "@ant-design/icons"


let item = (
    <div className='cart--item'>
         <p className='item--title'>Swisspor LAMBDA mega WHITE ®fasada grafit λ 0,031</p>
                        <div className='cart--item--row'>
                            <img src='src/assets/images/EPS70-038paczka600x382.png'></img>
                        <div className='cart--description'>
                            <p>Ilość</p>
                            <p>Grubość</p>
                            <p>Frez</p>
                        </div>
                        </div>
                        <div className='item--info'>
                            <div className='item--info1'>
                            <p></p>
                                <span className='p--col'><p>m2</p></span>
                                <span className='p--col'><p>m3</p></span>
                                <span className='p--col'><p>W paczce</p></span>
                                <p>3</p>
                                <p>0.45</p>
                                <span className='p--col'><p>Łącznie</p></span>
                                <p>12.0</p>
                                <p>1.8</p>
                            </div>
                            <div className='item--info1'>
                                <p></p>
                                <span className='p--col'><p>m2</p></span>
                                <span className='p--col'><p>m3</p></span>
                                <span className='p--col'><p>W paczce</p></span>
                                <p>3</p>
                                <p>0.45</p>
                                <span className='p--col'><p>Łącznie</p></span>
                                <p>12.0</p>
                                <p>1.8</p>
                            </div>
                            <div className='item--info2'>
                                <h3>Suma brutto: </h3>  
                            </div>
                            <DeleteOutlined style={{position: 'relative', top: '20px', width: '40px', float: 'right'}}/>
                        </div>
               
                    </div>
)

function Cart() {
    return (
        <div className='cart'>
            <div className='row'>
                <h2>Koszyk</h2>
            </div>
            <div className='row'>
                <div className='column'>
                    <h2>Szczegóły zamówienia</h2>
                    {item}
                    {item}
                </div>
                <div className='column'>
                <div className='data'>
                        <h2>Dane</h2>
                        <div className='insert--data'>
                        <label>Imię</label>
                        <input type='text'></input>
                        <label>Nazwisko</label>
                        <input type='text'></input>
                        <label>Adres e-mail</label>
                        <input type='text'></input>
                        <div className='data--row'>
                        <div className='data--column'>
                            <label>Miejscowość</label>
                            <input type='text'></input>
                        </div>
                        <div className='data--column'>
                            <label>Kod pocztowy</label>
                            <input type='text'></input>
                        </div>
                        </div>
                        <label>Ulica</label>
                        <input type='text'></input>
                        <div className='data--row'>
                        <div className='data--column'>
                            <label>Numer domu</label>
                            <input type='text'></input>
                        </div>
                            <div className='data--column'>
                            <label>Nr mieszkania</label>
                            <input type='text'></input>
                        </div>
                        
                        </div>
                        <label>NIP</label>
                        <input type='text'></input>
                        </div>
                    </div>
                    <div className='cart--summary'>
                        <h2>Podsumowanie zamówienia</h2>
                        <p>Suma</p>
                        <p>Dopłata</p>
                    </div>
                    <div className='cart--discount'>
                        <p>Wprowadź kod zniżkowy</p>
                        <input type='text'></input>
                    </div>
                    <div className='cart--total'>
                        <button>Złóż zamówienie</button>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart