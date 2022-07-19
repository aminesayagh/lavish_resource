
interface Style {
    readonly [key: string]: string;
  }
  
  const styleClasseesNameGenerator = (style: Style) => {
    return (classes: string, type?: string) => {
      const multipleClass = (multipleClass: string[], type?: string) => {
        const TYPE = type ? type : null;
        let listClasses = new Array(...multipleClass);
        if(TYPE){
          listClasses.push(TYPE);
        }
        return listClasses.map((className: string) => {
          if(className == TYPE || !TYPE){
            return style[className];
          }
          const CLASS_NAME = className ? "_" + className : "";
          return style[TYPE + CLASS_NAME];
        });
      }
      const listClasses: string[] = classes.split(" ");
      return multipleClass(listClasses, type).join(" ").trim();
    }
  }
  
  export default styleClasseesNameGenerator;

// component.tsx

// style
// import StyleNameGestion from 'lib/ClassNameCreator'
// import ValuesStyle from './Values.module.scss'
// const cg = StyleNameGestion(ValuesStyle)

// <div className={cg('content1 content2', 'container')}></div>
// .container_content1 .container_content2 // as next.js module