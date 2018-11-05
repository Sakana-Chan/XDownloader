const config = {
  dir: 'Test',                             // dir want to save in 
  url: `https://exhentai.org/g/1220093/9f6fcb97cf`, // url need to change 
  opt: false,                             // if check option pages
  origin: true,                           // origin mode is used for download original sized images when aviliable
  page: {                                 // when opt mode is switched open you can download the specific pages range 
    start: 1,
    end: 10
  },
  viewMode: 'huge' // default            // huge or normal
}

// Please do not mind the logs below

console.log(`The Download Dir : ${config.dir}`)
console.log(`The Download Url : ${config.url}`)
console.log(`Your ViewMode Status : ${config.viewMode}\n`)
console.log(`The Origin Size Mode Status : ${config.origin}\n`)

if(config.opt){
  console.log(`The optional page start from page : ${config.page.start}`)
  console.log(`The optional page end in page : ${config.page.end}`)
  console.log(`\nSet opt as false to cancel optional page download :)\n`)
}
else{
  console.log(`\nDefault downloading whole pages :)`)
  console.log(`Set opt as true and configue optional page config\n`)
}

module.exports = {
config
} 