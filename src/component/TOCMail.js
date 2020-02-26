import React, { Component } from 'react';

class TOCMail extends Component {
    render() {
        var lists = [];
        var i = 0;
        var _data = this.props.data;
        while (i < _data.length) {
            lists.push(<li key={_data[i].id}><a href="/ReadMail">{_data[i].title}</a></li>)
            i = i + 1
        }
        return (
            <section className="toc-mail">
                <h2>편지함</h2>

                <a className="bt-write-mail" href="/CreateMail"> 좡에게 메일쓰기</a>

                <ul>
                    {lists}
                </ul>
            </section>
        );
    }
}
export default TOCMail;