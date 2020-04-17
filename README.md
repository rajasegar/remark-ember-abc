# remark-ember-abc

[remark](https://github.com/remarkjs/remark) plugin to transform the code blocks 
in Handlebars syntax to Angle brackets syntax for Ember apps/addon documentation written in Markdown.
It will only transform codeblocks of `hbs` type and leave the rest intact.

## Install

Install `remark-cli` and this plugin globally and use it:

```
npm install -g remark-cli remark-ember-abc
```

## Usage
```
remark readme.md --use ember-abc 
```
This will print the changed content in the console.

If you want to overwrite then use the output option `-o`

```
remark readme.md --use ember-abc  -o
```

To apply the transform to all Markdown files in the folder tree (even in nested sub-directories):

```
remark . --use ember-abc  -o
```

## Example
This will be converted to:
```
One sentence. Two sentences.

One sentence.  Two sentences.

\```hbs
{{#ally-landmark tagName="header"}}
  This is my header content
{{/ally-landmark}}
\```

\```html
<h1>Hello world</h1>
\```

\```js
const hello = "world";
\```
```

to this:

```
One sentence. Two sentences.

One sentence.  Two sentences.

\```hbs
<AllyLandmark @tagName="header">
  This is my header content
</AllyLandmark>
\```

\```html
<h1>Hello world</h1>
\```

\```js
const hello = "world";
\```
```

For more options using the `remark-cli` visit the official [guides](https://github.com/remarkjs/remark/tree/master/packages/remark-cli)

## Info
The transformation is based on the [ember-angle-brackets-codemod](https://github.com/ember-codemods/ember-angle-brackets-codemod)
and tweaked specifically for this plugin. You can take a look at the `src` folder `transform.js`.
