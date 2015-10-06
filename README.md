# clay-paragraph
A simple paragraph component

## Install

```
npm install --save @nymdev/clay-paragraph
```

Adds a paragraph component.

## Usage

Once you install it, it will be automatically recognized by `amphora`. It has one editable field, `text`. When saving, all text is sent through the [`typogr`](https://www.npmjs.com/package/typogr) library, which adds smart quotes and other typographic niceties.

To include it, create an instance of it and add a reference to a component list (for example, in an `article` component's body or main content area).

```yaml
components:
  article:
    instances:
      first-article:
        content:
          -
            _ref: /components/clay-paragraph/instances/0
            -
              _ref: /components/clay-paragraph/instances/1
  clay-paragraph:
    instances:
      -
        text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      -
        text: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
```
