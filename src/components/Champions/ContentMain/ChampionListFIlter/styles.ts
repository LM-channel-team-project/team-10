import styled from 'styled-components';

export const ChampionListFilterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: white;
  border-bottom: solid 1px #e9eff4;
  ul {
    display: flex;
    align-items: center;
    margin-left: 20px;
    list-style: none;
    li {
      text-align: -webkit-match-parent;
      cursor: pointer;
      padding-bottom: 4px;
      a {
        padding: 15px 7px;
        color: #777;
        font-size: 14px;
        &:active {
          outline: 1px solid #4990e2;
        }
      }
      a.rotation {
        color: #4990e2;
      }
      &.selected {
        font-weight: bold;
        a {
          color: #4990e2;
          border-bottom: 2px solid #4990e2;
        }
      }
    }
  }
`;

export const ChampionSearchInput = styled.input`
  background-color: rgb(247, 247, 247);
  margin-right: 5px;
  height: 39px;
  width: 200px;
  border: none;
  padding-left: 10px;
  outline: none;
  border-radius: 3px;
  text-align: start;
  &:focus {
    box-shadow: 0 0 0 2px #a2a2a2 inset;
  }
`;
