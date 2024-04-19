import type { Answer } from "./answer"

export type Question = {
    description: string,
    answers: Array<Answer>;
}