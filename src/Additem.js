import React ,{Component} from 'react'

class Additem extends Component{

    constructor(props){
        super(props)
        this.handlesubmit = this.handlesubmit.bind(this)
    }
    render(){
        return(
            <form id="add-todo" onSubmit ={this.handlesubmit}>
                <input type="text" required ref="newItem"/>
                <input type="submit" value="Hit me"/>
            </form>
        )
    }

    handlesubmit(e){
        e.preventDefault()
        this.props.onAdd(this.refs.newItem.value)
    }
}

export default Additem