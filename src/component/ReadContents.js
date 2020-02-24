import React, { Component } from 'react';

class ReadContents extends Component {
    render() {
        return (
            <div className="read-contents">
                <section className="contents">
                    <h3 className="title-story">물의 괴물의 습격</h3>
                    <p>
                        숲 속에 있는 고양이 마을. 그곳에는 고양기 다섯 가족이 살고 있어요.<br />
                        그런데 그곳에 물괴물이 공격해 오는데...
              숲 속에 있는 고양이 마을. 그곳에는 고양기 다섯 가족이 살고 있어요.<br />
                        그런데 그곳에 물괴물이 공격해 오는데...
              숲 속에 있는 고양이 마을. 그곳에는 고양기 다섯 가족이 살고 있어요.<br />
                        그런데 그곳에 물괴물이 공격해 오는데...

                </p>
                </section>
                <section className="button-list page">
                    <ul>
                        <a href="/"><li>이전이야기</li></a>
                        <a href="/"><li>다음 이야기</li></a>
                    </ul>
                </section>
            </div>

        );
    }
}
export default ReadContents;