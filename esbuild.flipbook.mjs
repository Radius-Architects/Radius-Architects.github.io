import esbuild from 'esbuild';

/** Maps bare-module imports to browser globals loaded via CDN <script> tags. */
const externalGlobalsPlugin = {
    name: 'external-globals',
    setup(build) {
        const globals = { react: 'React', 'react-dom': 'ReactDOM', 'react-dom/client': 'ReactDOM' };
        const filter = new RegExp(`^(${Object.keys(globals).map(k => k.replace('/', '\\/')).join('|')})$`);

        build.onResolve({ filter }, (args) => ({
            path: args.path,
            namespace: 'external-global',
        }));

        build.onLoad({ filter: /.*/, namespace: 'external-global' }, (args) => ({
            contents: `module.exports = ${globals[args.path]}`,
            loader: 'js',
        }));
    },
};

await esbuild.build({
    entryPoints: ['pages/flipbook-app.js'],
    bundle: true,
    outfile: 'lib/pages/flipbook-app.js',
    minify: true,
    format: 'iife',
    target: 'es2018',
    loader: { '.js': 'jsx' },
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    define: { 'process.env.NODE_ENV': '"production"' },
    plugins: [externalGlobalsPlugin],
});

console.log('✓ lib/pages/flipbook-app.js built');
