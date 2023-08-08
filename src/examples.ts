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
