import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ListItem from './ListItem';

export class App extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
    this.state = { 
      text: '',
      counter: 1,
      showLeftBar: true,
    };
    this.handleChange = this.handleChange.bind(this);

    
  }

  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'code-block'],
      ['clean']
    ],
  };

  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
  ];

  handleChange(value:string) {
    this.setState({ text: value })
  }

  makeList() {
    let items = [];
    for(var i = 0; i < 5; i++) {
      items.push(<ListItem 
        key={i} 
        onClick={() => this.setState({ text: 'mleko' + this.state.counter, counter: this.state.counter + 1 })}>
        </ListItem>);
    }

    return(items);
  }

  render() {
    return (
      <div className="MainContainer" onClick={() => {}}>
        <div className="LeftBar">
          { this.makeList() }
        </div>
        <div className="RightBar">
        <ReactQuill 
          className="Editor"
          theme="snow" 
          value={this.state.text} 
          onChange={this.handleChange} 
          modules={this.modules}
          formats={this.formats}
        />
        </div>
      </div>
    );
  }
}

export default App;
