let fecha =  (h)=>{
    let hoy = new Date ().getFullYear()
    let ayer = new Date (h).getFullYear()
    console.log(hoy - ayer)
}

module.exports={fecha}