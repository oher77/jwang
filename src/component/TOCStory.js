import React, { Component } from 'react';

class TOCStory extends Component {
    render() {
        return (
            <section className="toc-story">
                <h2>나의 이야기</h2>
                <ul className="toc-stoty">
                    <a href="/"><li>물의 괴물의 습격</li></a>
                    <a href="/"><li>원숭이 마을의 치치</li></a>
                    <a href="/"><li>미치오의 하얀 지팡이</li></a>
                </ul>
            </section>
        );
    }
}
export default TOCStory;