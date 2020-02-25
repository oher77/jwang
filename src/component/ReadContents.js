import React, { Component } from 'react';

class ReadContents extends Component {
    render() {
        var data= this.props.data;
        return (
            <div className="read-contents story-bg">
                <section className="contents">
                    <h3 className="title-story">{data.title}</h3>
                    <p>{data.story}</p>
                </section>
                <section className="page">
                    <ul className="button-list">
                        <a href="/"><li>이전이야기</li></a>
                        <a href="/"><li>다음 이야기</li></a>
                    </ul>
                </section>
            </div>

        );
    }
}
export default ReadContents;