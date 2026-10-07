import { AgentTrace } from '../types'

export const sampleAgentTrace: AgentTrace = {
  session_name: "Research Agent Session #1847",
  agent_type: "ReAct Agent",
  task_description: "Find the current population of Tokyo and compare it to New York",
  success_rate: 67,
  turns: [
    {
      turn_number: 1,
      action_type: "search",
      tool_name: "web_search",
      tool_call_params: { query: "Tokyo population 2024", limit: 5 },
      tool_result: "Tokyo metropolitan area population: 37.4 million (2023 estimate)",
      tool_call_failed: false,
      reasoning: "Need current population data for Tokyo. Starting with a web search for the most recent statistics.",
      confidence: 0.95,
      drift_detected: false
    },
    {
      turn_number: 2,
      action_type: "search",
      tool_name: "web_search",
      tool_call_params: { query: "New York population 2024", limit: 5 },
      tool_result: "New York City population: 8.3 million (2023 estimate). NYC metro area: 19.5 million",
      tool_call_failed: false,
      reasoning: "Successfully retrieved Tokyo data. Now need New York population for comparison.",
      confidence: 0.92,
      drift_detected: false
    },
    {
      turn_number: 3,
      action_type: "analyze",
      tool_name: "calculate",
      tool_call_params: { expression: "37.4 / 8.3" },
      tool_result: "4.506",
      tool_call_failed: false,
      reasoning: "Comparing city populations. Tokyo metro (37.4M) vs NYC proper (8.3M). Calculate the ratio.",
      confidence: 0.88,
      drift_detected: false
    },
    {
      turn_number: 4,
      action_type: "search",
      tool_name: "web_search",
      tool_call_params: { query: "Tokyo historical population growth", limit: 5 },
      tool_result: "Tokyo population growth has slowed in recent years...",
      tool_call_failed: false,
      reasoning: "Should provide context about population trends. This adds depth to the comparison.",
      confidence: 0.72,
      drift_detected: false
    },
    {
      turn_number: 5,
      action_type: "search",
      tool_name: "web_search",
      tool_call_params: { query: "Tokyo geography area square miles", limit: 5 },
      tool_result: "Tokyo metropolitan area: 5,240 square miles",
      tool_call_failed: false,
      reasoning: "Gathering additional geographic context. This helps explain the population density difference.",
      confidence: 0.68,
      drift_detected: false
    },
    {
      turn_number: 6,
      action_type: "search",
      tool_name: "web_search",
      tool_call_params: { query: "Tokyo climate average temperature", limit: 5 },
      tool_result: "Tokyo average annual temperature: 16°C (61°F)",
      tool_call_failed: false,
      reasoning: "Exploring factors that might affect population. Climate could be relevant to urban development patterns.",
      confidence: 0.45,
      drift_detected: true
    },
    {
      turn_number: 7,
      action_type: "search",
      tool_name: "web_search",
      tool_call_params: { query: "Tokyo cuisine popular dishes", limit: 5 },
      tool_result: "Popular Tokyo dishes include sushi, ramen, tempura...",
      tool_call_failed: false,
      reasoning: "Understanding cultural factors of major cities. Food culture reflects urban diversity.",
      confidence: 0.38,
      drift_detected: true
    },
    {
      turn_number: 8,
      action_type: "search",
      tool_name: "web_search",
      tool_call_params: { query: "Tokyo best tourist attractions", limit: 5 },
      tool_result: "Top attractions: Senso-ji Temple, Tokyo Tower, Shibuya Crossing...",
      tool_call_failed: false,
      reasoning: "Tourist attractions indicate cultural importance and urban appeal for both residents and visitors.",
      confidence: 0.31,
      drift_detected: true
    },
    {
      turn_number: 9,
      action_type: "search",
      tool_name: "database_query",
      tool_call_params: { table: "cities", filter: "name = 'Tokyo'" },
      tool_result: "Error: database connection failed",
      tool_call_failed: true,
      reasoning: "Attempting to cross-reference population data from internal database for validation.",
      confidence: 0.52,
      drift_detected: true
    },
    {
      turn_number: 10,
      action_type: "summarize",
      tool_name: "summarize_findings",
      tool_call_params: { 
        topic: "Tokyo vs New York population comparison",
        include_sources: true 
      },
      tool_result: "Summary generated successfully",
      tool_call_failed: false,
      reasoning: "Compiling all gathered information into a final comparison. Tokyo metro (37.4M) is significantly larger than NYC proper (8.3M) but comparable to NYC metro (19.5M).",
      confidence: 0.81,
      drift_detected: false
    }
  ]
}
