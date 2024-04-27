import type { Quiz } from "~/types/quiz";

export class QuizGame {
    quiz: Quiz

    constructor(quiz: Quiz) {
        this.quiz = quiz
    }
}