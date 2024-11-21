const areaOrPerimeter = function(l , w) {
    const rectangle = w > l || l > w
    const square = w===l
    return rectangle ? (l + w) * 2 : l * w
  };