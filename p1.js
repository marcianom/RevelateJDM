var form = document.getElementById('form')
var firstname = document.getElementById('firstname')
var lastname = document.getElementById('lastname')
var email = document.getElementById('email')
var phonenumber = document.getElementById('phonenumber')
var region = document.getElementById('region')
var agreement = document.getElementById('agreement')

function checkInput()
{
    if (firstname.value == '')
    {
        alert('First name must be filled!')

    } else if (lastname.value == '')
    {
        alert('Last name must be filled!')

    } else if (email.value == '' )
    {
        alert('Email must be filled and valid!')

    } else if (phonenumber.value == '')
    {
        alert('Insert valid phone number!')

    } else if (region.value == '')
    {
        alert('Insert your Region!')

    } else if (!agreement.checked)
    {
        alert('Agreement must be checked!')
    }
}

// || phonenumber.value.startsWith('0')

// || email,value.endswith('@gmail.com')
//             || email.value.endswith('@gmail.co.id') || email.value.endswith('@yahoo.co.id')
//             || email.value.endswith('@yahoo.com') || email.value.endswith('@binus.ac.id'))