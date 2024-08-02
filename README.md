# GenAPP
GenAPP (Genomics for Animal &amp; Plant Pathogens) is a bioinformatics dashboard for GAPDC2. 

## Dependencies
GenAPP is a Spring Boot web application that depends on the Spring Boot framework and is written in Java, Groovy and React. 
To contribute to GenAPP, you must have a Java Development Kit (JDK) installed. I recommend using SDKMAN! to handle this for Unix systems.
In the terminal, run:
```
curl -s "https://get.sdkman.io" | bash
```
```
source "$HOME/.sdkman/bin/sdkman-init.sh"
```
To check install is correct, run:
```
sdk version
```
Now, install your JDK. This should install the default latest version:
```
sdk install java
```
For reference, the latest version at time of writing this is 22.0.1. It is important to keep your development environment & all dependencies up-to-date.
The project uses Maven as a build automation & management tool. To install Maven, run: 	
```
sdk install maven
```
To check Java & Maven have installed correctly, run:
```
mvn -version
```
