//os = v_name , require = keyword, os =package names |  
let os = require('os');


// on which platform the node.js is running 
console.log('OS Platform:', os.platform()); //OS Platform: win32

// on which architecture the node.js is running
console.log('OS Architecture:', os.arch()); //OS Architecture: x64


// CPU architecture details
// console.log('CPU Architecture:', os.cpus());  

console.log('CPU Architecture: core', os.cpus().length); // CPU Architecture: 4

 
// Total memory available in the system
console.log('Total Memory:', os.totalmem()); // Total Memory: 170141183460

// Free memory available in the system
console.log('Free Memory:', os.freemem()); // Free Memory: 123456789

console.log("uptime :", os.uptime()); // Uptime: 123456