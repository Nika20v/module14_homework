const parseXml = (xmlString) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlString, 'text/xml');
  const list = [];

  const students = doc.getElementsByTagName('student');
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const name = student.getElementsByTagName('name')[0];
    const lang = name.getAttribute('lang');
    const first = name.getElementsByTagName('first')[0].textContent;
    const second = name.getElementsByTagName('second')[0].textContent;
    const age = student.getElementsByTagName('age')[0].textContent;
    const prof = student.getElementsByTagName('prof')[0].textContent;

    list.push({
      name: `${first} ${second}`,
      age: parseInt(age, 10),
      prof: prof,
      lang,
    });
  }

  return {
    list,
  };
};

const obj = parseXml(xmlString);
console.log(obj);