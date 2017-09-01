import React, { Component } from 'react';
import Start from './Start';


class Comp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            placeholder: 'Type a number and click on button'
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        let url = 'https://jsonplaceholder.typicode.com/posts/' + this.state.placeholder
        console.log(url)
        fetch(url)
            .then(d => d.json())
            .then(d => {
                this.setState({
                    placeholder1: d
                })
            })
    }

    handleChange(event) {
        var value = event.target.value
        this.setState({
            placeholder: value
        })
    }

    render() {
        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.placeholder} onChange={this.handleChange} />
                    <input type="submit" value="Click me" />
                </form>

                <h2>{this.state.placeholder}</h2>
                <div>
                    {
                        this.state.placeholder1 &&
                        <h2>{this.state.placeholder1.title}</h2>
                    }
                    {/* {
                        !this.state.placeholder1 &&
                        <p> Loading... </p>
                    } */}
                </div>
            </div >
        )
    }
}



export default Comp