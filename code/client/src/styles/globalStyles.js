import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    ::-moz-selection { /* Code for Firefox */
      color: ${props => props.theme.palette.neutral100};
      background: ${props => props.theme.palette.secondary100};
    }
    
    ::selection {
      color: ${props => props.theme.palette.neutral100};
      background: ${props => props.theme.palette.secondary100};
    }
        
    * {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }
    
    html, body, #root {
        height: 100%;
        background-color: ${props => props.theme.palette.primary50};
    }
    
    body {
        margin: 0;
        padding: 0;
        background-color: #F7F7F7;
        font-family: 'Work Sans', sans-serif;
        font-size: 1rem;
        color: $night-dark;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-overflow-scrolling: touch;
        text-rendering: optimizeLegibility;
        min-height: 100%;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }
    
    p, span {
        line-height: 1.5;
    }

    form {
        color: ${props => props.theme.palette.neutral0};

        label {
            font-family: 'Work Sans', sans-serif;
            font-size: 0.875rem;
            font-weight: 700;
        }

        input, select, textarea {
            font-family: 'Work Sans', sans-serif;
            font-size: 0.875rem !important;
            font-weight: 400;
        }

        input::placeholder, textarea::placeholder {
            color: ${props => props.theme.palette.neutral40};
        }

        .error-label {
            font-family: 'Work Sans', sans-serif;
            font-size: 0.875rem;
        }
    }
`
