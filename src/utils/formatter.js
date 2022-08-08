const datesFormatter = (dates) => {

    return Array.from(dates)
      .map((date, index) => {
        
        if (skipRecord(index)) return

        return invertDateFormat(changeDateSepartor(changeMonthNameToNumber(date.innerHTML)))
      })
      .filter(date => date) 
}

const changeMonthNameToNumber = (date) => {
    const months = {Ene:"01", Feb:"02", Mar:"03", Abr:"04", May:"05", Jun:"06", Jul:"07", Ago:"08", Sep:"09", Oct:"10", Nov:"11", Dic:"12"};
    const searchRegExp = new RegExp(Object.keys(months).join("|"),"gi");

    return String(date).replace(searchRegExp, (monthName) => months[monthName])
}

const changeDateSepartor = (date) => {
    return String(date).replaceAll('.','-')
}

const invertDateFormat = (date) => {
    return String(date).split('-').reverse().join('-')
}

const skipRecord = (index) => {
    const offsetTD = 2
    return index < offsetTD
}
  
const valuesFormatter = (valores) => {
  return Array.from(valores)
    .map((valor, index) => {
  
        if (skipRecord(index)) return
  
        return valor.innerHTML
          .replaceAll('.','')
          .replaceAll(',','.')
    })
    .filter(valor => valor)
}

const formatter = {
    datesFormatter : datesFormatter,
    valuesFormatter: valuesFormatter
}

module.exports = formatter