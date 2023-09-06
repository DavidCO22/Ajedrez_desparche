/*************************************Instanciamiento con HTML objects*****************************************************************/

let chest = {}

for(i=97;i<=104;i++){
    for(j=1;j<=8;j++){
        chest[String.fromCharCode(i)+j] = document.getElementById(String.fromCharCode(i)+j)
    }
}

/*************************************************************************************************************************************/

eq_w = createam('b')
eq_b = createam('n')

console.log(eq_w)

startpos(eq_w)
startpos(eq_b)
