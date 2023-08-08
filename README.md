For handling exceptions for downstream services we can use a design pattern called circuit breaker.

Basically we add a service called circuit breaker which will handle the network calls to the downstream service.

For every endpoint we create an object as below

```
 {
      "post.https://jsonplaceholder.typicode.com/posts": {
        failures: 0,
        coolDownPeriod: this.coolDownPeriod,
        circuit: "CLOSED",
      },
    }
```

When the circuit is in `CLOSED` state it means that the downstream service is working as expected and we will get the api response.

We have a function `callService` which is responsibile for the network calls and based on the responses we set the state of circuit for that url to either `OPEN` or `CLOSED`.

Circuit is set to closed if the failure threshold croses the limit set in the CircuitBreaker class.

Code referenced from - [webdevjourneyWDJ/NodeJS_Microservices](https://github.com/webdevjourneyWDJ/NodeJS_Microservices/blob/master/art-meetup/server/lib/CircuitBreaker.js)
