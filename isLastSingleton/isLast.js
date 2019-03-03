const isLast = (function(){
  let status = false;
  let lastObj;

  setStaus = function(value){
    status = value;
  }
  return{
    status: function(){
      if(lastObj && lastObj.stage === 'Recycler'){
        status = true;
      }
      return status;
    },
    setLastObj: function(value){
      lastObj = value;
    }
  }
})();

module.exports = isLast;
