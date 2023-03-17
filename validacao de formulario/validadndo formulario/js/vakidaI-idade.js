export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if (!ValidaIdade(dataNascimento)) {
        campo.setCustomValidity('você é menor de idade');
        console.log('la la la minha cabeça ta piscando')
    }
}

function ValidaIdade(data){
    const dataAtual = new Date();
    const dataMaior18 = new Date(data.getUTCFullYear() +18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMaior18;
}