import React from "react";

import styled from "styled-components";

function Filter(props) {
  return (
    <div>
      <FilterText>
        {props.school ? props.school.name : ""} (
        {props.school ? props.school.course_count : ""})
      </FilterText>
      <FilterActions>
        <Search>
          <SearchIcon className="fa fa-search" />
          <SearchInput onChange={(e) => props.setSearch(e.target.value)} />
        </Search>
        <FilterUtilities>
          <SetFilter>
            <SetFilterButton>
              <i className="fas fa-sliders-h"></i>
              <SetFilterText>필터로 찾기</SetFilterText>
              <i className="fas fa-sort-down"></i>
            </SetFilterButton>
          </SetFilter>
          <SetTags>
            <SetTagsButton>
              <SetTagsText>태그</SetTagsText>
              <i className="fas fa-sort-down"></i>
            </SetTagsButton>
          </SetTags>
        </FilterUtilities>
      </FilterActions>
    </div>
  );
}
const FilterText = styled.div`
  font-weight: 500;
  font-size: 2.5rem;
  display: none;

  @media (min-width: 75em) {
    display: inherit;
  }
`;
const FilterActions = styled.div`
  padding: 3rem 0;
  display: flex;
  align-items: stretch;

  @media (min-width: 75em) {
    padding: 2.5rem 0 4.7rem;
  }

  @media (min-width: 30em) {
    padding: 4rem 0;
  }
`;
const Search = styled.div`
  flex: 1 1;
  max-width: 45.8rem;
  display: flex;
  background-color: #fff;
  height: 4.2rem;
  border-radius: 2.1rem;
  align-content: center;
  padding: 1rem 1.5rem;
  -webkit-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
  border: 1px solid transparent;
  -webkit-box-shadow: 0 1px 12px 0 rgb(138 124 153 / 23%);
  box-shadow: 0 1px 12px 0 rgb(138 124 153 / 23%);

  @media (max-width: 30em) {
    max-width: 9.4rem;
    &:focus-within {
      max-width: calc(100vw - 22rem);
    }
  }

  @media (max-width: 48em) {
    max-width: 24.2rem;
  }

  &:focus-within {
    border: 1px solid #e9e9e9;
  }
`;
const SearchIcon = styled.i``;

const SearchInput = styled.input.attrs({ placeholder: "검색" })`
  flex: 1 1;
  margin-left: 1.7rem;
  border: none;
  outline: none;
  min-width: 0;
  font-size: 1.5rem;

  @media (max-width: 30em) {
    font-size: 1.4rem;
  }
`;

const FilterUtilities = styled.div`
  flex: 1 1;
  text-align: right;
  position: relative;
`;

const SetFilter = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const SetFilterButton = styled.button`
  height: 4.2rem;
  border-radius: 2.1rem;
  border: 1px solid #dde0ea;
  padding: 1.2rem 1.5rem 1.3rem 1.9rem;
  display: inline-flex;
  align-items: center;
  align-content: center;
  @media (max-width: 48em) {
    padding: 0.9rem 1.5rem 1rem 1.4rem;
  }
`;

const SetFilterText = styled.span`
  margin: 0 2.2rem 0 1.3rem;
  font-size: 1.5rem;
  letter-spacing: -0.28px;
  color: #333236;
  font-weight: 500;
  padding-top: 0.1rem;
  @media (max-width: 48em) {
    display: none;
  }
`;
const SetTags = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 1.5rem;

  @media (max-width: 30em) {
    margin-left: 0.8rem;
  }
`;
const SetTagsButton = styled.button`
  height: 4.2rem;
  border-radius: 2.1rem;
  border: 1px solid #dde0ea;
  padding: 1.2rem 1.5rem 1.3rem 1.9rem;
  display: inline-flex;
  align-items: center;
  align-content: center;

  @media (max-width: 48em) {
    padding: 0.9rem 1.5rem 1rem 1.4rem;
  }
`;
const SetTagsText = styled.span`
  margin: 0 2.2rem 0 0.6rem;
  font-size: 1.5rem;
  letter-spacing: -0.28px;
  color: #333236;
  font-weight: 500;
  padding-top: 0.1rem;

  @media (max-width: 48em) {
    margin: 0 1.3rem 0 0.3rem;
  }
`;
export default Filter;
