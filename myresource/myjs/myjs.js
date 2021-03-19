// 我自己添加的：Qmsg酱
var title2 = "msg=【奇遇云】有新评论啦~！\n"
var SCKEY_Qmsg = "https://qmsg.zendee.cn/send/f1eb78763fbede50731cb81a5c1776af"
var ValineButton = document.getElementsByClassName("vsubmit vbtn")[0];
function send_valine_Qmsg () {
  var pagename = document.title;
  var wz = pagename.indexOf('|');
  var res = pagename.substring(0, wz);
  var pageurl = document.URL;
  var ptime = new Date();
  var vnick = document.getElementsByClassName("vnick vinput")[0].value;
  var vmail = document.getElementsByClassName("vmail vinput")[0].value;
  var vlink = document.getElementsByClassName("vlink vinput")[0].value;
  var veditor = document.getElementsByClassName("veditor vinput")[0].value;
  var data = "昵称：" + vnick + "\n邮箱：" + vmail + "\n网站地址：" + vlink + "\n当前页面：" + pagename + "\n评论内容：" + veditor + "\n跳转链接：" + pageurl + "\n评论时间：" + ptime.toLocaleString();
  var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
  httpRequest.open('POST', SCKEY_Qmsg, true); //第二步：打开连接
  httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
  httpRequest.send(title2 + data);//发送请求 
};

document.body.addEventListener('click', function (e) {
  if (e.target.className.indexOf('vsubmit') === -1) {
    return;
  }
  send_valine_Qmsg();
})


// // 禁止右键
// function Click () {
//   alert('复制的话直接选中并Ctrl+C哦');
//   window.event.returnValue = false;
// }
// document.oncontextmenu = Click;
// // 禁止 F12 右键 ctrl+u 
// window.onload = function () {
//   //屏蔽键盘事件
//   document.onkeydown = function () {
//     var e = window.event || arguments[0];
//     //F12
//     if (e.keyCode == 123) {
//       return false;
//       //Ctrl+Shift+I
//     } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
//       return false;
//       //Shift+F10
//     } else if ((e.shiftKey) && (e.keyCode == 121)) {
//       return false;
//       //Ctrl+U
//     } else if ((e.ctrlKey) && (e.keyCode == 85)) {
//       return false;
//       //Ctrl+S
//     } else if ((e.ctrlKey == true) && (e.keyCode == 83)) {
//       return false;
//       //F5
//     } else if (e.keyCode == 116) {
//       e.keyCode = 0;
//       e.cancelBubble = true;
//       return false;
//     }
//   };
//   //屏蔽鼠标右键
//   // document.oncontextmenu = function () {
//   //   return false;
//   // }
// }



// /* 手机客户端导航栏默认隐藏 */
// var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
// var menus_item_child = mobile_sidebar_menus.getElementsByClassName("menus_item_child");
// var menus_expand = mobile_sidebar_menus.getElementsByClassName("expand");
// for (var i = 0; i < menus_item_child.length; i++) {
//   menus_item_child[i].style.display = "none";
//   menus_expand[i].className += " closed";
// }