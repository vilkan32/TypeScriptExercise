import HttpRequest from "./request";

const Data = new HttpRequest(
  "GET",
  "http://google.com",
  "HTTP/1.1",
  "",
);

console.log(Data);