# Vanilla JavaScript TreeView
A stupid, simple tree view writtin with vanilla JS. I needed a lightweight control that just displayed data in a tree form and out popped this. I wrote a [post on my blog](http://justinchmura.com/2014/07/03/javascript-tree-view/) that goes into more depth.
## Dependencies
None. I built this using only plain JavaScript so there's no external dependencies. Other than the CSS required for styling.
## Example Usage
### HTML
```html
<div id="tree"></div>
```
### JavaScript
```js
var tree = new TreeView([
    { name: 'Item 1', children: [] },
    { name: 'Item 2', children: [
            { name: 'Sub Item 1', children: [] },
            { name: 'Sub Item 2', children: [] }
        ]
    }
], 'tree');
```
## Options
| Name | Type | Description |
| ---- | ---- | ----------- |
| `data` | `array` | The array of items to populate the tree with. Each item is required to have a `name` and a `children` array. |
| `id` | `string` | ID of the DOM element to render tree in. |
## Events
| Name  | Description |
| ----- | ----------- |
| `expand` | Fires when a leaf is expanded. |
| `collapse` | Fires when a leaf is collapsed. |
| `select` | Fires when a outermost leaf is selected. Contains data item of the leaf selected. |
### Usage
```js
tree.on('select', function (e) {
    console.log(JSON.stringify(e));
});
```
## License
This plugin is available under [the MIT license](http://mths.be/mit).
