class Activity {
    constructor({id, title, description, imgUrl}) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.imgUrl = imgUrl;
    }
}
  
class Repository {
    constructor() {
      this.activities = [];
      this.id = 0;
    }
  
    getAllActivities() {
      return this.activities;
    }
  
    createActivity(activity) {
      this.id++;
      const activity = new Activity({id: this.id, ...activity});
      this.activities.push(activity);
    }
  
    // Éste es el método que es opcional para eliminar una actividad por ID
    deleteActivity(id) {
      this.activities = this.activities.filter(act => act.id !== id);
    }
}

const objactivity = {
  Title: "",
  Description: "jugar al futbol con amigos",
  imgUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjJmCpJvSLX2IKrXzq_w2ZXis2EzctAeHFGOVH1TW0Q&s",
};

let creador = new Repository();

console.log(creador);

const BotonAgregar = document.getElementById("enviarTarea");

BotonAgregar.addEventListener("click", function obtenerValores(e) {
  e.preventDefault();
  const titleValue = document.getElementById("titulo").value;
  const descriptionValue = document.getElementById("descripcion").value;
  const imageUrlValue = document.getElementById("imagen").value;

  const actividad1 = {
    Title: titleValue,
    Description: descriptionValue,
    imgUrl: imageUrlValue,
  };
  creador.createActivity(actividad1);

  console.log(creador.getAllActivities());

  console.log(actividad1);
