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
