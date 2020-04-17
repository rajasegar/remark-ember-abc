const toVfile = require('to-vfile')
const unified = require('unified')
const parser = require('remark-parse')
const stringify = require('remark-stringify')
const transform = require('.');

unified()
    .use(parser)
    .use(stringify)
    .use(transform, { include: 'hbs' })
    .process(toVfile.readSync('./example.md'))
    .then(file => {
      toVfile.writeSync(file);
    })
