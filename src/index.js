
exports.min = function min (array) {
  if (!array || array.length == 0){
    return 0;
  } 
 
  let i = 0,
      minVarible = array[i];
  
  for (i in array){
    if (array[i] < minVarible) minVarible = array[i];
  }

  return minVarible;
}

exports.max = function max (array) {
  if (!array || array.length == 0){
    return 0;
  } 

  let i = 0,
      maxVarible = array[i];
  
  for (i in array){
    if (array[i] > maxVarible) maxVarible = array[i];
  }
  return maxVarible;
}

exports.avg = function avg (array) {
  if (!array || array.length == 0){
    return 0;
  } 

  let i = 0,
      avgVarible = 0;

  for(i in array) {
    avgVarible = avgVarible + array[i];
  }

  return avgVarible / array.length;
}
