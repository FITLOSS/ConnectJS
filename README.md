# ConnectJS
A simple way to connect event of each HTML element By javascript  

**You can connect(add) relationship of elements at anywhere dont need override fully event function**

**You can disconnect(remove) relationship of elements at anywhere dont need override fully event function**

**But cant using this inside callback function need to follow below using parameter get something same like before**
  * ie: event.target inside callback function
  * [example0](https://github.com/FITLOSS/ConnectJS/blob/main/Example0.html)
# Function Introduction

## on(callback function):(not jquery's on , is ConnectJS's on):
ConnectJS must use on to bind event
* callback function:
  * parameter(event):
* [online example0](https://fitloss.github.io/ConnectJS/Example0.html)
* [example0](https://github.com/FITLOSS/ConnectJS/blob/main/Example0.html)
## connect(css selector,event name,callback function):
connect mutiple html elements(means if bind event active then will do what you define to effect another element/elements)
* callback function:
  * parameter(event,target,event owner):
    * typeof target is NodeList
* [online example1](https://fitloss.github.io/ConnectJS/Example1.html)
* [example1](https://github.com/FITLOSS/ConnectJS/blob/main/Example1.html)
* [if not use ConnectJS](https://github.com/FITLOSS/ConnectJS/blob/main/Example1_NotUseConnect.html)

## disconnect(css selector,event name):
disconnect mutiple html elements(means you can remove part of event dont need to override full function)
* [online example2](https://fitloss.github.io/ConnectJS/Example2.html)
* [example2](https://github.com/FITLOSS/ConnectJS/blob/main/Example2.html)
* [if not use ConnectJS](https://github.com/FITLOSS/ConnectJS/blob/main/Example2_NotUseConnect.html)

## Todo
* Add more introduction how to use other functions && debug
# Function List
* on
* connect
* disconnect
* connects
* disconnects
