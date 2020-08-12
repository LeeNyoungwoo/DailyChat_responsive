import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import ReactCardFlip from 'react-card-flip';
import Button from '@material-ui/core/Button';
import './LetterList.css';

function LetterList() {
    const [letters, setLetters] = useState([
        {
            key: 0,
            user_id: 'leenw2',
            title: 'What`s up?',
            tags: ['고민', '상담', '진로'],
            content: 'I want to talk about you',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_Z0HayfHCj0VC8AYRyJP8x7uFqCFWziXO1A&usqp=CAU',
            isFlipped: false
        },
        {
            key: 1,
            user_id: 'leenw23',
            title: '하고 싶은 이야기가 있니?',
            tags: ['고민', '상담', '진로'],
            content: 'I want to talk about you with ML',
            url: 'https://codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg',
            isFlipped: false,
        },
    ]);

    const handleClick = (object) => {
        console.log(object.key)
        setLetters(
            letters.map(letter => 
                letter.key === object.key
                ? {
                    key: object.key,
                    user_id: object.user_id,
                    title: object.title,
                    tags: object.tags,
                    content: object.content,
                    url: object.url,
                    isFlipped: !object.isFlipped
                }
                : letter
            )
        )
    }

    return (
        <div>
            <div className="letterGrid">
                <div className="letterList">
                    <p>letters</p>
                    {letters.map(letter => (
                        <TinderCard
                            className="swipe"
                            key={letter.key}
                            preventSwipe={['up', 'down']}
                            onClick={handleClick(letter)}
                        >
                            <ReactCardFlip isFlipped={letter.isFlipped} flipDirection="vertical">
                                <div style={{ backgroundImage: `url(${letter.url})`}} className="letter">
                                    <h2>{letter.title}</h2>
                                    <h3>{letter.user_id}</h3>
                                    <div className="letter__tag">
                                        {letter.tags.map(tag => (
                                            <p># {tag}</p>
                                        ))}
                                    </div>
                                </div>
                            </ReactCardFlip>
                        </TinderCard>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LetterList;