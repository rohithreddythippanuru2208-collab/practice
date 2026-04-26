

import './AccountSummary.css'

export default function AccountSummary() {
    return (
        <>
        <div className="currentBalance_Container">
            <div className='currentBalanceHeading'>Current balance </div>
            <div className="whatsThisLink">What's this?</div>
        </div>
        
        <div className='currentBalanceValue'>$1,638.47</div>

        <div className='paymentButtonsContainer'><button className=""> Make a payment</button></div>
        
        </>


    )





}