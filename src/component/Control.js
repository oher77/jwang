import React, { Component } from 'react';

class Control extends Component {
    render() {
        return (
            <section className="control">
                <ul className="button-list">
                    <a href="/"><li>삭제하기</li></a>
                    <a href="/"><li>수정하기</li></a>
                    <a href="/" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangeMode();
                    }.bind(this)}><li>이야기 쓰기</li></a>
                </ul>
            </section>
        );
    }
}
export default Control;