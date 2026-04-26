

import './AccountSummary.css'

export default function AccountSummary() {
    return (
        <>
            <div className='largeContainer'>
                <div>
                    <div className="currentBalance_Container">
                        <div className='currentBalanceHeading'>Current balance </div>
                        <div className="whatsThisLink">What's this?</div>
                    </div>

                    <div className='currentBalanceValue'>$1,638.47</div>

                    <div className='paymentButtonsContainer'><button className="paymentButton"> Make a payment</button>
                        <h1 className='autopay'>Set up autopay</h1></div>

                </div>

                <div>
                    <div className='minimumDueContainer'>
                    <div>
                    <div className='minimumDue'>Minimum due</div>
                    <div  className='payToAvoidFee'>pay to avoid fee</div>
                    </div>
                    <div className='minimumDueValue'>
                        $25
                    </div>
                    </div>
                    <hr></hr>
                    <div className='statementBalance'>Statement balance</div>
                    <div  className='payToAvoidInterest'>pay to avoid interest on new purchases</div>
                    <hr></hr>
                    <div className='pendingTransactions'>Pending transactions</div>
                    <hr></hr>
                    <div className='paymentDueDate'>Payment due  date</div>
                    <hr></hr>
                    <div className='yourPaymentDeadline'> Your payment is due May 3.</div>



                </div>


            </div>

        </>


    )





}