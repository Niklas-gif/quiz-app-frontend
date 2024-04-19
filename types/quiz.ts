import type { Question } from "./question"

export type Quiz = {
    description: string,
    name: string,
    questions: Array<Question>
}