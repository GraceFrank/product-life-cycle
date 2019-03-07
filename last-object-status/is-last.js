//isLast is a sigleton object used to determine when to stop the running of the project

const isLast = (function() {
  let status = false; // when status is true system stops
  let lastObject; // last object in the input file, once it get to recycler stage status changes to true

  return {
    status: () => {
      //status is changed to true when last object gets to recycler stage;
      if (lastObject && lastObject.stage === "Recycler") {
        status = true;
      }
      return status;
    },
    setLastObj: value => {
      //setlastobj is used to assign a value to the last object,
      lastObject = value;
    }
  };
})();

module.exports = isLast;
