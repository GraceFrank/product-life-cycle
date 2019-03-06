//isLast is a sigleton object used to determine when to stop the running of the project

const isLast = (function(){
  let status = false; // when status is true system stops
  let lastObj; // last object in the input file, once it get to recycler status changes to false

  return{
    status: function(){
      //status is changed to false when last object gets to recycler stage;
      if(lastObj && lastObj.stage === 'Recycler'){
        status = true;
      }
      return status;
    },
    setLastObj: function(value){
      //once last object is reached it
      lastObj = value;
    }
  }
})();

module.exports = isLast;
