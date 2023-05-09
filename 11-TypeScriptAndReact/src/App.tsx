import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";
import { useState } from "react";

export default function App() {

  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Heading title={'Hello'} />
      <Section children={'This is my section'} />
      <Counter setCount={setCount} count={count} />
      <List items={['Coffee', 'Food', 'Sports']} render={(item: string) => <span className="gold bold">{item}</span>} />
    </>
  )
}

