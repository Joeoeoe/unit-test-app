import Chai from 'chai';
declare global {
    const expect: Chai.ExpectStatic;
    declare module '*.css' {
        const content: { [className: string]: string };
        export default content;
    }

    declare module '*.less' {
        const content: { [className: string]: string };
        export default content;
    }
}
