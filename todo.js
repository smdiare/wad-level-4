/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    let s = all.filter(
      (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
    );
    return s;
  };

  const dueToday = () => {
    let p = all.filter(
      (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
    );
    return p;
  };

  const dueLater = () => {
    let q = all.filter(
      (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
    );
    return q;
  };

  const toDisplayableList = (list) => {
    let a = [],
      ind;
    for (ind = 0; ind < list.length; ind++) {
      let box = list[ind].completed === true ? "[x]" : "[ ]";
      let adddate =
        list[ind].dueDate === new Date().toLocaleDateString("en-CA")
          ? ""
          : list[ind].dueDate;
      a.push(`${box} ${list[ind].title} ${adddate}`);
    }
    let res = a.join("\n");
    a = res.trim();
    return a;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
