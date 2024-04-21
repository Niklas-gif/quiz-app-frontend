import type { Question } from "./question"

export type Quiz = {
    _id: string,
    description: string,
    name: string,
    questions: Array<Question>
}