/* 
INPUT: 
{"var_id_1":interval1, "var_id_2":interval2, ...}
*/
var logRequest = prompt("Provide log request");

logRequest = JSON.parse(logRequest);
console.log(logRequest);
var toLog = {};
for(const [paramName, interval] of Object.entries(logRequest)) {
    toLog[paramName] = document.getElementById(paramName);
    setInterval(() => {console.log(`LOGPARAM ${paramName}: ${toLog[paramName].value}`);},interval);   
}