import {type Quiz } from "../types/quiz"
const test_quiz: Quiz[] = [
    {
        "_id": "6613cd26e2bfb6cdbf4e5731",
        "description": "Sample Quiz",
        "name": "Quiz2",
        "questions": [
            {
                "answers": [
                    {
                        "description": "Paris",
                        "isCorrect": false
                    },
                    {
                        "description": "London",
                        "isCorrect": false
                    },
                    {
                        "description": "Berlin",
                        "isCorrect": true
                    },
                    {
                        "description": "Blahaghjajgajgag",
                        "isCorrect": false
                    }
                ],
                "description": "Was ist die Hauptstadt von Deutschland?",
                "isMultipleChoice": true
            },
            {
                "answers": [
                    {
                        "description": "4",
                        "isCorrect": true
                    },
                    {
                        "description": "42",
                        "isCorrect": false
                    },
                    {
                        "description": "Banana",
                        "isCorrect": false
                    }
                ],
                "description": "Was ist 2 + 2?",
                "isMultipleChoice": false
            }
        ]
    },
    {
        "_id": "6613cd6de2bfb6cdbf4e5732",
        "description": "Sample Quiz",
        "name": "Quiz2",
        "questions": [
            {
                "answers": [
                    {
                        "description": "London",
                        "isCorrect": false
                    },
                    {
                        "description": "Berlin",
                        "isCorrect": true
                    }
                ],
                "description": "Was ist die Hauptstadt von Deutschland?",
                "isMultipleChoice": true
            },
            {
                "answers": [
                    {
                        "description": "4",
                        "isCorrect": true
                    },
                    {
                        "description": "42",
                        "isCorrect": false
                    },
                    {
                        "description": "Banana",
                        "isCorrect": false
                    }
                ],
                "description": "Was ist 2 + 2?",
                "isMultipleChoice": false
            }
        ]
    }
]

export default test_quiz