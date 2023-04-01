require('dotenv').config()
const axios = require('axios')
const appid = process.env.APPID
const q = 'Sorocaba'
const cnt = 5
const units = 'metric'
const lang = 'pt_br'
const urlBase = 'https://api.openweathermap.org/data/2.5/forecast'
const url = `${urlBase}?q=${q}&appid=${appid}&lang=${lang}&cnt=${cnt}&units=${units}`

console.log(url)

axios.get(url).then(response => {
    // console.log(response)
    return response.data   
})
.then(res => {
    console.log(res)
    return res
})
.then(resultado => {
    console.log(resultado.cnt)
    return resultado
})
.then(resultado => {
    return resultado['list']
})
.then(resultado => {
    for (let forecast of resultado){
        console.log(forecast)
    }
})