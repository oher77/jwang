import React from 'react';
import './css/App.css';

function App() {
  return (
    <div className="wrap">
      <navigator>
        <section className="welcome">
          <h1>좡's</h1>
        </section>
        <section className="toc-story">
          <h2>나의 이야기</h2>
          <ul className="toc-stoty">
            <a href="/"><li>물의 괴물의 습격</li></a>
            <a href="/"><li>원숭이 마을의 치치</li></a>
            <a href="/"><li>미치오의 하얀 지팡이</li></a>
          </ul>
        </section>
        <section className="toc-mail">
          <h2>편지함</h2>
          <ul>
            <li>안녕? 나 영서야</li>
            <li>마녀에 관심이 많니?</li>
            <li>엄마에게서 온 편지 입니다.</li>
          </ul>
        </section>
      </navigator>
      <main>
        <div className="contents-bg-circle">
          <div className="contents-bg-square">
            <section className="contents">
              <h3 className="title-story">물의 괴물의 습격</h3>
              <p>
                숲 속에 있는 고양이 마을. 그곳에는 고양기 다섯 가족이 살고 있어요.<br/>
                그런데 그곳에 물괴물이 공격해 오는데...

              </p>
            </section>
            <section className="button-list">
                <ul>
                  <a href="/"><li>삭제하기</li></a>
                  <a href="/"><li>수정하기</li></a>
                  <a href="/"><li>이야기 쓰기</li></a>
                </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
