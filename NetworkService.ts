import type { NuxtApp } from "#app";
import { ToastService } from "./ToastService";
import type { Quiz } from "./types/quiz";

export class NetworkService {
    private runtimeConfig = useRuntimeConfig()
    private toastService: ToastService
    private nuxt: NuxtApp;

    constructor(nuxt: NuxtApp) {
        this.nuxt = nuxt;
        this.toastService = new ToastService
    }

    async getQuizzes() {
        try {
            const { data, error } = await useFetch(`${this.runtimeConfig.public.BACKEND_URL}quizzes`, {
                key: 'quiz-cache',
                getCachedData: (key) => {
                  if (this.nuxt.isHydrating && this.nuxt.payload.data[key]) {
                    console.log("is cached")
                    return this.nuxt.payload.data[key]
                  }
              
                  if (this.nuxt.static.data[key]) {
                    console.log("is cached static")
                    return this.nuxt.static.data[key]
                  }
                  //return null
                },
              })
              
              if (!data.value) {
                console.log("not chached fetch again")
                //await refresh()
                const response = await fetch(`${this.runtimeConfig.public.BACKEND_URL}quizzes`)
                return await response.json()
              } else {
                console.log('Using cached data:', data.value)
                return data.value
              }
              
          } catch(error) {
            this.toastService.serverUnavailable()
            throw error
          }
    }

    async getQuiz(route:string) {
        try {
            const response = await fetch(`${this.runtimeConfig.public.BACKEND_URL}quizzes/${route}`)
            return await response.json()
          } catch(error) {
            console.log(error)
          }
    }

    async addQuiz(quiz:Quiz) {
      if(quiz.name.trim() != "" && quiz.name != undefined) {
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
                this.toastService.success('Added quiz!')
            } else {
              this.toastService.error("Couldn't add quiz!")
            }
        } catch (error) {
            console.error('Error sending quiz data:', error);
            throw error
        }
      } else {
        this.toastService.warning("You must give your quiz a name!")
      }
    }

    async updateQuiz(quiz:Quiz) {
      if(quiz.name.trim() != "" && quiz.name != undefined) {
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
                this.toastService.success('Updated quiz!')
                console.log(response);
            } else {
              this.toastService.error('Updating quiz failed!')
            }
        } catch (error) {
            console.error('Error sending quiz data:', error);
        }
      } else {
        this.toastService.warning("You must give your quiz a name!")
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
              this.toastService.success('quiz deleted!')
              console.log(response);
            } else {
              this.toastService.error('Could not delete quiz!')
              return response
            }
          } catch (error) {
            console.error('Error sending quiz data:', error);
          }    
    }
}