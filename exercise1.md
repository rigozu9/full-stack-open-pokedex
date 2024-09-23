I chose C++ as the language. I've never used it before but im interested in learning it. 

For linting I found Clang-Tidy to be the best linting tool for C++. 
For testing Google Test seems to be the most suitable for unit testing C++. 
For building the project I chose CMake. With these tools linting, testing and building should be easy.

I found a few alternatives for CI platforms. 
CircleCI has good flexibility and customization when it comes to CI/CD and is good for both small and large projects. There are also other options than cloud platform in CircleCI. 
Semaphore is designed for agile software development practises. It has high performance so building and testing is quicker than usual.
TeamCity is a good CI for larger projects because of its integrations with tools different IDE's and has support for many C++ tool. It also has a very user-friendly interface. 

This setup with only 6 people in the team is better suited for cloud-based enviroment. Its cheaper and as the team isn't large the applicaiton wont be large enough to be worth to be self hosted. Also its easier to setup so the applicatioN. 

To choose between self-hosted and cloud-based enviroment you need to take into account the size of the application and the team. Also what kind of application it is, ex. game or a web service. Will it use a graphics card to run test or no? What kinda of a budget there is for the application. 