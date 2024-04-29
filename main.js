import Showdown from 'https://ga.jspm.io/npm:showdown@2.1.0/dist/showdown.js'
import { registerCustomElement } from 'https://renoirb.com/esm-modules/element-utils.mjs'
import { default as MarkdownContent, ContextRequest_MarkdownContent } from 'https://renoirb.com/esm-modules/markdown-content.mjs'

const converter = new Showdown.Converter()
converter.setOption('openLinksInNewWindow', true)

/**
 * ContextRequest to update Markdown source
 * - https://github.com/traceypooh/blogtini/blob/e8ef1e36/js/context-markup.js
 * - https://github.com/traceypooh/blogtini/pull/7
 * - https://github.com/traceypooh/blogtini/pull/7/files#r1343474668
 */
const handleContextRequest_MarkdownContent = (event) => {
  console.info('handleContextRequest_MarkdownContent event', event)
  if (event.context === ContextRequest_MarkdownContent) {
    event.stopPropagation();
    const innerHTML = event?.target?.innerHTML ?? ''
    console.info('handleContextRequest_MarkdownContent', innerHTML)
    if (innerHTML) {
      const html = converter.makeHtml(innerHTML)
      event.callback({ html });
    }
  }
}

window.document.addEventListener('context-request', (event) => {
  handleContextRequest_MarkdownContent(event);
})

registerCustomElement(window, 'gv-markdown-content', MarkdownContent)

