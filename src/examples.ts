import { Team } from "./teams/models";

let firstName = "yes";
// firstName = false; - nu functioneaza; in js, puteam schimba numele

function getConf(r) {
  return {
    name: "my conf",
    x: 123,
    ready: true
  };
}

const conf = getConf(true);
console.info(conf.name);

//conf.ready = "not ready"; - nu pot schimba din boolean in string

export default null;

type Store<T = any> = {
  find<K extends keyof T>(fieldName: K, value: T[K]): T;
  update(id: string, values: Partial<T>): void;
};

const store: Store<Team> = {
  find(fieldName, values) {
    return {
      id: "1",
      members: "",
      name: "",
      promotion: "",
      url: ""
    };
  },
  update(id, value) {}
};

const t1 = store.find("name", "react");
//const t2 = store.find("amount", 2);

//store.update("123", { amount: 123 });
