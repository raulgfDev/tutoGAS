
// no se si funcionan arrow func. entonces sntx normal
function doGet() {

    let indexHTML = HtmlService.createTemplateFromFile('index');
    indexHTML.datos = {
        data1: 'desde el back al front',
        data2: 'esto es data2'
    }

    return indexHTML.evaluate().setTitle('AgendaGAS');
}


function obtenerDatosHTML ( fichero, data ) {
    const template = HtmlService.createHtmlOutputFromFile( fichero );
    template.datos = data;
    return template.getContent();
}

