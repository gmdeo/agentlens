export interface AgentTurn {
  turn_number: number
  action_type: string
  tool_name?: string
  tool_call_params?: Record<string, unknown>
  tool_result?: string
  tool_call_failed?: boolean
  reasoning?: string
  confidence: number
  drift_detected: boolean
}

export interface AgentTrace {
  session_name: string
  agent_type: string
  task_description: string
  turns: AgentTurn[]
  success_rate: number
}
