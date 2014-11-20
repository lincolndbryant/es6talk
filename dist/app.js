define("src/js/js/main", ["exports", "lib/foo"], function (exports, _libFoo) {
  "use strict";

  var _classProps = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  var boo = _libFoo["default"];
  var Foo = (function () {
    var Foo = function Foo(name, age) {
      this.name = name;
      this.age = age;
    };

    _classProps(Foo, null, {
      bar: {
        writable: true,
        value: function (baz) {}
      }
    });

    return Foo;
  })();

  console.log(boo);

  var boo = new Foo();
  boo.bar();

  return boo;
});
define("src/js/js/lib/foo", ["exports"], function (exports) {
  "use strict";

  var boo = exports.boo = "boo";
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9qcy9tYWluLmpzIiwic3JjL2pzL2pzL2xpYi9mb28uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7TUFBTyxHQUFHO01BRUosR0FBRztRQUFILEdBQUcsR0FDTSxTQURULEdBQUcsQ0FDTyxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ25CLFVBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0FBQ2hCLFVBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFBO0tBQ2pCOztnQkFKQyxHQUFHO0FBTUwsU0FBRzs7ZUFBQSxVQUFDLEdBQUcsRUFBRSxFQUVSOzs7O1dBUkMsR0FBRzs7O0FBWVQsU0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTs7QUFFaEIsTUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUEsQ0FBQTtBQUNqQixLQUFHLENBQUMsR0FBRyxFQUFFLENBQUE7O0FBRVQsU0FBTyxHQUFHLENBQUE7Ozs7O0FDbkJILE1BQUksR0FBRyxXQUFILEdBQUcsR0FBRyxLQUFLLENBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJvbyBmcm9tICdsaWIvZm9vJ1xuXG5jbGFzcyBGb28ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGFnZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuYWdlID0gYWdlXG4gICAgfVxuXG4gICAgYmFyKGJheikge1xuXG4gICAgfVxuXG59XG5cbmNvbnNvbGUubG9nKGJvbylcblxudmFyIGJvbyA9IG5ldyBGb29cbmJvby5iYXIoKVxuXG5yZXR1cm4gYm9vXG4iLCJleHBvcnQgdmFyIGJvbyA9ICdib28nIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9