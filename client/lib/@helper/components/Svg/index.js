// SVG becomes automatically optimized by https://www.npmjs.com/package/svgo
// To set only  specific optimization options check https://www.npmjs.com/package/babel-plugin-inline-svg

import svgs from './svgs'
import log from '@helper/logger'

export default ({name, ...otherProps}) => {
  if (!svgs[name]) {
    log.error(['the SVG with the name', name, 'was not found'])
    return null
  }

  return (
    <span {...otherProps} dangerouslySetInnerHTML={{
      __html: svgs[name]
    }} />
  )
}
