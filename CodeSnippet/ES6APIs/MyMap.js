/**
 * ES6 Map API.
 *
 * Created by prrathore on 5/23/15.
 */

var sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");

for (var [key, value] of sayings) {
    console.log(key + " goes " + value);
}
