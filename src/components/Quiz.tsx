import React, {useEffect, useState} from 'react';
import Rezult from "./Rezult";
import Question from "./Question";
import ProgresBar from "./ProgresBar";

const Quiz = () => {
    const questions  = [
                {
                    question: "Какой фрукт красного цвета?",
                    answers: [
                        {
                            key: 'a',
                            answer: 'Банан',
                        },
                        {
                            key: 'b',
                            answer: 'Яблоко',
                        },
                        {
                            key: 'c',
                            answer: 'Киви',
                        }
                    ],
                    correct_answer: "b"
                },
        {
            question: "Какой океан самый большой?",
            answers: [
                {
                    key: "a",
                    answer: "Атлантический",
                },
                {
                    key: "b",
                    answer: "Индийский",
                },
                {
                    key: "c",
                    answer: "Тихий",
                }
            ],
            correct_answer: "c"
        },
        {
            question: "Какая планета ближе всего к Солнцу?",
            answers: [
                {
                    key: "a",
                    answer: "Земля",
                },
                {
                    key: "b",
                    answer: "Марс",
                },
                {
                    key: "c",
                    answer: "Меркурий",
                }
            ],
            correct_answer: "c"
        }
    ];
    const countQuestions = questions.length;
    const [step, setStep] = useState<number>(0);
    const [countCorrect, setCountCorrect] = useState<number>(0);
    const [question, setQuestion] = useState<{question: string, answers: {key: string, answer: string}[], correct_answer: string}>(questions[0]);
    const [progressPercentage, setProgressPercentage] = useState<number>((step / countQuestions) * 100);

    useEffect(() => {
        setQuestion(questions[step]);
        setProgressPercentage((step / countQuestions) * 100);
    }, [step])

    function onClickVariant (index: string) {
        setStep(step + 1);

        if(index === question.correct_answer){
            setCountCorrect(countCorrect + 1);
        }
    }

    return (
        <div className="max-w-screen-sm rounded overflow-hidden shadow-lg m-auto p-5">
            <ProgresBar progressPercentage={progressPercentage} />
            {step !== countQuestions ?
                <Question
                          question={question}
                          onClickVariant={(value: string) => onClickVariant(value)} />
                : <Rezult countCorrect={countCorrect} />}

        </div>
    );
};

export default Quiz;