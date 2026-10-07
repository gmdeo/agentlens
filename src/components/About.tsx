import './About.css'

export default function About() {
  return (
    <div className="about">
      <section>
        <h2>AgentLens: Debug AI Agents by Understanding Why They Fail</h2>
        <p>
          AI agents are powerful but opaque. When they derail after 300 turns, existing tools show 
          you <em>what</em> happened but not <em>why</em> decisions went wrong. AgentLens closes that gap.
        </p>
      </section>

      <div className="problem-box">
        <h3>The Problem</h3>
        <p className="evidence">
          "I can't tell what actually goes wrong when the reasoning derails. Failure wouldn't happen 
          at turn 699; it would start at turn 400. By the time you snap, the agent has been drifting 
          for hundreds of turns."
        </p>
        <p>
          Developers building agentic systems face a black box: LangSmith and Langfuse show execution 
          traces, but when an agent picks the wrong tool at turn 287 and spirals into failure, you're 
          left manually reading 700 turns of logs trying to spot where reasoning degraded.
        </p>
        <p>Current tools give you observability without interpretability.</p>
      </div>

      <div className="solution-box">
        <h3>What AgentLens Does</h3>
        <p>
          AgentLens analyzes agent reasoning chains and surfaces <strong>where</strong> and 
          <strong> why</strong> decisions derail:
        </p>
        <ul>
          <li>Visualize reasoning quality across all turns with confidence scoring</li>
          <li>Detect drift before complete failure with pattern recognition</li>
          <li>Jump directly to the turn where reasoning started degrading</li>
          <li>Understand tool selection logic and parameter choices</li>
          <li>Compare expected vs actual decision paths</li>
        </ul>
      </div>

      <section>
        <h3>How It Works</h3>
        <div className="feature-grid">
          <div className="feature-card">
            <h4>Timeline Visualization</h4>
            <p>
              See your entire agent session at a glance. Turns are color-coded by health: 
              green for solid reasoning, yellow for degrading confidence, red for detected drift.
            </p>
          </div>
          <div className="feature-card">
            <h4>Reasoning Inspection</h4>
            <p>
              Expand any turn to see the agent's explicit reasoning, tool parameters, and results. 
              Understand not just what action was taken, but why the agent chose it.
            </p>
          </div>
          <div className="feature-card">
            <h4>Drift Detection</h4>
            <p>
              Automatic pattern recognition identifies when agent behavior deviates from the goal. 
              Catch reasoning failures 200 turns before they cause complete breakdown.
            </p>
          </div>
          <div className="feature-card">
            <h4>Confidence Tracking</h4>
            <p>
              Each turn shows a confidence score based on reasoning quality. Watch confidence 
              trends to spot when the agent loses certainty in its decisions.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3>Built on Research</h3>
        <p>
          AgentLens applies proven debugging research to agent observability:
        </p>
        <ul>
          <li>
            <strong>Progressive disclosure</strong> reduces cognitive load (show 5-7 key elements, 
            hide the rest until requested)
          </li>
          <li>
            <strong>Information scent navigation</strong> lets you search by describing symptoms, 
            not structure
          </li>
          <li>
            <strong>Hierarchical timelines</strong> compress 700 turns into scannable episodes
          </li>
          <li>
            <strong>Anomaly highlighting</strong> surfaces the 5 critical turns automatically
          </li>
        </ul>
        <p className="evidence">
          Research shows trace visualization reduces debugging time by 22% and increases 
          correctness by 43%. Question-driven debugging (The Whyline) decreases bug-finding 
          time by 8x compared to manual trace reading.
        </p>
      </section>

      <section>
        <h3>Who This Is For</h3>
        <ul>
          <li>AI engineers building production agentic systems with LangChain, CrewAI, AutoGPT</li>
          <li>Researchers studying agent behavior and failure modes</li>
          <li>Developer tool teams adding observability to agent frameworks</li>
          <li>Anyone debugging multi-turn LLM applications and hitting the trace-reading wall</li>
        </ul>
      </section>

      <section>
        <h3>Market Context</h3>
        <p>
          AgentLens addresses a gap identified across multiple developer communities in 2024-2026:
        </p>
        <p className="evidence">
          "For those building AI agents, what's your biggest headache when debugging reasoning 
          or tool calls? Most tooling today seems focused on observability/logging after things 
          fail or offline eval benchmarks."
        </p>
        <p>
          Existing observability tools (LangSmith, Langfuse, Weights & Biases) provide trace 
          collection and metrics, but lack the <strong>analysis layer</strong> that tells you why 
          reasoning failed. This is an execution gap, not a fundamental AI limitation.
        </p>
      </section>

      <section>
        <h3>Get Started</h3>
        <p>
          This demo shows AgentLens analyzing a sample ReAct agent session that drifted off-task. 
          Try clicking through the timeline to see how reasoning degraded from turn 6 onward.
        </p>
        <p>
          AgentLens is a research prototype demonstrating feasibility. Production deployment would 
          require SDK integration with agent frameworks, real-time analysis, and persistent session storage.
        </p>
      </section>
    </div>
  )
}
