// items without due dates go to the bottom, sort list by soonest due date
const formatList = (list) => {
  covertToDate(list);
  const nonNullList = filterNonNulls(list);
  const nullList = filterNulls(list);
  nonNullList.sort((a, b) => (b.dueDate < a.dueDate ? 1 : -1));
  const newList = [...nonNullList, ...nullList];
  const completeItems = filterCompleteItems(newList);
  const incompleteItems = filterInCompleteItems(newList);
  const finalList = [...incompleteItems, ...completeItems];
  return finalList;
};

const filterCompleteItems = (list) => {
  return list.filter((todo) => todo.isComplete === true);
};

const filterInCompleteItems = (list) => {
  return list.filter((todo) => todo.isComplete === false);
};

const filterNulls = (list) => {
  return list.filter((todo) => todo.dueDate === null);
};

const filterNonNulls = (list) => {
  return list.filter((todo) => todo.dueDate !== null);
};

const covertToDate = (list) => {
  list.forEach((element) => {
    if (element.dueDate !== null) {
      const dt = new Date(element.dueDate);
      element.dueDate = dt;
    }
  });
  return list;
};

export { formatList };
