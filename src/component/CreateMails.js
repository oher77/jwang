import React, { Component } from 'react';

class CreateMails extends Component {
    render() {

        return (
            <div className="create-contents story-bg">
                <h3 className="title-story">좡에게 메일쓰기</h3>
                <form>
                    <section className="contents create">
                        <input name="title" type="text"></input>
                        <textarea name="message" type="textarea"></textarea>
                    </section>
                    <section className="buttons-item create">
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
export default CreateMails;