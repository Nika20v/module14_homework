const jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;
   
   const parseJson = (jsonString) => {
    const obj = JSON.parse(jsonString);
    const list = obj.list;
   
    const result = {
    list: list.map((item) => {
    return {
    name: item.name,
    age: parseInt(item.age, 10),
    prof: item.prof,
    };
    }),
    };
   
    return result;
   };
   
   const obj = parseJson(jsonString);
   console.log(obj);