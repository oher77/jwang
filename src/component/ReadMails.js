import React, { Component } from 'react';

class ReadMails extends Component {
    shouldComponentUpdate(newProps){
        if(this.props.data === newProps.data){
            return false
        }return true
    }
    render() {
        console.log('===>ReadMails Render');
        var data = this.props.data;
        return (
            <div className="read-contents story-bg">
                <section className="contents">
                    <h3 className="title-story">{data.title}</h3>
                    <p>{data.message}</p>
                </section>
            </div>

        );
    }
}
export default ReadMails;