import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export const PeopleFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [userId, setUserId] = useState(0);
  const [letters, setLetters] = useState<string[]>([]);

  function handlePageChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setUserId(+event.target.value);
  }

  function handleCenturyChange(century: string) {
    const newParams = new URLSearchParams(searchParams);
    const centuries = newParams.getAll('centuries');

    if (centuries.includes(century)) {
      const updated = centuries.filter(c => c !== century);

      newParams.delete('centuries');
      updated.forEach(c => newParams.append('centuries', c));
    } else {
      newParams.append('centuries', century);
    }

    console.log(newParams);

    setSearchParams(newParams.toString()); // або setSearchParams(newParams.toString());
  }

  function toggleLetter(ch: string) {
    setLetters((currentLetters: string[]) =>
      currentLetters.includes(ch)
        ? currentLetters.filter((letter: string) => letter !== ch)
        : [...currentLetters, ch],
    );
  }

  return (
    <nav className="panel">
      <p className="panel-heading">Filters</p>

      <p className="panel-tabs" data-cy="SexFilter">
        <a className="is-active" href="#/people">
          All
        </a>
        <a className="" href="#/people?sex=m">
          Male
        </a>
        <a className="" href="#/people?sex=f">
          Female
        </a>
      </p>

      <div className="panel-block">
        <p className="control has-icons-left">
          <input
            data-cy="NameFilter"
            type="search"
            className="input"
            placeholder="Search"
          />

          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true" />
          </span>
        </p>
      </div>

      <div className="panel-block">
        <div className="level is-flex-grow-1 is-mobile" data-cy="CenturyFilter">
          <div className="level-left">
            <Link
              data-cy="century"
              className="button mr-1"
              to={{
                pathname: '/people',
                search: '?centuries=16',
              }}
              onClick={() => handleCenturyChange('16')}
            >
              16
            </Link>

            <a
              data-cy="century"
              className="button mr-1 is-info"
              href="#/people?centuries=17"
            >
              17
            </a>

            <a
              data-cy="century"
              className="button mr-1 is-info"
              href="#/people?centuries=18"
            >
              18
            </a>

            <a
              data-cy="century"
              className="button mr-1 is-info"
              href="#/people?centuries=19"
            >
              19
            </a>

            <a
              data-cy="century"
              className="button mr-1"
              href="#/people?centuries=20"
            >
              20
            </a>
          </div>

          <div className="level-right ml-4">
            <a
              data-cy="centuryALL"
              className="button is-success is-outlined"
              href="#/people"
            >
              All
            </a>
          </div>
        </div>
      </div>

      <div className="panel-block">
        <a className="button is-link is-outlined is-fullwidth" href="#/people">
          Reset all filters
        </a>
      </div>
    </nav>
  );
};
