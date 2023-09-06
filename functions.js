function createam(x){

    eq={

        'torre1':new ficha(x,'t',`/img/torre_${x}.png`,true,`${x == 'b'? 'a8' : 'h8'}`),
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
    Object.entries(eq).forEach(([key,value])=>{

        chest[value.position].innerHTML += `<img src="${value.imagen}" alt="" srcset="">`

    })
}
