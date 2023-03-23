# node-clean-boilerplate
 nodejs boilerplate that follows Clean Architecture principles
 
 ## Clean Architecture ?
 if you are not familiar with clean & its principles, following presentation plus docs of this repo could help you grasp some concepts.
[Clean Architecture Keynote](https://www.linkedin.com/posts/uzair004_clean-architecture-activity-7044745268042293248-6CWx?utm_source=share&utm_medium=member_desktop)


## Project structure

```
src
 └ adapters                → presentation layer to external world, controllers, serializer (formatter) & routes
   └ controllers           → recieve request from routes, send response back, forward req to usecase
   └ serializers           → format/structurize output for frontend
 └ application             → app specific logic, usecases(orchestrate the flow), security
   └ security              → abstraction/interface for security & Auth
   └ usecase               → controls business flow, take cross entity actions
 └ domain                  → core business rules, entities
   └ entities              → core entities with business rules & constraints, i.e user, order
   └ repositories          → abstractions for database access calls
 └ infrastructure          → external libraries, frameworks, databases & tools implementations
```


### Contributions
Please look into [Issue Section](https://github.com/uzair004/node-clean-boilerplate/issues) to contribute to this boilerplate.


 
 
 ### Inspirations
 #### Repos
 - [repo1](https://github.com/joshuaalpuerto/node-ddd-boilerplate)
 - [repo2](https://github.com/royib/clean-architecture-node)
 - [repo3](https://github.com/jbuget/nodejs-clean-architecture-app)
 - [repo4](https://github.com/panagiop/node.js-clean-architecture)
 - [repo5](https://github.com/joshuaalpuerto/node-ddd-boilerplate)
 
 #### Readings
 - [Node Clean Deep Dive](https://roystack.home.blog/2019/10/22/node-clean-architecture-deep-dive/)
 - [Youtube](https://www.youtube.com/watch?v=CnailTcJV_U&list=PLvyskH67SSREI0gEi3x3Tt2P4QLZS86MZ)
