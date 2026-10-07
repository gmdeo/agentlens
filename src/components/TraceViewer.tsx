import { useState } from 'react'
import './TraceViewer.css'
import { sampleAgentTrace } from '../data/sampleTrace'
import { AgentTrace, AgentTurn } from '../types'

export default function TraceViewer() {
  const [trace] = useState<AgentTrace>(sampleAgentTrace)
  const [expandedTurns, setExpandedTurns] = useState<Set<number>>(new Set([0, 1, 2]))
  const [selectedTurn, setSelectedTurn] = useState<number | null>(null)

  const toggleTurn = (turnIndex: number) => {
    const newExpanded = new Set(expandedTurns)
    if (newExpanded.has(turnIndex)) {
      newExpanded.delete(turnIndex)
    } else {
      newExpanded.add(turnIndex)
    }
    setExpandedTurns(newExpanded)
  }

  const selectTurn = (turnIndex: number) => {
    setSelectedTurn(selectedTurn === turnIndex ? null : turnIndex)
  }

  const getConfidenceColor = (confidence: number): string => {
    if (confidence >= 0.8) return 'var(--color-success)'
    if (confidence >= 0.5) return 'var(--color-warning)'
    return 'var(--color-danger)'
  }

  const getTurnStatusClass = (turn: AgentTurn): string => {
    if (turn.drift_detected) return 'turn-drift'
    if (turn.confidence < 0.5) return 'turn-low-confidence'
    if (turn.tool_call_failed) return 'turn-error'
    return 'turn-normal'
  }

  return (
    <div className="trace-viewer">
      <div className="trace-header">
        <div className="trace-info">
          <h2>{trace.session_name}</h2>
          <div className="trace-meta">
            <span className="meta-item">{trace.turns.length} turns</span>
            <span className="meta-item">Agent: {trace.agent_type}</span>
            <span className="meta-item">Task: {trace.task_description}</span>
          </div>
        </div>
        <div className="trace-summary">
          <div className="summary-stat">
            <span className="stat-label">Success</span>
            <span className="stat-value">{trace.success_rate.toFixed(0)}%</span>
          </div>
          <div className="summary-stat">
            <span className="stat-label">Drift detected</span>
            <span className="stat-value stat-danger">
              {trace.turns.filter(t => t.drift_detected).length}
            </span>
          </div>
          <div className="summary-stat">
            <span className="stat-label">Failed tools</span>
            <span className="stat-value stat-warning">
              {trace.turns.filter(t => t.tool_call_failed).length}
            </span>
          </div>
        </div>
      </div>

      <div className="trace-timeline">
        {trace.turns.map((turn, index) => (
          <div 
            key={index}
            className={`turn ${getTurnStatusClass(turn)} ${selectedTurn === index ? 'turn-selected' : ''}`}
          >
            <div className="turn-header" onClick={() => selectTurn(index)}>
              <div className="turn-number">Turn {turn.turn_number}</div>
              <div className="turn-summary">
                <span className="turn-action">{turn.action_type}</span>
                {turn.tool_name && <span className="turn-tool">→ {turn.tool_name}</span>}
              </div>
              <div className="turn-confidence" style={{ color: getConfidenceColor(turn.confidence) }}>
                {(turn.confidence * 100).toFixed(0)}%
              </div>
              <button 
                className="turn-expand-btn"
                onClick={(e) => {
                  e.stopPropagation()
                  toggleTurn(index)
                }}
              >
                {expandedTurns.has(index) ? '−' : '+'}
              </button>
            </div>

            {expandedTurns.has(index) && (
              <div className="turn-details">
                {turn.reasoning && (
                  <div className="detail-section">
                    <h4>Reasoning</h4>
                    <p className="reasoning-text">{turn.reasoning}</p>
                  </div>
                )}
                
                {turn.tool_call_params && (
                  <div className="detail-section">
                    <h4>Tool Parameters</h4>
                    <pre className="code-block">{JSON.stringify(turn.tool_call_params, null, 2)}</pre>
                  </div>
                )}

                {turn.tool_result && (
                  <div className="detail-section">
                    <h4>Result</h4>
                    <div className="result-box">{turn.tool_result}</div>
                  </div>
                )}

                {turn.drift_detected && (
                  <div className="detail-section alert-danger">
                    <h4>⚠ Drift Detected</h4>
                    <p>
                      Reasoning pattern deviates from goal. Confidence dropped from previous turns.
                      This may indicate the agent is losing track of the original objective.
                    </p>
                  </div>
                )}

                {turn.tool_call_failed && (
                  <div className="detail-section alert-warning">
                    <h4>Tool Call Failed</h4>
                    <p>
                      The tool execution returned an error. Check parameters match the tool schema.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
