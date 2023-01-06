// const axios = require('axios').default;
// const express = require('express');

// const app = express();

// app.get('/login', (_, rs) => {
//   rs.send('335221');
// });

// app.get('/hour', (_, rs) => {
//   // let date = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Moscow" }));
//   // let hour = date.getHours();
//   // console.log(date);
//   // if (hour < 10) {
//   //   hour = '0' + hour;
//   // } else {
//   //   hour = '' + hour;
//   // }
//   // rs.send(hour);
//   rs.send('13');
// })

// app.listen(80, () => {
// });


// const axios = require('axios').default;
// const express = require('express');
// const https = require('https');

// const app = express();

// app.get('/login', (req, res) => {
//   console.log("rq1: " + req.ip);
//   res.send('335221')
// });

// app.get('/id/:N', (req, res) => {
//   console.log("rq2: " + req.ip);
//   console.log("ID: " + req.params['N']);
//   const agent = new https.Agent({
//     rejectUnauthorized: false
//   });
//   const result = axios({
//     method: 'get',
//     url: 'http://nd.kodaktor.ru/users/' + req.params['N'],
//     httpsAgent: agent,
//     transformRequest: [(data, headers) => {
//       delete headers.common['Content-Type'];
//       return data;
//     }, ...axios.defaults.transformRequest]
//   });
//   console.log(result)
//   res.send(result.login)
//   res.send("Hello world!");
// });

// app.all('*', function(req, res) {
//   console.log("Unmatched RQ")
//   res.send("404!");
// });

// app.listen(80, () => {
// });

// const { privateDecrypt: dec } = require('crypto');
// const express = require('express');
// const busboy = require('busboy');
// const app = express();

// app.get('/login', (req, res) => {
//   res.send('335221')
// });

// app.post('/decypher', async (req, res) => {
//   const r = { key: '', secret: [] }
//   const boy = busboy({ headers: req.headers });

//   boy.on(
//     'file',
//     (fieldname, file) =>
//       file.on('data', data => {
//         if (fieldname == 'key') {
//           r[fieldname] += data
//         } else {
//           r[fieldname].push(data)
//         }
//       })
//   )

//   boy.on(
//     'finish',
//     () => {
//       r.secret = Buffer.concat(r.secret)
//       try {
//         res.send(String(dec(r.key, r.secret)))
//       } catch {
//         res.send('ERROR')
//       }
//     }
//   )

//   req.pipe(boy)
// });
// 
// app.listen(80, () => {
//   console.log('server started');
// });


// const express = require('express');
// const multer = require('multer')
// const upload = multer({ dest: '.' })
// var sizeOf = require('image-size')
// var fs = require('fs');

// const app = express();


// app.get('/login', (req, res) => {
//   res.send('335221')
// });

// app.post('/size2json', upload.single('image'), function(req, res, next) {
//   let latestModFile = undefined;
//   let latestModDate = undefined;
//   var list = fs.readdirSync(".");
//   list.forEach(function(file) {
//     console.log(file);
//     stats = fs.statSync(file);
//     console.log(stats.mtime);
//     console.log(stats.ctime);
//     if (latestModDate === undefined || latestModDate < stats.mtime) {
//       latestModDate = stats.mtime;
//       latestModFile = file;
//     }
//   })

//   console.log('Latest file is ' + latestModFile);
//   sizeOf('./' + latestModFile, function(err, dimensions) {
//     if (err) throw err
//     res.send(`{"width": ${dimensions.width},"height":${dimensions.height}}`)
//   })
// });

// app.listen(80, () => {
//   console.log('server started');
// });

// const express = require('express');
// var Jimp = require('jimp');

// const app = express();


// app.get('/login', (req, res) => {
//   res.send('335221')
// });

// app.get('/makeimage', async function(req, res) {
//   const { width, height } = req.query;
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   const img = await Jimp.create(+width, +height, randomColor);

//   res.end(await img.getBufferAsync('image/png'));
// });

// app.listen(80, () => {
//   console.log('server started');
// });
