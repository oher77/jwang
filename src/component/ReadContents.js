import React, { Component } from 'react';

class ReadContents extends Component {
    shouldComponentUpdate(newProps) {
        if(this.props.data === newProps.data) {
            return false;
        }return true;
    }

    render() {
        var data = this.props.data;
        console.log('===>ReadContents Render');
        return (
            <div>
                <div className="read-contents story-bg">
                    <section className="contents">
                        <h3 className="title-story">{data.title}</h3>
                        <p>{data.story}</p>
                    </section>
                    <section className="page">
                        <ul className="button-list">
                            <a href="/PrevContent" onClick={function (e) {
                                e.preventDefault();
                                this.props.PrevContent(Number(data.id) - 1);
                            }.bind(this)}>
                                <li>이전이야기</li>
                            </a>
                            <a href="/NextContents" onClick={function (e) {
                                e.preventDefault();
                                this.props.NextContent(Number(data.id) + 1);
                            }.bind(this)}>
                                <li>다음 이야기</li></a>
                        </ul>
                    </section>
                </div>
                <section className="control">
                    <ul className="button-list">
                        <a href="/"><li>삭제하기</li></a>
                        <a href="/" onClick={function(e){
                            e.preventDefault();
                            this.props.onChangeMode('update-story');
                        }.bind(this)}><li>수정하기</li></a>
                        <a href="/" onClick={function (e) {
                            e.preventDefault();
                            this.props.onChangeMode('create-story');
                        }.bind(this)}><li>이야기 쓰기</li></a>
                    </ul>
                </section>
            </div>

        );
    }
}
export default ReadContents;