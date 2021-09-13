// import styled from 'styled-components';
// import BasicTitle from './components/BasicTitle';
// import { DefaultButton, HipsterButton } from './components/Buttons';
// import { Button } from '@material-ui/core';
// import ComplexTitle from './components/ComplexTitle';

// const StyledBtn = styled(Button)`
//     text-transform: capitalize !important;
// `;

// function App() {
//     return (
//         <>
//             <div style={{ padding: '2rem' }}>
//                 <BasicTitle special>styled components</BasicTitle>
//                 <BasicTitle>styled components</BasicTitle>
//                 <DefaultButton>click me</DefaultButton>
//                 <HipsterButton>click me</HipsterButton>
//             </div>
//             <div style={{ padding: '2rem' }}>
//                 <Button color="primary" variant="contained">Hello World</Button>
//                 <StyledBtn color="primary" variant="contained">Hello World</StyledBtn>
//             </div>
//             <div style={{ padding: '2rem' }}>
//                 <ComplexTitle title="more complex title" />
//             </div>
//         </>
//     );
// }

///////////////////////////////////////////////////////

// import { useState } from "react";
// import styled, { ThemeProvider } from "styled-components";
// import GlobalStyles from "./global-styles";
// import Card from "./components/Card";

// const BaseTheme = {
//     color: '#222',
//     backgroundColor: '#fff',
// };

// const DarkTheme = {
//     color: '#fff',
//     backgroundColor: '#222',
// };

// const Container = styled.div`
//     padding: 2rem;
//     color: ${props => props.theme.color};
//     background-color: ${props => props.theme.backgroundColor};
// `;

// function App() {
//     const [theme, setTheme] = useState(true);

//     const toggleTheme = () => setTheme(!theme);

//     return (
//         <>
//             <div style={{ padding: '2rem' }}>
//                 <GlobalStyles />
//                 <Card />
//             </div>

//             <ThemeProvider theme={theme ? BaseTheme : DarkTheme}>
//                 <Container>
//                     <h1>hello</h1>
//                     <button className="btn" onClick={toggleTheme}>toggle</button>
//                 </Container>
//             </ThemeProvider>
//         </>
//     );
// }

///////////////////////////////////////////////////////

import styled from 'styled-components';
import Loading from './components/Loading';
import { HipsterButton } from './components/Buttons';

function App() {
    return (
        <div style={{ padding: '2rem' }}>
            <Loading />
            <HipsterButton>click me</HipsterButton>
            <HipsterButton as="a" href="https://www.google.com">click me</HipsterButton>
            <HipsterButton>click me</HipsterButton>
        </div>
    );
}

export default App;