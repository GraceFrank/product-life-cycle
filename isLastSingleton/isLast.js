const isLast = (function(){
  let status = false;

  setStaus = function(value){
    status = value;
  }
  return{
    status: function(){
     
      return status;
    },
    setStatus: function(value){
      status = value;
    }
  }
})();

module.exports = isLast;