String.prototype.toJadenCase = function () {
    return this.split(" ").map(char => char.charAt(0).toUpperCase() + char.slice(1)).join(" ")
  };