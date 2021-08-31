console.log('javascript ki file h yeh')






const weatherForm = document.querySelector('form')
const searchelement = document.querySelector('input')
const messgae1 = document.querySelector('#m1')
const messgae2 = document.querySelector('#m2')


weatherForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const location = searchelement.value
    messgae1.textContent = 'LOADING....'
    messgae2.textContent = ''





    fetch('http://localhost:3000/weather?address=' + location).then(function (response) {

        response.json().then(function (data) {

            if (data.error) {
                messgae1.textContent = (data.error)
            }
            else {
                messgae1.textContent = (data.location)
                messgae2.textContent = (data.forecast)

            }
        })
    })

})