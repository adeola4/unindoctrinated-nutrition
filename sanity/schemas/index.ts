export * from './healthTopic'
export * from './article'
export * from './author'
export * from './tag'
export * from './series'
export * from './product'
export * from './subscriber'
export * from './legalConfig'
export * from './blockContent'

import { healthTopic } from './healthTopic'
import { article } from './article'
import { author } from './author'
import { tag } from './tag'
import { series } from './series'
import { product } from './product'
import { subscriber } from './subscriber'
import { legalConfig } from './legalConfig'
import { tocItem, callout, codeBlock, tableBlock, figureBlock, blockquoteBlock } from './blockContent'

export const schemaTypes = [
  healthTopic,
  article,
  author,
  tag,
  series,
  product,
  subscriber,
  legalConfig,
  tocItem,
  callout,
  codeBlock,
  tableBlock,
  figureBlock,
  blockquoteBlock,
]