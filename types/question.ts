import type { Answer } from "./answer"

export type Question = {
    description: string,
    is_multiple_choice: boolean,
    answers: Array<Answer>;
}