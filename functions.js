function createam(x){

    eq={

        'torre1':new ficha(x,'t',`/img/torre_${x}.png`,true,`${x == 'b'? 'a8' : 'h8'}`,'torre1'),
        'caballo1':new ficha(x,'c',`/img/caballo_${x}.png`,true,`${x == 'b'? 'a7' : 'h7'}`,'caballo1'),
        'alfil1':new ficha(x,'a',`/img/alfil_${x}.png`,true,`${x == 'b'? 'a6' : 'c6'}`,'alfil1'),
        'rey':new ficha(x,'r',`/img/rey_${x}.png`,true,`${x == 'b'? 'a5' : 'c5'}`,'rey'),
        'reina':new ficha(x,'q',`/img/reina_${x}.png`,true,`${x == 'b'? 'a4' : 'c4'}`,'reina'),
        'alfil2':new ficha(x,'a',`/img/alfil_${x}.png`,true,`${x == 'b'? 'a3' : 'h3'}`,'alfil2'),
        'caballo2':new ficha(x,'c',`/img/caballo_${x}.png`,true,`${x == 'b'? 'a2' : 'h2'}`,'caballo2'),
        'torre2':new ficha(x,'t',`/img/torre_${x}.png`,true,`${x == 'b'? 'a1' : 'h1'}`,'torre2')

    }

    for(i=1;i<=8;i++){

        eq['peon'+i] = new ficha(x,'p',`/img/peon_${x}.png`,true,`${x == 'b'? 'b'+i : 'g'+i}`)

    }

    return eq
}


function startpos(eq){

    let dicc_img = {}

    Object.entries(eq).forEach(([key,value])=>{
        //chest[value.position].innerHTML += `<img id="${key}_${value.color}" src="${value.imagen}" alt="" srcset="">`
        let imag = document.createElement("img")
        imag.src = value.imagen
        imag.id = key+'_'+value.color
        chest[value.position].append(imag)

        dicc_img[`${key}_${value.color}`] = imag

        
    })
    return dicc_img
}


function pintar_amarillo(cas){

    chest[cas].style.backgroundColor = "RGBA(200,250, 0, 0.4)"

}


function actionAssign(dicc_eq,eq){

    Object.entries(dicc_eq).forEach(([key,value])=>{
            

        value.addEventListener("click",()=>{
            //console.log(eq[key.slice(0,-2)].tipo)

            let mov;
            let pieza = eq[key.slice(0,-2)]

            switch(pieza.tipo){

                case 't':
                    castillo(pieza)
                    break;

                case 'c':
                    caballo(pieza)
                    break;

                case 'a':
                    alfil(pieza)
                    break;
                
                case 'q':
                    reina(pieza)
                    break;

                case 'r':
                    rey(pieza)
                    break;

                case 'p'
                :
                    peon(pieza)
                    break;

                default:
                    console.log("No implementado")

            }


        })


            
    })

    
}


function castillo(pieza){

    console.log("esta atacando un castillo")

}

function caballo(pieza){

    console.log("esta atacando un caballo")

}

function alfil(pieza){

    console.log("esta atacando un alfil")

}

function reina(pieza){

    console.log("esta atacando una reina")

}

function rey(pieza){

    console.log("esta atacando un rey")

}

function peon(pieza){

    console.log("esta atacando un peon")
    let at1, at2
    let pos = pieza.position
    let list_mov = []
    at1 = pieza.color == 'b'? String.fromCharCode(pos[0].codePointAt(0)+1)+(parseInt(pos[1])+1) : String.fromCharCode(pos[0].codePointAt(0)-1)+pos[1]
    at2 = pieza.color == 'b'? String.fromCharCode(pos[0].codePointAt(0)+1)+(parseInt(pos[1])-1) : String.fromCharCode(pos[0].codePointAt(0)-1)+pos[1]
    mov = pieza.color == 'b'? String.fromCharCode(pos[0].codePointAt(0)+1)+pos[1] : String.fromCharCode(pos[0].codePointAt(0)-1)+pos[1]
    pieza_atacante = pieza

    if(!chest[mov].hasChildNodes()){
        pintar_amarillo(mov)
    }

    if(parseInt(at1[1])<=8){
        if(chest[at1].hasChildNodes()){
            pintar_amarillo(at1)
        }
    }

    if(parseInt(at2[1])>=1){
        if(chest[at2].hasChildNodes()){
            pintar_amarillo(at2)
        }
    }
}

function move(dicc_img_w,dicc_img_b){
    
    Object.entries(chest).forEach(([key,value])=>{

        value.addEventListener('click', ()=>{

            if(value.style.backgroundColor === 'rgba(200, 250, 0, 0.4)'){

                console.log('ficha se movio aqui')
                //pieza_atacante.color == 'b'? delete dicc_img_w[pieza_atacante.nombre+'_'+pieza_atacante.color] : delete dicc_img_b[pieza_atacante.nombre+'_'+pieza_atacante.color]
                chest[pieza_atacante.position].removeChild(chest[pieza_atacante.position].firstChild)
                let img_actual = pieza_atacante.color == 'b'? dicc_img_w[pieza_atacante.nombre+'_'+pieza_atacante.color] : dicc_img_b[pieza_atacante.nombre+'_'+pieza_atacante.color]
                /* let imag = document.createElement("img")
                imag.src = pieza_atacante.imagen
                imag.id = pieza_atacante.nombre+'_'+pieza_atacante.color */
                chest[key].append(img_actual)
                
            }
        })
    })
}
