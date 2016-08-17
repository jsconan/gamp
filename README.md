# gamp
This small lib provides a four operations calculator API with workaround for the common floating-point issue.

## How to use

You can either require it using requireJS, import it inside your Node.js project, or just load it using regular script tag.

The API is pretty simple:

- `gamp.add(left, right)`: returns the result of the addition of the right operand to the left operand
- `gamp.sub(left, right)`: returns the result of the subtraction of the right operand from the left operand
- `gamp.mul(left, right)`: returns the results of the multiplication of the left operand by the right operand
- `gamp.div(left, right)`: returns the results of the division of the left operand by the right operand
- `gamp(value)`: will simply returns the approcahed precision of the provided decimal number. This precision is the decimal factor to translate the decimal value into an integer.

