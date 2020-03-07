//@ts-nocheck
import { h } from 'preact'
import { setPragma } from 'goober'
import { html } from 'htm/preact'
import register from './preact-custom-element'
import App from './containers/app'

setPragma(h)

// const redText = css`
//   color: red;

// `

// const RedBackground = styled('span')`
//   color: blue;
// `

// const App = () =>
//   html`
//     <${RedBackground}>Blue<div class=${redText}>There you are</div><//>
//   `

register(App, 'pimello-cms', ['name'])
