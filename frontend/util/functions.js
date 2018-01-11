export function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}


export const billsSort = (bills) => {

  const result = bills.sort(function(a,b){
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    const aCreationDate = new Date(a.created_at);
    const bCreationDate = new Date(b.created_at);
    if(aDate < bDate && aCreationDate < bCreationDate){
      return -1;
    } else {
      return 1;
    }
  });

  return result;
};



export const customStyles = {

    overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'rgba(255, 255, 255, 0.75)'
    },
    content : {

    }
  };



export const transactionsSort = (transactions) => {

  const result = transactions.sort(function(a,b) {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    if(aDate < bDate){
      return -1;
    } else{
      return 1;
    }
  }
  );

  return result;
};
