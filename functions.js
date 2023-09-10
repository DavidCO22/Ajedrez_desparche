function createam(x){

    eq={

        'torre1':new ficha(x,'t',`/img/torre_${x}.png`,true,`${x == 'b'? 'c4' : 'h8'}`),
        'caballo1':new ficha(x,'c',`/img/caballo_${x}.png`,true,`${x == 'b'? 'a7' : 'h7'}`),
        'alfil1':new ficha(x,'a',`/img/alfil_${x}.png`,true,`${x == 'b'? 'a6' : 'h6'}`),
        'rey':new ficha(x,'r',`/img/rey_${x}.png`,true,`${x == 'b'? 'a5' : 'h5'}`),
        'reina':new ficha(x,'q',`/img/reina_${x}.png`,true,`${x == 'b'? 'a4' : 'h4'}`),
        'alfil2':new ficha(x,'a',`/img/alfil_${x}.png`,true,`${x == 'b'? 'a3' : 'h3'}`),
        'caballo2':new ficha(x,'c',`/img/caballo_${x}.png`,true,`${x == 'b'? 'a2' : 'h2'}`),
        'torre2':new ficha(x,'t',`/img/torre_${x}.png`,true,`${x == 'b'? 'a1' : 'h1'}`)

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

                case 'p':
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
    movement(pieza)

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
    let pos = pieza.position
    let mov = pieza.color == 'b'? String.fromCharCode(pos[0].codePointAt(0)+1)+pos[1] : String.fromCharCode(pos[0].codePointAt(0)-1)+pos[1];
    console.log(mov)
    
    chest[mov].style.backgroundColor = "RGBA(200,250, 0, 0.6)"
    pieza_atacante = pieza
}

function movement(pieza){
    var color = "RGBA(200,250, 0, 0.6)"

    switch(pieza.tipo){

        case 't':
            let mov = pieza.position
            let limit
            let j=1
            for(let i=1;i<=4;i++){
                console.log(i)
                mov = pieza.position
                switch(j){
                    case 1:
                        limit = parseInt(mov[1],10)+1
                        mov=mov[0]+(parseInt(mov[1],10)+1)
                        while(!(chest[mov].hasChildNodes())){
                            chest[mov].style.backgroundColor = color
                            console.log(mov,limit,j)
                            limit++
                            if(limit==9){
                                break;
                            }
                            else
                            {mov=mov[0]+(parseInt(mov[1],10)+1)}
                        }
                        break;
                    
                    case 2:
                        limit = parseInt(mov[1],10)-1
                        mov=mov[0]+(parseInt(mov[1],10)-1)
                        while(!(chest[mov].hasChildNodes())){
                            chest[mov].style.backgroundColor = color
                            console.log(mov,limit,j)
                            limit--
                            if(limit==0){
                                break;
                            }
                            else
                            {mov=mov[0]+(parseInt(mov[1],10)-1)}
                        }
                        break;
                    
                    case 3:
                        mov=pieza.position
                        const letras=['a','b','c','d','e','f','g','h'];
                        console.log(letras.findIndex(mov[0]))
                        
                        /*while(!(chest[pieza.position].hasChildNodes())){
                            chest[mov].style.backgroundColor = color
                            mov=letras.findIndex(mov[0]) +mov[1]
                        }*/
                        break;
                    
                    /*case 4:
                        while(chest[pieza.position].hasChildNodes()){
                            chest[mov].style.backgroundColor = color
                            mov=String.fromCharCode(mov[0].codePointAt(0)+1)
                        }
                        break;*/
                    default:
                        console.log("No implementado")
                }
                j++
            }
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

        case 'p':
            peon(pieza)
            break;

        default:
            console.log("No implementado")

    }
}