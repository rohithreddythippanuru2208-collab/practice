
import './LoginApp.css';

export default function LoginApp() {
    function handleClick(){
        console.warn("Button Clicked")
    }
    return (

        <div className = "main">
           
            <div className="container">
                <div className="align">

                    <label> Username</label>
                    <input type="text" name="username" placeholder="mail xxxxxxx.@xxx.com"/>

                </div>
                <div className="align">

                    <label> Password</label>
                    <input type="text" name="password" placeholder='refresh your memory'/>

                </div>
                <button className="login_button" onClick={handleClick} type='submit'> Login </button>
                <button className = "signup_button"> SignUp </button>

            </div>
        </div>
    )
}