class buscarPrenda   {
    constructor(jeans, remera, buzo, campera) {
      this.jeans = jeans;
      this.remera = remera;
      this.campera = campera;
      this.buzo = buzo;  
    }
}

const prendas = [];
prendas.push("jeans");
prendas.push("remera");
prendas.push("campera");
prendas.push("buzo");
console.log(prendas);


function prendas(prendas) {
    return prendas.find(obj => obj.nombre === prendas.toUpperCase())
    }


    //   const prendas = ['jeans', 'remera', 'campera', 'buzo'];
//   const found = prendas.find(prendas => {
//       console.log(prendas);
//   })

for(let i = 0; i <4; i++)   {
    let busqueda = buscarPrenda(prendas, prompt("Ingrese su compra"), prompt("Ingrese su nueva compra"), prompt("Ingrese su nueva compra"), prompt("Ingrese su nueva compra"))
    if(busqueda != undefined)   {
        alert("La prenda es" + busqueda.prendas)
    } 
else    {
    alert("La prenda es inexistente")
}
}
