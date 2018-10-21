import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './../shared/websocket.service';

@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.css']
})
export class WebsocketComponent implements OnInit {
  constructor(private wsService: WebsocketService) {}
  // 页面初始化就去创建链接池
  ngOnInit() {
    this.wsService
      .createObservableSocket('ws://localhost:8085')
      .subscribe(
        data => console.log(data),
        err => console.log(err),
        () => console.log('妈的，终于结束这场该死的对话了')
      );
  }
  // 主动向服务端推送
  sendMessageToServer() {
    this.wsService.sendMessageByclient('客户端:向后端那龟孙发请求');
  }
}
