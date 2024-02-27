



DOM = document;

// Paleta de Colores: https://paletadecolores.com.mx/paleta/11091a/2f2f4d/626970/bab195/e8d18e/


let mainbodycolor = "#11091a";
let primarycolor = "#8db986";
let secondarycolor = "#acce91";
let terciary = "#efeae4";
let fourth = "#373737";
let fifth = "#373737";
let numid = 0;



let usuarioname = "The Weekend";

//Dimensiones
const unitvh = 'vh';
const unitperc = '%';
const unitpx = 'px';

//Elemento del body?
DOM.title = "CHAT JPG";
DOM.body.style.backgroundColor = mainbodycolor;
DOM.body.style.margin = "0px";




//Elemento contenedor
let divconten = DOM.createElement("div");
divconten.style.backgroundColor = primarycolor;
divconten.style.height = "calc(100vh - 0px)";
divconten.style.display = "grid";
divconten.style.gridTemplateColumns = "20% 80%";
divconten.style.gridTemplateRows = "80% 20%"
divconten.style.border =  "1px solid black";

//Elemento listado-chats
let divchatlist = DOM.createElement("div");
divchatlist.style.backgroundColor = primarycolor;
divchatlist.id = "listachat";
divchatlist.style.border = "1px solid black";
divchatlist.style.padding = "8px";
divchatlist.style.color = fifth;
divchatlist.style.display = "flex"
divchatlist.innerText = "Listados"
divchatlist.style.flexDirection = "column"
divchatlist.style.overflow = "scroll";
//Buscar en Google



//contenidoperfil
let divcontenidoperf = DOM.createElement("div");
divcontenidoperf.style.backgroundColor = primarycolor;
divcontenidoperf.style.display = "flex";
divcontenidoperf.style.alignItems = "center";
divcontenidoperf.style.justifyContent = "space-around";
divcontenidoperf.innerText = "Paddington";
divcontenidoperf.style.color = "white";




//Mensajes
let mensaje = DOM.createElement("div");
mensaje.style.backgroundColor = secondarycolor;
mensaje.border = "1px solid black";
mensaje.innerText = "mensaje";
mensaje.style.overflowY = "scroll";





let escribir = DOM.createElement("div");

//SEPARAR


//Contenido Chat
let contenidochat = DOM.createElement("div");

contenidochat.style.backgroundColor = primarycolor;
contenidochat.style.border = "1px solid black";
contenidochat.style.display = "flex";
contenidochat.style.justifyContent = "space-evenly"





let imagenperfil = DOM.createElement("img");
imagenperfil.style.borderRadius = "50" + unitperc;
imagenperfil.style.width = "65px"
imagenperfil.style.height = "65px"
imagenperfil.src = "https://img.asmedia.epimg.net/resizer/VHO--PcuuklI_RkAQxXHdO2ecGE=/1200x1200/filters:focal(562x275:572x285)/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/SLLW3EYCTFLJVCYCVZQMJY2UF4.jpg"
imagenperfil.alt = "Foto"
divcontenidoperf.appendChild(imagenperfil);


let buttonlight = DOM.createElement("button");
buttonlight.style.backgroundColor = fourth;
buttonlight.style.color = primarycolor;
buttonlight.innerText = "Light\nMode"
buttonlight.style.width = "20%"
buttonlight.style.height = "40%"
divcontenidoperf.appendChild(buttonlight)


//Si es True es light 
if(localStorage.getItem('theme') == false){
    mainbodycolor = "#11091a";
    primarycolor = "#2f2f4d";
    secondarycolor = "#626970";
    terciary = "#bab195";
    fourth = "#bab195";
    fifth = "#e8d18e";
}

buttonlight.addEventListener("click", function() {
    localStorage.setItem('theme', "false");
    mainbodycolor = "#11091a";
    primarycolor = "#8db986";
    secondarycolor = "#acce91";
    terciary = "#efeae4";
    fourth = "#373737";
    fifth = "#373737";

    divconten.style.backgroundColor = primarycolor;
    divchatlist.style.backgroundColor = primarycolor;
    divcontenidoperf.style.backgroundColor = primarycolor;
    contenidochat.style.backgroundColor = primarycolor;
    mensaje.style.backgroundColor = secondarycolor;
    buttonlight.style.backgroundColor = fourth;
    buttonlight.style.color = primarycolor;
    buttondark.style.backgroundColor = fourth;
    buttondark.style.color = primarycolor;
    mensajechat.style.backgroundColor = primarycolor;
    mensajechat.style.color = fifth;
    button.style.backgroundColor = fourth;
    button.style.color = primarycolor;
    divchat.style.backgroundColor = fifth;
    divchat.style.color = secondarycolor;

    
      // Change to your desired color
  });



let buttondark = DOM.createElement("button");
buttondark.style.backgroundColor = fourth;
buttondark.style.color = primarycolor;
buttondark.innerText = "Dark\nMode"
buttondark.style.width = "20%"
buttondark.style.height = "40%"
divcontenidoperf.appendChild(buttondark)

buttondark.addEventListener("click", function() {
    localStorage.setItem('theme', "true")
    mainbodycolor = "#11091a";
    primarycolor = "#2f2f4d";
    secondarycolor = "#626970";
    terciary = "#bab195";
    fourth = "#e8d18e";
    fifth = "#e8d18e";
    divconten.style.backgroundColor = primarycolor;
    divchatlist.style.backgroundColor = primarycolor;
    divcontenidoperf.style.backgroundColor = primarycolor;
    contenidochat.style.backgroundColor = primarycolor;
    mensaje.style.backgroundColor = secondarycolor;
    buttonlight.style.backgroundColor = fourth;
    buttonlight.style.color = primarycolor;
    buttondark.style.backgroundColor = fourth;
    buttondark.style.color = primarycolor;
    mensajechat.style.backgroundColor = primarycolor;
    mensajechat.style.color = fifth;
    button.style.backgroundColor = fourth;
    button.style.color = primarycolor;
    divchat.style.backgroundColor = fifth;
    divchat.style.color = secondarycolor;


      // Change to your desired color
  });




let mensajechat = DOM.createElement("textarea");
mensajechat.id = "areatext"
mensajechat.style.width = "90" + unitperc;
mensajechat.style.height = "90" + unitperc;
mensajechat.style.backgroundColor = primarycolor;
mensajechat.style.color = fifth;




//PAra el POST
contenidochat.appendChild(mensajechat);

let button = DOM.createElement("button");
button.style.backgroundColor = fourth;
button.style.color = primarycolor;
button.innerText = "Enviar";
button.style.width = "10%";
button.style.height = "90%";
button.id = "enviar";
contenidochat.appendChild(button);

mensajechat.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    
      event.preventDefault();
      console.log("HHH")
      button.style.backgroundColor = fifth;
        setTimeout(() => {
            button.style.backgroundColor = terciary;
        }, 200);
        numid =+ 1
        crearChat1(mensajechat.value, numid);
        mensaje.scrollTop = mensaje.scrollHeight;

    }
  });

button.addEventListener("click", function() {
    
    button.style.backgroundColor = fifth;
    setTimeout(() => {
      button.style.backgroundColor = terciary;
    }, 200);
    numid =+ 1
    crearChat1(mensajechat.value, numid);
    mensaje.scrollTop = mensaje.scrollHeight;


});


//Creta
function crearChat1(texto, idd){
    let divchat = DOM.createElement("div");
    console.log(texto)
    divchat.className = "chat";
    divchat.id = idd;
    divchat.innerText = usuarioname + "\n" + texto;
    divchat.style.backgroundColor = fifth;
    divchat.style.position = "relative";
    divchat.style.right = "60%";
    divchat.style.color = "white";
    divchat.style.width = "40" + unitperc;
    divchat.style.minHeight = "55" + unitpx;
    divchat.style.borderRadius = "8" + unitpx;
    divchat.style.border ="1px solid white";
    divchat.style.right = "-60" + unitperc
    divchat.style.marginBottom = "2" + unitpx;
    divchat.style.wordWrap = "break-word";
    mensaje.appendChild(divchat);

    
}






divconten.appendChild(divchatlist);
divconten.appendChild(mensaje);
divconten.appendChild(divcontenidoperf);

divconten.appendChild(contenidochat);

DOM.body.appendChild(divconten);





let data = fetch('http://uwu-guate.site:3000/messages',
{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    body : JSON.stringify({})
})    
function optenerPost2(){
    let posts = fetch('http://uwu-guate.site:3000/messages')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}
// ASYNC AWAIT - ME PERMITE ESPERAR LA RESPUESTA DE UNA PETICION ASINCRONA
async function optenerPosts(){
    let data = await fetch('http://uwu-guate.site:3000/messages',
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })    
    console.log("await", data);
    let posts = await data.json();
    posts = posts.reverse();
    console.log(posts);

    // console.log("string", JSON.stringify(posts));
    // let new_json = JSON.parse(JSON.stringify(posts));
    // console.log("new_json", new_json);
    return posts;
}

function crearChatbut(username, id){
    let divchat = DOM.createElement("button");
    divchat.className = "chat";
    divchat.id = id;
    divchat.innerText = username;
    divchat.style.textAlign = "Center";
    divchat.style.justifyContent = "space-around";
    divchat.style.backgroundColor = fifth;
    divchat.style.color = secondarycolor;
    divchat.style.width = "100" + unitperc;
    divchat.style.minHeight = "60" + unitpx;
    divchat.style.borderRadius = "8" + unitpx;
    divchat.style.border ="1px solid black";
    divchat.style.marginBottom = "8" + unitpx;
    return divchat;
}


//Crea en los listados los usuarios de CHAT
async function crearListoDeChatsUsers(){
    // mando a traer los post dummys a una api con get
    let misPosts =  await optenerPosts()

    const uniqueusers = [];
    for (const usernamepost of misPosts) {
        if (!uniqueusers.includes(usernamepost[1])) {
            uniqueusers.push(usernamepost[1]);
        }
      }
    console.log(uniqueusers);
    
    // mando a traer el div donde quiero poner los chats
    let divListados = divchatlist;
    
    if(divListados != null){
        // transformamos los dicccionarios a un div de chat
        for (const usuario of uniqueusers)
            divListados.appendChild(crearChatbut(usuario, usuario));

    }

}
crearListoDeChatsUsers();


function crearChat(username, id, mensaje){
    let divchat = DOM.createElement("div");
    divchat.className = "chat";
    divchat.id = id;
    divchat.innerText = username + "\n" + mensaje;
    divchat.style.backgroundColor = fifth;
    divchat.style.color = secondarycolor;
    divchat.style.width = "40" + unitperc;
    divchat.style.borderRadius = "8" + unitpx;
    divchat.style.border ="1px solid black";
    divchat.style.marginBottom = "8" + unitpx;
    return divchat;
}




//REgresa
async function crearListoDeChats(){
    // mando a traer los post dummys a una api con get
    let misPosts =  await optenerPosts()
    
    // mando a traer el div donde quiero poner los chats
    let divListados = divchatlist;

    if(divListados != null){
        // transformamos los dicccionarios a un div de chat
        
        misPosts.map(post=>{
            let divchat = crearChat(post[1], post[0], post[2]);
            return divchat
        })
        // recorremos los nuevos chats y los agremos al div de listados
        .forEach(element => {
            mensaje.appendChild(element);
            
        });
    }

}

crearListoDeChats();









//Parte 1 NO TOCAR
const texto = mensajechat;
function updateCharacterCount() {
    const currentLength = texto.value.length;
    const remaining = Math.max(140 - currentLength, 0);
    // Update the element displaying the character count
    // document.getElementById("characterCountId").textContent = remaining;
}

texto.addEventListener("input", (event) => {
    // Get the current text value
    const text = event.target.value;
  
    // Limit the text length to the maximum
    const limitedText = text.substring(0, 140);
  
    // Update the text area value only if it changed
    if (limitedText !== text) {
      texto.value = limitedText;
    }
  
    // Update the character count display (optional)
    updateCharacterCount();
});


updateCharacterCount();


if(localStorage.getItem('theme') == "true"){
    console.log("EFE");
    mainbodycolor = "#11091a";
    primarycolor = "#2f2f4d";
    secondarycolor = "#626970";
    terciary = "#bab195";
    fourth = "#e8d18e";
    fifth = "#e8d18e";
    divconten.style.backgroundColor = primarycolor;
    divchatlist.style.backgroundColor = primarycolor;
    divcontenidoperf.style.backgroundColor = primarycolor;
    contenidochat.style.backgroundColor = primarycolor;
    mensaje.style.backgroundColor = secondarycolor;
    buttonlight.style.backgroundColor = fourth;
    buttonlight.style.color = primarycolor;
    buttondark.style.backgroundColor = fourth;
    buttondark.style.color = primarycolor;
    mensajechat.style.backgroundColor = primarycolor;
    mensajechat.style.color = fifth;
    button.style.backgroundColor = fourth;
    button.style.color = primarycolor;

}

if(localStorage.getItem('theme') == "false"){
    mainbodycolor = "#11091a";
    primarycolor = "#8db986";
    secondarycolor = "#acce91";
    terciary = "#efeae4";
    fourth = "#373737";
    fifth = "#373737";

    divconten.style.backgroundColor = primarycolor;
    divchatlist.style.backgroundColor = primarycolor;
    divcontenidoperf.style.backgroundColor = primarycolor;
    contenidochat.style.backgroundColor = primarycolor;
    mensaje.style.backgroundColor = secondarycolor;
    buttonlight.style.backgroundColor = fourth;
    buttonlight.style.color = primarycolor;
    buttondark.style.backgroundColor = fourth;
    buttondark.style.color = primarycolor;
    mensajechat.style.backgroundColor = primarycolor;
    mensajechat.style.color = fifth;
    button.style.backgroundColor = fourth;
    button.style.color = primarycolor;
}


