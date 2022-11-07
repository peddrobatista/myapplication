import React from "react";
// Utilizando o conceito de classes com props
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "Red",
            year: 1964
        };
    }
    
    changeColor = () => {
        this.setState({color: "Blue"});
    }

    render() {
        return (
            <div>
                <h2>Esse meu {this.state.brand}</h2>
                <p>
                    que é {this.state.color},
                    {this.state.model}
                    do ano de {this.state.year}.
                </p>
                <button type="button" onClick={this.changeColor}>Mudar cor</button>
            </div>
        );
    }
}
export default Car