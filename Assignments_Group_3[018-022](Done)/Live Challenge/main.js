let a = 10,
    b = "20",
    c = 80,
    d = "-100",
    e = "20",
    f = 30,
    g = true;
console.log(++a + +b++ + +c++ - +a++);

/*console.log(a);//12
console.log(c);//81
console.log(b);//21
*/
console.log(++a + -b + +c++ - -a++ + +a);
/*console.log(a);//14
console.log(c);//82
console.log(b);//21*/
console.log(--c + +b + --a * +b++ - +b * a + --a -  +true);
/*console.log(a);//12
console.log(c);//81
console.log(b);//22
*/
/*
operations: 1-[++a] 2-[+] 3-[+b] 4-[++] 5-[+] 6-[+c++] 7-[-] 8-[+a++]//11 + 20 + 80 - 11 [100]
Value: 1-[11] 2-[+] 3-[20] 4-21 5-[+] 6-[80] 7-[-] 8-[11]
Explain: 1-preincrement 2-plus operator 3-Unary Plus 4-postincrement 5-plus operator 6-postincrement 7-minus operator 8-postincrement

operations: 1-[++a] 2-[+] 3-[-b] 4-[+] 5-[+c++] 6-[-] 7-[-a++] 8-[+] 9-[+a]//13 - 21 + 81 + 13 + 14 [100]
Value: 1-[13] 2-[+] 3-[-21] 4-[+] 5-[81] 6-[-] 7-[-13] 8-[+] 9-[14]
Explain: 1-preincrement 2-plus operator 3-Unary Negation 4-plus operator 5-postincrement 6-minus operator 7-postincrement 8-plus operator 9-Unary Plus

operations: 1-[--c] 2-[+] 3-[+b] 4-[+] 5-[--a] 6-[*] 7-[+b++] 8-[-] 9-[+b] 10-[*] 11-[a] 12-[+] 13-[--a] 14-[-] 15-[+true]//81 + 21 + (13 * 21) - (22 * 13) + [12] - 1 [100]
Value: 1-[81] 2-[+] 3-[21] 4-[+] 5-[13] 6-[*] 7-[21] 8-[-] 9-[22] 10-[*] 11-[13] 12-[+] 13-[12] 14-[-] 15-[1]
Explain: 1-preincrement 2-plus operator 3-Unary Negation 4-plus operator 5-postincrement 6-minus operator 7-postincrement 8-plus operator 9-Unary Plus
*/
console.log(-d * +e); //2000
console.log(-d + +e * 3 + f -true * 17); //173