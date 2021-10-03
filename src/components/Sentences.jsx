import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Data } from '../data';

export const Sentences = ({tense})=>{
    
    const [sentences, setSentences]=useState([]);

    useEffect(()=>{
        Data.map( sentence => {
            if( sentence.name === tense ){
                setSentences(sentence.sentences)
            }
        })
    }, [tense]);

    return(
        <SentencesContainer>
            <ul>
                {
                    sentences.map((item)=>{
                        return <li key={item.id} >{item.sentence}</li>
                    })
                }
            </ul>
        </SentencesContainer>
    );
}

const SentencesContainer = styled.div`
    width: 100%;
    padding: 50px;
    ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        li{
            width: max-content;
            background: #363636;
            color: #fff;
            padding: 12px;
            border-radius: 8px;
        }
    }
`;