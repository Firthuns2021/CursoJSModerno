// Parametros en un arrow Function...


// Parametros
const aprendiendo1 = (tecnologia) => console.log(`aprendiendo1 ${tecnologia}`);
aprendiendo1('JavaScript');

// si es un solo parmetro no ocupamos el parentesis
const aprendiendo2 = (tecnologia) => console.log(`aprendiendo2 ${tecnologia}`);
aprendiendo2('JavaScript');
// se puede omitir los parentesis si solo tiene un dato en caso contrario, si hay mas se dejan
// const aprendiendo2 = tecnologia => console.log(`aprendiendo2 ${tecnologia}`);
// aprendiendo2('JavaScript');
// multiples parametros si requieren parentesis
const aprendiendo3 = (tecn1, tecn2) => console.log(`Aprendiendo3 ${tecn1} ${tecn2}`);
aprendiendo3('JS', 'ES');

