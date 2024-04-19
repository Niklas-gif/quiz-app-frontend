import type { Question } from "./question"

export type Quiz = {
    description: string,
    questions: Array<Question>
}