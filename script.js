// JavaScript Document

console.time('Really_Long_Loop');
var things = new Array();
for(b = 1; b < 100000; b = b+1) {
	things[b];
}
console.timeEnd('Really_Long_Loop');