import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../Hooks/stateProvider';
import { getBasketTotal } from '../../Hooks/reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const[{basket}, dispatch ] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order contains gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={e => {basket.length !== 0 ? history.push('/payment') : alert("No item in Basket")}}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
