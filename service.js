const CircuitBreaker = require("./circuit-breaker");

const circuitBreaker = new CircuitBreaker();

export class PostService {
  BASE_URL = "https://jsonplaceholder.typicode.com/posts";

  async getPosts() {
    return circuitBreaker.callService({
      method: "get",
      url: this.BASE_URL,
    });
  }
  async getPostById(id) {
    return circuitBreaker.callService({
      method: "get",
      url: this.BASE_URL + `/${id}`,
    });
  }

  async createPost(data) {
    return circuitBreaker.callService({
      method: "post",
      data,
      url: this.BASE_URL + `/${id}`,
    });
  }
}
