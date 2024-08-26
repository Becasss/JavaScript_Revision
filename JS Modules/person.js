
// Named exports
const name = "Bikash"
const age= 40;
export {
    age, name
};


// Default Exports

const message = () => {
    const Name = "Bikash";
    const Age = 40;
    return name + "is " + age + "Years old.";

};
export default message;