const obj = {
  id: 1,
  prop: {
    someMethod: () => {
      return { id: 7 };
    },
  },
};

const propertyAccessed = obj.prop.someMethod().id;

console.log(propertyAccessed);
