# remark-ember-abc

A remark plugin to transform the Handlebars codeblocks to Angle brackets syntax.

## Usage

Install `remark-cli` and this plugin globally and use it:

```
npm install -g remark-cli remark-ember-abc
remark readme.md --use ember-abc 
```
This will print the changed content in the console.

If you want to overwrite then use the output option `-o`

```
remark readme.md --use ember-abc  -o
```

For more options using the `remark-cli` visit the official [guides](https://github.com/remarkjs/remark/tree/master/packages/remark-cli)

## Info
The transformation is based on the [ember-angle-brackets-codemod](https://github.com/ember-codemods/ember-angle-brackets-codemod)
and tweaked specifically for this plugin. You can take a look at the `src` folder `transform.js`.
