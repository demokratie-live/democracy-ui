import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';
import images from 'rollup-plugin-image-files';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json');
const styledComponentsTransformer = createStyledComponentsTransformer();

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    del({
      targets: ['dist/*'],
      force: true,
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: 'tsconfig.build.json',
      useTsconfigDeclarationDir: true,
      transformers: [
        () => ({
          before: [styledComponentsTransformer],
        }),
      ],
    }),
    images(),
  ],
};
