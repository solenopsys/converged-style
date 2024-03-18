import { createGenerator } from '@unocss/core'

const generator = createGenerator(
  { /* user options */ },
  { /* default options */ }
)

const { css } = await generator.generate(code)