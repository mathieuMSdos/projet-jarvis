//url and end points to communicate with our data base

const vpnFrancois = "http://francois-fric.vpnuser.lan:8080/api/";
const realBackFrancois = "http://francoisfric-server.eddi.cloud";
const realBackYvo = "http://yvonnicksolon-server.eddi.cloud";
const realBackMathieu = "http://mathieusouzani-server.eddi.cloud";

const jsonServerLocal = "http://localhost:5000/";
const urlBackEndOnline = `${realBackMathieu}/projet-3-jarvis-back/public/api/`; // à changer !!!!!!!!

// to start app when backend is down
// export const skipLogin = "";

const apiEndPoints = {
  urlBackOffice: `${realBackMathieu}/projet-3-jarvis-back/public/backoffice`, // à changer !!!!!!!!
  urlSignUp: `${realBackMathieu}/projet-3-jarvis-back/public/`, // à changer !!!!!!!!
  apiAdress: urlBackEndOnline, //à changer par la bonne variable
  logIn: "login_check",
  home: "home",
  movies: "movies",
  add_movie: "add_movie",
  delete_movie: "delete_movie",
  create_account: "create-account",
};

export default apiEndPoints;
