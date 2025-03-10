
const createUtmButton = document.querySelector('#create_utm')
const clearFieldsButton = document.querySelector('#clear_fields')

function createUtm() {
    const urlPage = document.querySelector('#url').value
    const utmSource = document.querySelector('#utm_source').value
    const utmMedium = document.querySelector('#utm_medium').value
    const utmCampaign = document.querySelector('#utm_campaign').value
    const utmTerm = document.querySelector('#utm_term').value
    const utmContent = document.querySelector('#utm_content').value

    const utmCreated = `${urlPage}?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}`

    utm_result.innerText = utmCreated

}

create_utm.addEventListener('click', createUtm)


function clearFields() {
    document.querySelector('#url').value = "";
    document.querySelector('#utm_source').value = "";
    document.querySelector('#utm_medium').value = "";
    document.querySelector('#utm_campaign').value = "";
    document.querySelector('#utm_term').value = "";
    document.querySelector('#utm_content').value = "";
    utm_result.innerText = ""
}


clear_fields.addEventListener('click', clearFields)


function copyUtm() {
    const resultUtm = document.querySelector('#utm_result')
    resultUtm.select();
    document.execCommand('copy')
}

copy_utm.addEventListener('click', copyUtm)