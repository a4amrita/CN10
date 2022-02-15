## Run app 

npm install 

node server.js

## Test Application

http://localhost:7005

# Docker 

## To Build Docker Image

docker build -t node-app .

## To check docker image

docker images

## To run docker container

docker run -p 7005:8081 node-app

## Test application

http://localhost:7005

# Kubernetes

## Create deployment 

Kubectl apply -f kubernetes.yaml

## Test application 
Kubectl get service
