import { useState } from 'react'
import './goods.scss'

const Filters = ({setProducts, clearProductsList, searchData}) => {

    const [activityBtn, setActivityBtn] = useState(null);
    const [term, setTerm] = useState('');

    const changeList = (country) => {
        if(activityBtn === country) {
            clearList()
            setActivityBtn(null)
            return setProducts('all')
            
        }

        setActivityBtn(country)
        setProducts(country)
    }

    const clearList = () => {
        setActivityBtn(null)
        clearProductsList()
    }

    const changeTerm = (e) => {
        setTerm(e.target.value);
        searchData(e.target.value);
    }

    const countryBtns = ['Brazil', 'Kenya', 'Columbia'];

    return(
        <div className="products__form">
            <div>
                <label htmlFor="name">Lookiing for</label>
                <input type="text" 
                       id="name" 
                       name="name" 
                       placeholder="start typing here..."
                       value={term}
                       onChange={(e) => changeTerm(e)}/>
            </div>
            <div>
                <p>Or filter</p>
                <div className="products__btns">
                    {
                        countryBtns.map((item, i) => {
                            return(
                                <button onClick={() => changeList(item)} 
                                        key={i} 
                                        style={{backgroundColor: activityBtn === item ? 'rgb(184 184 184)' : null}}>
                                            {item}</button>
                            )
                        })
                    }
                    <button onClick={clearList}>clear</button>
                </div>
            </div>
        </div>
    )
}

export default Filters;