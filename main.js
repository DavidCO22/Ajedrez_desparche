

/*************************************Instanciamiento con HTML objects*****************************************************************/

let chest = {}
let pieza_atacante;
let tablero = document.createElement("table")
let casilla,fila;
let color = true;

for(j=1;j<=8;j++){

    fila = document.createElement("tr")
    fila.id = `fila${j}`
    tablero.append(fila)


    for(i=97;i<=104;i++){
        casilla = document.createElement("td")
        casilla.id = String.fromCharCode(i)+j
        fila.append(casilla)
        casilla.style.backgroundColor = color == false? "white" : "RGBA(0, 0, 0, 0.6)"
        //chest[String.fromCharCode(i)+j] = document.getElementById(String.fromCharCode(i)+j)
        chest[String.fromCharCode(i)+j] = casilla

        if(i!=104){color = !color}
        
    }
}

/*************************************************************************************************************************************/

let tablec = document.getElementById("tablero")
tablec.append(tablero)

//Creacion equipos
eq_w = createam('b')
eq_b = createam('n')

//diccionarios con las imagenes
dicc_img_w = startpos(eq_w)
dicc_img_b = startpos(eq_b)

move(dicc_img_w,dicc_img_b)

console.log(dicc_img_w)

//asignacion de eventos
actionAssign(dicc_img_w,eq_w)
actionAssign(dicc_img_b,eq_b)



//asignacion de eventos
actionAssign(dicc_img_w,eq_w)
actionAssign(dicc_img_b,eq_b)

