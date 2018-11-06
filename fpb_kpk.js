
function fpb_kpk(x,y){
var fpb = function(x, y) {
    if ( ! y) {
        return x;
    }
    return fpb(y, x % y);
};   

var kpk = function(x, y) { 
    return ( x / fpb(x, y) ) * y; 
  };
    console.log('FPB ' + x + ' & ' + y + ' = ' + fpb(x, y)); 
    console.log('KPK ' + x + ' & ' + y + ' = ' + kpk(x, y)); 

};

fpb_kpk(2,3);
