const consts=require("./consts")
const handleComplaint=function(complaint={text:"",type:""}){
if(complaint.type===consts.FINANCE){console.log("Money doesn't grow on trees, you know.")}
if(complaint.type===consts.EMOTIONS){console.log("It'll pass, as all things do, with time.")}
if(complaint.type===consts.WEATHER){console.log("It is the way of nature. Not much to be done.")}
}
module.exports.handleComplaint=handleComplaint
