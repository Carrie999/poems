const util = require('util')
var request = require('request');

var getPromise = util.promisify(request.get);

let res = getPromise('https://v2.jinrishici.com/one.json').then(({body})=>{
  body = JSON.parse(body)
  console.log(body.data.content)
}).catch((err)=>{
  console.error(err)
})

