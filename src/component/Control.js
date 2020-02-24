import React, { Component } from 'react';

class Control extends Component {
    constructor(props){
        super(props);
        this.state = {
            mode: 'read',
            contents: [
                {id: 1, title: '물의 괴물의 습격', story: '숲 속에 있는 고양이 마을. 그곳에는 고양기 다섯 가족이 살고 있어요 그런데 그곳에 물괴물이 공격해 오는데...'},
                {id: 2, title: '티글리와 기글리', story: '티글리와 기글리는 남매예요. 둘은 매일매일 재미있는 사건을 꾸며서 부모님을 놀라게 하죠. 오늘은 어떤 사건을 만들어서 부모님이 한숨을 쉬게 만들까요. 그래도 키클리 기글리의 부모님은 사랑스런 남매의 엉덩이 100대와 윗몸일으키기 100번 앉았다 일어서기 100번 오리 걸음 100번 팔 굽혀 펴기 100번을 시켰답니다'},
                {id: 3, title: '너의 모자에 뿔이 있구나', story: '내 모자가 어디 갔지? 사슴 아저씨가 모자를 잃어버렸어요. 낮잠을 자고 일어났더니 모지가 없어진 거예요. 모든 친구들에게 물어봐도 모자는 찾을 수가 없었어요. 그런데... 누가 모자를 훔쳐간 것 같네요. 사슴은 피의 복수를 하는데...'},
            ]
        }
    }
    render() {
        return (
            <section className="button-list control">
                <ul>
                    <a href="/"><li>삭제하기</li></a>
                    <a href="/"><li>수정하기</li></a>
                    <a href="/"><li>이야기 쓰기</li></a>
                </ul>
            </section>
        );
    }
}
export default Control;