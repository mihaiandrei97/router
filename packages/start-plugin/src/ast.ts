import { parse } from '@babel/parser'

export type ParseAstOptions = {
  code: string
  filename: string
  root: string
  env: 'server' | 'client' | 'ssr'
}

export function parseAst(opts: ParseAstOptions) {
  return parse(opts.code, {
    plugins: ['jsx', 'typescript'],
    sourceType: 'module',
    ...{
      root: opts.root,
      filename: opts.filename,
      env: opts.env,
    },
  })
}
