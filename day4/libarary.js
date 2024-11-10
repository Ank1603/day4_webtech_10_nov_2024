"use strict";

class auth {
  constructor(username, password) {
    this.detail = [
      {
        email: "anki@gmail.com",
        password: "anki123@",
      },
      {
        email: "avnii@gmail.com",
        password: "anni@i123@",
      },
      {
        email: "nidhii@gmail.com",
        password: "nidhii123@",
      },
      {
        email: "vinee@gmail.com",
        password: "vinee123@",
      },
    ];
  }

  checkemail(emailid) {
    //console.log("Checking email....");
    console.log(emailid);
    var exp =
      /^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,})(\.[a-zA-Z]{2,})?$/;

    var result = exp.test(emailid);
    return result;
  }

  checkpassword(password) {
    console.log(password);
    var exp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#\$]).{4,12}$/;
    var result = exp.test(password);
    return result;
  }
  checkemailandpassword(email, password) {}
}

export default auth;
