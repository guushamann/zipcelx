import pkg from './package.json';

export default [
  {
    input: 'src/zipcelx.js',
    external: Object.keys(pkg.dependencies),
    output: [
      { file: pkg.module, format: 'es' }
    ]
  }
];
