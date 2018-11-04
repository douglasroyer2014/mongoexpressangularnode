/*console.log(process.argv)*/

function param(param){
  return process.argv.indexOf(param) !== -1
}

if (param('prod')) {
  console.log('Atenção')
}else {
  console.log('Tranqui')
}
