//declara las variables que son llamadas desde para ir cambiando las imagenes y los texteos 
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const usuario = document.querySelector('.usuario')
const titulo = document.querySelector('.titulo')

const testimonials = [
  {
    name: 'Germán Rodríguez',
    tittle: 'The Preacher',
    photo:
      'https://i1.whakoom.com/small/10/05/bf516f6a7c384e99b3aa9d4224a406bc.jpg',
    text:
      "Vértigo en su gran expresión. Transgresora e irreverente a partes iguales. Todo aliñado con muy mala baba, con un humor del mas negro que se pueda imaginar. Y sin embargo hay que reconocer que nada es gratuito y que todo encaja como un guante, tanto la delirante e imaginativa historia, como los deliciosos personajes que pueblan este comic.",
  },

  {
    name: 'Daniel Castañeda',
    tittle: 'Escuadrón Suicida: Renacimiento',
    photo: 'https://i1.whakoom.com/small/29/23/ccf767187fc74f169e91373adb09e50c.jpg',
    text:
    "Guión bastante previsible pero entretenido. Buen dibujo en general. Si eres fan de Escuadrón Suicida como es mi caso lo recomiendo, seguiré leyendo los demás.",
  },

  {
    name: 'David Pérez',
    tittle: 'Ala Triste',
    photo: 'https://i1.whakoom.com/small/10/0c/5c82edb85b014579baf2f7859eb19976.jpg',
    text:
    "Reedición de la primera novela de la serie de Alatriste adaptada al cómic por el maestro Carlos Giménez y Joan Mundet. Se conmemoran 20 años de la publicación del primer libro de la serie del capitán Alatriste.",
  },

  {
    name: 'Ismael Fernández',
    tittle: 'Conan Rey Integral',
    photo: 'https://i1.whakoom.com/small/1c/0b/3f0bc61424334e7db41d13880a291159.jpg',
    text:
    "Primer contacto con el personaje y he de decir que no me a trasmitido absolutamente nada, sus historias no me han cautivado, al contrario se me a echo bastante duro el echo de terminarlo.Por el echo de no tener lecturas previas sobre el personaje no me siento capacitado para poner estrellas en la valoración.El genero espada y brujería no encaja conmigo de ninguna de las maneras así que no me adentrare más al personaje.",
  },
]

let idx = 1
//funcion para actualizar los campos de los testimonios 
function updateTestimonial() {
  const { name, tittle, photo, text } = testimonials[idx] //le pasamos las constantes creadas anteriormente

  testimonial.innerHTML = text
  userImage.src = photo
  usuario.innerHTML = name
  titulo.innerHTML = tittle

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)