const regexSymbols = /[.*+\-?^${}()|[\]\\]/g;

export const validate = (data) => {
 const errors = {}

 if(data.platforms.length < 1) errors.platforms = 'Obligatory field, select minimus one';

if(data.genres.length < 1) errors.genres = 'Obligatory field, select minimus one';

 if(!data.name) {
    errors.name = 'Obligatory field ';
} else if(regexSymbols.test(data.name)){ 
    errors.name = 'Symbols no permitted';
} else if(regexSymbols.test(data.name)) {
    errors.name = 'Symbols no permitted';
} else  if(data.name.length > 21){ 
    errors.name = 'Max characters should be 20';
} 

if(!data.description){ 
    errors.description = 'Obligatory field ';
} else if(data.description.length < 40) {
    errors.description = 'Min characters should be 40';
}

if(!data.rating) {
    errors.rating = 'Obligatory field ';
} else if(data.rating < 0 || data.rating > 5) {
    errors.rating = 'The range should be between 0 and 5';
}

if(!data.released) errors.released = 'Obligatory field ';

if(!data.rating) {
    errors.rating = 'Obligatory field ';
} else if(data.rating < 0 || data.rating > 5) {
    errors.rating = 'The range should be between 0 and 5';
}



 return errors;
}