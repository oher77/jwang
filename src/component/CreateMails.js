import React, { Component } from 'react';

class CreateMails extends Component {
    render() {

        return (
            <div className="create-contents story-bg">
                <h3 className="title-story">좡에게 메일쓰기</h3>
                <form onSubmit={function (e) {
                    e.preventDefault();
                    this.props.onSubmit(e.target.title.value, e.target.message.value);
                }.bind(this)}>
                    <section className="contents create">
                        <input placeholder="제목" name="title" type="text"></input>
                        <textarea placeholder="좡에게 편지를 써보아요" name="message" type="textarea"></textarea>
                    </section>
                    <section className="buttons-item create">
                        <ul className="form-button-list">
                            <li><button type="button"
                                onClick={function(e){
                                    e.preventDefault();
                                    this.props.onCancel();
                                }.bind(this)}>취소</button></li>
                            <li><button type="submit">좡에게 메일 보내기</button></li>
                        </ul>
                    </section>
                </form>
            </div>

        );
    }
}
export default CreateMails;