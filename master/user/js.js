const u1 = 'c4ca4238a0b923820dcc509a6f75849b'// 1
const p1 = 'c4ca4238a0b923820dcc509a6f75849b'// 1
const us = [u1,]
const ps = [p1,]

function login () {
  if (Cookies.get('username') != null) {
    if (Cookies.get('password') != null) {
      if (us.indexOf(md5(BASE64.decode(Cookies.get('username')))) != '-1') {
      }
      if (us.indexOf(md5(BASE64.decode(Cookies.get('username')))) != '-1', ps[us.indexOf(md5(BASE64.decode(Cookies.get('username'))))] == md5(BASE64.decode(Cookies.get('password')))) {
        document.getElementById('welcome').innerHTML = BASE64.decode(Cookies.get('username'))
      }
      else {
        if (Cookies.get('username') != null) {
          Cookies.remove('username')
          if (Cookies.get('password') != null) {
            Cookies.remove('password')
          }
        }
      }
    }
  }
  else {
    //这里我还没修改
    window.location.href = "../";
  }
  setTimeout(login, 20000);
}

function logout () {
  Cookies.remove('username')
  Cookies.remove('password')
  // 因为index和com在同一级别，直接返回到mastter-index
  window.location.href = '../'
}

function start () {
  if (Cookies.get('username') != null) {
    if (Cookies.get('password') != null) {
      if (us.indexOf(md5(BASE64.decode(Cookies.get('username')))) != '-1') {
      }
      if (us.indexOf(md5(BASE64.decode(Cookies.get('username')))) != '-1', ps[us.indexOf(md5(BASE64.decode(Cookies.get('username'))))] == md5(BASE64.decode(Cookies.get('password')))) {
        document.getElementById('welcome').innerHTML = BASE64.decode(Cookies.get('username'))
      }
      else {
        if (Cookies.get('username') != null) {
          Cookies.remove('username')
          if (Cookies.get('password') != null) {
            Cookies.remove('password')
          }
        }
      }
    }
  }
  else {
    // 若直接越级跳过密码界面直接返回到我的根目录（../../）
    window.location.href = "../";
  }
}
