import React, { Component } from 'react';

class CreateContents extends Component {
    render() {
        
        return (
            <div className="create-contents story-bg">
                <form onSubmit={
                    function(e) {
                        e.preventDefault();
                        this.props.onSubmit(e.target.title.value, e.target.story.value);
                    }.bind(this)}>
                    <section className="contents create">
                        <input name="title" type="text"></input>
                        <textarea name="story" type="textarea"></textarea>
                    </section>
                    <section className="page">
                        <ul className="form-button-list">
                           <li><button type="submit">취소</button></li>
                           <li><button type="submit">저장</button></li>
                        </ul>
                    </section>
                </form>
            </div>

        );
    }
}
export default CreateContents;