new Vue({
  el:'#vue-app',
  data: {
    age: 25,
    x: 0,
    y: 0
  },
  methods: {
    add: function(a) {
      this.age += a;
    },
    subtract: function(s) {
      this.age -= s;
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});