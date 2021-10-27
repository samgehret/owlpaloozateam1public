var Analytics = require('analytics-node')
var analytics = new Analytics('9N5N1nCv2gT53f8CFod6P55oQaCvv9xd')

function identifyFromTextMessage(text) {
  const payload = parseTextForIdentifyCall(test)
  analytics.identify(payload)
}

function parseTextForIdentifyCall(text) {
  //remove 'add' from the text and trim down the spaces before capturing phone number
    let remainder = text.substring(3,text.length)
    remainder = remainder.trim()

  //save phone number and trim down the spaces before capturing traits
    const phone_number = remainder.substring(0,10)
    remainder = remainder.trim()
    remainder = remainder.substring(10,remainder.length)

  //save traits
    let traits_array = remainder.split(",")

  // clean traits of potential spaces for the identify call
    for(let i=0; i<traits_array.length; i++) {
      traits_array[i] = traits_array[i].trim()

      let key_value = traits_array[i].split(':')
      first = key_value[0].trim() //e.g. title
      second = key_value[1].trim() //e.g. sales engineer

      traits_array[i] = [first,second]
    }

  //construct the traits object
  const traits_object = Object.fromEntries(traits_array)

  //construct the entire payload
  const identify_payload = {userId:phone_number, traits:traits_object}
  return identify_payload
}



// Un comment out the below and run node "twilio_identify" to test
// const test = "add 2038037011 title: sales engineer, company: segment, city: san francisco"
// identifyFromTextMessage(test)
