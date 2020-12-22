import React from "react";
import ButtonClick from "./Components/Button";
import TextFieldBox from "./Components/TextField"

class LandingPage extends React.Component {
    render() {
        return(
            <div className="container">
                <div>
                    <TextFieldBox fieldLabel = "Room Code"/>
                </div>
                <div>
                    <TextFieldBox fieldLabel = "Name"/>
                </div> 
                <div className="playButton"> 
                    <ButtonClick text = "Play"/>
                </div>
                <div>
                    <p>
                        By clicking Play, you agree to our <a href = "/terms-conditions">Terms and Services</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default LandingPage;
