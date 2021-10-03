import styled from 'styled-components';

export const Header = () =>{
    return (
        <HeaderContainer>
            <h2>Tenses Grammar</h2>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    padding: 20px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    h2{
        font-size: 30px;
        letter-spacing: 2px;
    }
`;