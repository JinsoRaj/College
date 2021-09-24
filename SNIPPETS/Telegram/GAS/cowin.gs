

//////////////COWIN//////////////////////COWIN///////////////////////////COWIN///////////////////////////////COWIN/////





function vaccineCronJob() {
  const emailMeAt = 'hmmmmmmmm@gmail.com';
  const pincodes = ['691531', '691506', '691520', '691533'];  //umnr,ktr,veliyam,elamad
  const noOfFutureDaysToLookup = 3;

  runALoop(pincodes, noOfFutureDaysToLookup, emailMeAt);
}

function runALoop(pincodes, noOfFutureDaysToLookup, email) {
  let success = false;
  let successEmailContent = '';
  
  // for each day
  for (let i = 0; i < noOfFutureDaysToLookup; i++) {
    let date = new Date();
    date.setDate(date.getDate() + i);
    date = getMassagedDate(date);
    Logger.log(date);

    // and each pincode
    for (pincode of pincodes) {
      const response = fetchSlotsByPincode(pincode, date);
      const centers = JSON.parse(response).centers;

      if (!centers) {
        Logger.log('ERROR: Could not find centers field. Response format might have been altered.');
        continue;
      }

      if (!centers.length) {
        Logger.log("WARN: No center found for given pincode & date");
        continue;
      }

      const { district_name, block_name } = centers[0];
      Logger.log(`INFO: Found ${centers.length} centers in ${district_name} (${block_name}) for ${pincode}`);


      const successStr = checkForSlotAvailablity(centers);
      if (successStr.length > 0) {
        success = true;
        successEmailContent = `${successEmailContent}\n${date} | ${block_name} - ${district_name} - ${pincode}`;
        successEmailContent = `${successEmailContent}\n${successStr}\n\n`
      }
    }
  }

  Logger.log(
    success ? 
      'Wow, there\'s a slot available, book it now :)' :
      'Oops, no slot available for now :('
  ); 

  if (success) {
    GmailApp.sendEmail(email, '⚡⚡⚡ Vaccine Slot found', successEmailContent);
  }
}

function fetchSlotsByPincode(pincode, date) {
  var params = { 
  headers: { 'Content-Type': "application/json", 'Accept': "application/json",
             'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:87.0) Gecko/20100101 Firefox/87.0'},
  muteHttpExceptions: true,
  method: "GET",
  contentType: "application/json",
  validateHttpsCertificates: false,
};
  const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=691531&date=06-05-2021`;
  Logger.log(url);
  const response = UrlFetchApp.fetch(url, params);
  if (!response) {
    Logger.log("ERROR: Could not fetch data from co-vin.in server");
    return {};
  }
  //const newresp = response.getContentText()
  Logger.log(response);
  return response;
  //return newresp;
}

function checkForSlotAvailablity(centers) {
  let noSessionsFoundAtAnyCenter = true;
  let no18PlusSession = true;
  let magicSlotCnt = 0;
  let successStr = '';

  // for each center
  for (center of centers) {
    const { sessions } = center;
    if (sessions) {

      // check in each session
      for (session of sessions) {
        noSessionsFoundAtAnyCenter = false;

        // whether there is slot available for 18+
        if (session.min_age_limit < 45) {
          no18PlusSession = false;

          // and has any capacity
          if (session.available_capacity > 0) {
            Logger.log(`SUCCESS: FOUND SLOT IN ${center.name}`);
            successStr = `${successStr}\n\t${center.name} = ${session.available_capacity} capacity`;
            magicSlotCnt++;
          }
        }
      }
    } 
  }

  if (noSessionsFoundAtAnyCenter) {
    Logger.log("WARNING: No session was found in any of the center. Response format might have been altered.");
  }

  if (no18PlusSession) {
    Logger.log("WARNING: No 18+ session was found in any of the centers :(");
  }

  return successStr;
}

function getMassagedDate(date) {
  let dd = String(date.getDate()).padStart(2, '0');
  let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = date.getFullYear();

  return dd + '-' + mm + '-' + yyyy;
}






/////////////////////////////////COWIN//////////////////////////////COWIN///////////////////////////COWIN/////////////////////



