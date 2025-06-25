import { Person } from "../types";

interface Props {
  people: Person[];
  // filteredPeople: Person[];
}

export const NoPeople = ({ people }: Props) => {
  console.log(people);

  return (
    {people.length}
  );
};
