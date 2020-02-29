import React, { Component } from 'react';

class UpdateContents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.data.title,
            story: this.props.data.story
        }
    }
    inputFormHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        var data = this.props.data;

        return (
            <div className="create-contents story-bg">
                <h3 className="title-story">나의 이야기 수정하기</h3>
                <form onSubmit={
                    function (e) {
                        e.preventDefault();
                        debugger;
                        this.props.onSubmit(
                            e.target.id.value, 
                            e.target.title.value, 
                            e.target.story.value);
                    }.bind(this)}>
                    <section className="contents create">
                        <input name="id" value={data.id} type="hidden"></input>
                        <input name="title" type="text" value={this.state.title}
                            onChange={this.inputFormHandler.bind(this)}></input>
                        <textarea name="story" type="textarea" value={this.state.story}
                            onChange={this.inputFormHandler.bind(this)}></textarea>
                    </section>
                    <section className="buttons-item create">
                        <ul className="form-button-list">
                            <li><button type="button" onClick={function (e) {
                                this.props.onCancel();
                            }.bind(this)}>취소</button></li>
                            <li><button type="submit">저장</button></li>
                        </ul>
                    </section>
                </form>
            </div>

        );
    }
}
export default UpdateContents;