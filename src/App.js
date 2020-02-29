import React, { Component } from 'react';
import './css/App.css';
import Subject from './component/Subject';
import TOCStory from './component/TOCStory';
import TOCMail from './component/TOCMail';
import ReadContents from './component/ReadContents';
import ReadMails from './component/ReadMails';
import Welcome from './component/Welcome';
import CreateContents from './component/CreateContents';
import CreateMails from './component/CreateMails';
import UpdateContents from './component/UpdateContents';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.max_mail_id = 3;
    this.state = {
      mode: 'read',
      selected_content_id: 3,
      selected_mail_id: 2,
      contents: [
        { id: 1, title: '물의 괴물의 습격', story: '숲 속에 있는 고양이 마을. 그곳에는 고양기 다섯 가족이 살고 있어요 그런데 그곳에 물괴물이 공격해 오는데...' },
        { id: 2, title: '티글리와 기글리', story: '티글리와 기글리는 남매예요. 둘은 매일매일 재미있는 사건을 꾸며서 부모님을 놀라게 하죠. 오늘은 어떤 사건을 만들어서 부모님이 한숨을 쉬게 만들까요. 그래도 키클리 기글리의 부모님은 사랑스런 남매를 크게 꾸짖지 않으신답니다. 그저 엉덩이 100대와 윗몸일으키기 100번 앉았다 일어서기 100번 오리 걸음 100번 팔 굽혀 펴기 100번과 같은 사랑의 체벌만이 있을 뿐이예요.' },
        { id: 3, title: '너의 모자에 뿔이 있구나', story: '내 모자가 어디 갔지? 사슴 아저씨가 모자를 잃어버렸어요. 낮잠을 자고 일어났더니 모지가 없어진 거예요. 모든 친구들에게 물어봐도 모자는 찾을 수가 없었어요. 그런데... 누가 모자를 훔쳐간 것 같네요. 사슴은 피의 복수를 하는데...' },
      ],
      mails: [
        { id: 1, title: '안녕? 나 영서야', message: '숲 속에 있는 고양이 마을. 그곳에는 고양기 다섯 가족이 살고 있어요 그런데 그곳에 물괴물이 공격해 오는데...' },
        { id: 2, title: '마녀에 관심이 많니?', message: '티글리와 기글리는 남매예요. 둘은 매일매일 재미있는 사건을 꾸며서 부모님을 놀라게 하죠. 오늘은 어떤 사건을 만들어서 부모님이 한숨을 쉬게 만들까요. 그래도 키클리 기글리의 부모님은 사랑스런 남매의 엉덩이 100대와 윗몸일으키기 100번 앉았다 일어서기 100번 오리 걸음 100번 팔 굽혀 펴기 100번을 시켰답니다' },
        { id: 3, title: '엄마에게서 온 편지 입니다.', message: '내 모자가 어디 갔지? 사슴 아저씨가 모자를 잃어버렸어요. 낮잠을 자고 일어났더니 모지가 없어진 거예요. 모든 친구들에게 물어봐도 모자는 찾을 수가 없었어요. 그런데... 누가 모자를 훔쳐간 것 같네요. 사슴은 피의 복수를 하는데...' },
      ],
      subject: { title: '좡\'s' },
      welcome: { title: '좡\'s 좡좡좡', desc: '안녕? 나는 좡이야. 나는 초록색을 좋아해. 그리고 하던 일을 멈추고 다른 일을 하는 것을 좋아해. 왜냐면 나는 내가 시작한 일이 마무리 되는 것이 너무 슬퍼. 내가 하던 일과 영 영 이별하는 느낌이야... 그래서 엄마한테 매일 혼나지. "또 중간에 딴 짓 한다!!!!" 샤워를 하고 나와서 옷을 입지 않고 티비를 본다던가... 바지를 한 쪽 가랭이만 입고 책을 읽는 다던가... 나는 미련이 많고 원하는 걸 잘 이야기 하지 못 해. 그래도 나는 내가 좋은 사람이라는 걸 알아. 그래서 내가 좋아. 그리고 나는 커서 멋진 사람이 될꺼야. 어떤 일을 아주 미루다 마감에 맞춰 그 미뤘던 에너지를 폭발 시킬 수 있는 그런 직업을 찾을 거야. 그런데 그런 일은 아마... 굉장히...자... 아니.. 슬... 음... 아니 아니야.' }
    }
  }
  getReadContent() {
    var i = 0;
    var _contents = this.state.contents;
    var _selected_content_id = this.state.selected_content_id;
    while (i < _contents.length) {
      var _data = this.state.contents[i];
      if (_data.id === _selected_content_id) {
        return _data;
        break;
      }
      i= i + 1;
    }
  }

  getContent() {
    var _mode = this.state.mode;
    var _selected_mail_id = this.state.selected_mail_id;
    var _selected_content_id = this.state.selected_content_id;
    var _article = null;
    var _mails = this.state.mails;
    if (_mode === 'welcome') {
      var _title = this.state.welcome.title;
      var _desc = this.state.welcome.desc;
      _article = <Welcome title={_title} desc={_desc}></Welcome>
    } else if (_mode === 'read') {
      var _selected_data = this.getReadContent();
      _article = <ReadContents data={_selected_data}
        PrevContent={function (id) {
          if (id > 0) {
            this.setState({ selected_content_id: id });
          }
        }.bind(this)}
        NextContent={function (id) {
          if (id < Number(this.max_content_id) + 1) {
            this.setState({ selected_content_id: id })
          }
        }.bind(this)}

        onChangeMode={function (m) {
          this.setState({ mode: m });
        }.bind(this)}

        onDelete = {function(){
          var _contents = Array.from(this.state.contents);
          var i = 0;
          while(i < _contents.length) {
            if(_contents[i].id === this.state.selected_content_id) {
              _contents.splice(i, 1) ;
              this.setState({contents: _contents, mode: 'welcome'});
            }i = i + 1;
          }
        }.bind(this)}
      ></ReadContents>
    } else if (_mode === 'read-mail') {
      var n = 0;
      while (n < _mails.length) {
        var mail_data = this.state.mails[n];
        if (mail_data.id === _selected_mail_id) {
          _article = <ReadMails data={mail_data}></ReadMails>
          break;
        } n = n + 1;
      }
    } else if (_mode === 'create-story') {
      _article = <CreateContents
        onSubmit={
          function (_title, _story) {
            this.max_content_id = this.max_content_id + 1;
            var _contents = Array.from(this.state.contents);
            _contents.push({ id: this.max_content_id, title: _title, story: _story });
            this.setState({ contents: _contents });
            console.log(this.max_content_id);
            this.setState({ mode: 'read' });
            this.setState({ selected_content_id: this.max_content_id })
          }.bind(this)}
        onCancel={
          function () {
            this.setState({ mode: 'read' });
          }.bind(this)
        }
      ></CreateContents>
    } else if (_mode === 'create-mail') {
      _article =
        <CreateMails
          onSubmit={function (_title, _message) {
            this.max_mail_id = this.max_mail_id + 1;
            _mails = Array.from(this.state.mails);
            _mails.push({ id: this.max_mail_id, title: _title, message: _message });
            this.setState({ mails: _mails, mode: 'read-mail', selected_mail_id: this.max_mail_id });
          }.bind(this)}
          onCancel={function () {
            this.setState({ mode: 'read-mail' });
          }.bind(this)}
        >
        </CreateMails>
    } else if (_mode === 'update-story') {
      var _update_data = this.getReadContent();
      _article =
        <UpdateContents data={_update_data}
          onSubmit={function (_id, _title, _story) {
            var _contents = Array.from(this.state.contents);
            var i = 0;
            while(i < _contents.length ) {
              if(_contents[i].id === _update_data.id ){
                _contents[i] = {id: Number(_id), title: _title, story: _story};
                console.log(_contents[i]);
                this.setState({ contents: _contents });
                this.setState({ mode: 'read' });
                break;
              }
              i = i + 1;
            }
          }.bind(this)}
        >

        </UpdateContents>
    }
    return _article;
  }

  render() {
    return (
      <div className="wrap">
        <navigator>
          <Subject title={this.state.subject.title}
            onChangeMode={function () {
              this.setState({ mode: 'welcome' });
            }.bind(this)}></Subject>
          <TOCStory data={this.state.contents}
            onChagePage={function (id) {
              this.setState({ mode: 'read', selected_content_id: Number(id) });
            }.bind(this)}>
          </TOCStory>
          <TOCMail data={this.state.mails}
            onChangeMode={function () {
              this.setState({ mode: 'create-mail' });
            }.bind(this)}
            onChangePage={function (id) {
              this.setState({ mode: 'read-mail', selected_mail_id: Number(id) });
            }.bind(this)}
          ></TOCMail>
        </navigator>
        <main>
          {this.getContent()}
        </main>
      </div>
    );
  }
}

export default App;
