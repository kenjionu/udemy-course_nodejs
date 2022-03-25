const { request } = require('http');
const https = require('https');
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/-75.7088,44.1545.json?access_token=pk.eyJ1Ijoia2VuamlvbnUiLCJhIjoiY2wxM3ZiODBkMjBoMDNpcWhlamo0MHRuMSJ9.VtiUQ2ddQEvPqabF1SRatQ&language=es';



https.request(url, (response) => {
    console.log(response)
    // console.log(url)ls
    let data = ''
    //  response.on(data, (chunk) => {
    //     console.log(chunk)
    //  })
    
 
    //  response.on('end', () => {

    // })

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(data)
    })
})

request.on('error', (error) => { 
    console.log('An error', error)
})

request.end()