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
                <div>
                    <ButtonClick text = "Go"/>
                </div>
            </div>
            
        )
    }
}

export default LandingPage;
