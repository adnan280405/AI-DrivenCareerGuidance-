##
## Build stage
##
FROM maven:3.9.9-eclipse-temurin-21 AS build

WORKDIR /app

# Copy only what is needed first to leverage Docker layer caching
COPY pom.xml ./
RUN mvn -q -DskipTests dependency:go-offline

# Now copy the source and build the runnable Spring Boot jar
COPY src ./src
RUN mvn -DskipTests package

##
## Runtime stage
##
FROM eclipse-temurin:21-jre

WORKDIR /app

# Copy the built jar (excludes the *.jar.original backup)
COPY --from=build /app/target/AICareer-*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/app.jar"]
