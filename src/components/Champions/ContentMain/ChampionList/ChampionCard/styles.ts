import styled from 'styled-components';

export const ChampionCardContainer = styled.article`
  position: relative;
  display: inline-block;
  margin-top: 20px;
  margin-left: 12px;
  width: 84px;
  vertical-align: top;
  cursor: pointer;
  div.champion-card__image-container {
    display: inline-block;
    position: relative;
    border: 2px solid black;
  }
  div.rotation {
    border-color: #4990e2;
    img {
      position: absolute;
      top: -10px;
      left: -10px;
    }
  }
  p.champion-card__champion-name {
    font-size: 13px;
    color: #4a4a4a;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
export const PositionTags = styled.div`
  /* display: flex; */
  position: absolute;
  bottom: 3px;
  right: 4px;
  font-size: 0;
  /* flex-direction: column; */
  div.position-tags__tag {
    margin-top: 2px;
    text-align: right;
    span {
      display: inline-block;
      background-color: #353b3e;
      font-size: 13px;
      line-height: 15px;
      color: white;
      letter-spacing: -0.9px;
    }
  }
`;
