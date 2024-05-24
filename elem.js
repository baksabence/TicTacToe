export default class Elem{
    #ertek = "";
    #szuloElem;
    #divElem;
    #id
    constructor(id, ertek,szuloelem){
        this.#id = id;
        this.#ertek = ertek;
        this.#szuloElem = szuloelem;
        this.#megjelenit()
        // kattintas esemeny
        this.#divElem = this.#szuloElem.children("div:last-child")
        //EGY OSZTÁLYBAN A THIS A KONKRÉT OBJEKTUM PÉLDÁNYT JELENTI, DE EGY ESEMÉNYKEZELŐBEN FUNCTION ESETÉN 
        //AZT A HTML ELEMET JELENTI, AMELYIK AZ ESEMÉNY KIVÁLTOTTA, NYÍL FÜGGVÉNNYEL PEDIG AZ OBJEKTUM OSZTÁLYPÉDLÁNYRA MUTAT
        this.#divElem.on("click", ()=>{
            if(this.#ertek === " "){
                this.#esemenyTrigger("lepes")
            }
           // console.log(this.#id)
            
        })
    }

    #megjelenit(){
        let txt=`<div><p>${this.#ertek}</p></div>`
        this.#szuloElem.append(txt)
    }

    // információ átadás
    #esemenyTrigger(EsemenyNev){
        // létrehoz egy saját eseményt EsemenyNev néven, és átad adatokat saját magáról {detail:}
        const e = new CustomEvent(EsemenyNev,{detail:this.#id})
        window.dispatchEvent(e)
    }

}