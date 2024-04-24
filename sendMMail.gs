
var mailApp = MailApp;

var sheetos = SpreadsheetApp.getActiveSpreadsheet();
var tab2 = sheetos.getSheetByName("configs");

var userEmail0 = tab2.getRange("G13:J13").getValue();
var userEmail1 = tab2.getRange("G14:J14").getValue();
var userEmail2 = tab2.getRange("G15:J15").getValue();
var userEmail3 = tab2.getRange("G16:J16").getValue();


function sendMail() {
  var emailsList = [userEmail0,userEmail1,userEmail2,userEmail3];
  var subject = "[Web Watchdog] A notice related!";
  var mensage = emailTemplate; // provida por templateMail.gs
  var emailIsSend = tab2?.getRange("H18")?.getValue() == "LIGADO" ? false : true;
  
  if(!emailIsSend){
    for(var i=0; i < emailsList.length; i++){
      if(emailsList[i] !== ''){
        try{
          mailApp.sendEmail({
            to: emailsList[i],
            subject: subject,
            htmlBody: mensage
          });
        }catch{
          console.error("Erro ao enviar e-mail:", error);
        }
      }
    }
    tab2?.getRange("H18")?.setValue("DESLIGADO");
    console.log("enviou o email");
  }

 Logger.log(`Sua cota diaria de envio grátuito: ${mailApp.getRemainingDailyQuota()}`) 
}
