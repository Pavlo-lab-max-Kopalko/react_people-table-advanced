/* eslint-disable jsx-a11y/control-has-associated-label */
import { Person } from '../types';
import { PersonLink } from './PersonLink';

export const PeopleTable = ({ people }: { people: Person[] }) => {
  return (
    <>
      {people.length === 0 ? (
        <p data-cy="noPeopleMessage">There are no people on the server</p>
      ) : (
        <table
          data-cy="peopleTable"
          className="table is-striped is-hoverable is-narrow is-fullwidth"
        >
          <thead>
            <tr>
              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  Name
                  <a href="#/people?sort=name">
                    <span className="icon">
                      <i className="fas fa-sort" />
                    </span>
                  </a>
                </span>
              </th>

              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  Sex
                  <a href="#/people?sort=sex">
                    <span className="icon">
                      <i className="fas fa-sort" />
                    </span>
                  </a>
                </span>
              </th>

              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  Born
                  <a href="#/people?sort=born&amp;order=desc">
                    <span className="icon">
                      <i className="fas fa-sort-up" />
                    </span>
                  </a>
                </span>
              </th>

              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  Died
                  <a href="#/people?sort=died">
                    <span className="icon">
                      <i className="fas fa-sort" />
                    </span>
                  </a>
                </span>
              </th>

              <th>Mother</th>
              <th>Father</th>
            </tr>
          </thead>

          <tbody>
            {people.map(person => {
              const mother = people.find(
                personObj => personObj.name === person.motherName,
              )?.slug;
              const father = people.find(
                personObj => personObj.name === person.fatherName,
              )?.slug;

              return (
                <PersonLink
                  key={person.slug}
                  person={person}
                  mother={mother}
                  father={father}
                />
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};
