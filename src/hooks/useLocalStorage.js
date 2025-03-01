const useLocalStorage = () => {
  const setlocalStorage = (key, data) => {
    if (data.length > 0) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      localStorage.removeItem(key);
    }
  };

  const getLocalStorage = (key) => {
    const todoList = JSON.parse(localStorage.getItem(key));
    return todoList || [];
  };

  return { setlocalStorage, getLocalStorage };
};
export default useLocalStorage;
