import type { Quiz } from "./types/quiz";

class NetworkService {
    runtimeConfig = useRuntimeConfig()

    async getQuizzes() {
        try {
            const response = await fetch(`${this.runtimeConfig.public.BACKEND_URL}quizzes`) //TODO: Replace with env.
            return await response.json()
          } catch(error) {
            console.log(error)
          }
    }

    async getQuiz(quiz:Quiz,route:string) {
        try {
            const response = await fetch(`${this.runtimeConfig.public.BACKEND_URL}quizzes/${route}`)
            return await response.json()
          } catch(error) {
            console.log(error)
          }
    }

    async addQuiz(quiz:Quiz) {
        try {
            const token = localStorage.getItem('Bearer')
            const response = await fetch(`${this.runtimeConfig.public.BACKEND_URL}add`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(quiz)
            })
            if (response.ok) {
                console.log(response);
            }
        } catch (error) {
            console.error('Error sending quiz data:', error);
        }
    }

    async updateQuiz(quiz:Quiz) {
        try {
            const token = localStorage.getItem('Bearer')
            const response = await fetch(`${this.runtimeConfig.public.BACKEND_URL}update`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(quiz)
            })
            if (response.ok) {
                console.log(response);
            }
        } catch (error) {
            console.error('Error sending quiz data:', error);
        }
    }

    async deleteQuiz(quiz:Quiz) {
        try {
            const token = localStorage.getItem('Bearer')
            const response = await fetch('http://localhost:3030/delete', {
              method: 'DELETE',
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(quiz)
            })
            if (response.ok) {
              console.log(response);
              //removeQuizFromList(selectedQuiz.value)
              //selectedQuiz.value = currentQuizzes.value[0]
            }
          } catch (error) {
            console.error('Error sending quiz data:', error);
          }    
    }
}