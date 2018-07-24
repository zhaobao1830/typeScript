/**
 * Created by zb on 2018/7/24.
 */
function greeter(person: String) {
  return "Hello, " + person;
}

let user = "zb";

document.body.innerHTML = greeter(user);
