##  react-crop-component

[![npm version](https://badge.fury.io/js/react-crop-component.svg)](https://badge.fury.io/js/react-crop-component)
![npm download](https://img.shields.io/npm/dt/react-crop-component.svg)

# guide

- add your index html portal element

```js
<div id='crop-portal'></div>
```

- use as below

```js
//ComponentToBeCrop.js
const ComponentToBeCrop = () => (
  <div
    style={{
      width: 250,
      height: 250,
      backgroundColor: '#ff44d9',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    Crop me if you can
  </div>
)
```

```js
// App.js
import React from 'react'
import ComponentToBeCrop from './ComponentToBeCrop'
import CropComponent from 'react-crop-component'

const MyApp = ()=> (
<>
  <ComponentToBeCrop />
  <CropComponent
    portalId='crop-portal'
    canvasConfigs={{
      width: 250,
      height: 250,
      innerWidth: 250,
      innerHeight: 250,
    }}
    Component={ComponentToBeCrop}
  />
</>)

export const MyApp
```

# prop `type` defaultValue

#### buttonGroupStyle `object`

```js
{
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'space-between',
}
```

#### modalStyle `object`

```js
{
  position: 'fixed',
  left: 0,
  top: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  bottom: 0,
  right: 0,
  background: 'rgba(49, 73, 177, 0.5)',
  zIndex: 9999,
}
```

#### portalId `string` canvas-portal

#### Component `ReactElement` null

#### canvasConfigs `object` null

#### imgStyle `object` null

#### buttonStyle `object`

```js
{
  padding: 8,
  margin: 8,
  background: '#273CAF',
  color: '#fff',
  border: 'none',
  outline: 'none',
}
```

#### filename `string` 'download.png'

#### downloadStyle `object`

```js
{
   padding: 8,
  margin: 8,
  background: '#36C2CE',
  color: '#fff',
}
```

#### DownloadButton `function`

```js
({ canvasElement, #### onClick }) => (
  <a
    onClick={onClick}
    href={canvasElement && canvasElement.toDataURL()}
    download={filename}
    style={downloadStyle}
  >
    DOWNLOAD
  </a>
)
```

#### CancelButton `function`

```js
;({ onClick }) => (
  <button style={buttonStyle} onClick={onClick}>
    CANCEL
  </button>
)
```

#### CropButton `function`

```js
;({ onClick }) => (
  <button style={buttonStyle} onClick={onClick}>
    Crop Component
  </button>
)
```

[DEMO](https://codesandbox.io/s/react-component2canvas-892h8)

# Contributors

- [Yusuf Özlü](https://github.com/ozluy)

Dependency [html2canvas](https://github.com/niklasvh/html2canvas)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Available Scripts

In the project directory, you can run:

### `npm start`

development env

### `npm run build`

production script

### `npm run npmbuild`

creates node_module output file
