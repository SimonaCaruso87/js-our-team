/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l'array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro! */

/*
NOME            RUOLO                   IMMAGINE
Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg
*/

//MILESTONE 0:
//Creare l'array di oggetti con le informazioni fornite.

const arrayObject = [
  {
    nome : 'Wayne Barnett',
    ruolo : 'Founder & CEO',
    immagine : 'img/wayne-barnett-founder-ceo.jpg' ,
  },
  {
    nome : 'Angela Caroll',
    ruolo : 'Chief Editor',
    immagine : 'img/angela-caroll-chief-editor.jpg' ,
  },
  {
    nome : 'Walter Gordon',
    ruolo : 'Office Manager',
    immagine : 'img/walter-gordon-office-manager.jpg' ,
  },
  {
    nome : 'Angela Lopez',
    ruolo : 'Social Media Manager',
    immagine : 'img/angela-lopez-social-media-manager.jpg' ,
  },
  {
    nome : 'Scott Estrada',
    ruolo : 'Developer',
    immagine : 'img/scott-estrada-developer.jpg' , 
  },
  {
    nome : 'Barbara Ramos',
    ruolo : 'Graphic designer',
    immagine : 'img/barbara-ramos-graphic-designer.jpg' ,
  },
];


//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for(let index = 0 ; index < arrayObject.length ; index++){
  const element = arrayObject[index];
  // console.log(index , arrayObject[index]);

  for(let key in element){
    // console.log(key , element[key]);
  }
};



//MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe

const row = document.querySelector('.row') ;

for(let index = 0 ; index < arrayObject.length ; index++){
  const element = arrayObject[index];

//aggiungere div , class col-4 e appendere imageContainer e colElement
  const colElement = document.createElement('div');
  colElement.classList.add('col-4');
  row.append(colElement);
  //BONUS
  //Trasformare la stringa foto in una immagine effettiva
  const image = element['immagine'];
  console.log(image);
  //crea elemento img nell'html
  const imageContainer = document.createElement('img');
  //riempire il contenitore img
  imageContainer.setAttribute('src',image);


  colElement.append(imageContainer);

  const nomeContainer = document.createElement('div') ;
  nomeContainer.classList.add('name-container');
  colElement.append(nomeContainer);

  nomeContainer.innerHTML = element.nome ;

  console.log(nomeContainer);


  const ruoloContainer = document.createElement('div');
  ruoloContainer.classList.add('ruolo-container');
  colElement.append(ruoloContainer);

  ruoloContainer.innerHTML = element.ruolo ;




    
    
      
// for(let key in element){
//       row.innerHTML += element[key];
//       // console.log(key , element[key]);
//     }

};


 

