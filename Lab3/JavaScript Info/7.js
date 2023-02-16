let a = 1, b = 1;
alert( ++a ); // 2
alert( b++ ); // 1
alert( a ); // 2
alert( b ); // 2

let a = 2; //a = 4
let x = 1 + (a *= 2); //x = 5

"" + 1 + 0 = "10"
"" - 1 + 0 = -1
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5"
"  -9  " - 5 = -14
null + 1 = 1
undefined + 1 = NaN
" \t \n" - 2 = -2

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
alert(+a + +b); // 3

5 > 4 //true
"ананас" > "яблоко" //false
"2" > "12" //true
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n" //false

if ("0") {
    alert( 'Привет' );
} //-> Привет

alert( null || 2 || undefined ); //2
alert( alert(1) || 2 || alert(3) ); //1 2
alert( 1 && null && 2 ); //null
alert( alert(1) && alert(2) ); //1 undefined
alert( null || 2 && 3 || 4 ); //3
if (age >= 14 && age <= 90);
if (age < 14 || age > 90);
if (-1 || 0) alert( 'first' ); //first
if (-1 && 0) alert( 'second' ); //
if (null || -1 && 1) alert( 'third' ); //third
