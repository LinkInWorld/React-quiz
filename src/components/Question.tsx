import React, {FC} from 'react';

interface IQuestion{
    question: {question: string, answers: {key: string, answer: string}[], correct_answer: string},
    onClickVariant: (value: string) => void
}

const Question: FC <IQuestion> = ({question, onClickVariant}) => {
    return (
        <div>

            <h1>{question.question}</h1>
            <ul className="list-none text-base mt-5 font-medium text-gray-900 w-100">
                {question.answers.map((answer) => {
                    return <li
                        className="rounded mb-2 px-5 py-2 border-2 border-gray-200 shadow-lg hover:border-blue-500"
                        onClick={() => onClickVariant(answer.key)}
                    >
                        {answer.answer}
                    </li>;

                })}
            </ul>
        </div>
    );
};

export default Question;