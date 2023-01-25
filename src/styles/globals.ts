import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        text-decoration: none;
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        text-rendering: optimizeLegibility;
        overflow-x: hidden;
        background: rgb(38,14,66);
        background-color: -moz-linear-gradient(90deg, rgba(38,14,66,1) 0%, rgba(1,1,2,1) 100%);
        background-color: -webkit-linear-gradient(90deg, rgba(38,14,66,1) 0%, rgba(1,1,2,1) 100%);
        background-color: linear-gradient(90deg, rgba(38,14,66,1) 0%, rgba(1,1,2,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#260e42",endColorstr="#010102",GradientType=1);
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    #__next {
        width: 100%;
        height: 100vh;
    }
`;
