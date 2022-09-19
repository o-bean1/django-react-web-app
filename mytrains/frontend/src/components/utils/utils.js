function parseScrapeData(dateInput) {
    
    const date_month_abrev = (String(dateInput)).slice(4,7)
    const monthsShort = {
        Jan: '01',
        Feb: '02',
        Mar: '03',
        Apr: '04',
        May: '05',
        Jun: '06',
        Jul: '07',
        Aug: '08',
        Sep: '09',
        Oct: '10',
        Nov: '11',
        Dec: '12',
      };
    const date_month = monthsShort[date_month_abrev] 
   

    const date_day = (String(dateInput)).slice(8,10)
    const date_year = (String(dateInput)).slice(13,15)
    const date_full = date_day + date_month + date_year
    // console.log(date_full)
    return [date_day, date_month, date_year, date_full] 
  }
  
  function scrapeData(startDate) {

    // helper function used later on
    function addWeeks (weeks, date = new Date()) {  
        date.setDate(date.getDate() + weeks * 7)
        return date
    }

   
    //takes date string from calender and returns array containing strings for day,month,year
    const parsedDate = parseScrapeData(startDate)
    var date_day = parsedDate[0]
    var date_month = parsedDate[1]
    var date_year = parsedDate[2]
    var date_full = parsedDate[3]
    const str = `20${date_year}-${date_month}-${date_day}`;
    const dateObject = new Date(str);
    
    const dates=[]
    const URLs=[]

    for (let i = 0; i < 3; i++) {
        var dateObjectIncremented = addWeeks(i, new Date(dateObject))
        // console.log(dateObjectIncremented)
        var parsedDataforIncrement = parseScrapeData(dateObjectIncremented)
        date_day = parsedDataforIncrement[0]
        date_month = parsedDataforIncrement[1]
        date_year = parsedDataforIncrement[2]
        date_full = parsedDataforIncrement[3]
        var myURL =  `https://ojp.nationalrail.co.uk/service/timesandfares/GLM/SHF/${date_day}${date_month}${date_year}/0900/dep`
        URLs.push(myURL)
        dates.push(date_full)
        
        // const channelData = scrapeChannel(myURL)

      }

      console.log(dates)
      return [dates, URLs] ;
  }

  export default scrapeData