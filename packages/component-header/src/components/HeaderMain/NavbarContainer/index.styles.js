import styled from "styled-components";

const Wrapper = styled.nav`
  white-space: nowrap;
  display: ${({ hidden }) => (hidden ? "none" : "block")};
  > .content-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    height: auto;
    margin: inherit;
    font-size: inherit;
    color: inherit;
    align-items: flex-end;
    flex-direction: row;
  }
  .nav-list {
    display: flex;
    margin: 0;
  }
  .section-button-logo {
    margin-top: -72px;
    position: relative;
    .buttons-container {
      margin-bottom: 8px;
    }
    .navbar-brand {
      display: flex;
      justify-content: flex-end;
      img {
        margin-right: -28px;
        margin-bottom: 0px;
      }
    }
  }
  @media (max-width: ${({ breakpoint }) => breakpoint}) {
    width: 100%;
    > .content-container {
      flex-direction: column;
      justify-content: flex-start;
      overflow-y: auto;
      ${({ universalNavbar }) =>
        universalNavbar?.disableTopGradient
          ? ""
          : `
            > *:last-child {
              margin-bottom: min(75px, 15vw);
            }
          `}

      ${({ showUniversalNavbar, navBarHeight }) => {
        const offset = navBarHeight;

        if (showUniversalNavbar) {
          return `
            min-height: calc(100vh - 218px);
            max-height: calc(100vh - 277px);
          `;
        }

        return `
          min-height: calc(100dvh - ${offset}px);
          max-height: calc(100dvh - ${offset}px);
          padding-bottom: 4rem;
        `;
      }}
    }
    .nav-list {
      flex-direction: column;
      width: 100%;
    }
    .section-button-logo {
      width: 100%;
      margin-top: 0px !important;
      .buttons-container {
        display: flex;
        align-items: center;
        padding: 1rem 2rem;
        width: 100%;
        flex-wrap: wrap;
        flex-direction: row;
        margin-bottom: 0px !important;
      }
      .navbar-brand {
        display: none;
      }
    }
  }
`;

export { Wrapper };
