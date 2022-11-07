import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    
    changeColor = () => {
        this.setState({favoritecolor: "blue"});
    }

    render() {
        return (
            <>
                <h1>Minha cor favorita é {this.state.favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}>Mudar Cor</button>
            </>
        )
    }
}

export default Header