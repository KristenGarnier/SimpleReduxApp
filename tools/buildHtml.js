import fs from 'fs'
import cheerio from 'cheerio'
import colors from 'colors'

/*eslint-disable no-console*/

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if(err) {
    return console.log(err.red)
  }

  const $ = cheerio.load(markup)

  $('head').prepend('<link rel="stylesheet" href="style.css">')

  fs.writeFile('dist/index.html', $.html(), 'utf8', (err) => {
    if(err) {
      return console.log(err.red)
    }

    console.log('index.html has been written to /dist'.green)
  })
})
