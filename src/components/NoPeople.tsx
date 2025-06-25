import { Person } from '../types';

interface Props {
  people: Person[];
}

export const NoPeople = ({ people }: Props) => {
  return (
    <>
      {people.length && (
        <p data-cy="noPeopleMessage">There are no people on the server</p>
      )}
    </>
  );
};
