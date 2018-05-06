import React, { Component } from 'react';
import { hot } from 'react-hot-loader'

import 'webuploader/webuploader.css'
import WebUploader from 'webuploader'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
    };

    this.startUpload = this.startUpload.bind(this)
  }

  componentDidMount() {
    // console.log('WebUploader', WebUploader);
    var uploader = WebUploader.create({

        // 文件接收服务端。
        server: 'http://localhost:3000/server/fileupload',

        // 选择文件的按钮。可选。
        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
        pick: '#picker',

        // auto: true,

        chunked: true,

        // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
        resize: false
    })
    console.log('uploader', uploader);

    uploader.on( 'fileQueued', file => {
      console.log('file', file);
      this.setState({
        fileList: this.state.fileList.concat(file)
      })
      console.log('uploader', uploader);
    })

    uploader.on( 'uploadSuccess', file => {
      console.log('uploadSuccess file', file);
      let index = this.state.fileList.findIndex(item => item.id == file.id)
      let newList = this.state.fileList.slice(0)
      newList[index] = file
      this.setState({
        fileList: newList
      });

    });

    uploader.on( 'uploadError', file => {
      console.log('uploadError file', file);
      let index = this.state.fileList.findIndex(item => item.id == file.id)
      let newList = this.state.fileList.slice(0)
      newList[index] = file
      this.setState({
        fileList: newList
      });
    });

    uploader.on( 'uploadComplete', file => {
      this.state.fileList.findIndex(item => item.id == file.id)
        $( '#'+file.id ).find('.progress').fadeOut();
    })

    this.uploader = uploader
  }

  startUpload() {
    this.uploader.upload()
  }

  render() {
    var list = this.state.fileList.map(file => {
      return (
        <li key={file.id} id={file.id}>
          name: {file.name}
          <p className='state'>{file.statusText || '准备上传'}</p>
          <div className='progress'>进度条</div>
        </li>
      )
    })
    return (
      <div>
        <div id="uploader" className="wu-example">
            {/* <!--用来存放文件信息--> */}
            <div id="thelist" className="uploader-list"></div>
            <div className="btns">
                <div id="picker">选择文件</div>
                <button id="ctlBtn" onClick={this.startUpload} className="btn btn-default">开始上传</button>
            </div>
        </div>
        <ul>
          {list}
        </ul>
        {/* <h1>React App</h1>
        <div>react-hot-loader</div> */}
      </div>
    );
  }

}

export default hot(module)(App);
