
module.exports = { 
    index: (name) => `export { default } from './${name.toLowerCase()}'`,
    component: (name) => `
        import React, { } from 'react';
        
        // style
        import styleNameCreator from 'lib/ClassNameCreator';
        import ${name.toLowerCase()}Style from './${name.toLowerCase()}.module.scss';
        const cg = styleNameCreator(${name.toLowerCase()}Style);

        const ${name.toLowerCase()} = ({  }) => {
            return (
                <>

                </>
            )
        }

        export default ${name.toLowerCase()};
    `,
    scss: (name) => ``
}
