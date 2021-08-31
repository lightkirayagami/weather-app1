
const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app = express()

const publicdirectoarypath = (path.join(__dirname, '../public'))
const partialpath = path.join(__dirname, '../partials')

const geocode = require('./geocode')
const forecast = require('./forecast')

app.set('view engine', 'hbs')
app.use(express.static(publicdirectoarypath))
hbs.registerPartials(partialpath)


app.get('', function (request, respond) {
    respond.render('index', {
        title: 'Front page',
        name: 'By Shatayu Mittal'
    })

})
app.get('/about', function (require, respond) {

    respond.render('about', {
        title: 'About page h yeh',
        name: 'By Shatayu Mittal'
    })
})


app.get('/help', function (require, respond) {

    respond.render('about', {
        title: 'help page h yeh',
        name: 'By Shatayu Mittal'
    })
})





app.get('/weather', function (require, respond) {

    if (!require.query.address) {
        respond.send({ error: 'you mustprovide search query' })
    }
    else {
        geocode(require.query.address, function (error, { latitude, longitude, location } = {}) {//we applied destructuring we can use geogata only
            if (error) {
                respond.send({ error })
            }
            else {
                forecast(latitude, longitude, function (error, forecastdata) {
                    if (error) {
                        respond.send(error)
                    }
                    else {
                        respond.send({
                            forecast: forecastdata,
                            location: location,
                            address: require.query.address

                        })
                    }
                })
            }



        })
    }
})




app.get('/products', function (require, respond) {
    if (!require.query.search) {
        respond.send({ error: 'you mustprovide search query' })
    }
    else {
        console.log(require.query.search)
        respond.send({
            products: []
        })
    }


})





app.get('*', function (request, respond) {
    respond.render('404', {
        name: '404 page h yeh'
    })

})
app.listen(3000, function () {
    console.log('server is up')
})