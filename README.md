# react-floating-whatsapp-button

> React component to add floating whatsapp chat button with window and an optional message to the app.

[![NPM](https://img.shields.io/npm/v/react-floating-whatsapp-button.svg)](https://www.npmjs.com/package/react-floating-whatsapp-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-floating-whatsapp-button
```

## Usage

```tsx
import React, { Component } from 'react'

import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import 'react-floating-whatsapp-button/dist/index.css'

class Example extends Component {
  render() {
    return <FloatingWhatsApp />
  }
}
```
## Example
[https://arc9693.github.io/react-floating-whatsapp-button/](https://arc9693.github.io/react-floating-whatsapp-button/)

## Props(optional)
  Name | Description | Type | Default
  ---|---|---|---
  phone| Phone number | string | '1231231231'
  message| Sender's default message input | string | ''
  size| Button size | string | '70px'
  backgroundColor| Button background color |string | '#25D366'
  position| left/right |string | 'right'
  popupMessage| |string | 'Hello, how can we help you?'
  showPopup| |boolean | false
  showOnIE| |boolean | true
  autoOpenTimeout| in ms |number | 2000
  headerColor| |string | '#128C7E'
  headerTitle| |string | 'WhatsApp Chat'
  zIndex| z-index of the component| number | 0
  buttonImage| Base64 encoded button image | string | Whatsapp icon's image

## License

MIT © [arc9693](https://github.com/arc9693)
