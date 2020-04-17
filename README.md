# remark-ember-abc

A remark plugin to transform the Handlebars codeblocks to Angle brackets syntax.

## Usage

Install `remark` globally and use it:

```
npm install -g remark
remark readme.md --use ember-abc 
```

or using `npx`

```
npx remark readme.md --use ember-abc 
```

## Info
The transformation is based on the [ember-angle-brackets-codemod](https://github.com/ember-codemods/ember-angle-brackets-codemod)
and tweaked specifically for this plugin. You can take a look at the `src` folder `transform.js`.
