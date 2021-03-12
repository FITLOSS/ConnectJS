# ConnectJS
A simple way to connect event of each HTML element By javascript  

**You can connect(add) relationship of elements at anywhere dont need override fully event function**

**You can disconnect(remove) relationship of elements at anywhere dont need override fully event function**
# Function Introduction

## on(callback function):(not jquery's on , is ConnectJS's on):
ConnectJS must use on to bind event

## connect(css selector,event name,callback function):
connect mutiple html elements(means if bind event active then will do what you define to effect another element/elements)
* callback function:
  * parameter(event,target,event owner):
    * typeof target is NodeList
      
* [example1](https://github.com/FITLOSS/ConnectJS/blob/main/Example1.html)
* [if not use ConnectJS](https://github.com/FITLOSS/ConnectJS/blob/main/Example1_NotUseConnect.html)

## disconnect(css selector,event name):
disconnect mutiple html elements(means you can remove part of event dont need to override full function)
* [example2](https://github.com/FITLOSS/ConnectJS/blob/main/Example2.html)
* [if not use ConnectJS](https://github.com/FITLOSS/ConnectJS/blob/main/Example2_NotUseConnect.html)

## Todo
* Add more introduction how about other function and how to use/debug 
# function list
* on
* connect
* disconnect
* connects
* disconnects
