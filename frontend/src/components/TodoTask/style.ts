import styled from "styled-components";

export const Container = styled.div`
  width: 31.563rem;
  height: 34.625rem;
  border-radius: 0.75rem;
  margin: 0 auto;

  /* background-color: #2B2D37; */
  background-color: #ffffff;

  @media screen and (max-width: 768px) {
    /* width: 505px;
        height: 488px; */
  }

  div {
    &.TitleHeader {
      h1 {
        font-weight: 800;
        color: #000000;
        font-size: 3.5rem;
      }

      &.ImgHeader {
        background-color: #f2f3ff;
      }
    }

    &.Line {
      border: 1px solid #ebebeb;
    }

    form {
      label {
        h2 {
          color: #575767;
        }

        input {
        }
      }
    }
  }
`;
