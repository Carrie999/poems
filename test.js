const m = require('.')

const t = async t => {
  const res = await m()
  if (res.length > 0) {
  	console.log('测试通过')
  } else {
 	console.error('测试失败')
  }
}

t()

