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
      const act = new Activity({id: this.id, ...activity});
      this.activities.push(act);
    }
  
    // Éste es el método que es opcional para eliminar una actividad por ID
    deleteActivity(id) {
      this.activities = this.activities.filter(act => act.id !== id);
    }
}

/* const objactivity = {
  Title: "",
  Description: "jugar al futbol con amigos",
  imgUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjJmCpJvSLX2IKrXzq_w2ZXis2EzctAeHFGOVH1TW0Q&s",
}; */

let creador = new Repository();

console.log(creador);

const boxactivitis = document.getElementById("actividadesbox");

const BotonAgregar = document.getElementById("add");

BotonAgregar.addEventListener("click", function obtenerValores(e) {
  e.preventDefault();
  const titleValue = document.getElementById("text").value;
  const descriptionValue = document.getElementById("description").value;
  const imageUrlValue = document.getElementById("urlImg").value;

  const actividad1 = {
    Title: titleValue,
    Description: descriptionValue,
    imgUrl: imageUrlValue,
  };

  creador.createActivity(actividad1);

  console.log(creador.getAllActivities());

  console.log(actividad1);

  const title1 = document.createElement("h3");
  const parrafo1 = document.createElement("p");
  const img1 = document.createElement("img");

  const divcart = document.createElement("div");
  divcart.id = "estilosPrueba";

  title1.textContent = actividad1.Title;
  parrafo1.innerHTML = actividad1.Description;
  img1.src = actividad1.imgUrl;

  divcart.appendChild(title1);
  divcart.appendChild(parrafo1);
  divcart.appendChild(img1);

  boxactivitis.appendChild(divcart);
});
