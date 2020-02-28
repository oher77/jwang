import React, { Component } from 'react';

class TOCStory extends Component {
    shouldComponentUpdate(newProps) {
        if(newProps.data === this.props.data) {
            return false
        }return true
    }
    render() {
        console.log('===>TOCStory Rendered')
        var lists = [];
        var _data = this.props.data;
        var i = 0;
        while(i < _data.length){
            lists.push(
            <li key={_data[i].id}>
                <a id={_data[i].id} href={"/ReadContents" + _data[i].title}
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChagePage(e.target.id);
                    }.bind(this)}>
                    {_data[i].title}
                </a>
            </li>
            );
            i = i+1;
        }
        return (
            <section className="toc-story">
                <h2>나의 이야기</h2>
                <ul className="toc-stoty">
                    {lists}
                </ul>
            </section>
        );
    }
}
export default TOCStory;