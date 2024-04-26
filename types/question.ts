import type { Answer } from "./answer"

export type Question = {
    description: string,
    isMultipleChoice: boolean,
    answers: Array<Answer>;
}