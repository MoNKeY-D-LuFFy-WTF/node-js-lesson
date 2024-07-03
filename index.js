// const os = require("os");
// const math = require("./my_math");
// let res = os.platform();
// console.log(res);
// console.log(math.add(5, 6));

// const fs = require("fs");
// const res = fs.readFileSync("some.txt", "utf-8");
// console.log(res);

// fs.writeFileSync("some.txt", "hello node js", (err, data) => {
//   console.log(data);
// }); // запис в файле что то

//Работа с папками
// const fs = require("fs");
/*Создать mkdir */
// fs.mkdir("text-files", () => {
//   fs.writeFile("./text-files/some.txt", "Hello", () => {});
// });
/*Удалить  удаление файла unlunk удаление папки rmdir*/
// fs.unlink("./text-files/some.txt", () => {
//   fs.rmdir("./text-files", () => {});
// });

const http = require("http");
const fs = require("fs");
let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  if (req.url == "/") {
    fs.createReadStream("./templates/index.html").pipe(res);
  } else if (req.url == "/about") {
    fs.createReadStream("./templates/about.html").pipe(res);
  } else {
    fs.createReadStream("./templates/error.html").pipe(res);
  }
});
const PORT = 3000;
const HOST = "localhost";
server.listen(PORT, HOST, () => {
  console.log(`Сервер запушен в http://${HOST}:${PORT}`);
});
