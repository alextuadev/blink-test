import React, { Component } from "react";


class ComponentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: this.props.data
        }
    }
    NumberList(props) {
        console.log(props)
        const myElements = props;
        const listItems = myElements.map((elem, i) =>
          <li key={i} >{elem}</li>
        );
        return (
          <ul>{listItems}</ul>
        );
    }
      

    render() {
        return (
            <div>

                {this.NumberList(this.props.data)}



            </div>
        )
    }
}
export default ComponentList;