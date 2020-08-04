import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import { Search } from 'styled-icons/fa-solid/Search';
import { TimesCircle } from 'styled-icons/fa-solid/TimesCircle';

import { PoweredBy } from './styles';

const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
  margin-right: 10px;
  position: absolute;
  left: 15px;
  color: #2fd2c5;
`;

const TimesCircleIcon = styled(TimesCircle)`
  width: 1em;
  margin-right: 10px;
  position: relative;
  right: 30px;
  color: #2fd2c5;
`;

const focus = props => css`
  background: white;
  color: ${props => props.theme.darkBlue};
  cursor: text;
  width: 5em;
  + ${SearchIcon} {
    color: ${props => props.theme.darkBlue};
    margin: 0.3em;
  }
`;

const collapse = props => css`
  width: 0;
  cursor: pointer;
  color: ${props => props.theme.lightBlue};
  + ${SearchIcon} {
    color: white;
  }
  ${props => props.focus && focus()}
  margin-left: ${props => (props.focus ? `-1.6em` : `-1em`)};
  padding-left: ${props => (props.focus ? `1.6em` : `1em`)};
  ::placeholder {
    color: ${props => props.theme.gray};
  }
`;

const expand = props => css`
  background: ${props => props.theme.veryLightGray};
  width: 6em;
  margin-left: -1.6em;
  padding-left: 1.6em;
  + ${SearchIcon} {
    margin: 0.3em;
  }
`;

const collapseExpand = props => css`
  ${props => (props.collapse ? collapse() : expand())}
`;

const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1em;
  background: white;
  transition: ${props => props.theme.shortTrans};
  border-radius: ${props => props.theme.smallBorderRadius};
  {collapseExpand}
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin-left: 15px;
  }
`;

const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

const HitsWrapper = styled.div`
  display: ${props => (props.hidden ? `none` : `grid`)};
  max-height: 80vh;
  overflow: scroll;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  right: 0;
  top: calc(100% + 0.5em);
  width: 80vw;
  max-width: 30em;
  box-shadow: 0 0 5px 0;
  padding: 0.7em 1em 0.4em;
  background: white;
  @media only screen and (max-width: 991px) {
    width: 400px;
    max-width: 400px;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
    max-width: 500px;
  }
  border-radius: ${props => props.theme.smallBorderRadius};
  > * + * {
    padding-top: 1em !important;
    border-top: 2px solid ${props => props.theme.darkGray};
  }
  li + li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid ${props => props.theme.lightGray};
  }
  * {
    margin-top: 0;
    padding: 0;
    color: black !important;
  }
  ul {
    list-style: none;
  }
  mark {
    color: ${props => props.theme.lightBlue};
    background: ${props => props.theme.darkBlue};
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h3 {
      color: black;
      background: ${props => props.theme.gray};
      padding: 0.1em 0.4em;
      border-radius: ${props => props.theme.smallBorderRadius};
    }
  }
  h3 {
    color: black;
    margin: 0 0 0.5em;
  }
  h4 {
    color: black;
    margin-bottom: 0.3em;
  }
`;

const useClickOutside = (ref, handler, events = [`mousedown`, `touchstart`]) => {
  const detectClickOutside = event =>
    ref && ref.current && !ref.current.contains(event.target) && handler();

  useEffect(() => {
    for (const event of events) document.addEventListener(event, detectClickOutside);
    return () => {
      for (const event of events) document.removeEventListener(event, detectClickOutside);
    };
  });
};

// Search component
const SearchBar = () => {
  const [query, setQuery] = useState(``);
  const [results, setResults] = useState([]);
  const [focus, setFocus] = useState(false);

  const ref = useRef(null);
  useClickOutside(ref, () => setFocus(false));
  const displayResult = query.length > 0 && focus ? 'showResults' : 'hideResults';

  useEffect(() => {
    if (!query || !window.__LUNR__) {
      setResults([]);
      return;
    }
    const lunrIndex = window.__LUNR__['ja'];
    const searchResults = lunrIndex.index.search(query);
    setResults(
      searchResults.map(({ ref }) => {
        return lunrIndex.store[ref];
      })
    );
  }, [query]);

  return (
    <Root ref={ref}>
      <Form
        className={'formElement'}
        onSubmit={event => {
          event.preventDefault();
        }}
      >
        <SearchIcon />
        <Input
          className={'searchInput '}
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={event => {
            setQuery(event.target.value);
          }}
          onFocus={() => setFocus(true)}
          value={query}
        />
        {query ? (
          <TimesCircleIcon
            onClick={() => {
              setQuery(``);
              setFocus(false);
            }}
          />
        ) : null}
      </Form>
      <HitsWrapper className={'hitWrapper ' + displayResult} hidden={!(query.length > 0 && focus)}>
        {results.length > 0
          ? results.map(({ slug, title, description }) => {
              return (
                <li key={slug}>
                  <Link to={slug} onClick={() => setFocus(false)}>
                    <h3>{title}</h3>
                    <span>{description}</span>
                  </Link>
                </li>
              );
            })
          : `No result for '${query}'`}
        <PoweredBy />
      </HitsWrapper>
    </Root>
  );
};

export default SearchBar;
