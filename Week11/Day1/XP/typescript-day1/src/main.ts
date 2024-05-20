import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <input id="myInput" value="Hello, world!">
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
