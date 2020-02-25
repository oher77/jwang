import React, { Component } from 'react';

class CreateContents extends Component {
    render() {
        var data= this.props.data;
        return (
            <div className="create-contents story-bg">
                <section className="contents">
                    <input type="text"></input>
                    <textarea></textarea>
                </section>
                <section className="page">
                    <ul className="button-list">
                        <a href="/"><li>취소</li></a>
                        <a href="/"><li>저장</li></a>
                    </ul>
                </section>
            </div>

        );
    }
}
export default CreateContents;