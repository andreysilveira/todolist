import styled from "styled-components";

export const Container = styled.div`
  width: 31.563rem;
  height: auto;
  /* height: 34.625rem; */
  border-radius: 0.75rem;
  margin: 0 auto;
  padding: 2.5rem 4rem;

  /* background-color: #2B2D37; */
  background-color: #ffffff;


  
  @media screen and (max-width: 768px) {
    width: auto;
    margin: 0.1rem 0rem 0rem 0rem;
  }

  div {
    &.TitleHeader {
      h1 {
        font-weight: 800;
        color: #000000;
        font-size: 3.5rem;
      }
    }

    &.ImgHeader {
      background-color: #f2f3ff;
      border: 0.5px solid #EBEBEB;
      border-radius: 12px;

      cursor: pointer;
    }

    &.Line {
      border: 1px solid #ebebeb;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    form {
      label {
        h2 {
          color: #575767;
          font-weight: bold;
        }

        input {
          margin-bottom: .75rem;
        }
      }
    }

    &.ContainerItem{
      div{
        padding: .5rem;
      }
    }

    &.divItem{
      background-color: #6665a4;
      color: #FFF;
      margin-bottom: 0.5rem;
    }

    &.divItemDone{
      background-color: #6665a4;
      color: #FFF;
      margin-bottom: 0.5rem;
    }
  }
`;
