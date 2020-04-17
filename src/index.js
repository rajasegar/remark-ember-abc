const visit = require('unist-util-visit');
const transform = require('./transform');

module.exports = attacher

function attacher({include, exclude, prefix} = {}) {
  return (ast) => visit(ast, 'code', visitor)

  function visitor(node) {
    let {lang} = node

    if (
      !lang ||
      (include && !include.includes(lang)) ||
      (exclude && exclude.includes(lang))
    ) {
      return
    }

    node.value = transform(node.value);
  }
}
