////////Show String Property////////

let movie = {
    title : 'a',
    releaseYear:2008,
    rating:4.5,
    director:'d'

}

showStringProperty(movie);

function showStringProperty(movie){
    for (const key in movie) {
        if(typeof movie[key] === 'string'){
            console.log(key , movie[key]);
        }
    }
}