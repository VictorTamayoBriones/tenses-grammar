import styled from 'styled-components';
import { Data } from '../data';

export const GridButtons = ({onChangeTense}) => {

    const handleClick = (e)=>{
        onChangeTense(e)
    }

    return (
        <GridContainer>
            {
                Data.map( tense => {
                    return <Btn key={tense.name} name={tense.name} group={tense.type} onClick={handleClick} >{tense.name}</Btn>
                })
            }
        </GridContainer>
    );
}

const GridContainer = styled.div`
    width: 100%;
    padding: 50px;
    margin: auto;
    display: flex;
    justify-content: center;
    gap: 50px;
    overflow: hidden;
    flex-wrap: wrap;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
`;

const Btn = styled.button`
    padding: 8px 20px;
    color: #fff;
    background:${(props)=>{
        if( props.group === 'present' ){
            return '#01522a'
        }else if( props.group === 'past' ){
            return '#084ecf'
        }else if( props.group === 'future' ){
            return '#a00754'
        }
    }};
    border-radius: 8px;
    border: none;
    &:hover {
        cursor: pointer;
        transition: .5s ease;
        box-shadow: -3px 3px 8px rgba(0,0,0,0.5);
        transform: translate3d(3px, -3px, 0px);
    }
`;