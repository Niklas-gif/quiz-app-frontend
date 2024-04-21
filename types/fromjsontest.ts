import {type Quiz } from "./quiz"
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
                        "is_correct": false
                    },
                    {
                        "description": "London",
                        "is_correct": false
                    },
                    {
                        "description": "Berlin",
                        "is_correct": true
                    },
                    {
                        "description": "Blahaghjajgajgag",
                        "is_correct": true
                    }
                ],
                "description": "Was ist die Hauptstadt von Deutschland?",
                "is_multiple_choice": true
            },
            {
                "answers": [
                    {
                        "description": "4",
                        "is_correct": true
                    },
                    {
                        "description": "42",
                        "is_correct": false
                    },
                    {
                        "description": "Banana",
                        "is_correct": false
                    }
                ],
                "description": "Was ist 2 + 2?",
                "is_multiple_choice": false
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
                        "is_correct": false
                    },
                    {
                        "description": "Berlin",
                        "is_correct": true
                    }
                ],
                "description": "Was ist die Hauptstadt von Deutschland?",
                "is_multiple_choice": true
            },
            {
                "answers": [
                    {
                        "description": "4",
                        "is_correct": true
                    },
                    {
                        "description": "42",
                        "is_correct": false
                    },
                    {
                        "description": "Banana",
                        "is_correct": false
                    }
                ],
                "description": "Was ist 2 + 2?",
                "is_multiple_choice": false
            }
        ]
    }
]

export default test_quiz