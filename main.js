

/*************************************Instanciamiento con HTML objects*****************************************************************/

let chest = {}
let pieza_atacante;
let tablero = document.createElement("table")
let casilla,fila;
let color = true;
let cas_color;

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

console.log(dicc_img_w)

//move(dicc_img_w,dicc_img_b)

Object.entries(chest).forEach(([key,value])=>{

    value.addEventListener('click', ()=>{

        if(value.style.backgroundColor === 'rgba(200, 250, 0, 0.4)'){

            console.log('ficha se movio aqui')
            //pieza_atacante.color == 'b'? delete dicc_img_w[pieza_atacante.nombre+'_'+pieza_atacante.color] : delete dicc_img_b[pieza_atacante.nombre+'_'+pieza_atacante.color]
            console.log(value)
            value.append(pieza_atacante.color == 'b'? dicc_img_w[pieza_atacante.nombre+'_'+pieza_atacante.color] : dicc_img_b[pieza_atacante.nombre+'_'+pieza_atacante.color])
            //chest[pieza_atacante.position].removeChild(chest[pieza_atacante.position].firstChild)
            console.log(dicc_img_w[pieza_atacante.nombre+'_'+pieza_atacante.color])
            value.style.backgroundColor = 'rgba(200, 250, 0, 0.4)'
            recolorear()

            if(pieza_atacante.color=='b'){

                eq_w[pieza_atacante.nombre].position = key
                
            }
            else{

                eq_b[pieza_atacante.nombre].position = key

            }
            /* let img_actual = pieza_atacante.color == 'b'? dicc_img_w[pieza_atacante.nombre+'_'+pieza_atacante.color] : dicc_img_b[pieza_atacante.nombre+'_'+pieza_atacante.color] */
            /* let imag = document.createElement("img")
            imag.src = pieza_atacante.imagen
            imag.id = pieza_atacante.nombre+'_'+pieza_atacante.color */
            //chest[key].append(img_actual)
            
        }
    })
})

//asignacion de eventos
actionAssign(dicc_img_w,eq_w)
actionAssign(dicc_img_b,eq_b)




