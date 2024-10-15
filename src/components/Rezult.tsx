import React, {FC} from 'react';

interface IRezult {
    countCorrect: number
}
const Rezult: FC <IRezult> = ({countCorrect}) => {
    return (
        <div>
            <h1>Поздравляем, вы ответили на все вопросы!<br/>
                Правильных ответов: {countCorrect}</h1>
            <img
                src="https://media.giphy.com/media/3o6Zt8MgUuvSbkZYWc/giphy.gif"
                className="mt-5 w-80 m-auto"
            />
        </div>
    );
};

export default Rezult;