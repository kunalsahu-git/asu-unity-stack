import styled from "styled-components";

const breakpoints = { Lg: "992px", Xl: "1260px" };

const Header = styled.header`
  font-family: Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans,
    sans-serif;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  .container-xl {
    height: 100%;
    max-width: 1224px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    .main-logo {
      img {
        margin: 20px 1rem 15px 0px !important;
      }
    }
    .nav-list {
      a {
        &::after {
          top: 0.5rem !important;
        }
      }
      &:hover {
        a {
          &::after {
            top: 0.6rem !important;
          }
        }
      }
    }
  }
  button,
  a {
    text-decoration: none;
    &:focus {
      outline: none !important;
      box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;
    }
  }
  @media (min-width: ${({ breakpoint }) => breakpoints[breakpoint]}) {
    &.scrolled {
      .universal-nav {
        min-height: 0;
        height: 0;
        overflow: hidden;
      }
      .carousel-wrapper {
        min-height: 0;
        height: 0;
        overflow: hidden;
        border: 0;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
      .dropdown-section {
        min-height: 0;
        height: 0;
        overflow: hidden;
        border: 0;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
      .title {
        margin: 0.5rem 0;
        position: relative;
        top: 12px;
      }
      .content-container {
        margin-top: -28px;
        .nav-list {
          a {
            &::after {
              top: 0.6rem !important;
            }
          }
        }
      }
      a.unit-name {
        display: none;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
      a.subunit-name {
        margin: 0.52rem 0;
        position: relative;
        top: 12px;
      }
      a.subunit-name,
      a.title-subunit-name {
        font-size: 1.5em;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
      .navbar-brand img {
        height: 64px;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
        margin: 12px -28px 0 0;
      }
    }
  }
  @media (max-width: 1260px) {
    .container-xl {
      padding-left: 0;
      padding-right: 0;
      max-width: 100%;
      .main-logo {
        img {
          margin: 0px !important;
        }
      }
    }
  }
  @media (max-width: 922px) {
    &.scrolled {
      .carousel-wrapper {
        min-height: 0;
        height: 0;
        overflow: hidden;
        border: 0;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
      .dropdown-section {
        min-height: 0;
        height: 0;
        overflow: hidden;
        border: 0;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
    }
  }
`;

const HeaderDiv = styled.div`
  font-family: Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans,
    sans-serif;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  .carousel-wrapper {
    .carousel-track {
      .carousel-item {
        &:last-child {
          display: none !important;
        }
      }
    }
  }
  .container-xl {
    height: 100%;
    max-width: 1224px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
  }
  button,
  a {
    text-decoration: none;
    &:focus {
      outline: none !important;
      box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;
    }
  }
  @media (min-width: ${({ breakpoint }) => breakpoints[breakpoint]}) {
    &.scrolled {
      .universal-nav {
        min-height: 0;
        height: 0;
        overflow: hidden;
      }
      .dropdown-section {
        min-height: 0;
        height: 0;
        overflow: hidden;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
      .carousel-wrapper {
        min-height: 0;
        height: 0;
        overflow: hidden;
        border: 0;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
      .title {
        margin: 0.5rem 0;
        position: relative;
        top: 12px;
      }
      a.unit-name {
        display: none;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
      a.subunit-name {
        margin: 0.52rem 0;
      }
      a.subunit-name,
      a.title-subunit-name {
        margin-bottom: 0px;
        margin-top: 16px;
        font-size: 1.5em;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
      .navbar-brand img {
        height: 64px;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
        margin: 12px -28px 3px 0;
      }
    }
  }
  @media (max-width: 1260px) {
    .container-xl {
      padding-left: 0;
      padding-right: 0;
      max-width: 100%;
    }
  }
  @media (max-width: 922px) {
    &.scrolled {
      .carousel-wrapper {
        min-height: 0;
        height: 0;
        overflow: hidden;
        border: 0;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
      .dropdown-section {
        min-height: 0;
        height: 0;
        overflow: hidden;
        border: 0;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
    }
  }
`;

export { Header, HeaderDiv };
