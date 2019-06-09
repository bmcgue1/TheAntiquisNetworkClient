import axios from "axios";

export function Login(user, pass) {
  console.log("we are in the service");
  let webT = "222";
  axios
    .post(
      `http://antiquisnetwork-env.spkqqnhv3w.us-east-1.elasticbeanstalk.com/login`,
      {
        username: user,
        password: pass
      }
    )
    .then(res => {
      console.log(res.data);
      webT = res.data;
    })
    .catch(function(error) {
      console.log(error.status);
    });
  console.log("at this point the service should be done");

  return webT;
}
