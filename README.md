## Keyboard Restrict
Restrict the user input from keyboard inorder to reduce false input

## Installation
  > npm install keyboard-restrict --save
	
## Usage

>import KeyboardRestrict from "keyboard-restrict";

Call isAccessible method from your input field on onChange, key press event.

*Example :*

> **In ReactJS** \
`<input type = "text" onChange={(evt) => KeyboardRestrict.isAccessible(evt, "ALPHABET", () => this.handleFieldsChange(evt))} name = "name"/>`

So what happen here is, it will trigger this function and check the input from user based on the second argument if okay it will proceed the third argument. 

The third argument your function used for update the value.

We can call this using keypress, keyup and keydown event also.

## Available key restriction option :

- Alphebet : use key **ALPHABET**,
- Alphanumeric : use key **ALPHANUMERIC**,
- Number : use key **NUMBER**,
- Decimal Number : use key **DECIMAL_NUMBER**,
- IP Address : use key **IP_ADDRESS**,
- Port Range : use key **PORT_RANGE**,
- IP address with range : use key **IP_ADDRESS_RANGE**,
- IP address with subnet(CIDR Notation) : use key **IP_ADDRESS_SUBNET**,
- MAC address : use key **MAC_ADDRESS**,
- Alphanumeric with uppercase : use key **ALPHANUMERIC_UPPERCASE**

 // TODO
Copyright © 2018 *Balachandar K*, released under the MIT license
