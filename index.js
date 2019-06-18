'use strict'
const got = require('got')

module.exports = async (isAll) => {
  const response = await got('https://v2.jinrishici.com/one.json')
  const body = JSON.parse(response.body)
  if (isAll) {
    return body.data.origin.content
  } else {
    return body.data.content
  }
}