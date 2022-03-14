import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider'
import { getTotalbasket } from '../reducer';
import { useHistory } from 'react-router';
export default function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const history = useHistory()
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotalGift">
                            <input type="checkbox" />
                            This Order contains a small gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getTotalbasket(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e => history.push("/payment")}>Proceed to Checkout</button>
        </div>
    )
}
