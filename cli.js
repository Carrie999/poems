#!/usr/bin/env node
'use strict'
const meow = require('meow')
const tangPoems = require('.')

const cli = meow(`
  Usage
    $ poem [-a]

  Examples
    $ poem 
    $ poem -a
`);

let isALL = false

if (cli.flags.a || cli.flags.all) {
  isALL = true
}

(async () => {
  const poem = await tangPoems(isALL)
  console.log(poem)
})();