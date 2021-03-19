const u1 = 'c4ca4238a0b923820dcc509a6f75849b'
const p1 = 'c4ca4238a0b923820dcc509a6f75849b'
const us = [u1,]
const ps = [p1,]

function myFunction () {
  if (us.indexOf(md5(document.getElementById("username").value)) != '-1') {
  }
  if (us.indexOf(md5(document.getElementById("username").value)) != '-1', ps[us.indexOf(md5(document.getElementById("username").value))] == md5(document.getElementById("password").value)) {
    Cookies.set('username', BASE64.encode(document.getElementById("username").value), { expires: 3 })
    Cookies.set('password', BASE64.encode(document.getElementById("password").value), { expires: 3 })
  }
  else {
    if (Cookies.get('username') != null) {
      Cookies.remove('username')
      if (Cookies.get('password') != null) {
        Cookies.remove('password')
      }
    }
    $("#tishi").click();
  }
}

function login () {
  if (Cookies.get('username') != null) {
    if (Cookies.get('password') != null) {
      if (us.indexOf(md5(BASE64.decode(Cookies.get('username')))) != '-1') {
      }
      if (us.indexOf(md5(BASE64.decode(Cookies.get('username')))) != '-1', ps[us.indexOf(md5(BASE64.decode(Cookies.get('username'))))] == md5(BASE64.decode(Cookies.get('password')))) {
        console.log('登录成功')
        window.location.href = "/master/user"
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

  setTimeout(login, 3000);
}
