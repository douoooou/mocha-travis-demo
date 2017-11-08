/**
 * 计算两个数的和
 * @ param {number} x 两个数求和的第一个数
 * @ param {number} y 两个数求和的第二个数
 * @ return {number} 返回两个数的和
 */
function add(x,y){
  if((typeof(x)==='number')&&(typeof(y)==='number'))
   
  return x+y;

  else
    return NaN;
}

module.exports.add=add;
 
