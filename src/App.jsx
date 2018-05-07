import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import { Upload, Icon, message } from 'antd';
const Dragger = Upload.Dragger;

import path from 'path'

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

        sendAsBinary: true,

        method: 'PUT',

        chunked: true,

        attachInfoToQuery: false,

        // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
        resize: false
    })

    uploader.on( 'fileQueued', file => {
      // console.log('file', file);
      this.setState({
        fileList: this.state.fileList.concat(file)
      })
      console.log('uploader', uploader);
      const source = file.getSource()
      const blob = source.getSource()
      // console.log('source', source);
      console.log('blob', blob);

      var guid = new Date().getTime() + 'aaaa'
      // var guid = new Date().getTime() + (getAccount().username || 'aaaa')
      const s_file_size = 5 << 20

      function sliceParam(index) {
        return {
          sguid: guid + index,
          s_file_size,
          s_file_name: file.name + index,
          s_file_hash: parseInt( Math.random() * 65535 ).toString()
        }
      }

      const chunks = Math.ceil(file.size / s_file_size)

      const slice = []
      for (var i = 0; i < chunks; i++) {
        slice.push(sliceParam(i))
      }

      var param = {
        guid,
        slice,
      }

      fetch('http://139.217.206.43:8080/v2/data/getFileUploadURL', {
        method: 'post',
        body: JSON.stringify(param),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(res => {
        return res.json()
      }).then(res => {
        console.log('res', res);
        if (res.result == 200) {
          this.url = res.url
        }
      })

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

    uploader.on( 'uploadBeforeSend', (obj, data, headers) => {
      console.log('obj, data, headers', obj, data, headers);
      var chunk = obj.chunk + 1
      console.log('chunk', chunk);
      // console.log('this.url', this.url);
      if (!this.url[chunk]) {
        chunk -= 1
      }
      console.log('this.url[chunk].surl', this.url[chunk].surl);
      this.uploader.options.server = this.url[chunk].surl
      headers['Access-Control-Allow-Origin'] = '*'
    })

    this.uploader = uploader
  }

  startUpload() {
    // const myURL = new URL(this.url[0].surl)
    // const { origin, pathname } = myURL
    // this.uploader.options.server = origin + pathname
    this.uploader.options.server = this.url[0].surl

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
