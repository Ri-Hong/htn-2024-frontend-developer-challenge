import styled from 'styled-components';

export const Header = styled.h1`
  text-align: left;
  padding: 0 80px;
  font-size: 24px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

export const EventsContainer = styled.div`
  // border: 3px solid green;
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  padding: 10px 80px 80px 80px;
  justify-content: center;

`

export const SearchBar = styled.form`
  // border: 3px solid red;
  width: auto;
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 10px;
  border: 3px solid #FFFFFF;
  margin: 20px 80px;
  &:focus-within {
    border: 3px solid #8FACEF;
  }

  @media (max-width: 768px) {
    margin: 20px 20px;
  }

`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  display: block;
  border-radius: 10px;
  font-size: 20px;
  padding: 8px 40px 8px 20px;
  border: none;
  &:focus{
    outline: none;
  }
`

export const SearchButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  margin: 5px 10px 0 10px;
  padding: 0;
`

export const FilterButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => (props.active ? props.bgColor : 'transparent')};
  color: ${(props) => (props.active ? '#FFFFFF' : '#000000')};
  border: 3px solid;
  border-color: ${(props) => props.bgColor}};

  box-sizing: border-box;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  // margin: 0 20px;
  transition: background-color 0.1s ease-in-out;
`

export const FilterSortContainer = styled.div`
  // border: 5px solid blue;
  margin: 10px 80px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1049px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    margin: 10px 20px;
  }
`

export const FilterContainer = styled.div`
  // border: 5px solid orange;
  display: flex;
  flex-basis: 69%;
  align-items: center;
  @media (max-width: 1049px) {
    justify-content: center;
  }

  @media (max-width: 625px) {
    padding-bottom: 20px;
  }
`

export const FilterButtonContainer = styled.div`
  // border: 3px solid red;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px 20px;

  @media (max-width: 625px) {
    justify-content: flex-start;
    width: min-content;
  }
`

export const DropdownContainer = styled.div`
  // border: 5px solid green;
  display: flex;
  align-items: center;
  flex-basis: 31%;
  justify-content: flex-end;
  // text-align: right;
  @media (max-width: 1049px) {
    justify-content: center;
  }
`

export const Label = styled.h1`
  font-size: 24px;
  padding-right: 20px;
  // border: 3px solid purple;
  height: 30px;
`