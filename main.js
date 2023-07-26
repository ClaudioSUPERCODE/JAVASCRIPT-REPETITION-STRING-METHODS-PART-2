
// STRING METHODS - LEVEL 1_1 - LENGTH

// Erstelle zwei Variablen firstName und lastName.
// Zeige die Länge der beiden Variablen in der Konsole an.
// Erstelle noch eine Variable fullName, die die Summe der beiden Variablen ist.
// Zeige die Länge der Variable fullName in der Konsole an.

const firstName = "Claudio"
const lastName = "Aleo"
const fullName = firstName + lastName

console.log("firstName-length: ", firstName.length)
console.log("lastName-length: ", lastName.length)
console.log("fullName-length: ", fullName.length)


// STRING METHODS - LEVEL 1_2 - INDEXOF

// Verwende den Befehl indexOf(), um die Position eines Zeichens in einer Zeichenkette als Ergebnis in der Konsole zu erhalten.

const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."

// Suche die Position des Zeichens “h” in der Variablen txt.
// Suche die Position des Zeichens “Earth” in der Variablen txt.
// Suche die Position des Zeichens “Moon” in der Variablen txt.

console.log("h", txt.indexOf("h"))
console.log("Earth", txt.indexOf("Earth"))
console.log("Moon", txt.indexOf("Moon"))

// Bei Moon ist das Ergebnis -1 da das Wort Moon im String nicht auftaucht.


// STRING METHODS - LEVEL 1_4 - SLICE

// Verwende den Befehl slice(), um das Ergebnis zu erhalten.

const A = 'Susi is going to codingschool';

// Verwende die Methode "slice" um in deinem HTML folgendes angezeigt zu bekommen:
// Susi
// is
// is going to school
// school
// Susi is school

// Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar+"<br>"), um das Ergebnis im Dokument auszugeben.
// myVar ist hier nur ein Beispiel und kann durch den Namen deiner Variablen ersetzt werden.


// console.log(A.indexOf("school"))
// console.log(A.slice(5,17))

let slice1 = A.slice(0,4)
let slice2 = A.slice(5,7)
let slice3 = A.slice(5,17) + A.slice(23,29)
let slice4 = A.slice(23,29)
let slice5 = A.slice(0,8) + A.slice(23,29)

document.write(slice1 + "<br>" + slice2 + "<br>" + slice3 +  "<br>" + slice4 + "<br>" + slice5 + "<br>")


// STRING METHODS - LEVEL 1_5 - SUBSTRING

// Verwende den Befehl substring() um die gewünschten Zeichenketten zu erhalten.

const text = 'Susi is back from codingschool';

// Zeige mit Hilfe der Methode "substring" diese Ausgabe in einem HTML-Dokument an:

// Susi
// is 
// school
// Susi is school

// Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar+"<br>"), um das Ergebnis anzuzeigen.
// myVar ist hier nur ein Beispiel und kann durch den Namen deiner Variablen ersetzt werden.

let sub1 = text.substring(0,4)
let sub2 = text.substring(5,7)
let sub3 = text.substring(24,30)
let sub4 = sub1 + " " + sub2 + " " + sub3

document.write(sub1 + "<br>" + sub2 + "<br>" + sub3 +  "<br>" + sub4 + "<br>")


// STRING METHODS - LEVEL 1_7 - REPLACE

// Verwende den Befehl replace(), um die gewünschten Zeichenketten zu erhalten.

const text2 = "Sam is good at codingschool"

// Zeige mit der Methode "replace" diese Ausgabe in einem HTML-Dokument an:

// Sam is bad at school
// Susi is good at school 
// Sam is good at tennis

// Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar+"<br>"), um das Ergebnis anzuzeigen.
// myVar ist hier nur ein Beispiel und kann durch den Namen deiner Variablen ersetzt werden.

let replace1 = text2.replace("good at codingschool", "bad at school")
let replace2 = text2.replace("Sam is good at codingschool", "Susi is good at school")
let replace3 = text2.replace("codingschool", "tennis")

document.write(replace1 + "<br>" + replace2 + "<br>" + replace3 +  "<br>")


// STRING METHODS - LEVEL 1_8 - toUPPERCASE - toLOWERCASE

// Verwende den Befehl toLowerCase(), toUpperCase(), um die gewünschten Zeichenketten zu erhalten.

const text3 = "Sam is going to codingschool"

// Erzeuge mit den Methoden "toLowerCase-toUpperCase" diese Ausgabe in einem HTML-Dokument. Nutze alle Methoden, die du bereits gelernt hast.

// SAM IS GOING TO SCHOOL
// sam is going at school 
// SAM is going to SCHOOL
// sam IS GOING TO school
// Sam Is Going To School

// Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar+"<br>"), um das Ergebnis anzuzeigen.
// myVar ist hier nur ein Beispiel und kann durch den Namen deiner Variablen ersetzt werden.

let text3_1 = text3.replace("codingschool", "school")


const sam1 = text3_1.toUpperCase()
const sam2 = sam1.toLowerCase()
const sam22 = sam2.replace("to", "at")
const sam3 = sam1.replace("IS GOING TO", "is going to")
const sam4 = sam2.replace("is going to", "IS GOING TO")
const sam5 = sam1.replace("SAM IS GOING TO SCHOOL", "Sam Is Going To School")

document.write(sam1 + "<br>" + sam22 + "<br>" + sam3 + "<br>" + sam4 + "<br>" + sam5 + "<br>" )


// STRING METHODS - LEVEL 1_9 - CONCAT

// Verwende die Methode concat(), um die gewünschten Zeichenketten zu erhalten.

const con1 = "Sam is going to codingschool"
const con2 = "Susi"
const con3 = "and" 

// Erzeuge mit "concat" diese Ausgabe in einem HTML-Dokument. Nutze alle Methoden, die du bereits gelernt hast.

// Sam is going to school and to the movie theater
// Sam is going to movie theater
// Susi and Sam are going to school
// Susi and Sam are going to gym and to the movie theater
// Susi is going to school and to the movie theater

// Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar+"<br>"), um das Ergebnis anzuzeigen.

const concat1 = con1.replace("codingschool", "school")
const concatRes1 = concat1.concat(" and to the movie theater")

const concat2 = con1.slice(0,16)
const concatRes2 = concat2.concat("movie theater")

const concat3 = con2.concat(" ", con3, " Sam are ")
const concatRes3 = concat3.concat(concat1.slice(7,22))

const concat4 = concatRes3.replace("school", "gym")
const concatRes4 = concat4.concat(" and to the movie theater")

const concatRes5 = con2.concat(concatRes1.slice(3,47))


document.write(concatRes1 + "<br>" + concatRes2 + "<br>" + concatRes3 + "<br>" + concatRes4 + "<br>" + concatRes5 + "<br>" )