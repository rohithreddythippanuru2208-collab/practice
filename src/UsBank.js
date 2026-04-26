import "./UsBank.css"

export default function UsBank() {


    return (

        <div className>
            <div className ="toplogo">
                <h1>U.S Bank</h1>
            </div>
            <div className="usbflexbox">
                <h1>Checking ...1234</h1>
                <h1> $1,023.45</h1>
            </div>
            <div className = "bottomlogo">
                <h3>Big Logo</h3>
                <div className = "bottomtext">
                <h1> Add money in the next 29 days,or this account will close</h1>
                <h1>  Routing number: 123456789 </h1>
                </div>
            </div>
            <div className ="buttonflex">
            <button> 3 notifications</button>
            <button> Add money</button>
            <button> ...</button>
            </div>
        </div>

    )
}