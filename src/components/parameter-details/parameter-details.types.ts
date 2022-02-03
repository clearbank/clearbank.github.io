export interface ParameterDetailsProps {
  parameter: ParameterData
}

export interface ParameterData {
  name: string
  type: string
  location: string
  required: boolean
  methods: string[]
  body: string
  example: string
}

export interface SettingsProps {
  visibleSettings: string[]
  type: string
  location: string
  required: boolean
}

export interface MethodsProps {
  methods: string[]
}
