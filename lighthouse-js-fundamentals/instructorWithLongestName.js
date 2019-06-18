const instructorWithLongestName = function(instructors) {
  var longest = 0;
  var longestName = [];
  instructors.forEach(function(item) {
    if (item.name.length > longest) {
      longest = item.name.length;
      longestName = [item];
    } else if (item.name.length === longest) {
      longestName.push(item);
    };
  });
  return longestName;
}

var longest = instructorWithLongestName(instructors);
console.log(longest);

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]);
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]);

instructors[0].name.length;


let instructors =
  [{name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}];

for (var i = 0; i < instructors.length; i++) {
  if ()
  var keyValueArray = Object.values(instructors[i]);
}
console.log(keyValueArray);

for each ()