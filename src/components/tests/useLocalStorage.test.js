import useLocalStorage from "../../hooks/useLocalStorage";
describe("useLocalStorage", () => {
  const mockLocalStorage = (() => {
    let store = {};
    return {
      getItem: (key) => store[key] || null,
      setItem: (key, value) => {
        store[key] = value.toString();
      },
      removeItem: (key) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      },
    };
  })();

  beforeAll(() => {
    Object.defineProperty(window, "localStorage", {
      value: mockLocalStorage,
    });
  });

  test("saves and retrieves data", () => {
    const { getLocalStorage, setlocalStorage } = useLocalStorage();
    const testData = [{ task: "Test Todo" }];

    setlocalStorage("test", testData);
    expect(getLocalStorage("test")).toEqual(testData);
  });
});
