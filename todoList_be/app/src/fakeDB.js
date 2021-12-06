import { v4 as uuidv4 } from "uuid";

export let fakeDB = [
  {
    id: uuidv4(),
    name: "Mike Gaucher",
    text: `I haven't smoked my last cigarette yet`,
  },
  {
    id: uuidv4(),
    name: "Jeffrey Lebowski",
    text: "Smokey, this is not Vietnam, this is bowling. There are rules.",
  },
  {
    id: "123",
    name: "Dr.Rumack",
    text: `I am serious. And don't call me Shirley.`,
  },
];
