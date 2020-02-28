import React, { Component } from 'react';

class Subject extends Component {
    shouldComponentUpdate(newProps){
        if(newProps.title === this.props.title){
            return false;          
        }
        return true;
    }
    render() {
        console.log('Subject Render');
        return (
            <section className="subject">
                <a href="/Welcome" onClick={function(e) {
                    e.preventDefault();
                    this.props.onChangeMode();
                }.bind(this)}><h1>{this.props.title}</h1></a>
            </section>
        );
    }
}
export default Subject;