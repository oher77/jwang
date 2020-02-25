import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div className="welcome-contents welcome-bg">
                <section className="contents">
                    <h3 className="title-welcome">{this.props.title}</h3>
                    <p>{this.props.desc} </p>
                </section>
                {/* <section className="button-list page">
                    <ul>
                        <a href="/"><li>이전이야기</li></a>
                        <a href="/"><li>다음 이야기</li></a>
                    </ul>
                </section> */}
            </div>

        );
    }
}
export default Welcome;