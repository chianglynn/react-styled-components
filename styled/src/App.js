import styled from 'styled-components';
import BasicTitle from './components/BasicTitle';
import { DefaultButton, HipsterButton } from './components/Buttons';
import { Button } from '@material-ui/core';

const StyledBtn = styled(Button)`
    text-transform: capitalize !important;
`;

function App() {
    return (
        <>
            <div style={{ padding: '2rem' }}>
                <BasicTitle special>styled components</BasicTitle>
                <BasicTitle>styled components</BasicTitle>
                <DefaultButton>click me</DefaultButton>
                <HipsterButton>click me</HipsterButton>
            </div>
            <div style={{ padding: '2rem' }}>
                <Button color="primary" variant="contained">Hello World</Button>
                <StyledBtn color="primary" variant="contained">Hello World</StyledBtn>
            </div>
        </>
    );
}

export default App;