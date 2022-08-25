let listaDeCompras = ["Jamón", "Carne", "Huevos", "Frutas", "Verduras"]

listaDeCompras.push("Aceite de Girasol")

listaDeCompras.pop()

let peliculasFavoritas = [
    {titulo: "Wonder Woman", director: "Patty Jenkins", fecha: new Date(2017, 05, 02)},
    {titulo: "Lucy", director: "Luc Besson", fecha: new Date(2014, 06, 25)},
    {titulo: "El zorro y el sabhueso", director: "Ted Berman", fecha: new Date(1981, 08, 11)}
]

let peliculasDespuesDe2010 = peliculasFavoritas.filter(value=> value.fecha.valueOf() > new Date(2010, 0, 1).valueOf())

let directoresPeliculas = peliculasFavoritas.map(pelicula => pelicula.director)

let titulosPeliculas = peliculasFavoritas.map(pelicula => pelicula.titulo)

let titulosYdirectores = titulosPeliculas.concat(directoresPeliculas)

let directoresYtitulos = [...directoresPeliculas, ...titulosPeliculas]
