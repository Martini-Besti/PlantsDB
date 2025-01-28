import axios from "axios";
const url = "http://localhost:3001/plants/";



//3001 because back end runs on 3001, front end runs on 3000


export class ApiClient {
  constructor(tokenProvider, logoutHandler) {
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }



  async authenticatedCall(method, url, data) {
    return axios({
      method,
      url,
      headers: {

        //grab the token from local storage and send it with the request
        authorization: this.tokenProvider(),
      },
      data,
    }).catch((error) => {
      if (error.response.status === 403) {
       //clears the local storage
        this.logoutHandler();
        return Promise.reject();
      } else {
        throw error;
      }
    });
  }

  getTodos() {
    return this.authenticatedCall("get", url);
  }

  addTodo(data) {
    return this.authenticatedCall("post", `${url}create`, {
      title: data.title,
      completed: data.completed
    });
  }

  async login(username, password) {
    return await axios({
      method: "post",
      url: `${url}auth`,
      data: { username, password },
    });
  }
}