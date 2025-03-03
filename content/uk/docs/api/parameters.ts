export interface Parameter {
  name: string
  type: string
  location: string
  required: boolean
  methods: string[]
  body: string
  example?: string
}
