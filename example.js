/*
var fs = require('fs')
var retext = require('retext')
var transform = require('.')

var doc = fs.readFileSync('example.md')

retext()
  .use(transform)
  .process(doc, function(err, file) {
    console.log(file.data);
  })

*/

const toVfile = require('to-vfile')
const unified = require('unified')
const parser = require('remark-parse')
const stringify = require('remark-stringify')
const codeblocks = require('remark-code-blocks')
const transform = require('.');

unified()
    .use(parser)
    .use(stringify)
    //.use(codeblocks, { lang: 'hbs' })
    .use(transform, { include: 'hbs' })
    .process(toVfile.readSync('./example.md'))
    .then(file => {
      console.log(file);
      //const code = file.data.codeblocks.join('\n')
      //console.log(code);
      toVfile.writeSync(file);
    })
